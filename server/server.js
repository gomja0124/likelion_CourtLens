const http = require("node:http");
const fs = require("node:fs/promises");
const path = require("node:path");
const crypto = require("node:crypto");

const ROOT_DIR = path.resolve(__dirname, "..");
const DATA_DIR = path.join(ROOT_DIR, ".local");
const USERS_FILE = path.join(DATA_DIR, "users.json");
const PORT = Number(process.env.PORT || 8765);
const HOST = process.env.HOST || "127.0.0.1";
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 7;
const sessions = new Map();

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
};

function sendJson(response, statusCode, payload, extraHeaders = {}) {
  response.writeHead(statusCode, {
    "content-type": "application/json; charset=utf-8",
    ...extraHeaders,
  });
  response.end(JSON.stringify(payload));
}

function sendError(response, statusCode, message) {
  sendJson(response, statusCode, { ok: false, message });
}

async function readBody(request) {
  const chunks = [];
  for await (const chunk of request) {
    chunks.push(chunk);
    if (Buffer.concat(chunks).length > 1024 * 1024) {
      throw new Error("요청 본문이 너무 큽니다.");
    }
  }

  if (!chunks.length) return {};
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

async function loadUsers() {
  try {
    const file = await fs.readFile(USERS_FILE, "utf8");
    return JSON.parse(file);
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
    return [];
  }
}

async function saveUsers(users) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
}

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function hashPassword(password, salt = crypto.randomBytes(16).toString("hex")) {
  const passwordHash = crypto
    .pbkdf2Sync(String(password), salt, 120000, 64, "sha512")
    .toString("hex");
  return { salt, passwordHash };
}

function verifyPassword(password, user) {
  const { passwordHash } = hashPassword(password, user.salt);
  return crypto.timingSafeEqual(
    Buffer.from(passwordHash, "hex"),
    Buffer.from(user.passwordHash, "hex"),
  );
}

function publicUser(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    favoriteTeamCode: user.favoriteTeamCode,
    createdAt: user.createdAt,
  };
}

function parseCookies(request) {
  return Object.fromEntries(
    String(request.headers.cookie || "")
      .split(";")
      .map((part) => part.trim().split("="))
      .filter(([key, value]) => key && value)
      .map(([key, value]) => [key, decodeURIComponent(value)]),
  );
}

function createSession(userId) {
  const token = crypto.randomBytes(32).toString("hex");
  sessions.set(token, {
    userId,
    expiresAt: Date.now() + SESSION_TTL_MS,
  });
  return token;
}

function sessionCookie(token) {
  const maxAge = Math.floor(SESSION_TTL_MS / 1000);
  return `courtlens_session=${token}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${maxAge}`;
}

function clearSessionCookie() {
  return "courtlens_session=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0";
}

async function currentUser(request) {
  const token = parseCookies(request).courtlens_session;
  const session = token ? sessions.get(token) : null;
  if (!session) return null;

  if (session.expiresAt < Date.now()) {
    sessions.delete(token);
    return null;
  }

  const users = await loadUsers();
  return users.find((user) => user.id === session.userId) || null;
}

async function handleAuth(request, response, pathname) {
  if (request.method === "GET" && pathname === "/api/auth/me") {
    const user = await currentUser(request);
    sendJson(response, 200, { ok: true, user: user ? publicUser(user) : null });
    return true;
  }

  if (request.method === "POST" && pathname === "/api/auth/register") {
    const body = await readBody(request);
    const email = normalizeEmail(body.email);
    const password = String(body.password || "");
    const name = String(body.name || "").trim();
    const favoriteTeamCode = String(body.favoriteTeamCode || "50");

    if (!name || !email || !password) {
      sendError(response, 400, "이름, 이메일, 비밀번호를 모두 입력해 주세요.");
      return true;
    }

    if (!email.includes("@")) {
      sendError(response, 400, "올바른 이메일 형식이 아닙니다.");
      return true;
    }

    if (password.length < 8) {
      sendError(response, 400, "비밀번호는 8자 이상이어야 합니다.");
      return true;
    }

    const users = await loadUsers();
    if (users.some((user) => user.email === email)) {
      sendError(response, 409, "이미 가입된 이메일입니다.");
      return true;
    }

    const { salt, passwordHash } = hashPassword(password);
    const user = {
      id: crypto.randomUUID(),
      name,
      email,
      favoriteTeamCode,
      salt,
      passwordHash,
      createdAt: new Date().toISOString(),
    };

    users.push(user);
    await saveUsers(users);
    const token = createSession(user.id);
    sendJson(response, 201, { ok: true, user: publicUser(user) }, { "set-cookie": sessionCookie(token) });
    return true;
  }

  if (request.method === "POST" && pathname === "/api/auth/login") {
    const body = await readBody(request);
    const email = normalizeEmail(body.email);
    const password = String(body.password || "");
    const users = await loadUsers();
    const user = users.find((item) => item.email === email);

    if (!user || !verifyPassword(password, user)) {
      sendError(response, 401, "이메일 또는 비밀번호가 올바르지 않습니다.");
      return true;
    }

    const token = createSession(user.id);
    sendJson(response, 200, { ok: true, user: publicUser(user) }, { "set-cookie": sessionCookie(token) });
    return true;
  }

  if (request.method === "POST" && pathname === "/api/auth/logout") {
    const token = parseCookies(request).courtlens_session;
    if (token) sessions.delete(token);
    sendJson(response, 200, { ok: true }, { "set-cookie": clearSessionCookie() });
    return true;
  }

  return false;
}

async function serveStatic(request, response, pathname) {
  const safePath = pathname === "/" ? "/index.html" : decodeURIComponent(pathname);
  const filePath = path.resolve(ROOT_DIR, `.${safePath}`);
  const relativePath = path.relative(ROOT_DIR, filePath);
  const pathSegments = relativePath.split(path.sep);

  if (
    relativePath.startsWith("..") ||
    path.isAbsolute(relativePath) ||
    pathSegments.some((segment) => segment.startsWith(".")) ||
    pathSegments[0] === "server"
  ) {
    sendError(response, 403, "접근할 수 없는 경로입니다.");
    return;
  }

  try {
    const file = await fs.readFile(filePath);
    response.writeHead(200, {
      "content-type": MIME_TYPES[path.extname(filePath)] || "application/octet-stream",
    });
    response.end(file);
  } catch (error) {
    if (error.code === "ENOENT" || error.code === "EISDIR") {
      sendError(response, 404, "파일을 찾을 수 없습니다.");
      return;
    }
    throw error;
  }
}

const server = http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://${request.headers.host}`);

    if (url.pathname.startsWith("/api/auth/")) {
      const handled = await handleAuth(request, response, url.pathname);
      if (!handled) sendError(response, 404, "지원하지 않는 인증 API입니다.");
      return;
    }

    await serveStatic(request, response, url.pathname);
  } catch (error) {
    const message = error instanceof SyntaxError ? "JSON 형식이 올바르지 않습니다." : "서버 오류가 발생했습니다.";
    console.error(error);
    sendError(response, error instanceof SyntaxError ? 400 : 500, message);
  }
});

server.listen(PORT, HOST, () => {
  console.log(`CourtLens server running at http://${HOST}:${PORT}`);
});
