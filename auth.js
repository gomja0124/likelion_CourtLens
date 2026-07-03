// CourtLens 목업 인증 (login.html / signup.html 공용)
// 프로토타입용으로 localStorage에 저장한다. 실제 서비스에서는 백엔드 인증으로 교체한다.

const AUTH_USERS_KEY = "courtlens:users";
const AUTH_SESSION_KEY = "courtlens:session";
const AUTH_TEAM_KEY = "courtlens:selectedTeam";

// 응원구단 선택 목록 (app.js TEAM_CONFIGS와 동일한 코드/이름 매핑)
const AUTH_TEAMS = [
  ["50", "창원 LG 세이커스"],
  ["06", "수원 KT 소닉붐"],
  ["64", "대구 한국가스공사 페가수스"],
  ["10", "울산 현대모비스 피버스"],
  ["35", "서울 삼성 썬더스"],
  ["16", "원주 DB 프로미"],
  ["55", "서울 SK 나이츠"],
  ["66", "고양 소노 스카이거너스"],
  ["60", "부산 KCC 이지스"],
  ["70", "안양 정관장 레드부스터스"],
];

function loadUsers() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_USERS_KEY)) || [];
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users));
}

function startSession(user) {
  localStorage.setItem(
    AUTH_SESSION_KEY,
    JSON.stringify({ nickname: user.nickname, email: user.email }),
  );
  if (user.teamCode) {
    localStorage.setItem(AUTH_TEAM_KEY, user.teamCode);
  }
  location.replace("./index.html");
}

function showAuthError(message) {
  const box = document.querySelector("#auth-error");
  if (!box) return;
  box.textContent = message;
  box.classList.toggle("visible", Boolean(message));
}

// 이미 로그인된 상태면 팬 앱으로 이동
try {
  if (JSON.parse(localStorage.getItem(AUTH_SESSION_KEY))) {
    location.replace("./index.html");
  }
} catch {
  // 세션 파싱 실패 시 그냥 인증 페이지를 보여준다.
}

// 회원가입 폼
const signupForm = document.querySelector("#signup-form");
if (signupForm) {
  const teamSelect = document.querySelector("#signup-team-input");
  if (teamSelect) {
    AUTH_TEAMS.forEach(([code, name]) => {
      const option = document.createElement("option");
      option.value = code;
      option.textContent = name;
      teamSelect.append(option);
    });
  }

  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nickname = document.querySelector("#signup-nickname-input").value.trim();
    const email = document.querySelector("#signup-email-input").value.trim().toLowerCase();
    const password = document.querySelector("#signup-password-input").value;
    const passwordCheck = document.querySelector("#signup-password-check-input").value;
    const teamCode = teamSelect?.value || "50";

    if (password.length < 4) {
      showAuthError("비밀번호는 4자 이상으로 입력해주세요.");
      return;
    }
    if (password !== passwordCheck) {
      showAuthError("비밀번호가 서로 일치하지 않습니다.");
      return;
    }

    const users = loadUsers();
    if (users.some((user) => user.email === email)) {
      showAuthError("이미 가입된 이메일입니다. 로그인해주세요.");
      return;
    }

    const user = { nickname, email, password, teamCode };
    users.push(user);
    saveUsers(users);
    startSession(user);
  });
}

// 로그인 폼
const loginForm = document.querySelector("#login-form");
if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.querySelector("#login-email-input").value.trim().toLowerCase();
    const password = document.querySelector("#login-password-input").value;

    const user = loadUsers().find(
      (item) => item.email === email && item.password === password,
    );

    if (!user) {
      showAuthError("이메일 또는 비밀번호가 올바르지 않습니다.");
      return;
    }

    startSession(user);
  });
}
