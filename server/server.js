const http = require("node:http");
const fsSync = require("node:fs");
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
  ".mov": "video/quicktime",
  ".mp4": "video/mp4",
};

const QUARTER_CONFIGS = {
  Q1: {
    planFile: "q1_cutpoint_clip_timeline_matching.json",
    clipDirectory: "q1_cutpoint_segmentss",
  },
  Q2: {
    planFile: "q2_cutpoint_segments_plan.json",
    clipDirectory: "q2_cutpoint_segmentss",
  },
  Q3: {
    planFile: "q3_cutpoint_segments_plan.json",
    clipDirectory: "q3_cutpoint_segmentss",
  },
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

async function readJsonFile(fileName) {
  const file = await fs.readFile(path.join(ROOT_DIR, fileName), "utf8");
  return JSON.parse(file);
}

async function listClipFiles(directoryName) {
  try {
    const files = await fs.readdir(path.join(ROOT_DIR, directoryName));
    return files.filter((file) => file.endsWith(".mov")).sort();
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

function normalizeQuarter(value) {
  return String(value || "").trim().toUpperCase();
}

function normalizeHighlightClip(record, quarter, clipFiles, index) {
  const id = Number(record.clip_id || record.event_id || index + 1);
  const clipFile = record.clip_file || clipFiles[id - 1] || null;
  const clipPath = record.clip_path || (clipFile ? `${QUARTER_CONFIGS[quarter].clipDirectory}/${clipFile}` : null);

  return {
    id,
    quarter,
    clock: record.game_clock_range || record.clock_remaining || "",
    duration: Number(record.duration_sec || 0),
    start: Number(record.video_start_sec || record.clip_start_sec || 0),
    end: Number(record.video_end_sec || record.clip_end_sec || 0),
    startType: record.start_cut_type || record.start_type || "",
    endType: record.end_cut_type || record.end_type || "",
    startEvent: record.start_timeline_event || record.start_description || "",
    endEvent: record.end_timeline_event || record.end_description || "",
    clipFile,
    clipPath,
    videoUrl: `/api/highlights/clips/${quarter}/${id}/video`,
    sourceUrl: record.fiba_url || null,
  };
}

async function loadQuarterClips(quarter) {
  const config = QUARTER_CONFIGS[quarter];
  if (!config) return null;

  const [records, clipFiles] = await Promise.all([
    readJsonFile(config.planFile),
    listClipFiles(config.clipDirectory),
  ]);

  return records.map((record, index) => normalizeHighlightClip(record, quarter, clipFiles, index));
}

async function loadAllQuarterSummaries() {
  const entries = await Promise.all(
    Object.keys(QUARTER_CONFIGS).map(async (quarter) => {
      const clips = await loadQuarterClips(quarter);
      const eventTypes = new Set(clips.flatMap((clip) => [clip.startType, clip.endType]).filter(Boolean));
      return [
        quarter,
        {
          quarter,
          clipCount: clips.length,
          eventTypes: [...eventTypes].sort(),
          firstClock: clips[0]?.clock || null,
          lastClock: clips.at(-1)?.clock || null,
        },
      ];
    }),
  );

  return Object.fromEntries(entries);
}

function filterClips(clips, searchParams) {
  const eventType = String(searchParams.get("eventType") || "").trim().toLowerCase();
  const player = String(searchParams.get("player") || "").trim().toLowerCase();

  return clips.filter((clip) => {
    const eventText = `${clip.startType} ${clip.endType}`.toLowerCase();
    const playerText = `${clip.startEvent} ${clip.endEvent}`.toLowerCase();
    return (!eventType || eventText.includes(eventType)) && (!player || playerText.includes(player));
  });
}

function sendClipVideo(request, response, filePath) {
  const stat = fsSync.statSync(filePath);
  const range = request.headers.range;
  const contentType = MIME_TYPES[path.extname(filePath)] || "application/octet-stream";
  const isHead = request.method === "HEAD";

  if (!range) {
    response.writeHead(200, {
      "content-length": stat.size,
      "content-type": contentType,
      "accept-ranges": "bytes",
    });
    if (isHead) {
      response.end();
      return;
    }
    fsSync.createReadStream(filePath).pipe(response);
    return;
  }

  const match = range.match(/bytes=(\d*)-(\d*)/);
  const start = match?.[1] ? Number(match[1]) : 0;
  const end = match?.[2] ? Number(match[2]) : stat.size - 1;

  if (start >= stat.size || end >= stat.size || start > end) {
    response.writeHead(416, {
      "content-range": `bytes */${stat.size}`,
    });
    response.end();
    return;
  }

  response.writeHead(206, {
    "content-range": `bytes ${start}-${end}/${stat.size}`,
    "content-length": end - start + 1,
    "content-type": contentType,
    "accept-ranges": "bytes",
  });
  if (isHead) {
    response.end();
    return;
  }
  fsSync.createReadStream(filePath, { start, end }).pipe(response);
}

async function handleHighlights(request, response, url) {
  if (request.method === "GET" && url.pathname === "/api/health") {
    sendJson(response, 200, { ok: true, service: "courtlens-backend" });
    return true;
  }

  if (request.method === "GET" && url.pathname === "/api/highlights/quarters") {
    sendJson(response, 200, { ok: true, quarters: await loadAllQuarterSummaries() });
    return true;
  }

  if (request.method === "GET" && url.pathname === "/api/highlights/clips") {
    const quarter = normalizeQuarter(url.searchParams.get("quarter") || "Q1");
    const clips = await loadQuarterClips(quarter);
    if (!clips) {
      sendError(response, 404, "지원하지 않는 quarter입니다.");
      return true;
    }

    sendJson(response, 200, {
      ok: true,
      quarter,
      clips: filterClips(clips, url.searchParams),
    });
    return true;
  }

  const clipMatch = url.pathname.match(/^\/api\/highlights\/clips\/(Q[1-4])\/(\d+)(\/video)?$/i);
  if ((request.method === "GET" || request.method === "HEAD") && clipMatch) {
    const quarter = normalizeQuarter(clipMatch[1]);
    const clipId = Number(clipMatch[2]);
    const isVideo = Boolean(clipMatch[3]);
    const clips = await loadQuarterClips(quarter);
    const clip = clips?.find((item) => item.id === clipId);

    if (!clip) {
      sendError(response, 404, "하이라이트 클립을 찾을 수 없습니다.");
      return true;
    }

    if (!isVideo) {
      sendJson(response, 200, { ok: true, clip });
      return true;
    }

    if (!clip.clipPath) {
      sendError(response, 404, "연결된 영상 파일이 없습니다.");
      return true;
    }

    sendClipVideo(request, response, path.join(ROOT_DIR, clip.clipPath));
    return true;
  }

  return false;
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

    if (url.pathname === "/api/health" || url.pathname.startsWith("/api/highlights/")) {
      const handled = await handleHighlights(request, response, url);
      if (!handled) sendError(response, 404, "지원하지 않는 하이라이트 API입니다.");
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
