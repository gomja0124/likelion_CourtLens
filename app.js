const kblData = window.COURTLENS_KBL_DATA || {};
const seasonName = kblData.currentSeason?.seasonName || "2025-2026";
const PLAYER_POSITIONS = new Set(["GD", "FD", "C"]);

const TEAM_CONFIGS = {
  50: {
    code: "50",
    shortName: "LG",
    name: "창원 LG",
    fullName: "창원 LG 세이커스",
    venue: "창원체육관",
    city: "창원",
    opponent: "서울 SK",
    colors: {
      primary: "#8a1538",
      primaryDark: "#3f0003",
      soft: "#f8e7ee",
      accent: "#f5c542",
      paper: "#fffaf4",
      court: "#c77435",
      courtDark: "#87401e",
    },
    fallbackStats: [
      {
        player: { name: "아셈 마레이", team: "창원 LG", pcode: "291432" },
        records: { score: 851, ast: 279, rb: 739, threep: 4, stl: 107 },
        gameCount: 52,
      },
      {
        player: { name: "양준석", team: "창원 LG", pcode: "291480" },
        records: { score: 476, ast: 293, rb: 129, threep: 64, stl: 45 },
        gameCount: 49,
      },
      {
        player: { name: "유기상", team: "창원 LG", pcode: "291640" },
        records: { score: 618, ast: 55, rb: 103, threep: 132, stl: 29 },
        gameCount: 50,
      },
      {
        player: { name: "칼 타마요", team: "창원 LG", pcode: "291778" },
        records: { score: 651, ast: 112, rb: 253, threep: 49, stl: 39 },
        gameCount: 44,
      },
    ],
    mateTags: ["창원 홈 응원석", "3점 하이라이트", "처음 직관 환영"],
  },
  "06": {
    code: "06",
    shortName: "KT",
    name: "수원 KT",
    fullName: "수원 KT 소닉붐",
    venue: "수원 홈경기",
    city: "수원",
    opponent: "원주 DB",
    colors: {
      primary: "#d71920",
      primaryDark: "#1d1f27",
      soft: "#fde8e9",
      accent: "#111827",
      paper: "#fff8f5",
      court: "#c96a38",
      courtDark: "#8a3d20",
    },
    fallbackStats: [
      {
        player: { name: "데릭 윌리엄스", team: "수원 KT", pcode: "291791" },
        records: { score: 961, ast: 92, rb: 281, threep: 115, stl: 65 },
        gameCount: 54,
      },
      {
        player: { name: "강성욱", team: "수원 KT", pcode: "291842" },
        records: { score: 428, ast: 153, rb: 92, threep: 35, stl: 59 },
        gameCount: 38,
      },
      {
        player: { name: "박준영", team: "수원 KT", pcode: "291261" },
        records: { score: 372, ast: 94, rb: 185, threep: 55, stl: 28 },
        gameCount: 51,
      },
      {
        player: { name: "문정현", team: "수원 KT", pcode: "291638" },
        records: { score: 363, ast: 68, rb: 252, threep: 33, stl: 34 },
        gameCount: 46,
      },
    ],
    mateTags: ["수원 홈 응원", "빠른 템포", "초보자 설명 가능"],
  },
  64: {
    code: "64",
    shortName: "한국가스공사",
    name: "대구 한국가스공사",
    fullName: "대구 한국가스공사 페가수스",
    venue: "대구체육관",
    city: "대구",
    opponent: "부산 KCC",
    colors: {
      primary: "#0f6b4f",
      primaryDark: "#14213d",
      soft: "#e5f3ed",
      accent: "#f59e0b",
      paper: "#f7fbf8",
      court: "#bd7441",
      courtDark: "#6f3f1f",
    },
    mateTags: ["대구 홈 응원", "속공 하이라이트", "친구 동행"],
  },
  10: {
    code: "10",
    shortName: "현대모비스",
    name: "울산 현대모비스",
    fullName: "울산 현대모비스 피버스",
    venue: "울산동천체육관",
    city: "울산",
    opponent: "창원 LG",
    colors: {
      primary: "#c8102e",
      primaryDark: "#101820",
      soft: "#fde8ec",
      accent: "#f6c343",
      paper: "#fff8f8",
      court: "#c66b38",
      courtDark: "#78351c",
    },
    mateTags: ["울산 홈 응원", "전술 이야기", "라이벌전"],
  },
  35: {
    code: "35",
    shortName: "삼성",
    name: "서울 삼성",
    fullName: "서울 삼성 썬더스",
    venue: "잠실실내체육관",
    city: "서울",
    opponent: "서울 SK",
    colors: {
      primary: "#1d4ed8",
      primaryDark: "#111827",
      soft: "#e8f0ff",
      accent: "#ef4444",
      paper: "#f8fbff",
      court: "#c0703b",
      courtDark: "#79391d",
    },
    mateTags: ["잠실 홈 응원", "서울 더비", "초보 환영"],
  },
  16: {
    code: "16",
    shortName: "DB",
    name: "원주 DB",
    fullName: "원주 DB 프로미",
    venue: "원주종합체육관",
    city: "원주",
    opponent: "수원 KT",
    colors: {
      primary: "#15803d",
      primaryDark: "#052e16",
      soft: "#e7f6ec",
      accent: "#facc15",
      paper: "#f7fcf8",
      court: "#bd713e",
      courtDark: "#713818",
    },
    mateTags: ["원주 홈 응원", "수비 집중", "전술 이야기"],
  },
  55: {
    code: "55",
    shortName: "SK",
    name: "서울 SK",
    fullName: "서울 SK 나이츠",
    venue: "잠실학생체육관",
    city: "서울",
    opponent: "서울 삼성",
    colors: {
      primary: "#e11d48",
      primaryDark: "#18181b",
      soft: "#ffe8ee",
      accent: "#f97316",
      paper: "#fff8f8",
      court: "#c66f3b",
      courtDark: "#71351f",
    },
    mateTags: ["잠실학생 응원", "빠른 템포", "서울 더비"],
  },
  66: {
    code: "66",
    shortName: "소노",
    name: "고양 소노",
    fullName: "고양 소노 스카이거너스",
    venue: "고양 소노 아레나",
    city: "고양",
    opponent: "안양 정관장",
    colors: {
      primary: "#1e40af",
      primaryDark: "#0f172a",
      soft: "#e6efff",
      accent: "#38bdf8",
      paper: "#f8fbff",
      court: "#be7541",
      courtDark: "#6f3b1e",
    },
    mateTags: ["고양 홈 응원", "3점 하이라이트", "처음 직관"],
  },
  60: {
    code: "60",
    shortName: "KCC",
    name: "부산 KCC",
    fullName: "부산 KCC 이지스",
    venue: "부산사직체육관",
    city: "부산",
    opponent: "대구 한국가스공사",
    colors: {
      primary: "#0ea5e9",
      primaryDark: "#082f49",
      soft: "#e5f6ff",
      accent: "#dc2626",
      paper: "#f7fbff",
      court: "#c87540",
      courtDark: "#74381d",
    },
    mateTags: ["부산 홈 응원", "스타 플레이", "굿즈 관심"],
  },
  70: {
    code: "70",
    shortName: "정관장",
    name: "안양 정관장",
    fullName: "안양 정관장 레드부스터스",
    venue: "안양체육관",
    city: "안양",
    opponent: "고양 소노",
    colors: {
      primary: "#b91c1c",
      primaryDark: "#1f1f1f",
      soft: "#fee7e7",
      accent: "#f59e0b",
      paper: "#fff8f7",
      court: "#c46f3b",
      courtDark: "#70361e",
    },
    mateTags: ["안양 홈 응원", "열정 응원", "초보 환영"],
  },
};

const TEAM_ORDER = ["50", "06", "64", "10", "35", "16", "55", "66", "60", "70"];
const TEAM_STORAGE_KEY = "courtlens:selectedTeam";

function getInitialTeamCode() {
  try {
    const storedTeamCode = localStorage.getItem(TEAM_STORAGE_KEY);
    return TEAM_CONFIGS[storedTeamCode] ? storedTeamCode : "50";
  } catch {
    return "50";
  }
}

function persistTeamCode(teamCode) {
  try {
    localStorage.setItem(TEAM_STORAGE_KEY, teamCode);
  } catch {
    // The prototype still works when browser storage is unavailable.
  }
}

let selectedTeamCode = getInitialTeamCode();
let selectedClip = "assist";
let selectedLevel = "easy";
let activePanel = "highlight";
let currentContext = buildTeamContext(selectedTeamCode);
let generatedClipCount = 0;
let generatedClipSequence = 1;
let selectedPlayerCodes = new Set();
let activeClipFilter = "all";
let isGeneratingHighlight = false;
let generatedAssetSequence = 1;
let activeDashboardSection = "fan-insight";
const generatedAssets = [];

const BASE_CLIP_COUNT = 12;

const modeButtons = document.querySelectorAll(".mode-button");
const fanView = document.querySelector("#fan-view");
const clubView = document.querySelector("#club-view");
const clipList = document.querySelector("#clip-list");
const clipCountLabel = document.querySelector("#clip-count-label");
const clipFilterButtons = document.querySelectorAll(".clip-filter-button");
const levelButtons = document.querySelectorAll(".level-button");
const followChipRow = document.querySelector("#player-chip-row");
const followCount = document.querySelector("#follow-count");
const selectionHint = document.querySelector("#selection-hint");
const generateButton = document.querySelector("#generate-highlight-button");
const appToast = document.querySelector("#app-toast");
const tabButtons = document.querySelectorAll(".content-tab");
const fanPanels = document.querySelectorAll(".fan-panel");
const profileButton = document.querySelector(".avatar-button");
const profileSheet = document.querySelector("#profile-sheet");
const profileCloseButtons = document.querySelectorAll("[data-close-profile]");
const teamOptionList = document.querySelector(".team-option-list");
const mateCreateButtons = document.querySelectorAll("[data-open-mate-create]");
const mateCreateModal = document.querySelector("#mate-create-modal");
const mateCreateForm = document.querySelector("#mate-create-form");
const mateCloseButtons = document.querySelectorAll("[data-close-mate]");
const mateDateInput = document.querySelector("#mate-date-input");
const mateGameInput = document.querySelector("#mate-game-input");
const mateSeatInput = document.querySelector("#mate-seat-input");
const mateStyleInput = document.querySelector("#mate-style-input");
const matePlayerInput = document.querySelector("#mate-player-input");
const mateNoteInput = document.querySelector("#mate-note-input");
const dashboardModal = document.querySelector("#dashboard-modal");
const dashboardModalTitle = document.querySelector("#dashboard-modal-title");
const dashboardModalSubtitle = document.querySelector("#dashboard-modal-subtitle");
const dashboardModalBody = document.querySelector("#dashboard-modal-body");
const dashboardModalKicker = document.querySelector("#dashboard-modal-kicker");
const dashboardCloseButtons = document.querySelectorAll("[data-close-dashboard-modal]");
const leagueTeamGrid = document.querySelector("#league-team-grid");
const assetList = document.querySelector("#asset-list");
const assetCountLabel = document.querySelector("#asset-count-label");
const revenueOpportunityGrid = document.querySelector("#revenue-opportunity-grid");
const dashboardSectionButtons = document.querySelectorAll("[data-dashboard-section]");
const menuBoardKicker = document.querySelector("#menu-board-kicker");
const menuBoardTitle = document.querySelector("#menu-board-title");
const menuBoardCopy = document.querySelector("#menu-board-copy");
const menuBoardAction = document.querySelector("#menu-board-action");
const menuKpiGrid = document.querySelector("#menu-kpi-grid");
const menuWorkflowList = document.querySelector("#menu-workflow-list");

function statValue(item, key) {
  return Number(item?.records?.[key] ?? 0);
}

function gameCount(item) {
  return Math.max(Number(item?.gameCount ?? 0), 1);
}

function playerName(item, fallback = "") {
  return item?.player?.name || item?.name || fallback;
}

function playerCode(item) {
  return item?.player?.pcode || item?.pcode || item?.name || "";
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function statRowForPlayer(playerOrRow) {
  const code = playerCode(playerOrRow);

  return (
    currentContext.stats.find((row) => playerCode(row) === code) ||
    currentContext.stats.find((row) => playerName(row) === playerName(playerOrRow)) ||
    playerOrRow
  );
}

function rosterEntryForPlayer(playerOrRow) {
  const code = playerCode(playerOrRow);
  return (
    currentContext.roster.find((player) => player.pcode === code) ||
    currentContext.roster.find((player) => player.name === playerName(playerOrRow)) ||
    playerOrRow.player ||
    playerOrRow
  );
}

function formatPerGame(item, key, unit) {
  const total = statValue(item, key);
  const perGame = total / gameCount(item);
  return `${perGame.toFixed(1)} ${unit} · 총 ${total.toLocaleString("ko-KR")}개`;
}

function fallbackStatsFor(code) {
  const configured = TEAM_CONFIGS[code]?.fallbackStats;
  if (configured?.length) return configured;

  return activeEntriesFor(code)
    .filter((player) => PLAYER_POSITIONS.has(player.position))
    .slice(0, 6)
    .map((player, index) => ({
      player: {
        name: player.name,
        team: player.team,
        pcode: player.pcode,
        teamCode: player.teamCode,
      },
      records: {
        score: 420 - index * 24,
        ast: 110 - index * 8,
        rb: 180 - index * 11,
        threep: 58 - index * 5,
        stl: 32 - index * 2,
      },
      gameCount: 42,
    }));
}

function teamStatsFor(code) {
  const stats = kblData.stats?.allPlayers?.filter(
    (row) => row.player?.teamCode === code,
  );

  return stats?.length ? stats : fallbackStatsFor(code);
}

function activeEntriesFor(code) {
  return (
    kblData.players?.active?.filter((player) => player.teamCode === code) || []
  );
}

function rosterFor(code) {
  return activeEntriesFor(code).filter((player) =>
    PLAYER_POSITIONS.has(player.position),
  );
}

function topByStat(stats, key, fallbackIndex = 0) {
  return (
    [...stats].sort((a, b) => statValue(b, key) - statValue(a, key))[0] ||
    stats[fallbackIndex]
  );
}

function topUniquePlayers(stats) {
  const seen = new Set();
  const ordered = ["threep", "rb", "ast", "score", "stl"]
    .map((key) => topByStat(stats, key))
    .filter(Boolean);

  const unique = [];

  ordered.forEach((item) => {
    const id = item.player?.pcode || playerName(item);
    if (seen.has(id)) return;
    seen.add(id);
    unique.push(item);
  });

  [...stats]
    .sort((a, b) => statValue(b, "score") - statValue(a, "score"))
    .forEach((item) => {
      const id = item.player?.pcode || playerName(item);
      if (unique.length >= 4 || seen.has(id)) return;
      seen.add(id);
      unique.push(item);
    });

  return unique.slice(0, 4);
}

function displayRosterPlayers(context) {
  const playersByCode = new Map();

  context.roster.forEach((player) => {
    if (player.pcode) playersByCode.set(player.pcode, player);
  });

  context.stats.forEach((row) => {
    const code = row.player?.pcode;
    if (code && !playersByCode.has(code)) playersByCode.set(code, row.player);
  });

  const players = [...playersByCode.values()].filter((player) => player.name);
  const priorityCodes = context.uniqueLeaders.map((row) => playerCode(row));
  const priorityPlayers = priorityCodes
    .map((code) => players.find((player) => player.pcode === code))
    .filter(Boolean);
  const remainingPlayers = players
    .filter((player) => !priorityCodes.includes(player.pcode))
    .sort((a, b) => {
      const numberA = Number(a.backNumber);
      const numberB = Number(b.backNumber);

      if (Number.isFinite(numberA) && Number.isFinite(numberB)) {
        return numberA - numberB;
      }

      return a.name.localeCompare(b.name, "ko-KR");
    });

  return [...priorityPlayers, ...remainingPlayers].slice(0, 14);
}

function defaultSelectedPlayerCodes(context) {
  return new Set(
    displayRosterPlayers(context)
      .slice(0, 4)
      .map((player) => player.pcode)
      .filter(Boolean),
  );
}

function selectedPlayers() {
  const players = displayRosterPlayers(currentContext);
  const byCode = new Map(players.map((player) => [player.pcode, player]));

  return [...selectedPlayerCodes]
    .map((code) => byCode.get(code))
    .filter(Boolean);
}

function buildTeamContext(teamCode) {
  const team = TEAM_CONFIGS[teamCode] || TEAM_CONFIGS["50"];
  const stats = teamStatsFor(team.code);
  const roster = rosterFor(team.code);
  const activeEntries = activeEntriesFor(team.code);
  const assistLeader = topByStat(stats, "ast", 1);
  const reboundLeader = topByStat(stats, "rb", 0);
  const threePointLeader = topByStat(stats, "threep", 2);
  const scoreLeader = topByStat(stats, "score", 0);
  const uniqueLeaders = topUniquePlayers(stats);

  const playmakerName = playerName(assistLeader, "양준석");
  const rebounderName = playerName(reboundLeader, "아셈 마레이");
  const shooterName = playerName(threePointLeader, "유기상");
  const scorerName = playerName(scoreLeader, "아셈 마레이");
  const secondaryName = playerName(uniqueLeaders[3], playerName(uniqueLeaders[1]));

  return {
    team,
    stats,
    roster,
    activeEntries,
    assistLeader,
    reboundLeader,
    threePointLeader,
    scoreLeader,
    uniqueLeaders,
    playmakerName,
    rebounderName,
    shooterName,
    scorerName,
    secondaryName,
    clips: buildClips({
      team,
      playmakerName,
      rebounderName,
      shooterName,
      scorerName,
      secondaryName,
    }),
  };
}

function buildClips(context) {
  const { team, playmakerName, rebounderName, shooterName, scorerName, secondaryName } =
    context;

  return {
    assist: {
      title: `${playmakerName} 픽앤롤 → ${shooterName} 코너 3점`,
      meta: `${playmakerName} · 어시스트`,
      easy: `${playmakerName}이 스크린을 타고 들어가며 수비를 안쪽으로 끌어당겼어요. 그 순간 코너의 ${shooterName}에게 패스가 빠르게 나가면서 좋은 3점 찬스가 만들어졌습니다.`,
      pro: `${playmakerName}이 픽앤롤 후 태그 수비를 묶어 두고, 약속된 킥아웃으로 코너 스페이싱을 살렸습니다. ${team.name}이 슈터를 살리는 전형적인 연결 장면으로 설명하기 좋습니다.`,
      reason: `${playmakerName}은 ${seasonName} ${team.name} 내부 어시스트 1위라 입덕용 패스 장면의 중심 선수로 잡기 좋습니다.`,
      next: `${team.fullName} 홈경기에서 같은 2대2 전개와 코너 3점 패턴을 이어서 볼 수 있어요.`,
      ctaTitle: `${team.city} 직관메이트 추천`,
      ctaCopy: `${playmakerName}-${shooterName} 연결 장면을 같이 볼 팬을 경기/좌석 취향으로 찾아줍니다.`,
      progress: "46%",
    },
    clutch: {
      title: `${shooterName} 트랜지션 3점`,
      meta: `${shooterName} · 3점슛`,
      easy: `속공 상황에서 수비가 골밑을 먼저 막는 동안 ${shooterName}이 바깥으로 벌어졌어요. 공이 한 번 더 돌면서 리듬 좋은 3점으로 연결됐습니다.`,
      pro: `${shooterName}이 얼리 오펜스에서 윙-코너 사이를 선점했고, 수비 매치가 정리되기 전에 캐치앤슛으로 마무리했습니다. ${seasonName} ${team.shortName}의 외곽 볼륨을 보여주는 장면입니다.`,
      reason: `${shooterName}은 ${team.name} 내부 3점슛 성공 1위라 짧은 숏폼의 첫 화면에 놓기 좋습니다.`,
      next: `${shooterName}의 3점 성공 위치를 묶어 다음 경기 관전 포인트로 만들 수 있어요.`,
      ctaTitle: `${shooterName} 응원존 모임`,
      ctaCopy: "3점 하이라이트를 본 팬끼리 같은 응원석 후보를 추천합니다.",
      progress: "62%",
    },
    rookie: {
      title: `${rebounderName} 세컨드 찬스`,
      meta: `${rebounderName} · 리바운드`,
      easy: `${rebounderName}이 공격 리바운드를 잡으면서 한 번 끝난 공격을 다시 살렸어요. 수비가 정리되기 전에 바로 골밑 득점 기회가 생겼습니다.`,
      pro: `${rebounderName}이 박스아웃 싸움에서 위치를 선점했고, 세컨드 찬스 포제션으로 기대 득점값을 높였습니다. 빅맨 영향력을 초보 팬에게 설명하기 좋은 클립입니다.`,
      reason: `${rebounderName}은 ${team.name} 내부 리바운드 1위라 팀 컬러와 연결되는 강한 입덕 포인트입니다.`,
      next: `${scorerName}, ${secondaryName} 득점 장면과 묶으면 ${team.shortName} 공격 옵션을 더 쉽게 보여줄 수 있어요.`,
      ctaTitle: `${rebounderName} 골밑 직관 포인트`,
      ctaCopy: "리바운드, 골밑 득점, 수비 장면을 좋아하는 팬 모임을 같이 추천합니다.",
      progress: "38%",
    },
  };
}

function applyTheme(context) {
  const root = document.documentElement;
  const { colors } = context.team;

  root.style.setProperty("--teal", colors.primary);
  root.style.setProperty("--teal-soft", colors.soft);
  root.style.setProperty("--lemon", colors.accent);
  root.style.setProperty("--ink", colors.primaryDark);
  root.style.setProperty("--paper", colors.paper);
  root.style.setProperty("--court", colors.court);
  root.style.setProperty("--court-dark", colors.courtDark);
  root.style.setProperty("--shadow", `0 18px 50px ${colors.primary}24`);
  document.body.dataset.team = context.team.code;
}

function setMode(view) {
  modeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view);
  });

  fanView.classList.toggle("view-active", view === "fan");
  clubView.classList.toggle("view-active", view === "club");
}

function setFanPanel(panel) {
  activePanel = panel;

  tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.panel === panel);
  });

  fanPanels.forEach((item) => {
    item.classList.toggle("panel-active", item.dataset.panel === panel);
  });
}

function updateAnalysis() {
  const clip = currentContext.clips[selectedClip] || currentContext.clips.assist;

  setText("#analysis-title", clip.title);
  setText("#analysis-meta", clip.meta);
  setText("#analysis-text", clip[selectedLevel]);
  setText("#story-reason", clip.reason);
  setText("#story-next", clip.next);
  setText("#cta-title", clip.ctaTitle);
  setText("#cta-copy", clip.ctaCopy);

  const playback = document.querySelector(".playback-bar span");
  if (playback) playback.style.width = clip.progress;
}

function updateFollowCount() {
  const activeCount = selectedPlayerCodes.size;
  const names = selectedPlayers().map((player) => player.name);

  followCount.textContent = `${activeCount}명 선택됨`;

  if (selectionHint) {
    selectionHint.textContent = isGeneratingHighlight
      ? "AI가 경기 이벤트와 선수별 장면을 분석해 클립을 편집 중입니다."
      : activeCount
      ? `${names.slice(0, 3).join(" · ")} 중심으로 AI 클립을 생성합니다.`
      : "선수를 1명 이상 선택해 주세요.";
  }

  if (generateButton) generateButton.disabled = activeCount === 0 || isGeneratingHighlight;
}

function updateClipCount() {
  if (clipCountLabel) {
    clipCountLabel.textContent = `${BASE_CLIP_COUNT + generatedClipCount}개`;
  }
}

function showToast(message) {
  if (!appToast) return;

  appToast.textContent = message;
  appToast.classList.add("show");

  window.setTimeout(() => {
    appToast.classList.remove("show");
  }, 1800);
}

function applyClipFilter() {
  const selectedNames = selectedPlayers().map((player) => player.name);

  clipFilterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.clipFilter === activeClipFilter);
  });

  document.querySelectorAll("#clip-list .highlight-card").forEach((card) => {
    const isGenerated = card.classList.contains("generated");
    const text = card.textContent || "";
    const matchesSelected =
      !selectedNames.length || selectedNames.some((name) => text.includes(name));
    const visible =
      activeClipFilter === "all" ||
      (activeClipFilter === "generated" && isGenerated) ||
      (activeClipFilter === "selected" && matchesSelected);

    card.hidden = !visible;
  });
}

function setSelectedClip(clipId) {
  selectedClip = clipId;

  document.querySelectorAll(".highlight-card").forEach((card) => {
    card.classList.toggle("selected", card.dataset.clip === selectedClip);
  });

  updateAnalysis();
}

function resetGeneratedClips() {
  document.querySelectorAll(".highlight-card.generated").forEach((card) => {
    card.remove();
  });
  generatedClipCount = 0;
  updateClipCount();
  applyClipFilter();
}

function updateHighlightCards(context) {
  const cardCopy = [
    {
      clip: "assist",
      title: context.clips.assist.title,
      meta: `${context.playmakerName} · 4Q 01:22 · 어시스트`,
      score: "+3",
    },
    {
      clip: "clutch",
      title: context.clips.clutch.title,
      meta: `${context.shooterName} · 4Q 00:44 · 3점슛`,
      score: "+3",
    },
    {
      clip: "rookie",
      title: context.clips.rookie.title,
      meta: `${context.rebounderName} · 2Q 06:10 · 리바운드`,
      score: "+2",
    },
  ];

  cardCopy.forEach((item) => {
    setText(`[data-clip="${item.clip}"] .clip-copy strong`, item.title);
    setText(`[data-clip="${item.clip}"] .clip-copy small`, item.meta);
    setText(`[data-clip="${item.clip}"] .clip-score`, item.score);
  });
}

function renderPlayerChips(context) {
  if (!followChipRow) return;

  followChipRow.innerHTML = "";

  displayRosterPlayers(context).forEach((player) => {
    const button = document.createElement("button");
    const name = document.createElement("span");
    const meta = document.createElement("small");
    const code = player.pcode;
    const backNumber = player.backNumber ? `#${player.backNumber}` : "";

    button.className = "follow-chip";
    button.type = "button";
    button.dataset.playerCode = code;
    button.dataset.playerName = player.name;
    button.classList.toggle("active", selectedPlayerCodes.has(code));

    name.textContent = player.name;
    meta.textContent = [player.position, backNumber].filter(Boolean).join(" · ");

    button.append(name, meta);
    followChipRow.append(button);
  });
}

function updateFanApp(context) {
  const { team } = context;

  setText(".app-header strong", `${team.fullName} 맞춤 코트`);
  setText(".spotlight-copy h2", `${context.shooterName} 3점 하이라이트 모음`);
  setText(
    ".spotlight-copy p",
    `팔로우한 ${team.name} 장면만 2분 18초로 압축했어요.`,
  );

  const dataStrip = document.querySelector(".kbl-data-strip");
  dataStrip?.setAttribute("aria-label", `KBL 공식 ${team.name} 선수 데이터`);

  const dataLabels = document.querySelectorAll(".kbl-data-strip article span");
  [
    `${team.shortName} 어시스트 1위`,
    `${team.shortName} 3점 1위`,
    `${team.shortName} 리바운드 1위`,
  ].forEach((label, index) => {
    if (dataLabels[index]) dataLabels[index].textContent = label;
  });

  setText("#assist-leader-name", context.playmakerName);
  setText("#assist-leader-stat", formatPerGame(context.assistLeader, "ast", "AST"));
  setText("#score-leader-name", context.shooterName);
  setText("#score-leader-stat", formatPerGame(context.threePointLeader, "threep", "3PM"));
  setText("#rebound-leader-name", context.rebounderName);
  setText("#rebound-leader-stat", formatPerGame(context.reboundLeader, "rb", "REB"));

  renderPlayerChips(context);
  updateHighlightCards(context);
  applyClipFilter();
}

function updatePassPanel(context) {
  setText("#pass-title", `${context.team.shortName} 입덕패스`);
  setText(
    "#pass-copy",
    `${context.playmakerName}의 패스, ${context.shooterName}의 3점, ${context.rebounderName}의 리바운드를 초보자 설명으로 묶었습니다.`,
  );

  const items = document.querySelectorAll(".pass-list li");
  [
    `${context.playmakerName}이 만든 찬스를 30초 카드로 설명`,
    `${context.shooterName} 3점 위치를 코트맵으로 정리`,
    `${context.rebounderName} 리바운드 후 세컨드 찬스 모음`,
  ].forEach((text, index) => {
    if (items[index]) items[index].lastChild.textContent = ` ${text}`;
  });
}

function updateMatePanel(context) {
  const { team } = context;
  const tags = team.mateTags;

  updateMateCount();
  setText("#mate-main-title", "같이 직관가실 분 구해요!");
  setText(
    "#mate-main-copy",
    `${team.venue} ${team.opponent}전에서 ${context.shooterName} 하이라이트를 같이 볼 메이트를 추천합니다.`,
  );
  setText("#mate-venue", `${team.venue} · ${team.opponent}전`);
  setText("#mate-seat", `${team.city} 응원석 선호`);
  setText("#mate-game-choice", `${team.opponent}전`);
  setText("#mate-seat-choice", `${team.city} 응원석`);
  setText("#mate-style-choice", "초보 환영");

  const mateCards = document.querySelectorAll(".mate-card:not(.user-created)");
  const cardData = [
    {
      title: `${team.shortName} 첫 직관 같이 가요`,
      meta: `${team.city} · 초보자 환영 · 2명 모집`,
      tags: [tags[0], tags[2]],
    },
    {
      title: `${context.shooterName} 3점 보러 가실 분`,
      meta: `${team.opponent}전 · 응원가 크게 부르는 편`,
      tags: [tags[1], "하이라이트 분석 공유"],
    },
    {
      title: `${context.rebounderName} 골밑 싸움 같이 볼 사람`,
      meta: "혼직관 방지 · 경기 전 30분 합류",
      tags: ["전술 이야기", tags[0]],
    },
  ];

  mateCards.forEach((card, index) => {
    const item = cardData[index];
    if (!item) return;

    card.querySelector("strong").textContent = item.title;
    card.querySelector("small").textContent = item.meta;
    card.querySelectorAll(".mate-tag").forEach((tag, tagIndex) => {
      tag.textContent = item.tags[tagIndex] || tags[tagIndex] || team.name;
    });
  });
}

function updateMateCount() {
  const createdCount = document.querySelectorAll(".mate-card.user-created").length;
  setText("#mate-count", `${3 + createdCount}팀 모집중`);
}

function teamSummaryFor(code) {
  const team = TEAM_CONFIGS[code];
  const stats = teamStatsFor(code);
  const roster = rosterFor(code);
  const leader = topByStat(stats, "score");

  return {
    team,
    rosterCount: roster.length,
    statsCount: stats.length,
    clipCount: Math.max(stats.length * 3, roster.length * 2),
    leaderName: playerName(leader, roster[0]?.name || team.shortName),
  };
}

function renderLeagueTeamGrid() {
  if (!leagueTeamGrid) return;

  leagueTeamGrid.innerHTML = "";

  TEAM_ORDER.forEach((code) => {
    const summary = teamSummaryFor(code);
    const { team } = summary;
    if (!team) return;

    const button = document.createElement("button");
    const top = document.createElement("div");
    const mark = document.createElement("span");
    const title = document.createElement("strong");
    const note = document.createElement("small");
    const stats = document.createElement("div");

    button.type = "button";
    button.className = "league-team-card";
    button.dataset.leagueTeamCode = team.code;
    button.classList.toggle("active", team.code === currentContext.team.code);

    top.className = "league-team-top";
    mark.className = "team-mark";
    mark.style.background = `linear-gradient(135deg, ${team.colors.primary} 0 58%, ${team.colors.accent} 58%)`;
    title.textContent = team.fullName;
    top.append(mark, title);

    note.textContent = `대표 선수 ${summary.leaderName} · ${team.venue}`;

    stats.className = "league-team-stats";
    [
      [summary.rosterCount, "등록"],
      [summary.statsCount, "기록"],
      [summary.clipCount, "클립"],
    ].forEach(([value, label]) => {
      const item = document.createElement("div");
      const strong = document.createElement("strong");
      const span = document.createElement("span");
      item.className = "league-team-stat";
      strong.textContent = Number(value).toLocaleString("ko-KR");
      span.textContent = label;
      item.append(strong, span);
      stats.append(item);
    });

    button.append(top, note, stats);
    leagueTeamGrid.append(button);
  });
}

function dashboardRecommendations(context = currentContext) {
  return revenueOpportunities(context).map((item) => ({
    scene: item.scene,
    reaction: item.proof,
    action: item.action.replace(" 추천", ""),
    campaign: item.campaignName,
  }));
}

function revenueOpportunities(context = currentContext) {
  return [
    {
      title: `${context.shooterName} 3점 하이라이트 반응 급상승`,
      scene: `${context.shooterName} 트랜지션 3점`,
      proof: "저장 1,204 · 공유율 18%",
      effect: "예매 CTA 클릭 +128건",
      difficulty: "낮음",
      action: "응원석 예매 CTA 추천",
      campaignName: `${context.shooterName} 하이라이트 응원석 예매`,
      target: `${context.shooterName} 하이라이트를 저장하거나 공유한 팬`,
      placement: "하이라이트 카드 하단",
      copy: "이 장면, 경기장에서 직접 볼래요?",
      period: "다음 홈경기 D-5 ~ 경기 당일",
      revenue: "예상 예매 매출 기여 384만원",
      sponsorName: "오늘의 클러치 플레이 presented by 브랜드",
      sponsorPlacement: "팬 앱 하이라이트 첫 화면 · 경기장 전광판 리캡",
      sponsorPitch: `${context.shooterName}의 외곽 장면에 몰입한 팬에게 브랜드 노출을 붙이는 클러치 플레이 패키지`,
    },
    {
      title: `${context.rebounderName} 골밑 장면 저장률 높음`,
      scene: `${context.rebounderName} 세컨드 찬스`,
      proof: "저장률 24% · 신규 팬 유입 +9%",
      effect: "굿즈 CTA 클릭 +92건",
      difficulty: "보통",
      action: "선수 굿즈/포토카드 캠페인 추천",
      campaignName: `${context.rebounderName} 골밑 포토카드 테스트`,
      target: `${context.rebounderName} 리바운드/골밑 장면을 본 팬`,
      placement: "입덕패스 카드뉴스 하단",
      copy: "골밑 장악력, 포토카드로 소장할래요?",
      period: "주말 홈경기 전후 7일",
      revenue: "예상 굿즈 매출 기여 276만원",
      sponsorName: "작전판AI 전술 해설 스폰서",
      sponsorPlacement: "작전판AI 해설 카드 · 입덕패스 경기 프리뷰",
      sponsorPitch: `${context.rebounderName}의 리바운드 장면을 전술 해설 콘텐츠로 묶어 브랜드 전문성과 연결하는 패키지`,
    },
    {
      title: "직관메이트 클릭률 증가",
      scene: `${context.team.name} 다음 홈경기 동행 모집`,
      proof: "직관메이트 클릭 3.2K · 좌석 선호 응답 +31%",
      effect: "동행 이벤트 참여 84팀",
      difficulty: "낮음",
      action: "다음 홈경기 동행 이벤트 추천",
      campaignName: `${context.team.shortName} 첫 직관 동행 이벤트`,
      target: "직관메이트를 클릭했지만 예매 CTA까지 가지 않은 팬",
      placement: "직관메이트 모집글 작성 완료 화면",
      copy: "혼자보다 같이, 다음 홈경기 같이 갈래요?",
      period: "다음 홈경기 D-10 ~ D-1",
      revenue: "예상 예매/현장 이벤트 기여 312만원",
      sponsorName: "직관메이트 매칭 이벤트 스폰서",
      sponsorPlacement: "직관메이트 추천 카드 · 경기장 이벤트 안내",
      sponsorPitch: "처음 직관과 동행 니즈를 브랜드 체험 이벤트로 연결하는 매칭형 스폰서 패키지",
    },
  ];
}

function fanVoiceInsights(context = currentContext) {
  return {
    seat: {
      label: "좌석",
      signal: "응원석 시야와 초보 팬 좌석 추천 문의 증가",
      volume: "138건",
      action: "응원석 첫 직관 가이드 캠페인",
      recommendation: "좌석 선택 단계에 초보 팬 안내 카드와 직관메이트 추천을 함께 노출",
    },
    goods: {
      label: "굿즈",
      signal: `${context.rebounderName} 한정 포토카드 요청 증가`,
      volume: "96건",
      action: "한정 포토카드 테스트",
      recommendation: `${context.rebounderName} 골밑 장면 저장 팬을 대상으로 굿즈 CTA A/B 테스트`,
    },
    venue: {
      label: "경기장 경험",
      signal: "매점 대기 불만 증가",
      volume: "74건",
      action: "모바일 픽업 안내 캠페인",
      recommendation: "하프타임 전 팬 앱에 모바일 픽업 안내와 혼잡 시간대를 노출",
    },
    content: {
      label: "선수 콘텐츠",
      signal: `${context.shooterName} 슈팅 위치 설명 요청 증가`,
      volume: "121건",
      action: "작전판AI 숏폼 추가 생성",
      recommendation: `${context.shooterName} 3점 위치를 쉬운 해설 카드로 묶어 입덕패스에 반영`,
    },
    event: {
      label: "이벤트",
      signal: "경기 전 참여형 이벤트 선호 증가",
      volume: "63건",
      action: "하이라이트 투표 이벤트",
      recommendation: "인기 장면 투표 후 예매 CTA와 스폰서 쿠폰을 함께 노출",
    },
    culture: {
      label: "응원 문화",
      signal: "응원가와 콜 타이밍 안내 요청 증가",
      volume: "88건",
      action: "초보 팬 응원 튜토리얼",
      recommendation: "경기 전 입덕패스에 응원가 카드와 직관메이트 모집글을 연결",
    },
  };
}

function renderRevenueOpportunities(context = currentContext) {
  if (!revenueOpportunityGrid) return;

  revenueOpportunityGrid.innerHTML = "";
  revenueOpportunities(context).forEach((item, index) => {
    const card = document.createElement("article");
    const top = document.createElement("div");
    const kicker = document.createElement("span");
    const title = document.createElement("strong");
    const proof = document.createElement("p");
    const detailGrid = document.createElement("div");
    const actions = document.createElement("div");
    const campaignButton = document.createElement("button");
    const sponsorButton = document.createElement("button");

    card.className = "revenue-opportunity-card clickable-card";
    card.dataset.revenueOpportunity = String(index);
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");

    top.className = "opportunity-topline";
    kicker.textContent = `Opportunity ${index + 1}`;
    title.textContent = item.title;
    top.append(kicker, title);

    proof.className = "opportunity-proof";
    proof.textContent = item.proof;

    detailGrid.className = "opportunity-detail-grid";
    [
      ["예상 효과", item.effect],
      ["실행 난이도", item.difficulty],
      ["추천 액션", item.action],
    ].forEach(([label, value]) => {
      const detail = document.createElement("div");
      const labelEl = document.createElement("span");
      const valueEl = document.createElement("strong");
      labelEl.textContent = label;
      valueEl.textContent = value;
      detail.append(labelEl, valueEl);
      detailGrid.append(detail);
    });

    actions.className = "opportunity-actions";
    campaignButton.type = "button";
    campaignButton.dataset.campaignBuilder = String(index);
    campaignButton.textContent = "캠페인 만들기";
    sponsorButton.type = "button";
    sponsorButton.dataset.sponsorBuilder = String(index);
    sponsorButton.textContent = "스폰서 제안서";
    actions.append(campaignButton, sponsorButton);

    card.append(top, proof, detailGrid, actions);
    revenueOpportunityGrid.append(card);
  });
}

function dashboardSectionModel(context = currentContext) {
  const topPlayerName = playerName(context.uniqueLeaders[0], context.shooterName);
  const topReactionScore = context.uniqueLeaders.length ? 92 : 76;
  const savedEstimate = Math.round(topReactionScore * 13.1);
  const mateClickEstimate = Math.round(topReactionScore * 2.3);
  const opportunityCount = revenueOpportunities(context).length;
  const voiceCount = Object.keys(fanVoiceInsights(context)).length;

  return {
    "fan-insight": {
      kicker: "Fan Insight",
      title: "Fan Insight",
      copy: `${topPlayerName} 중심 팬 반응을 저장, 공유, 직관메이트 클릭으로 나눠 캠페인 후보를 정리합니다.`,
      kpis: [
        ["상위 선수", topPlayerName, "팬 반응 점수 1위"],
        ["저장 추정", `${savedEstimate.toLocaleString("ko-KR")}회`, "하이라이트 저장"],
        ["메이트 클릭", `${mateClickEstimate.toLocaleString("ko-KR")}회`, "직관 전환 신호"],
      ],
      workflow: [
        "선수별 반응 점수 비교",
        "저장/공유/직관메이트 클릭을 분해",
        "상위 반응 선수를 콘텐츠와 굿즈 후보로 이동",
      ],
      action: { label: "상위 선수 상세", type: "player", value: "0" },
    },
    playbook: {
      kicker: "Revenue Playbook",
      title: "Revenue Playbook",
      copy: "이번 주 바로 실행할 매출 기회를 티켓, 굿즈, 스폰서, 경기일 운영 액션으로 우선순위화합니다.",
      kpis: [
        ["매출 기회", `${opportunityCount}개`, "Top 3 추천"],
        ["예매 클릭", "128건", "대표 캠페인 예상"],
        ["굿즈 클릭", "92건", "포토카드 테스트"],
      ],
      workflow: [
        "팬 반응 급상승 장면 확인",
        "예상 효과와 실행 난이도 비교",
        "캠페인 또는 스폰서 패키지로 전환",
      ],
      action: { label: "Top 3 상세 보기", type: "opportunity", value: "0" },
    },
    campaign: {
      kicker: "Campaign Builder",
      title: "Campaign Builder",
      copy: "추천 액션을 대상, 문구, 노출 위치, 기간이 있는 팬 앱 캠페인 초안으로 바꿉니다.",
      kpis: [
        ["대상 세그먼트", `${context.shooterName} 팬`, "저장/공유 기반"],
        ["노출 위치", "하이라이트 하단", "팬 앱 CTA"],
        ["성과 추적", "예매 클릭", "게시 후 확인"],
      ],
      workflow: [
        "추천 액션 확인",
        "캠페인 초안 생성",
        "문구/대상/노출 위치 수정",
        "팬 앱 게시 후 성과 추적",
      ],
      action: { label: "캠페인 초안 열기", type: "campaign", value: "0" },
    },
    sponsor: {
      kicker: "Sponsor Package",
      title: "Sponsor Package",
      copy: "인기 장면과 팬 반응 데이터를 스폰서 영업 자료로 바로 쓸 수 있는 제안서 초안으로 묶습니다.",
      kpis: [
        ["패키지 후보", "4개", "장면 기반 상품"],
        ["대표 장면", `${context.shooterName} 3점`, "브랜드 노출 후보"],
        ["제안서 상태", "초안 가능", "생성 결과함 저장"],
      ],
      workflow: [
        "인기 장면 선택",
        "조회/저장/공유 지표 첨부",
        "스폰서 노출 위치와 제안 문구 생성",
        "제안서 초안 저장",
      ],
      action: { label: "스폰서 제안서 열기", type: "sponsor", value: "0" },
    },
    "funnel-roi": {
      kicker: "Funnel / ROI",
      title: "Funnel / ROI",
      copy: "하이라이트부터 예매·굿즈 CTA까지 단계별 이탈, 전환, 예상 매출 기여를 추적합니다.",
      kpis: [
        ["예매 CTA", "128건", "대표 캠페인 클릭"],
        ["굿즈 CTA", "92건", "포토카드 클릭"],
        ["예상 기여", "660만원", "샘플 합산"],
      ],
      workflow: [
        "퍼널 단계별 전환율 확인",
        "이탈률이 높은 단계의 콘텐츠와 선수 확인",
        "개선 액션을 캠페인으로 전환",
      ],
      action: { label: "ROI 단계 보기", type: "funnel", value: "ticket-cta" },
    },
    "fan-voice": {
      kicker: "Fan Voice",
      title: "Fan Voice",
      copy: "팬 의견을 좌석, 굿즈, 경기장 경험, 선수 콘텐츠, 이벤트, 응원 문화로 분류해 운영 개선 액션으로 연결합니다.",
      kpis: [
        ["분류 카테고리", `${voiceCount}개`, "자동 태깅"],
        ["상위 의견", "매점 대기", "경기장 경험"],
        ["추천 액션", "모바일 픽업", "운영 캠페인"],
      ],
      workflow: [
        "팬 의견과 투표 수집",
        "AI가 카테고리와 감성을 분류",
        "운영 개선 리포트 또는 굿즈 테스트 캠페인 생성",
      ],
      action: { label: "Fan Voice 보기", type: "fan-voice", value: "venue" },
    },
  };
}

function renderDashboardMenuBoard(context = currentContext) {
  if (!menuBoardTitle || !menuKpiGrid || !menuWorkflowList) return;

  const menuMap = dashboardSectionModel(context);
  const menu = menuMap[activeDashboardSection] || menuMap["fan-insight"];

  if (menuBoardKicker) menuBoardKicker.textContent = menu.kicker;
  menuBoardTitle.textContent = menu.title;
  if (menuBoardCopy) menuBoardCopy.textContent = menu.copy;

  if (menuBoardAction) {
    menuBoardAction.textContent = menu.action.label;
    menuBoardAction.dataset.dashboardActionType = menu.action.type;

    if (menu.action.value === undefined) {
      delete menuBoardAction.dataset.dashboardActionValue;
    } else {
      menuBoardAction.dataset.dashboardActionValue = menu.action.value;
    }
  }

  menuKpiGrid.innerHTML = "";
  menu.kpis.forEach(([label, value, note]) => {
    const item = document.createElement("div");
    const labelEl = document.createElement("span");
    const valueEl = document.createElement("strong");
    const noteEl = document.createElement("small");

    labelEl.textContent = label;
    valueEl.textContent = value;
    noteEl.textContent = note;
    item.append(labelEl, valueEl, noteEl);
    menuKpiGrid.append(item);
  });

  menuWorkflowList.innerHTML = "";
  menu.workflow.forEach((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    menuWorkflowList.append(item);
  });
}

function setDashboardSection(section) {
  const menuMap = dashboardSectionModel(currentContext);
  activeDashboardSection = menuMap[section] ? section : "fan-insight";

  dashboardSectionButtons.forEach((button) => {
    const isActive = button.dataset.dashboardSection === activeDashboardSection;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  renderDashboardMenuBoard(currentContext);
}

function openDashboardBoardAction(button) {
  const actionType = button.dataset.dashboardActionType;
  const actionValue = button.dataset.dashboardActionValue;

  if (actionType === "metric") {
    showMetricDetail(actionValue);
    return;
  }

  if (actionType === "player") {
    showPlayerDetail(Number(actionValue || 0));
    return;
  }

  if (actionType === "content") {
    showContentPreview(Number(actionValue || 0));
    return;
  }

  if (actionType === "revenue") {
    showRevenueAction(Number(actionValue || 0));
    return;
  }

  if (actionType === "opportunity") {
    showRevenueOpportunityDetail(Number(actionValue || 0));
    return;
  }

  if (actionType === "campaign") {
    showCampaignBuilder(Number(actionValue || 0));
    return;
  }

  if (actionType === "sponsor") {
    showSponsorBuilder(Number(actionValue || 0));
    return;
  }

  if (actionType === "funnel") {
    showFunnelDetail(actionValue || "ticket-cta");
    return;
  }

  if (actionType === "fan-voice") {
    showFanVoiceDetail(actionValue || "venue");
  }
}

function updateDashboard(context) {
  const { team } = context;

  setText(".match-chip span", "내 팀 기준");
  setText(".match-chip strong", team.fullName);
  renderLeagueTeamGrid();
  renderRevenueOpportunities(context);

  const metricCards = document.querySelectorAll(".metric-card");
  const metricData = [
    {
      label: "등록 선수",
      value: context.roster.length,
      note: `현재 등록 엔트리 ${context.activeEntries.length}명 중 코치진 제외`,
    },
    {
      label: "기록 선수",
      value: context.stats.length,
      note: `${seasonName} 정규시즌 기록 보유`,
    },
    {
      label: "AI 클립 후보",
      value: context.stats.length * 3,
      note: "득점·패스·리바운드 장면 우선 큐",
    },
    {
      label: "데이터 기준",
      value: seasonName,
      note: "KBL 공식 선수/기록 API 최신화",
    },
  ];

  metricCards.forEach((card, index) => {
    const metric = metricData[index];
    if (!metric) return;

    card.querySelector("span").textContent = metric.label;
    card.querySelector("strong").textContent =
      typeof metric.value === "number"
        ? metric.value.toLocaleString("ko-KR")
        : metric.value;
    card.querySelector("small").textContent = metric.note;
  });

  const dashboardRows = document.querySelectorAll(".bar-row");
  const scores = [92, 90, 86, 84];

  dashboardRows.forEach((row, index) => {
    const item = context.uniqueLeaders[index];
    if (!item) return;

    row.querySelector("span").textContent = playerName(item);
    row.querySelector(".bar-track span").style.width = `${scores[index]}%`;
    row.querySelector("strong").textContent = scores[index];
  });

  const queueItems = document.querySelectorAll(".queue-list li");
  [
    `${context.shooterName} 3점 숏폼 8개`,
    `${context.playmakerName} 어시스트 연결 5개`,
    `${context.rebounderName} 리바운드 카드뉴스 3개`,
    `${team.name} 직관메이트 모집글 6개`,
  ].forEach((text, index) => {
    if (queueItems[index]) queueItems[index].lastChild.textContent = ` ${text}`;
  });

  const tableRows = document.querySelectorAll(".recommendation-table .table-row");
  const recommendations = dashboardRecommendations(context).map((item) => [
    item.scene,
    item.reaction,
    item.action,
  ]);

  recommendations.forEach((rowData, rowIndex) => {
    const cells = tableRows[rowIndex + 1]?.querySelectorAll("span");
    rowData.forEach((text, cellIndex) => {
      if (cells?.[cellIndex]) cells[cellIndex].textContent = text;
    });
  });

  const fetchedAt = kblData.source?.fetchedAt
    ? new Intl.DateTimeFormat("ko-KR", {
        timeZone: "Asia/Seoul",
        dateStyle: "medium",
        timeStyle: "short",
      }).format(new Date(kblData.source.fetchedAt))
    : "로컬 샘플";
  setText("#dashboard-source-label", `KBL 공식 API · ${seasonName} · ${fetchedAt}`);
  updateAssetVault();
  renderDashboardMenuBoard(context);
}

function openDashboardModal({ kicker, title, subtitle, body }) {
  if (!dashboardModal || !dashboardModalBody) return;

  dashboardModalKicker.textContent = kicker || "Club Action Detail";
  dashboardModalTitle.textContent = title;
  dashboardModalSubtitle.textContent = subtitle;
  dashboardModalBody.innerHTML = body;
  dashboardModal.classList.add("open");
  dashboardModal.setAttribute("aria-hidden", "false");
}

function closeDashboardModal() {
  dashboardModal?.classList.remove("open");
  dashboardModal?.setAttribute("aria-hidden", "true");
}

function assetKindFor(label) {
  if (label.includes("스폰서") || label.includes("리포트")) return "스폰서 제안서";
  if (label.includes("굿즈")) return "굿즈 캠페인";
  if (label.includes("팬 앱") || label.includes("캠페인")) return "팬 앱 캠페인";
  if (label.includes("콘텐츠")) return "콘텐츠 패키지";
  return "실행 문서";
}

function createGeneratedAsset(label, sourceOverride, details = {}) {
  const sourceTitle = sourceOverride || dashboardModalTitle?.textContent || "구단 대시보드 액션";
  const kind = details.kind || assetKindFor(label);
  const id = `asset-${generatedAssetSequence}`;

  generatedAssetSequence += 1;

  const asset = {
    id,
    kind,
    title: details.title || `${label} · ${currentContext.team.shortName}`,
    source: sourceTitle,
    team: currentContext.team.fullName,
    createdAt: new Intl.DateTimeFormat("ko-KR", {
      timeZone: "Asia/Seoul",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date()),
    summary:
      details.summary ||
      `${sourceTitle}에서 생성된 ${kind}입니다. 팬 앱 노출, 담당자 승인, 스폰서 패키지 저장 흐름으로 이어집니다.`,
    sections: details.sections || [
      ["대상 구단", currentContext.team.fullName],
      ["핵심 선수", `${currentContext.shooterName}, ${currentContext.playmakerName}, ${currentContext.rebounderName}`],
      ["노출 위치", "팬 앱 하이라이트 하단 · 구단 대시보드 생성 결과함"],
      ["다음 액션", "담당자 승인 후 팬 앱 캠페인 카드와 스폰서 제안서에 반영"],
    ],
  };

  generatedAssets.unshift(asset);
  updateAssetVault();
  renderDashboardMenuBoard(currentContext);
  return asset;
}

function updateAssetVault() {
  if (!assetList || !assetCountLabel) return;

  assetCountLabel.textContent = `${generatedAssets.length}개 문서`;
  assetList.innerHTML = "";

  if (!generatedAssets.length) {
    const empty = document.createElement("div");
    empty.className = "asset-empty";
    empty.textContent = "액션 메뉴나 추천 캠페인에서 생성한 문서가 여기에 저장됩니다.";
    assetList.append(empty);
    return;
  }

  generatedAssets.forEach((asset) => {
    const button = document.createElement("button");
    const copy = document.createElement("span");
    const title = document.createElement("strong");
    const meta = document.createElement("small");
    const badge = document.createElement("span");

    button.type = "button";
    button.className = "asset-item";
    button.dataset.assetId = asset.id;

    title.textContent = asset.title;
    meta.textContent = `${asset.kind} · ${asset.team} · ${asset.createdAt}`;
    badge.className = "asset-badge";
    badge.textContent = "문서 보기";

    copy.append(title, meta);
    button.append(copy, badge);
    assetList.append(button);
  });
}

function renderAssetDocument(asset) {
  return `
    <div class="document-preview">
      <h4>${escapeHtml(asset.title)}</h4>
      <section>
        <strong>생성 출처</strong>
        <p>${escapeHtml(asset.source)}</p>
      </section>
      <section>
        <strong>요약</strong>
        <p>${escapeHtml(asset.summary)}</p>
      </section>
      ${asset.sections
        .map(
          ([label, value]) => `
            <section>
              <strong>${escapeHtml(label)}</strong>
              <p>${escapeHtml(value)}</p>
            </section>
          `,
        )
        .join("")}
    </div>
    <div class="modal-action-row">
      <button type="button" data-asset-download="${escapeHtml(asset.id)}">다운로드</button>
      <button type="button" data-modal-action="팬 앱 미리보기">팬 앱 미리보기</button>
      <button type="button" data-modal-action="담당자 승인 요청">담당자 승인 요청</button>
    </div>
  `;
}

function renderOutputPanel(asset) {
  return `
    <div class="modal-output-panel" id="modal-output-panel">
      <h4>생성 완료</h4>
      <p>${escapeHtml(asset.title)} 문서가 <strong>구단 대시보드 > 생성 결과함</strong>에 저장됐습니다.</p>
      <div class="modal-action-row">
        <button type="button" data-asset-open="${escapeHtml(asset.id)}">문서 보기</button>
        <button type="button" data-asset-download="${escapeHtml(asset.id)}">다운로드</button>
        <button type="button" data-close-dashboard-modal>계속 보기</button>
      </div>
    </div>
  `;
}

function showAssetDetail(assetId) {
  const asset = generatedAssets.find((item) => item.id === assetId);
  if (!asset) return;

  openDashboardModal({
    kicker: asset.kind,
    title: asset.title,
    subtitle: "생성 결과함에 저장된 문서 미리보기입니다. 다운로드하거나 후속 승인 흐름으로 이어갈 수 있습니다.",
    body: renderAssetDocument(asset),
  });
}

function downloadAsset(assetId) {
  const asset = generatedAssets.find((item) => item.id === assetId);
  if (!asset) return;

  const content = [
    asset.title,
    "",
    `종류: ${asset.kind}`,
    `구단: ${asset.team}`,
    `생성 시각: ${asset.createdAt}`,
    `생성 출처: ${asset.source}`,
    "",
    asset.summary,
    "",
    ...asset.sections.map(([label, value]) => `${label}: ${value}`),
  ].join("\n");
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${asset.id}-${asset.kind}.txt`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("문서 다운로드가 시작됐습니다.");
}

function modalActions(labels) {
  return `
    <div class="modal-action-row">
      ${labels
        .map((label) => `<button type="button" data-modal-action="${escapeHtml(label)}">${escapeHtml(label)}</button>`)
        .join("")}
    </div>
  `;
}

function appendModalOutput(asset) {
  if (!dashboardModalBody) return;

  const existingPanel = dashboardModalBody.querySelector("#modal-output-panel");
  existingPanel?.remove();
  dashboardModalBody.insertAdjacentHTML("beforeend", renderOutputPanel(asset));
  showToast("생성 결과함에 저장됐습니다.");
}

function createCampaignAsset(index = 0) {
  const item = revenueOpportunities()[index] || revenueOpportunities()[0];

  return createGeneratedAsset("팬 앱 캠페인 게시", "Campaign Builder", {
    kind: "팬 앱 캠페인",
    title: `${item.campaignName} · ${currentContext.team.shortName}`,
    summary: `${item.scene} 반응을 기반으로 ${item.target}에게 ${item.action}을 노출하는 캠페인 초안입니다.`,
    sections: [
      ["대상 팬 세그먼트", item.target],
      ["캠페인명", item.campaignName],
      ["노출 위치", item.placement],
      ["CTA 문구", item.copy],
      ["운영 기간", item.period],
      ["성과 지표", `${item.effect} · ${item.revenue}`],
    ],
  });
}

function createSponsorAsset(index = 0) {
  const item = revenueOpportunities()[index] || revenueOpportunities()[0];

  return createGeneratedAsset("스폰서 제안서 저장", "Sponsor Package Builder", {
    kind: "스폰서 제안서",
    title: `${item.sponsorName} · ${currentContext.team.shortName}`,
    summary: `${item.scene}와 팬 반응 지표를 활용해 구단 스폰서 영업에 바로 쓸 수 있는 제안서 초안입니다.`,
    sections: [
      ["패키지명", item.sponsorName],
      ["대표 장면", item.scene],
      ["팬 반응 지표", item.proof],
      ["예상 노출 위치", item.sponsorPlacement],
      ["제안 문구", item.sponsorPitch],
      ["예상 효과", item.effect],
    ],
  });
}

function createFanVoiceAsset(category = "venue") {
  const insights = fanVoiceInsights();
  const item = insights[category] || insights.venue;

  return createGeneratedAsset("운영 개선 리포트 생성", "Fan Voice", {
    kind: "운영 리포트",
    title: `${item.label} 개선 액션 · ${currentContext.team.shortName}`,
    summary: `${item.signal} 의견을 ${item.action}으로 연결하는 경기일 운영 개선 리포트입니다.`,
    sections: [
      ["분류 카테고리", item.label],
      ["팬 의견 신호", item.signal],
      ["의견량", item.volume],
      ["추천 액션", item.action],
      ["운영 제안", item.recommendation],
      ["연결 캠페인", "팬 앱 안내 카드 또는 굿즈/이벤트 테스트 캠페인으로 전환"],
    ],
  });
}

function showRevenueOpportunityDetail(index = 0) {
  const item = revenueOpportunities()[index] || revenueOpportunities()[0];

  openDashboardModal({
    kicker: "Revenue Opportunity",
    title: item.title,
    subtitle: "이번 주 바로 실행할 수 있는 매출 액션과 후속 빌더를 한 화면에서 확인합니다.",
    body: `
      <div class="modal-detail-grid">
        <div class="modal-detail-card"><span>관련 장면</span><strong>${escapeHtml(item.scene)}</strong></div>
        <div class="modal-detail-card"><span>팬 반응 근거</span><strong>${escapeHtml(item.proof)}</strong></div>
        <div class="modal-detail-card"><span>예상 효과</span><strong>${escapeHtml(item.effect)}</strong></div>
      </div>
      <div class="modal-stat-grid">
        <div class="modal-preview-card"><span>실행 난이도</span><strong>${escapeHtml(item.difficulty)}</strong></div>
        <div class="modal-preview-card"><span>추천 액션</span><strong>${escapeHtml(item.action)}</strong></div>
        <div class="modal-preview-card"><span>매출 기여</span><strong>${escapeHtml(item.revenue)}</strong></div>
      </div>
      <ul class="workflow-list">
        <li>추천 액션 확인</li>
        <li>캠페인 초안 생성</li>
        <li>팬 앱 노출 또는 스폰서 제안서로 전환</li>
        <li>Funnel / ROI에서 예매·굿즈 클릭 추적</li>
      </ul>
      <div class="modal-action-row">
        <button type="button" data-campaign-builder="${index}">캠페인 만들기</button>
        <button type="button" data-sponsor-builder="${index}">스폰서 제안서</button>
        <button type="button" data-funnel-stage="ticket-cta">ROI 확인</button>
      </div>
    `,
  });
}

function showCampaignBuilder(index = 0) {
  const item = revenueOpportunities()[index] || revenueOpportunities()[0];

  openDashboardModal({
    kicker: "Campaign Builder",
    title: item.campaignName,
    subtitle: "추천 액션을 대상, 문구, 노출 위치, 기간이 있는 팬 앱 캠페인 초안으로 바꿉니다.",
    body: `
      <ol class="builder-flow" aria-label="캠페인 생성 흐름">
        <li>추천 액션 확인</li>
        <li>캠페인 초안 생성</li>
        <li>문구/대상/노출 위치 수정</li>
        <li>팬 앱에 게시</li>
        <li>성과 추적</li>
      </ol>
      <div class="builder-form-grid">
        <label>
          <span>대상 팬 세그먼트</span>
          <input type="text" value="${escapeHtml(item.target)}" />
        </label>
        <label>
          <span>캠페인명</span>
          <input type="text" value="${escapeHtml(item.campaignName)}" />
        </label>
        <label>
          <span>노출 위치</span>
          <select>
            <option>${escapeHtml(item.placement)}</option>
            <option>작전판AI 해설 하단</option>
            <option>직관메이트 추천 카드</option>
          </select>
        </label>
        <label>
          <span>운영 기간</span>
          <input type="text" value="${escapeHtml(item.period)}" />
        </label>
        <label class="full">
          <span>CTA 문구</span>
          <textarea rows="2">${escapeHtml(item.copy)}</textarea>
        </label>
      </div>
      <div class="modal-detail-grid">
        <div class="modal-detail-card"><span>추천 액션</span><strong>${escapeHtml(item.action)}</strong></div>
        <div class="modal-detail-card"><span>예상 효과</span><strong>${escapeHtml(item.effect)}</strong></div>
        <div class="modal-detail-card"><span>성과 추적</span><strong>${escapeHtml(item.revenue)}</strong></div>
      </div>
      <div class="modal-action-row">
        <button type="button" data-save-campaign-builder="${index}" data-campaign-save-kind="publish">팬 앱에 게시</button>
        <button type="button" data-save-campaign-builder="${index}" data-campaign-save-kind="draft">캠페인 초안 저장</button>
        <button type="button" data-funnel-stage="ticket-cta">성과 추적 보기</button>
      </div>
    `,
  });
}

function showSponsorBuilder(index = 0) {
  const item = revenueOpportunities()[index] || revenueOpportunities()[0];

  openDashboardModal({
    kicker: "Sponsor Package Builder",
    title: item.sponsorName,
    subtitle: "인기 장면과 팬 반응 지표를 스폰서 영업 자료로 바로 쓸 수 있는 제안서 초안으로 묶습니다.",
    body: `
      <div class="modal-detail-grid">
        <div class="modal-detail-card"><span>대표 장면</span><strong>${escapeHtml(item.scene)}</strong></div>
        <div class="modal-detail-card"><span>팬 반응 지표</span><strong>${escapeHtml(item.proof)}</strong></div>
        <div class="modal-detail-card"><span>예상 효과</span><strong>${escapeHtml(item.effect)}</strong></div>
      </div>
      <div class="builder-form-grid">
        <label>
          <span>패키지명</span>
          <input type="text" value="${escapeHtml(item.sponsorName)}" />
        </label>
        <label>
          <span>예상 노출 위치</span>
          <input type="text" value="${escapeHtml(item.sponsorPlacement)}" />
        </label>
        <label class="full">
          <span>제안 문구</span>
          <textarea rows="3">${escapeHtml(item.sponsorPitch)}</textarea>
        </label>
      </div>
      <ul class="modal-list">
        <li><strong>상품 예시</strong> 오늘의 클러치 플레이 presented by 브랜드</li>
        <li><strong>상품 예시</strong> 작전판AI 전술 해설 스폰서</li>
        <li><strong>상품 예시</strong> 직관메이트 매칭 이벤트 스폰서</li>
        <li><strong>상품 예시</strong> 입덕패스 경기 프리뷰 스폰서</li>
      </ul>
      <div class="modal-action-row">
        <button type="button" data-save-sponsor-builder="${index}">스폰서 제안서 저장</button>
        <button type="button" data-campaign-builder="${index}">연결 캠페인 만들기</button>
      </div>
    `,
  });
}

function showFanVoiceDetail(category = "venue") {
  const insights = fanVoiceInsights();
  const item = insights[category] || insights.venue;

  openDashboardModal({
    kicker: "Fan Voice",
    title: `${item.label} 인사이트`,
    subtitle: "팬 의견을 운영 개선 액션과 캠페인 테스트로 연결합니다.",
    body: `
      <div class="voice-category-grid" aria-label="Fan Voice 카테고리">
        ${Object.entries(insights)
          .map(
            ([key, value]) =>
              `<button class="${key === category ? "active" : ""}" type="button" data-fan-voice-category="${escapeHtml(key)}">${escapeHtml(value.label)}</button>`,
          )
          .join("")}
      </div>
      <div class="modal-detail-grid">
        <div class="modal-detail-card"><span>팬 의견 신호</span><strong>${escapeHtml(item.signal)}</strong></div>
        <div class="modal-detail-card"><span>의견량</span><strong>${escapeHtml(item.volume)}</strong></div>
        <div class="modal-detail-card"><span>추천 액션</span><strong>${escapeHtml(item.action)}</strong></div>
      </div>
      <ul class="modal-list">
        <li><strong>운영 제안</strong> ${escapeHtml(item.recommendation)}</li>
        <li><strong>연결 방식</strong> 팬 앱 안내 카드, 굿즈 테스트, 이벤트 캠페인 중 하나로 전환</li>
        <li><strong>성과 확인</strong> Funnel / ROI에서 클릭률과 불만 감소 신호를 추적</li>
      </ul>
      <div class="modal-action-row">
        <button type="button" data-save-fan-voice-report="${escapeHtml(category)}">운영 개선 리포트 생성</button>
        <button type="button" data-campaign-builder="2">캠페인 테스트 만들기</button>
      </div>
    `,
  });
}

function showMetricDetail(type) {
  const leaderCodes = new Set(currentContext.uniqueLeaders.map((item) => playerCode(item)));

  if (type === "roster") {
    const rows = currentContext.roster
      .slice(0, 14)
      .map((player) => {
        const isLeader = leaderCodes.has(player.pcode);
        return `<li><strong>${escapeHtml(player.name)}</strong> ${escapeHtml(player.position || "POS")} · #${escapeHtml(player.backNumber || "-")} ${isLeader ? "· 주요 선수" : ""}</li>`;
      })
      .join("");

    openDashboardModal({
      kicker: "Roster Detail",
      title: `${currentContext.team.name} 등록 선수`,
      subtitle: "현재 팀 로스터, 포지션, 등번호, 주요 선수 여부를 확인합니다.",
      body: `
        <div class="modal-detail-grid">
          <div class="modal-detail-card"><span>등록 로스터</span><strong>${currentContext.roster.length}명</strong></div>
          <div class="modal-detail-card"><span>현재 엔트리</span><strong>${currentContext.activeEntries.length}명</strong></div>
          <div class="modal-detail-card"><span>주요 선수</span><strong>${currentContext.uniqueLeaders.length}명</strong></div>
        </div>
        <ul class="modal-list">${rows}</ul>
      `,
    });
    return;
  }

  if (type === "stats") {
    const rows = [...currentContext.stats]
      .sort((a, b) => statValue(b, "score") - statValue(a, "score"))
      .slice(0, 10)
      .map(
        (row) =>
          `<li><strong>${escapeHtml(playerName(row))}</strong> ${statValue(row, "score").toLocaleString("ko-KR")}득점 · ${statValue(row, "rb").toLocaleString("ko-KR")}리바운드 · ${statValue(row, "ast").toLocaleString("ko-KR")}어시스트 · ${statValue(row, "threep").toLocaleString("ko-KR")} 3점</li>`,
      )
      .join("");

    openDashboardModal({
      kicker: "Stats Detail",
      title: `${seasonName} 기록 선수`,
      subtitle: "득점, 리바운드, 어시스트, 3점 성공을 기준으로 콘텐츠 후보를 고릅니다.",
      body: `
        <div class="modal-detail-grid">
          <div class="modal-detail-card"><span>기록 보유</span><strong>${currentContext.stats.length}명</strong></div>
          <div class="modal-detail-card"><span>득점 리더</span><strong>${escapeHtml(currentContext.scorerName)}</strong></div>
          <div class="modal-detail-card"><span>3점 리더</span><strong>${escapeHtml(currentContext.shooterName)}</strong></div>
        </div>
        <ul class="modal-list">${rows}</ul>
      `,
    });
    return;
  }

  if (type === "clips") {
    const candidates = [
      [currentContext.clips.assist.title, currentContext.playmakerName, "숏폼 + 작전판AI", "생성 가능"],
      [currentContext.clips.clutch.title, currentContext.shooterName, "응원석 CTA", "생성 가능"],
      [currentContext.clips.rookie.title, currentContext.rebounderName, "입덕패스 카드뉴스", "검수 대기"],
      [`${currentContext.team.name} 직관메이트 모집`, currentContext.shooterName, "모집글 추천", "생성 가능"],
    ];

    openDashboardModal({
      kicker: "AI Clip Queue",
      title: "AI 하이라이트 후보",
      subtitle: "관련 선수, 예상 콘텐츠 유형, 생성 가능 상태를 한 화면에서 확인합니다.",
      body: `
        <ul class="modal-list">
          ${candidates
            .map(
              ([scene, player, typeName, status]) =>
                `<li><strong>${escapeHtml(scene)}</strong> ${escapeHtml(player)} · ${escapeHtml(typeName)} · ${escapeHtml(status)}</li>`,
            )
            .join("")}
        </ul>
        ${modalActions(["클립 후보 생성", "검수 큐로 이동"])}
      `,
    });
    return;
  }

  openDashboardModal({
    kicker: "Data Source",
    title: `${seasonName} 데이터 기준`,
    subtitle: "현재 프로토타입은 KBL 공식 API 데이터를 정적 파일로 저장해 시연합니다.",
    body: `
      <div class="modal-detail-grid">
        <div class="modal-detail-card"><span>선수 마스터</span><strong>${(kblData.counts?.allPlayers || 0).toLocaleString("ko-KR")}명</strong></div>
        <div class="modal-detail-card"><span>활성 선수</span><strong>${(kblData.counts?.activePlayers || 0).toLocaleString("ko-KR")}명</strong></div>
        <div class="modal-detail-card"><span>시즌 기록</span><strong>${(kblData.counts?.currentSeasonStats || 0).toLocaleString("ko-KR")}명</strong></div>
      </div>
      <ul class="workflow-list">
        <li>공식 선수/기록 API 수집</li>
        <li>팀별 등록 선수와 시즌 기록 매칭</li>
        <li>팬 앱과 구단 대시보드에서 같은 데이터 기준으로 렌더링</li>
      </ul>
    `,
  });
}

function showPlayerDetail(index) {
  const score = [92, 90, 86, 84][index] || 82;
  const row = currentContext.uniqueLeaders[index];
  if (!row) return;

  const stats = statRowForPlayer(row);
  const player = rosterEntryForPlayer(row);
  const name = playerName(stats, player.name);
  const saved = Math.round(score * 13.1);
  const shared = Math.round(score * 4.7);
  const mateClicks = Math.round(score * 2.3);

  openDashboardModal({
    kicker: "Fan Engagement",
    title: `${name} 팬 반응 상세`,
    subtitle: "구단이 어떤 선수를 콘텐츠와 굿즈 캠페인으로 밀어야 하는지 판단하는 화면입니다.",
    body: `
      <div class="modal-detail-grid">
        <div class="modal-detail-card"><span>기본 정보</span><strong>${escapeHtml(currentContext.team.name)} · ${escapeHtml(player.position || "POS")} · #${escapeHtml(player.backNumber || "-")}</strong></div>
        <div class="modal-detail-card"><span>시즌 기록</span><strong>${formatPerGame(stats, "score", "PTS")}</strong></div>
        <div class="modal-detail-card"><span>팬 반응 점수</span><strong>${score}</strong></div>
      </div>
      <div class="modal-stat-grid">
        <div class="modal-preview-card"><span>저장</span><strong>${saved.toLocaleString("ko-KR")}</strong></div>
        <div class="modal-preview-card"><span>공유</span><strong>${shared.toLocaleString("ko-KR")}</strong></div>
        <div class="modal-preview-card"><span>직관메이트 클릭</span><strong>${mateClicks.toLocaleString("ko-KR")}</strong></div>
      </div>
      <ul class="modal-list">
        <li><strong>인기 하이라이트</strong> ${escapeHtml(name)} 중심 AI 하이라이트 · 작전판AI 열람률 높음</li>
        <li><strong>추천 캠페인</strong> ${escapeHtml(name)} 장면 하단에 응원석 예매 CTA와 굿즈 배너 노출</li>
        <li><strong>구단 액션</strong> 숏폼 3개 생성 후 팬 앱 첫 화면과 스폰서 패키지에 저장</li>
      </ul>
      ${modalActions(["콘텐츠 생성", "굿즈 캠페인 만들기", "스폰서 패키지로 저장"])}
    `,
  });
}

function showContentPreview(index) {
  const content = [
    {
      title: `${currentContext.shooterName} 3점 숏폼`,
      thumbnail: "오늘의 슈터, 이 장면만 보면 됩니다",
      card: `${currentContext.shooterName}의 3점 위치와 수비가 늦어진 이유를 3장 카드로 설명`,
      pass: `${currentContext.shooterName}을 처음 보는 팬도 외곽 움직임을 이해하게 만드는 입덕패스 문장`,
      mate: `${currentContext.shooterName} 3점 보러 같이 직관가실 분`,
    },
    {
      title: `${currentContext.playmakerName} 어시스트 연결`,
      thumbnail: "패스 하나로 열린 코너",
      card: "픽앤롤 이후 킥아웃과 코너 스페이싱을 쉬운 말로 설명",
      pass: `${currentContext.playmakerName}이 왜 경기 흐름을 바꾸는지 보여주는 30초 설명`,
      mate: `${currentContext.playmakerName} 패스맵 같이 보실 분`,
    },
    {
      title: `${currentContext.rebounderName} 리바운드 카드뉴스`,
      thumbnail: "공격을 한 번 더 살린 장면",
      card: "세컨드 찬스와 박스아웃을 초보자도 이해하는 카드뉴스로 변환",
      pass: `${currentContext.rebounderName}의 골밑 싸움이 왜 중요한지 알려주는 입덕패스`,
      mate: `${currentContext.rebounderName} 골밑 장면 같이 볼 사람`,
    },
    {
      title: `${currentContext.team.name} 홈경기 캠페인`,
      thumbnail: "하이라이트 본 팬에게 바로 다음 경기",
      card: "AI 클립 반응이 높은 팬에게 응원석/굿즈/직관메이트 CTA를 분기 노출",
      pass: `${currentContext.team.shortName} 첫 직관 팬을 위한 경기 전 3분 코스`,
      mate: `${currentContext.team.city} 응원석 직관메이트 모집`,
    },
  ][index];

  if (!content) return;

  openDashboardModal({
    kicker: "Content Queue",
    title: content.title,
    subtitle: "큐 항목을 클릭하면 실제 생성 콘텐츠 미리보기와 후속 실행 버튼이 표시됩니다.",
    body: `
      <div class="modal-detail-grid">
        <div class="modal-preview-card"><span>숏폼 제목</span><strong>${escapeHtml(content.title)}</strong></div>
        <div class="modal-preview-card"><span>썸네일 문구</span><strong>${escapeHtml(content.thumbnail)}</strong></div>
        <div class="modal-preview-card"><span>직관메이트 문안</span><strong>${escapeHtml(content.mate)}</strong></div>
      </div>
      <ul class="modal-list">
        <li><strong>카드뉴스 카피</strong> ${escapeHtml(content.card)}</li>
        <li><strong>선수 소개 문구</strong> 좋아하는 선수의 장면을 먼저 보여주고 쉬운 해설로 입덕 장벽을 낮춥니다.</li>
        <li><strong>입덕패스 문장</strong> ${escapeHtml(content.pass)}</li>
      </ul>
      ${modalActions(["콘텐츠 생성", "수정", "팬 앱에 노출", "스폰서 패키지로 저장"])}
    `,
  });
}

function showRevenueAction(index) {
  const item = dashboardRecommendations()[index];
  if (!item) return;
  const opportunity = revenueOpportunities()[index] || revenueOpportunities()[0];

  openDashboardModal({
    kicker: "Revenue Playbook",
    title: item.campaign,
    subtitle: `${item.scene}의 ${item.reaction} 반응을 실제 캠페인 실행으로 연결합니다.`,
    body: `
      <div class="modal-detail-grid">
        <div class="modal-detail-card"><span>추천 장면</span><strong>${escapeHtml(item.scene)}</strong></div>
        <div class="modal-detail-card"><span>팬 반응</span><strong>${escapeHtml(item.reaction)}</strong></div>
        <div class="modal-detail-card"><span>추천 액션</span><strong>${escapeHtml(item.action)}</strong></div>
      </div>
      <ul class="workflow-list">
        <li>추천 장면 선택</li>
        <li>${escapeHtml(item.action)} 캠페인 템플릿 생성</li>
        <li>구단 담당자 승인</li>
        <li>팬 앱 하이라이트 하단 노출</li>
        <li>클릭률, 예매 전환, 굿즈 CTA 반응 추적</li>
      </ul>
      <div class="modal-detail-grid">
        <div class="modal-detail-card"><span>대상 세그먼트</span><strong>${escapeHtml(opportunity.target)}</strong></div>
        <div class="modal-detail-card"><span>CTA 문구</span><strong>${escapeHtml(opportunity.copy)}</strong></div>
        <div class="modal-detail-card"><span>예상 매출 기여</span><strong>${escapeHtml(opportunity.revenue)}</strong></div>
      </div>
      <div class="modal-action-row">
        <button type="button" data-campaign-builder="${index}">캠페인 만들기</button>
        <button type="button" data-sponsor-builder="${index}">스폰서 패키지</button>
        <button type="button" data-funnel-stage="ticket-cta">ROI 보기</button>
      </div>
    `,
  });
}

function showFunnelDetail(stage) {
  const data = {
    "highlight-create": ["하이라이트 생성", "11K", "26%", "선수 미선택 이탈 18%", currentContext.playmakerName, "선택 선수 기반 생성", "예상 후속 CTA 1,840건", "선수 선택 기본값과 추천 조합을 먼저 제시"],
    "tactics-view": ["작전판AI 열람", "7.4K", "67%", "해설 난이도 전환 전 이탈 14%", currentContext.shooterName, "3점 작전판AI 해설", "입덕패스 열람 +1.2K", "초보 해설 첫 문장을 더 짧게 노출"],
    "mate-click": ["직관메이트 클릭", "3.2K", "43%", "좌석 정보 부족 이탈 12%", currentContext.shooterName, "같은 선수 관심 매칭", "동행 이벤트 참여 84팀", "좌석/응원 성향을 모집글 카드에 먼저 표시"],
    "ticket-cta": ["예매 CTA 클릭", "128", "4.0%", "예매 링크 전환 전 이탈 9%", currentContext.shooterName, "응원석 예매 CTA", "예상 예매 매출 384만원", "하이라이트 카드 하단 CTA 문구를 응원석 중심으로 변경"],
    "goods-cta": ["굿즈 CTA 클릭", "92", "2.9%", "상품 상세 전 이탈 11%", currentContext.rebounderName, "포토카드/굿즈 캠페인", "예상 굿즈 매출 276만원", "저장률 높은 골밑 장면과 한정 포토카드 문구를 연결"],
  }[stage];

  if (!data) return;

  openDashboardModal({
    kicker: "Funnel / ROI",
    title: data[0],
    subtitle: "단계별 전환, 이탈, 예상 매출 기여와 다음 개선 액션을 확인합니다.",
    body: `
      <div class="modal-detail-grid">
        <div class="modal-detail-card"><span>사용자 수</span><strong>${escapeHtml(data[1])}</strong></div>
        <div class="modal-detail-card"><span>전환율</span><strong>${escapeHtml(data[2])}</strong></div>
        <div class="modal-detail-card"><span>예상 매출 기여</span><strong>${escapeHtml(data[6])}</strong></div>
      </div>
      <ul class="modal-list">
        <li><strong>이탈률</strong> ${escapeHtml(data[3])}</li>
        <li><strong>관련 선수</strong> ${escapeHtml(data[4])}</li>
        <li><strong>관련 콘텐츠</strong> ${escapeHtml(data[5])}</li>
        <li><strong>추천 개선 액션</strong> ${escapeHtml(data[7])}</li>
      </ul>
      <div class="modal-action-row">
        <button type="button" data-campaign-builder="0">캠페인으로 전환</button>
        <button type="button" data-save-campaign-builder="0">ROI 리포트 저장</button>
      </div>
    `,
  });
}

function showDashboardMenu(menu) {
  const menuData = {
    campaign: [
      "Campaign Builder",
      "Revenue Playbook 추천을 팬 앱 캠페인 카드로 바꾸는 메뉴입니다.",
      ["추천 장면 불러오기", "CTA 문구 생성", "구단 담당자 승인", "팬 앱 노출 예약"],
    ],
    sponsor: [
      "Sponsor Package",
      "인기 장면과 팬 반응을 스폰서 제안서 형태로 묶습니다.",
      ["상위 하이라이트 선택", "조회/저장/공유 지표 첨부", "브랜드 노출 위치 추천", "PDF 제안서 저장"],
    ],
    voice: [
      "Fan Voice",
      "MVP 이후 붙일 팬 의견/투표 수집 및 AI 분류 확장 메뉴입니다.",
      ["짧은 의견함", "태그형 피드백", "팬 투표", "AI 감성/요구 분류"],
    ],
    ops: [
      "Matchday Ops",
      "직관메이트와 좌석 선호, 경기장 불만, 이벤트 반응을 경기일 운영에 씁니다.",
      ["좌석 선호 집계", "혼직관/초보 팬 니즈 확인", "현장 이벤트 반응 분석", "운영 개선 리포트 생성"],
    ],
  }[menu];

  if (!menuData) return;

  openDashboardModal({
    kicker: "Action Menu",
    title: menuData[0],
    subtitle: menuData[1],
    body: `
      <ul class="workflow-list">
        ${menuData[2].map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
      ${modalActions(["메뉴 열기", "샘플 리포트 생성"])}
    `,
  });
}

function renderTeamOptions(context) {
  if (!teamOptionList) return;

  teamOptionList.innerHTML = "";

  TEAM_ORDER.forEach((code) => {
    const team = TEAM_CONFIGS[code];
    if (!team) return;

    const isActive = team.code === context.team.code;
    const button = document.createElement("button");
    const mark = document.createElement("span");
    const copy = document.createElement("span");
    const title = document.createElement("strong");
    const meta = document.createElement("small");
    const rosterCount = rosterFor(team.code).length;
    const statsCount = teamStatsFor(team.code).length;

    button.className = "team-option";
    button.type = "button";
    button.dataset.teamCode = team.code;
    button.setAttribute("aria-pressed", String(isActive));
    button.classList.toggle("active", isActive);

    mark.className = "team-mark";
    mark.style.background = `linear-gradient(135deg, ${team.colors.primary} 0 58%, ${team.colors.accent} 58%)`;

    title.textContent = team.fullName;
    meta.textContent = isActive
      ? `현재 선택됨 · 등록 ${rosterCount}명 · 기록 ${statsCount}명`
      : `등록 ${rosterCount}명 · 기록 ${statsCount}명`;

    copy.append(title, meta);
    button.append(mark, copy);
    teamOptionList.append(button);
  });
}

function updateProfileSheet(context) {
  setText("#profile-team-name", context.team.fullName);
  setText(
    "#profile-summary",
    `현재 ${context.team.name} 기준으로 하이라이트, 입덕패스, 직관메이트 추천이 개인화됩니다.`,
  );
  setText(
    "#profile-data-note",
    `등록 선수 ${context.roster.length}명 · 기록 선수 ${context.stats.length}명`,
  );

  renderTeamOptions(context);
}

function renderTeam(teamCode = selectedTeamCode) {
  selectedTeamCode = teamCode;
  currentContext = buildTeamContext(selectedTeamCode);
  selectedClip = "assist";
  selectedPlayerCodes = defaultSelectedPlayerCodes(currentContext);
  activeClipFilter = "all";
  persistTeamCode(selectedTeamCode);

  applyTheme(currentContext);
  resetGeneratedClips();
  document.querySelectorAll(".mate-card.user-created").forEach((card) => card.remove());
  document.querySelector(".mate-compose")?.classList.remove("ready");
  setText("#mate-create-label", "모집하기");
  updateFanApp(currentContext);
  updatePassPanel(currentContext);
  updateMatePanel(currentContext);
  updateDashboard(currentContext);
  updateProfileSheet(currentContext);
  setSelectedClip(selectedClip);
  updateFollowCount();
}

function openProfile() {
  profileSheet.classList.add("open");
  profileSheet.setAttribute("aria-hidden", "false");
  profileButton.setAttribute("aria-expanded", "true");
}

function closeProfile() {
  profileSheet.classList.remove("open");
  profileSheet.setAttribute("aria-hidden", "true");
  profileButton.setAttribute("aria-expanded", "false");
}

function populateMateForm() {
  if (!matePlayerInput) return;

  const pickedPlayers = selectedPlayers();
  const players = pickedPlayers.length ? pickedPlayers : displayRosterPlayers(currentContext).slice(0, 6);

  matePlayerInput.innerHTML = "";
  players.forEach((player) => {
    const option = document.createElement("option");
    option.value = player.name;
    option.textContent = player.name;
    matePlayerInput.append(option);
  });

  if (mateDateInput) mateDateInput.value = "다음 홈경기";
  if (mateGameInput) mateGameInput.options[0].textContent = `${currentContext.team.opponent}전`;
  if (mateSeatInput) mateSeatInput.options[0].textContent = `${currentContext.team.city} 응원석`;
  if (mateNoteInput) {
    mateNoteInput.value = `${currentContext.shooterName} 하이라이트 보고 같이 경기 보실 분 찾아요. 처음 직관이어도 편하게 오세요.`;
  }
}

function openMateModal() {
  populateMateForm();
  mateCreateModal?.classList.add("open");
  mateCreateModal?.setAttribute("aria-hidden", "false");
}

function closeMateModal() {
  mateCreateModal?.classList.remove("open");
  mateCreateModal?.setAttribute("aria-hidden", "true");
}

function createMatePostCard(values) {
  const mateList = document.querySelector(".mate-list");
  if (!mateList) return;

  const card = document.createElement("article");
  card.className = "mate-card user-created";

  const copy = document.createElement("div");
  const titleEl = document.createElement("strong");
  const metaEl = document.createElement("small");
  const noteEl = document.createElement("p");
  const tags = document.createElement("div");

  titleEl.textContent = `${currentContext.team.shortName} ${values.player} 하이라이트 같이 볼 메이트`;
  metaEl.textContent = `${values.date} · ${values.game} · ${values.seat} · ${values.style}`;
  noteEl.className = "safety-note";
  noteEl.textContent = values.note;
  tags.className = "mate-tags";

  [
    values.player,
    values.style,
    "같은 선수 하이라이트 본 팬에게 추천",
    "신고·차단 안내 포함",
  ].forEach((text) => {
    const tag = document.createElement("span");
    tag.className = "mate-tag";
    tag.textContent = text;
    tags.append(tag);
  });

  copy.append(titleEl, metaEl, noteEl);
  card.append(copy, tags);

  mateList.prepend(card);
  updateMateCount();
}

function submitMatePost(event) {
  event.preventDefault();

  createMatePostCard({
    date: mateDateInput?.value || "다음 홈경기",
    game: mateGameInput?.value || `${currentContext.team.opponent}전`,
    seat: mateSeatInput?.value || `${currentContext.team.city} 응원석`,
    style: mateStyleInput?.value || "초보 환영",
    player: matePlayerInput?.value || currentContext.shooterName,
    note: mateNoteInput?.value || "같이 직관가실 분 구해요!",
  });

  document.querySelector(".mate-compose")?.classList.add("ready");
  closeMateModal();
  setFanPanel("mate");
  showToast("직관메이트 모집글 초안이 생성됐습니다.");
}

function createGeneratedClip(selected) {
  const names = selected.map((player) => player.name);
  const primary = names[0] || currentContext.shooterName;
  const secondary = names[1] || currentContext.playmakerName;
  const tertiary = names[2] || currentContext.rebounderName;
  const title =
    names.length === 1
      ? `${primary} AI 맞춤 하이라이트`
      : `${primary} · ${secondary} 중심 AI 하이라이트`;
  const meta =
    names.length > 2
      ? `${primary} · ${secondary} · ${tertiary} · AI 생성`
      : `${names.join(" · ")} · AI 생성`;

  return {
    title,
    meta,
    easy: `선택한 ${names.join(", ")} 장면을 AI가 골라 짧은 클립으로 묶었어요. 득점, 패스, 리바운드처럼 입덕 포인트가 분명한 장면부터 앞에 배치했습니다.`,
    pro: `선택 선수들의 주요 이벤트를 기준으로 포제션을 재정렬했습니다. 볼 핸들러 관여, 슈팅 결과, 세컨드 찬스, 수비 전환 장면을 묶어 ${currentContext.team.shortName} 관전 포인트가 드러나도록 편집한 구성입니다.`,
    reason: `${currentContext.team.name} 팬이 직접 고른 선수 조합이라 저장/공유 가능성이 높은 개인화 클립입니다.`,
    next: `이 클립을 직관메이트 모집글에 붙이면 ${currentContext.team.venue}에서 같이 볼 포인트가 명확해집니다.`,
    ctaTitle: "AI 생성 클립으로 메이트 찾기",
    ctaCopy: `${names.slice(0, 3).join(" · ")} 장면을 좋아하는 팬에게 같은 경기 모집글을 추천합니다.`,
    progress: "74%",
    playerNames: names,
  };
}

function createGeneratedCard(clipId, clip) {
  const card = document.createElement("button");
  const thumb = document.createElement("span");
  const time = document.createElement("span");
  const dotA = document.createElement("span");
  const dotB = document.createElement("span");
  const ball = document.createElement("span");
  const copy = document.createElement("span");
  const title = document.createElement("strong");
  const meta = document.createElement("small");
  const score = document.createElement("span");

  card.className = "highlight-card generated";
  card.type = "button";
  card.dataset.clip = clipId;
  card.dataset.players = clip.playerNames?.join(",") || "";

  thumb.className = "clip-thumb court-visual generated-thumb";
  time.className = "clip-time";
  time.textContent = "0:45";
  dotA.className = "player-dot dot-a";
  dotB.className = "player-dot dot-d";
  ball.className = "ball-dot";
  thumb.append(time, dotA, dotB, ball);

  copy.className = "clip-copy";
  title.textContent = clip.title;
  meta.textContent = clip.meta;
  copy.append(title, meta);

  score.className = "clip-score";
  score.textContent = "AI";

  card.append(thumb, copy, score);

  return card;
}

function generateHighlightFromSelection() {
  const pickedPlayers = selectedPlayers();
  if (!pickedPlayers.length || isGeneratingHighlight) return;

  isGeneratingHighlight = true;
  generateButton.textContent = "AI 편집 중...";
  updateFollowCount();

  window.setTimeout(() => {
    const clipId = `generated-${generatedClipSequence}`;
    const clip = createGeneratedClip(pickedPlayers);
    const card = createGeneratedCard(clipId, clip);

    generatedClipSequence += 1;
    generatedClipCount += 1;
    currentContext.clips[clipId] = clip;

    clipList.prepend(card);
    updateClipCount();
    setFanPanel("highlight");
    setSelectedClip(clipId);
    applyClipFilter();

    isGeneratingHighlight = false;
    generateButton.textContent = "하이라이트 생성";
    updateFollowCount();
    showToast("AI 하이라이트가 방금 생성된 클립에 추가됐습니다.");
  }, 850);
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.view));
});

clipList.addEventListener("click", (event) => {
  const card = event.target.closest(".highlight-card");
  if (!card) return;

  setSelectedClip(card.dataset.clip);
});

levelButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedLevel = button.dataset.level;

    levelButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    updateAnalysis();
  });
});

followChipRow.addEventListener("click", (event) => {
  const chip = event.target.closest(".follow-chip");
  if (!chip) return;

  const code = chip.dataset.playerCode;
  if (!code) return;

  if (selectedPlayerCodes.has(code)) {
    selectedPlayerCodes.delete(code);
  } else {
    selectedPlayerCodes.add(code);
  }

  chip.classList.toggle("active", selectedPlayerCodes.has(code));
  updateFollowCount();
  applyClipFilter();
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => setFanPanel(button.dataset.panel));
});

clipFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeClipFilter = button.dataset.clipFilter;
    applyClipFilter();
  });
});

profileButton.addEventListener("click", openProfile);

profileCloseButtons.forEach((button) => {
  button.addEventListener("click", closeProfile);
});

profileSheet?.addEventListener("click", (event) => {
  const teamButton = event.target.closest(".team-option");
  if (!teamButton) return;

  renderTeam(teamButton.dataset.teamCode);
});

mateCreateButtons.forEach((button) => {
  button.addEventListener("click", openMateModal);
});

mateCloseButtons.forEach((button) => {
  button.addEventListener("click", closeMateModal);
});

mateCreateForm?.addEventListener("submit", submitMatePost);

dashboardCloseButtons.forEach((button) => {
  button.addEventListener("click", closeDashboardModal);
});

document.querySelector("#club-view")?.addEventListener("click", (event) => {
  const sectionButton = event.target.closest("[data-dashboard-section]");
  if (sectionButton) {
    setDashboardSection(sectionButton.dataset.dashboardSection);
    return;
  }

  const campaignBuilder = event.target.closest("[data-campaign-builder]");
  if (campaignBuilder) {
    showCampaignBuilder(Number(campaignBuilder.dataset.campaignBuilder || 0));
    return;
  }

  const sponsorBuilder = event.target.closest("[data-sponsor-builder]");
  if (sponsorBuilder) {
    showSponsorBuilder(Number(sponsorBuilder.dataset.sponsorBuilder || 0));
    return;
  }

  const fanVoiceCategory = event.target.closest("[data-fan-voice-category]");
  if (fanVoiceCategory) {
    showFanVoiceDetail(fanVoiceCategory.dataset.fanVoiceCategory);
    return;
  }

  const boardAction = event.target.closest("[data-dashboard-board-action]");
  if (boardAction) {
    openDashboardBoardAction(boardAction);
    return;
  }

  const leagueTeamCard = event.target.closest("[data-league-team-code]");
  if (leagueTeamCard) {
    renderTeam(leagueTeamCard.dataset.leagueTeamCode);
    showToast(`${currentContext.team.fullName} 대시보드로 전환했습니다.`);
    return;
  }

  const assetItem = event.target.closest("[data-asset-id]");
  if (assetItem) {
    showAssetDetail(assetItem.dataset.assetId);
    return;
  }

  const opportunityCard = event.target.closest("[data-revenue-opportunity]");
  if (opportunityCard) {
    showRevenueOpportunityDetail(Number(opportunityCard.dataset.revenueOpportunity));
    return;
  }

  const metricCard = event.target.closest("[data-metric-detail]");
  if (metricCard) {
    showMetricDetail(metricCard.dataset.metricDetail);
    return;
  }

  const playerRow = event.target.closest("[data-player-index]");
  if (playerRow) {
    showPlayerDetail(Number(playerRow.dataset.playerIndex));
    return;
  }

  const funnelStep = event.target.closest("[data-funnel-stage]");
  if (funnelStep) {
    showFunnelDetail(funnelStep.dataset.funnelStage);
    return;
  }

  const contentItem = event.target.closest("[data-content-index]");
  if (contentItem) {
    showContentPreview(Number(contentItem.dataset.contentIndex));
    return;
  }

  const revenueRow = event.target.closest("[data-revenue-index]");
  if (revenueRow) {
    showRevenueAction(Number(revenueRow.dataset.revenueIndex));
    return;
  }

  const menuButton = event.target.closest("[data-dashboard-menu]");
  if (menuButton) {
    showDashboardMenu(menuButton.dataset.dashboardMenu);
    return;
  }
});

dashboardModalBody?.addEventListener("click", (event) => {
  const closeButton = event.target.closest("[data-close-dashboard-modal]");
  if (closeButton) {
    closeDashboardModal();
    return;
  }

  const assetOpen = event.target.closest("[data-asset-open]");
  if (assetOpen) {
    showAssetDetail(assetOpen.dataset.assetOpen);
    return;
  }

  const assetDownload = event.target.closest("[data-asset-download]");
  if (assetDownload) {
    downloadAsset(assetDownload.dataset.assetDownload);
    return;
  }

  const campaignBuilder = event.target.closest("[data-campaign-builder]");
  if (campaignBuilder) {
    showCampaignBuilder(Number(campaignBuilder.dataset.campaignBuilder || 0));
    return;
  }

  const sponsorBuilder = event.target.closest("[data-sponsor-builder]");
  if (sponsorBuilder) {
    showSponsorBuilder(Number(sponsorBuilder.dataset.sponsorBuilder || 0));
    return;
  }

  const fanVoiceCategory = event.target.closest("[data-fan-voice-category]");
  if (fanVoiceCategory) {
    showFanVoiceDetail(fanVoiceCategory.dataset.fanVoiceCategory);
    return;
  }

  const funnelStage = event.target.closest("[data-funnel-stage]");
  if (funnelStage) {
    showFunnelDetail(funnelStage.dataset.funnelStage);
    return;
  }

  const saveCampaign = event.target.closest("[data-save-campaign-builder]");
  if (saveCampaign) {
    appendModalOutput(createCampaignAsset(Number(saveCampaign.dataset.saveCampaignBuilder || 0)));
    return;
  }

  const saveSponsor = event.target.closest("[data-save-sponsor-builder]");
  if (saveSponsor) {
    appendModalOutput(createSponsorAsset(Number(saveSponsor.dataset.saveSponsorBuilder || 0)));
    return;
  }

  const saveVoice = event.target.closest("[data-save-fan-voice-report]");
  if (saveVoice) {
    appendModalOutput(createFanVoiceAsset(saveVoice.dataset.saveFanVoiceReport));
    return;
  }

  const action = event.target.closest("[data-modal-action]");
  if (!action) return;

  const asset = createGeneratedAsset(action.dataset.modalAction);
  appendModalOutput(asset);
});

generateButton.addEventListener("click", generateHighlightFromSelection);

document.addEventListener("keydown", (event) => {
  if ((event.key === "Enter" || event.key === " ") && event.target.matches("[role='button']")) {
    event.preventDefault();
    event.target.click();
  }

  if (event.key !== "Escape") return;

  if (profileSheet.classList.contains("open")) {
    closeProfile();
  }

  if (mateCreateModal?.classList.contains("open")) {
    closeMateModal();
  }

  if (dashboardModal?.classList.contains("open")) {
    closeDashboardModal();
  }
});

setFanPanel(activePanel);
renderTeam(selectedTeamCode);
