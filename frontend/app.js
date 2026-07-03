const kblData = window.COURTLENS_KBL_DATA || {};
const seasonName = kblData.currentSeason?.seasonName || "2025-2026";
const PLAYER_POSITIONS = new Set(["GD", "FD", "C"]);

const TEAM_CONFIGS = {
  KR: {
    code: "KR",
    shortName: "대한민국",
    name: "대한민국",
    fullName: "대한민국 남자농구 대표팀",
    venue: "FIBA Asian Qualifiers",
    city: "대한민국",
    opponent: "Chinese Taipei",
    colors: {
      primary: "#2c439b",
      primaryDark: "#48576c",
      soft: "#eef2ff",
      accent: "#48576c",
      paper: "#f8fbff",
      court: "#c77435",
      courtDark: "#87401e",
    },
    fallbackStats: [
      {
        player: { name: "이우석", team: "대한민국", pcode: "kor-11", teamCode: "KR", position: "GD", backNumber: "11" },
        records: { score: 6, ast: 1, rb: 1, threep: 0, stl: 0 },
        gameCount: 1,
      },
      {
        player: { name: "여준석", team: "대한민국", pcode: "kor-22", teamCode: "KR", position: "FD", backNumber: "22" },
        records: { score: 4, ast: 0, rb: 2, threep: 0, stl: 0 },
        gameCount: 1,
      },
      {
        player: { name: "장재석", team: "대한민국", pcode: "kor-31", teamCode: "KR", position: "C", backNumber: "31" },
        records: { score: 4, ast: 0, rb: 2, threep: 0, stl: 0 },
        gameCount: 1,
      },
      {
        player: { name: "최준용", team: "대한민국", pcode: "kor-2", teamCode: "KR", position: "FD", backNumber: "2" },
        records: { score: 3, ast: 1, rb: 0, threep: 1, stl: 0 },
        gameCount: 1,
      },
      {
        player: { name: "이정현", team: "대한민국", pcode: "kor-6", teamCode: "KR", position: "GD", backNumber: "6" },
        records: { score: 3, ast: 1, rb: 0, threep: 1, stl: 0 },
        gameCount: 1,
      },
      {
        player: { name: "변준형", team: "대한민국", pcode: "kor-5", teamCode: "KR", position: "GD", backNumber: "5" },
        records: { score: 0, ast: 1, rb: 0, threep: 0, stl: 0 },
        gameCount: 1,
      },
      {
        player: { name: "문정현", team: "대한민국", pcode: "kor-12", teamCode: "KR", position: "FD", backNumber: "12" },
        records: { score: 0, ast: 0, rb: 1, threep: 0, stl: 0 },
        gameCount: 1,
      },
      {
        player: { name: "이승현", team: "대한민국", pcode: "kor-33", teamCode: "KR", position: "FD", backNumber: "33" },
        records: { score: 0, ast: 0, rb: 0, threep: 0, stl: 0 },
        gameCount: 1,
      },
    ],
    mateTags: ["대표팀 응원", "FIBA 예선", "초보 팬 환영"],
  },
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

const TEAM_ORDER = ["KR", "50", "06", "64", "10", "35", "16", "55", "66", "60", "70"];
const TEAM_STORAGE_KEY = "courtlens:selectedTeam:v2";

const FEATURED_KBL_MATCH = {
  id: "S47G01N258",
  source: {
    page: "https://www.kbl.or.kr/match/record/S47G01N258/20260403",
    game: "https://api.kbl.or.kr/match/S47G01N258",
    playerStats: "https://api.kbl.or.kr/match/S47G01N258/player-stat",
    teamRecord: "https://api.kbl.or.kr/match/S47G01N258/team-record",
    preview: "https://api.kbl.or.kr/match/getPreviewData/20260403/S47G01N258",
    highlight: "https://api.kbl.or.kr/match/highlight/S47G01N258/20260403",
  },
  date: "2026-04-03",
  dateRaw: "20260403",
  dateLabel: "2026.04.03 (금)",
  seasonName: "2025-2026",
  category: "정규시즌",
  time: "19:00",
  endTime: "20:52",
  venue: "수원 KT 소닉붐 아레나",
  tv: "tvN SPORTS",
  crowd: 1963,
  isEnded: true,
  home: {
    code: "06",
    shortName: "KT",
    name: "수원 KT",
    fullName: "수원 KT 소닉붐",
    score: 60,
    quarters: [7, 20, 12, 21],
  },
  away: {
    code: "50",
    shortName: "LG",
    name: "창원 LG",
    fullName: "창원 LG 세이커스",
    score: 87,
    quarters: [28, 21, 21, 17],
  },
  preGame: {
    title: "LG 원정 직관메이트 모집",
    flow: ["팀 선택", "경기 선택", "직관메이트 창", "직관메이트 찾기/모집"],
    summary: [
      "수원 KT 홈, 창원 LG 원정 경기로 2026년 4월 3일 19시에 열린 정규시즌 매치업입니다.",
      "사전 프리뷰 기준 창원 LG는 시즌 35승 16패, 수원 KT는 25승 26패 흐름으로 맞붙습니다.",
      "시즌 상대전적은 LG 우위라 원정 응원석과 처음 직관 팬을 묶기 좋은 경기입니다.",
    ],
    mate: {
      title: "LG 원정 응원 같이 가실 분",
      copy: "수원 KT 소닉붐 아레나 원정석에서 LG 하이라이트와 응원 포인트를 같이 볼 메이트를 추천합니다.",
      gameChoice: "수원 KT vs 창원 LG",
      seatChoice: "원정 응원석",
      styleChoice: "초보 환영",
      tags: ["원정 응원석", "처음 직관 환영", "경기 전 30분 합류"],
    },
  },
  postGame: {
    title: "창원 LG 87-60 승리",
    flow: ["팀 선택", "경기 선택", "경기 summary/오늘 잘한 선수 확인", "하이라이트 메이커에서 출전 선수만 선택", "AI 하이라이트 생성"],
    summary: [
      "LG가 1쿼터를 28-7로 크게 앞서며 경기 흐름을 먼저 잡았습니다.",
      "LG는 3점 12개와 어시스트 25개로 공격을 분산했고, 팀 리바운드도 44-32로 앞섰습니다.",
      "마레이의 21점 15리바운드 8어시스트, 유기상의 3점 4개, 양준석의 6어시스트가 경기 후 하이라이트의 핵심 재료입니다.",
    ],
    fanComments: [
      "마레이가 패스까지 해주니까 경기 이해가 쉬웠어요.",
      "유기상 3점 위치만 모아보니 다음엔 현장에서 보고 싶어요.",
      "처음 본 친구한테도 1쿼터 흐름 설명하기 좋았습니다.",
    ],
    starPlayers: [
      {
        pcode: "291432",
        name: "아셈 마레이",
        teamCode: "50",
        role: "오늘의 스타 플레이어",
        line: "21PTS · 15REB · 8AST · 2BLK",
        reason: "득점, 리바운드, 패스가 모두 경기 흐름을 만든 중심축",
      },
      {
        pcode: "291640",
        name: "유기상",
        teamCode: "50",
        role: "외곽 하이라이트",
        line: "12PTS · 3P 4/8 · 3BLK",
        reason: "처음 보는 팬도 바로 이해할 수 있는 3점 장면이 많음",
      },
      {
        pcode: "291576",
        name: "양준석",
        teamCode: "50",
        role: "연결 플레이",
        line: "10PTS · 6AST · 3P 2/2",
        reason: "하이라이트를 작전판AI 해설로 연결하기 좋은 패스 장면 보유",
      },
    ],
  },
  playerStats: {
    "50": [
      ["290284", "허일영", "FD", "11", 2, 3, 0, 0, 0, 0, "09:35", -8],
      ["290478", "장민국", "FD", "3", 3, 1, 0, 1, 0, 0, "03:16", 7],
      ["290648", "한상혁", "GD", "6", 7, 2, 4, 1, 0, 0, "13:24", 13],
      ["290996", "정인덕", "FD", "16", 7, 5, 1, 2, 0, 1, "27:18", 36],
      ["291091", "양홍석", "FD", "4", 0, 1, 0, 0, 0, 0, "10:33", -1],
      ["291363", "윤원상", "GD", "10", 2, 3, 1, 0, 0, 0, "09:46", 1],
      ["291432", "아셈 마레이", "C", "50", 21, 15, 8, 0, 1, 2, "23:02", 32],
      ["291576", "양준석", "GD", "5", 10, 1, 6, 2, 0, 0, "16:50", 13],
      ["291640", "유기상", "GD", "1", 12, 3, 2, 4, 2, 3, "30:52", 29],
      ["291699", "칼 타마요", "FD", "33", 11, 4, 2, 0, 0, 1, "29:18", 20],
      ["291771", "최형찬", "GD", "7", 0, 1, 1, 0, 0, 0, "09:08", -2],
      ["291879", "카이린 갤러웨이", "FD", "14", 12, 5, 0, 2, 2, 0, "16:58", -5],
    ],
    "06": [
      ["290407", "김선형", "GD", "5", 9, 2, 2, 1, 2, 0, "28:01", -15],
      ["290454", "정창영", "GD", "7", 4, 2, 0, 0, 1, 0, "15:37", -4],
      ["290583", "한희원", "FD", "1", 2, 2, 2, 0, 0, 1, "17:32", -19],
      ["290661", "문성곤", "FD", "10", 0, 0, 0, 0, 0, 0, "05:34", -8],
      ["291226", "박준영", "FD", "23", 6, 3, 0, 0, 1, 0, "25:40", -11],
      ["291352", "박지원", "GD", "9", 0, 0, 0, 0, 0, 0, "03:02", 999],
      ["291586", "이두원", "C", "21", 2, 0, 0, 0, 0, 0, "08:46", -21],
      ["291667", "문정현", "FD", "12", 6, 4, 0, 0, 2, 0, "31:52", -16],
      ["291791", "데릭 윌리엄스", "FD", "24", 8, 4, 2, 0, 0, 0, "17:12", -14],
      ["291842", "강성욱", "GD", "77", 13, 2, 1, 1, 3, 0, "23:56", -14],
      ["291878", "조나단 윌리엄스", "C", "13", 10, 13, 3, 0, 0, 0, "22:48", -13],
    ],
  },
  inactivePlayers: {
    "50": [
      { pcode: "290738", name: "두경민", position: "GD", backNumber: "30", reason: "해당 경기 미출전" },
    ],
    "06": [
      { pcode: "291351", name: "이윤기", position: "FD", backNumber: "3", reason: "출전 시간 0분" },
      { pcode: "291492", name: "하윤기", position: "C", backNumber: "0", reason: "해당 경기 미출전" },
    ],
  },
  dashboardSignals: [
    "유기상 3점 장면을 응원석 예매 CTA로 연결",
    "마레이 골밑/패스 장면을 포토카드와 작전판AI 스폰서 패키지로 연결",
    "원정 직관메이트 니즈를 다음 홈·원정 동행 이벤트로 연결",
  ],
};

const KBL_SCHEDULE_SOURCE = {
  page: "https://www.kbl.or.kr/match/schedule",
  api: "https://api.kbl.or.kr/match/list",
  seasonName: "2025-2026",
  fetchedAt: "2026-07-03",
};

const FEATURED_FIBA_MATCH = {
  id: "FIBA-2027-QUAL-KOR-TPE",
  source: {
    page: "https://www.fiba.basketball/en/events/fiba-basketball-world-cup-2027-asian-qualifiers/games/126924-KOR-TPE#playByPlay",
    schedule: "https://www.fiba.basketball/en/events/fiba-basketball-world-cup-2027-asian-qualifiers",
    record: "https://www.fiba.basketball/en/events/fiba-basketball-world-cup-2027-asian-qualifiers/games/126924-KOR-TPE",
  },
  date: "2025-11-28",
  dateRaw: "20251128",
  dateLabel: "2025.11.28 (금)",
  seasonName: "FIBA Basketball World Cup 2027 Asian Qualifiers",
  category: "Asian Qualifiers",
  time: "19:00",
  venue: "FIBA Asian Qualifiers",
  tv: "FIBA",
  crowd: null,
  isEnded: true,
  home: {
    code: "KR",
    shortName: "KOR",
    name: "대한민국",
    fullName: "대한민국 남자농구 대표팀",
    score: 65,
    quarters: [15, 26, 24],
  },
  away: {
    code: "TPE",
    shortName: "TPE",
    name: "Chinese Taipei",
    fullName: "Chinese Taipei",
    score: 49,
    quarters: [13, 17, 19],
  },
  preGame: {
    title: "대한민국 vs Chinese Taipei 대표팀 응원",
    flow: ["My Team 선택", "FIBA 경기 선택", "Play-by-Play 확인", "하이라이트 클립 재생"],
    summary: [
      "FIBA Basketball World Cup 2027 Asian Qualifiers KOR vs TPE 경기입니다.",
      "CourtLens 팬 웹서비스 틀에 대한민국 대표팀을 11번째 팀처럼 추가해 KBL 구단과 같은 방식으로 탐색합니다.",
      "Play-by-Play timeline과 잘린 클립을 연결해 대표팀 장면을 possession 단위로 확인합니다.",
    ],
    mate: {
      title: "대한민국 대표팀 같이 응원할 팬 찾기",
      copy: "대만전 play-by-play 하이라이트를 보며 대표팀 주요 장면을 같이 이야기할 팬을 추천합니다.",
      gameChoice: "대한민국 vs Chinese Taipei",
      seatChoice: "대표팀 응원석",
      styleChoice: "FIBA 입덕 환영",
      tags: ["대표팀 응원", "대만전", "Play-by-Play 클립"],
    },
  },
  postGame: {
    title: "대한민국 vs Chinese Taipei",
    flow: ["My Team 선택", "경기 summary 확인", "Play-by-Play timeline 선택", "잘린 클립으로 핵심 장면 확인"],
    summary: [
      "1Q~3Q play-by-play를 score, defensive rebound, turnover, foul cut point로 나눠 possession 단위 클립으로 연결했습니다.",
      "대한민국 대표팀 장면은 KBL 구단 카드와 같은 UI 틀에서 팀 컬러만 대표팀 톤으로 바꿔 보여줍니다.",
      "여준석, 장재석, 이우석, 최준용, 이정현의 득점·리바운드·파울 유도 장면이 대표팀 입덕패스의 핵심 재료입니다.",
    ],
    fanComments: [
      "대표팀 경기도 구단 경기처럼 타임라인으로 보니까 흐름이 훨씬 잘 보여요.",
      "대만전 주요 possession만 잘라 보니 다시 보기 부담이 줄었습니다.",
      "처음 보는 팬도 리바운드와 득점 연결을 따라가기 쉬워요.",
    ],
    starPlayers: [
      {
        pcode: "kor-22",
        name: "여준석",
        teamCode: "KR",
        role: "대표팀 핵심 포워드",
        line: "득점 · 수비 리바운드 · 페인트존 마무리",
        reason: "1Q~3Q possession 클립에서 수비 리바운드와 득점 연결 장면이 반복적으로 등장",
      },
      {
        pcode: "kor-31",
        name: "장재석",
        teamCode: "KR",
        role: "골밑 연결",
        line: "리바운드 · 자유투 · 플로터",
        reason: "파울 유도와 자유투, 골밑 마무리를 대표팀 입덕 포인트로 설명하기 좋음",
      },
      {
        pcode: "kor-11",
        name: "이우석",
        teamCode: "KR",
        role: "후반부 공격 옵션",
        line: "자유투 · 수비 리바운드",
        reason: "대표팀 공격권 전환과 득점 possession을 연결하는 장면이 포함됨",
      },
    ],
  },
  playerStats: {
    KR: [
      ["kor-22", "여준석", "FD", "22", 4, 2, 0, 0, 0, 0, "10:00", 0],
      ["kor-31", "장재석", "C", "31", 4, 2, 0, 0, 0, 0, "10:00", 0],
      ["kor-11", "이우석", "GD", "11", 6, 1, 1, 0, 0, 0, "10:00", 0],
      ["kor-2", "최준용", "FD", "2", 3, 0, 1, 1, 0, 0, "10:00", 0],
      ["kor-6", "이정현", "GD", "6", 3, 0, 1, 1, 0, 0, "10:00", 0],
      ["kor-5", "변준형", "GD", "5", 0, 0, 1, 0, 0, 0, "10:00", 0],
      ["kor-12", "문정현", "FD", "12", 0, 1, 0, 0, 0, 0, "10:00", 0],
      ["kor-33", "이승현", "FD", "33", 0, 0, 0, 0, 0, 0, "10:00", 0],
    ],
  },
  inactivePlayers: {},
  dashboardSignals: [
    "대표팀 play-by-play 클립을 FIBA 입덕패스 소재로 연결",
    "KOR-TPE possession 단위 하이라이트를 대표팀 응원 콘텐츠로 재활용",
    "국가대표 경기 관심을 다음 FIBA 경기 알림과 직관/시청 메이트로 연결",
  ],
};

const KBL_SEASON_GAMES = [
  FEATURED_FIBA_MATCH,
  {
    "id": "S47G01N1",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-03",
    "dateRaw": "20251003",
    "dateLabel": "2025.10.03 (금)",
    "time": "14:00",
    "venue": "창원체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 81
    },
    "away": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 89
    }
  },
  {
    "id": "S47G01N2",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-03",
    "dateRaw": "20251003",
    "dateLabel": "2025.10.03 (금)",
    "time": "14:00",
    "venue": "잠실실내체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 82
    },
    "away": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 89
    }
  },
  {
    "id": "S47G01N3",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-03",
    "dateRaw": "20251003",
    "dateLabel": "2025.10.03 (금)",
    "time": "16:30",
    "venue": "울산동천체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 68
    },
    "away": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 71
    }
  },
  {
    "id": "S47G01N4",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-04",
    "dateRaw": "20251004",
    "dateLabel": "2025.10.04 (토)",
    "time": "14:00",
    "venue": "수원 KT 소닉붐 아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 85
    },
    "away": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 67
    }
  },
  {
    "id": "S47G01N5",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-04",
    "dateRaw": "20251004",
    "dateLabel": "2025.10.04 (토)",
    "time": "14:00",
    "venue": "대구체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 76
    },
    "away": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 98
    }
  },
  {
    "id": "S47G01N6",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-04",
    "dateRaw": "20251004",
    "dateLabel": "2025.10.04 (토)",
    "time": "16:30",
    "venue": "안양 정관장 아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 69
    },
    "away": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 50
    }
  },
  {
    "id": "S47G01N7",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-05",
    "dateRaw": "20251005",
    "dateLabel": "2025.10.05 (일)",
    "time": "14:00",
    "venue": "잠실학생체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 104
    },
    "away": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 64
    }
  },
  {
    "id": "S47G01N8",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-05",
    "dateRaw": "20251005",
    "dateLabel": "2025.10.05 (일)",
    "time": "14:00",
    "venue": "원주DB프로미아레나",
    "tv": "",
    "isEnded": true,
    "home": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 79
    },
    "away": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 82
    }
  },
  {
    "id": "S47G01N9",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-05",
    "dateRaw": "20251005",
    "dateLabel": "2025.10.05 (일)",
    "time": "16:30",
    "venue": "고양소노아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 72
    },
    "away": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 80
    }
  },
  {
    "id": "S47G01N10",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-06",
    "dateRaw": "20251006",
    "dateLabel": "2025.10.06 (월)",
    "time": "14:00",
    "venue": "안양 정관장 아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 83
    },
    "away": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 66
    }
  },
  {
    "id": "S47G01N11",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-07",
    "dateRaw": "20251007",
    "dateLabel": "2025.10.07 (화)",
    "time": "14:00",
    "venue": "수원 KT 소닉붐 아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 74
    },
    "away": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 73
    }
  },
  {
    "id": "S47G01N12",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-08",
    "dateRaw": "20251008",
    "dateLabel": "2025.10.08 (수)",
    "time": "14:00",
    "venue": "원주DB프로미아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 75
    },
    "away": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 69
    }
  },
  {
    "id": "S47G01N13",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-08",
    "dateRaw": "20251008",
    "dateLabel": "2025.10.08 (수)",
    "time": "16:30",
    "venue": "고양소노아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 82
    },
    "away": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 78
    }
  },
  {
    "id": "S47G01N14",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-09",
    "dateRaw": "20251009",
    "dateLabel": "2025.10.09 (목)",
    "time": "14:00",
    "venue": "수원 KT 소닉붐 아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 74
    },
    "away": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 66
    }
  },
  {
    "id": "S47G01N15",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-10",
    "dateRaw": "20251010",
    "dateLabel": "2025.10.10 (금)",
    "time": "19:00",
    "venue": "고양소노아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 74
    },
    "away": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 80
    }
  },
  {
    "id": "S47G01N16",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-11",
    "dateRaw": "20251011",
    "dateLabel": "2025.10.11 (토)",
    "time": "14:00",
    "venue": "울산동천체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 68
    },
    "away": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 86
    }
  },
  {
    "id": "S47G01N17",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-11",
    "dateRaw": "20251011",
    "dateLabel": "2025.10.11 (토)",
    "time": "14:00",
    "venue": "대구체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 70
    },
    "away": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 80
    }
  },
  {
    "id": "S47G01N18",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-11",
    "dateRaw": "20251011",
    "dateLabel": "2025.10.11 (토)",
    "time": "16:30",
    "venue": "안양 정관장 아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 75
    },
    "away": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 66
    }
  },
  {
    "id": "S47G01N19",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-12",
    "dateRaw": "20251012",
    "dateLabel": "2025.10.12 (일)",
    "time": "14:00",
    "venue": "창원체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 69
    },
    "away": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 53
    }
  },
  {
    "id": "S47G01N20",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-12",
    "dateRaw": "20251012",
    "dateLabel": "2025.10.12 (일)",
    "time": "14:00",
    "venue": "대구체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 80
    },
    "away": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 86
    }
  },
  {
    "id": "S47G01N21",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-12",
    "dateRaw": "20251012",
    "dateLabel": "2025.10.12 (일)",
    "time": "16:30",
    "venue": "안양 정관장 아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 80
    },
    "away": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 83
    }
  },
  {
    "id": "S47G01N22",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-13",
    "dateRaw": "20251013",
    "dateLabel": "2025.10.13 (월)",
    "time": "19:00",
    "venue": "잠실학생체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 67
    },
    "away": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 75
    }
  },
  {
    "id": "S47G01N23",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-14",
    "dateRaw": "20251014",
    "dateLabel": "2025.10.14 (화)",
    "time": "19:00",
    "venue": "울산동천체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 82
    },
    "away": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 77
    }
  },
  {
    "id": "S47G01N24",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-15",
    "dateRaw": "20251015",
    "dateLabel": "2025.10.15 (수)",
    "time": "19:00",
    "venue": "창원체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 62
    },
    "away": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 70
    }
  },
  {
    "id": "S47G01N25",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-16",
    "dateRaw": "20251016",
    "dateLabel": "2025.10.16 (목)",
    "time": "19:00",
    "venue": "원주DB프로미아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 84
    },
    "away": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 86
    }
  },
  {
    "id": "S47G01N26",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-17",
    "dateRaw": "20251017",
    "dateLabel": "2025.10.17 (금)",
    "time": "19:00",
    "venue": "잠실학생체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 75
    },
    "away": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 78
    }
  },
  {
    "id": "S47G01N27",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-18",
    "dateRaw": "20251018",
    "dateLabel": "2025.10.18 (토)",
    "time": "14:00",
    "venue": "원주DB프로미아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 83
    },
    "away": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 76
    }
  },
  {
    "id": "S47G01N28",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-18",
    "dateRaw": "20251018",
    "dateLabel": "2025.10.18 (토)",
    "time": "16:30",
    "venue": "수원 KT 소닉붐 아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 68
    },
    "away": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 65
    }
  },
  {
    "id": "S47G01N29",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-18",
    "dateRaw": "20251018",
    "dateLabel": "2025.10.18 (토)",
    "time": "16:30",
    "venue": "창원체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 75
    },
    "away": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 64
    }
  },
  {
    "id": "S47G01N30",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-19",
    "dateRaw": "20251019",
    "dateLabel": "2025.10.19 (일)",
    "time": "14:00",
    "venue": "안양 정관장 아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 79
    },
    "away": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 66
    }
  },
  {
    "id": "S47G01N31",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-19",
    "dateRaw": "20251019",
    "dateLabel": "2025.10.19 (일)",
    "time": "14:00",
    "venue": "고양소노아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 58
    },
    "away": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 64
    }
  },
  {
    "id": "S47G01N32",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-19",
    "dateRaw": "20251019",
    "dateLabel": "2025.10.19 (일)",
    "time": "16:30",
    "venue": "잠실학생체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 81
    },
    "away": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 66
    }
  },
  {
    "id": "S47G01N33",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-20",
    "dateRaw": "20251020",
    "dateLabel": "2025.10.20 (월)",
    "time": "19:00",
    "venue": "창원체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 76
    },
    "away": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 68
    }
  },
  {
    "id": "S47G01N34",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-21",
    "dateRaw": "20251021",
    "dateLabel": "2025.10.21 (화)",
    "time": "19:00",
    "venue": "원주DB프로미아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 81
    },
    "away": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 84
    }
  },
  {
    "id": "S47G01N35",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-22",
    "dateRaw": "20251022",
    "dateLabel": "2025.10.22 (수)",
    "time": "19:00",
    "venue": "안양 정관장 아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 60
    },
    "away": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 57
    }
  },
  {
    "id": "S47G01N36",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-23",
    "dateRaw": "20251023",
    "dateLabel": "2025.10.23 (목)",
    "time": "19:00",
    "venue": "잠실실내체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 76
    },
    "away": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 80
    }
  },
  {
    "id": "S47G01N37",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-24",
    "dateRaw": "20251024",
    "dateLabel": "2025.10.24 (금)",
    "time": "19:00",
    "venue": "수원 KT 소닉붐 아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 77
    },
    "away": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 71
    }
  },
  {
    "id": "S47G01N38",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-25",
    "dateRaw": "20251025",
    "dateLabel": "2025.10.25 (토)",
    "time": "14:00",
    "venue": "울산동천체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 75
    },
    "away": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 87
    }
  },
  {
    "id": "S47G01N39",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-25",
    "dateRaw": "20251025",
    "dateLabel": "2025.10.25 (토)",
    "time": "14:00",
    "venue": "대구체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 61
    },
    "away": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 71
    }
  },
  {
    "id": "S47G01N40",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-25",
    "dateRaw": "20251025",
    "dateLabel": "2025.10.25 (토)",
    "time": "16:30",
    "venue": "잠실실내체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 80
    },
    "away": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 94
    }
  },
  {
    "id": "S47G01N41",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-26",
    "dateRaw": "20251026",
    "dateLabel": "2025.10.26 (일)",
    "time": "14:00",
    "venue": "수원 KT 소닉붐 아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 87
    },
    "away": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 92
    }
  },
  {
    "id": "S47G01N42",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-26",
    "dateRaw": "20251026",
    "dateLabel": "2025.10.26 (일)",
    "time": "14:00",
    "venue": "대구체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 83
    },
    "away": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 81
    }
  },
  {
    "id": "S47G01N43",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-26",
    "dateRaw": "20251026",
    "dateLabel": "2025.10.26 (일)",
    "time": "16:30",
    "venue": "잠실실내체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 85
    },
    "away": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 83
    }
  },
  {
    "id": "S47G01N44",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-27",
    "dateRaw": "20251027",
    "dateLabel": "2025.10.27 (월)",
    "time": "19:00",
    "venue": "창원체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 81
    },
    "away": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 72
    }
  },
  {
    "id": "S47G01N45",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-28",
    "dateRaw": "20251028",
    "dateLabel": "2025.10.28 (화)",
    "time": "19:00",
    "venue": "잠실실내체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 83
    },
    "away": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 74
    }
  },
  {
    "id": "S47G01N46",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-29",
    "dateRaw": "20251029",
    "dateLabel": "2025.10.29 (수)",
    "time": "19:00",
    "venue": "대구체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 73
    },
    "away": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 87
    }
  },
  {
    "id": "S47G01N47",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-30",
    "dateRaw": "20251030",
    "dateLabel": "2025.10.30 (목)",
    "time": "19:00",
    "venue": "울산동천체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 73
    },
    "away": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 76
    }
  },
  {
    "id": "S47G01N48",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-10-31",
    "dateRaw": "20251031",
    "dateLabel": "2025.10.31 (금)",
    "time": "19:00",
    "venue": "잠실학생체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 79
    },
    "away": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 71
    }
  },
  {
    "id": "S47G01N49",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-01",
    "dateRaw": "20251101",
    "dateLabel": "2025.11.01 (토)",
    "time": "14:00",
    "venue": "고양소노아레나",
    "tv": "",
    "isEnded": true,
    "home": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 74
    },
    "away": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 64
    }
  },
  {
    "id": "S47G01N50",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-01",
    "dateRaw": "20251101",
    "dateLabel": "2025.11.01 (토)",
    "time": "14:00",
    "venue": "잠실실내체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 100
    },
    "away": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 77
    }
  },
  {
    "id": "S47G01N51",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-01",
    "dateRaw": "20251101",
    "dateLabel": "2025.11.01 (토)",
    "time": "16:30",
    "venue": "원주DB프로미아레나",
    "tv": "",
    "isEnded": true,
    "home": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 86
    },
    "away": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 81
    }
  },
  {
    "id": "S47G01N52",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-02",
    "dateRaw": "20251102",
    "dateLabel": "2025.11.02 (일)",
    "time": "14:00",
    "venue": "수원 KT 소닉붐 아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 60
    },
    "away": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 71
    }
  },
  {
    "id": "S47G01N53",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-02",
    "dateRaw": "20251102",
    "dateLabel": "2025.11.02 (일)",
    "time": "14:00",
    "venue": "안양 정관장 아레나",
    "tv": "",
    "isEnded": true,
    "home": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 78
    },
    "away": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 75
    }
  },
  {
    "id": "S47G01N54",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-02",
    "dateRaw": "20251102",
    "dateLabel": "2025.11.02 (일)",
    "time": "16:30",
    "venue": "잠실학생체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 75
    },
    "away": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 80
    }
  },
  {
    "id": "S47G01N55",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-03",
    "dateRaw": "20251103",
    "dateLabel": "2025.11.03 (월)",
    "time": "19:00",
    "venue": "잠실실내체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 79
    },
    "away": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 92
    }
  },
  {
    "id": "S47G01N56",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-04",
    "dateRaw": "20251104",
    "dateLabel": "2025.11.04 (화)",
    "time": "19:00",
    "venue": "잠실학생체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 76
    },
    "away": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 68
    }
  },
  {
    "id": "S47G01N57",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-05",
    "dateRaw": "20251105",
    "dateLabel": "2025.11.05 (수)",
    "time": "19:00",
    "venue": "잠실실내체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 89
    },
    "away": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 75
    }
  },
  {
    "id": "S47G01N58",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-06",
    "dateRaw": "20251106",
    "dateLabel": "2025.11.06 (목)",
    "time": "19:00",
    "venue": "울산동천체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 74
    },
    "away": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 68
    }
  },
  {
    "id": "S47G01N59",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-07",
    "dateRaw": "20251107",
    "dateLabel": "2025.11.07 (금)",
    "time": "19:00",
    "venue": "안양 정관장 아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 66
    },
    "away": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 68
    }
  },
  {
    "id": "S47G01N60",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-08",
    "dateRaw": "20251108",
    "dateLabel": "2025.11.08 (토)",
    "time": "14:00",
    "venue": "수원 KT 소닉붐 아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 81
    },
    "away": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 89
    }
  },
  {
    "id": "S47G01N61",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-08",
    "dateRaw": "20251108",
    "dateLabel": "2025.11.08 (토)",
    "time": "14:00",
    "venue": "원주DB프로미아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 66
    },
    "away": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 59
    }
  },
  {
    "id": "S47G01N62",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-08",
    "dateRaw": "20251108",
    "dateLabel": "2025.11.08 (토)",
    "time": "16:30",
    "venue": "잠실실내체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 80
    },
    "away": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 85
    }
  },
  {
    "id": "S47G01N63",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-09",
    "dateRaw": "20251109",
    "dateLabel": "2025.11.09 (일)",
    "time": "14:00",
    "venue": "울산동천체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 50
    },
    "away": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 76
    }
  },
  {
    "id": "S47G01N64",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-09",
    "dateRaw": "20251109",
    "dateLabel": "2025.11.09 (일)",
    "time": "14:00",
    "venue": "수원 KT 소닉붐 아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 63
    },
    "away": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 85
    }
  },
  {
    "id": "S47G01N65",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-09",
    "dateRaw": "20251109",
    "dateLabel": "2025.11.09 (일)",
    "time": "16:30",
    "venue": "잠실실내체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 67
    },
    "away": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 75
    }
  },
  {
    "id": "S47G01N66",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-10",
    "dateRaw": "20251110",
    "dateLabel": "2025.11.10 (월)",
    "time": "19:00",
    "venue": "창원체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 83
    },
    "away": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 61
    }
  },
  {
    "id": "S47G01N67",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-11",
    "dateRaw": "20251111",
    "dateLabel": "2025.11.11 (화)",
    "time": "19:00",
    "venue": "원주DB프로미아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 64
    },
    "away": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 65
    }
  },
  {
    "id": "S47G01N68",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-12",
    "dateRaw": "20251112",
    "dateLabel": "2025.11.12 (수)",
    "time": "19:00",
    "venue": "잠실실내체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 83
    },
    "away": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 95
    }
  },
  {
    "id": "S47G01N69",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-13",
    "dateRaw": "20251113",
    "dateLabel": "2025.11.13 (목)",
    "time": "19:00",
    "venue": "안양 정관장 아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 84
    },
    "away": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 63
    }
  },
  {
    "id": "S47G01N70",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-13",
    "dateRaw": "20251113",
    "dateLabel": "2025.11.13 (목)",
    "time": "19:00",
    "venue": "고양소노아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 93
    },
    "away": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 82
    }
  },
  {
    "id": "S47G01N71",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-15",
    "dateRaw": "20251115",
    "dateLabel": "2025.11.15 (토)",
    "time": "14:00",
    "venue": "수원 KT 소닉붐 아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 67
    },
    "away": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 82
    }
  },
  {
    "id": "S47G01N72",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-15",
    "dateRaw": "20251115",
    "dateLabel": "2025.11.15 (토)",
    "time": "14:00",
    "venue": "원주DB프로미아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 87
    },
    "away": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 84
    }
  },
  {
    "id": "S47G01N73",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-15",
    "dateRaw": "20251115",
    "dateLabel": "2025.11.15 (토)",
    "time": "16:30",
    "venue": "부산사직체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 88
    },
    "away": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 77
    }
  },
  {
    "id": "S47G01N74",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-16",
    "dateRaw": "20251116",
    "dateLabel": "2025.11.16 (일)",
    "time": "14:00",
    "venue": "안양 정관장 아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 70
    },
    "away": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 78
    }
  },
  {
    "id": "S47G01N75",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-16",
    "dateRaw": "20251116",
    "dateLabel": "2025.11.16 (일)",
    "time": "14:00",
    "venue": "고양소노아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 72
    },
    "away": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 75
    }
  },
  {
    "id": "S47G01N76",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-16",
    "dateRaw": "20251116",
    "dateLabel": "2025.11.16 (일)",
    "time": "16:30",
    "venue": "대구체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 67
    },
    "away": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 57
    }
  },
  {
    "id": "S47G01N77",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-17",
    "dateRaw": "20251117",
    "dateLabel": "2025.11.17 (월)",
    "time": "19:00",
    "venue": "잠실학생체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 85
    },
    "away": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 83
    }
  },
  {
    "id": "S47G01N78",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-18",
    "dateRaw": "20251118",
    "dateLabel": "2025.11.18 (화)",
    "time": "19:00",
    "venue": "대구체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 93
    },
    "away": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 94
    }
  },
  {
    "id": "S47G01N79",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-18",
    "dateRaw": "20251118",
    "dateLabel": "2025.11.18 (화)",
    "time": "19:00",
    "venue": "원주DB프로미아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 82
    },
    "away": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 93
    }
  },
  {
    "id": "S47G01N80",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-19",
    "dateRaw": "20251119",
    "dateLabel": "2025.11.19 (수)",
    "time": "19:00",
    "venue": "울산동천체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 68
    },
    "away": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 89
    }
  },
  {
    "id": "S47G01N81",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-19",
    "dateRaw": "20251119",
    "dateLabel": "2025.11.19 (수)",
    "time": "19:00",
    "venue": "안양 정관장 아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 62
    },
    "away": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 68
    }
  },
  {
    "id": "S47G01N82",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-20",
    "dateRaw": "20251120",
    "dateLabel": "2025.11.20 (목)",
    "time": "19:00",
    "venue": "원주DB프로미아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 84
    },
    "away": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 79
    }
  },
  {
    "id": "S47G01N83",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-11-20",
    "dateRaw": "20251120",
    "dateLabel": "2025.11.20 (목)",
    "time": "19:00",
    "venue": "부산사직체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 74
    },
    "away": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 85
    }
  },
  {
    "id": "S47G01N84",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-04",
    "dateRaw": "20251204",
    "dateLabel": "2025.12.04 (목)",
    "time": "19:00",
    "venue": "창원체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 64
    },
    "away": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 66
    }
  },
  {
    "id": "S47G01N85",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-04",
    "dateRaw": "20251204",
    "dateLabel": "2025.12.04 (목)",
    "time": "19:00",
    "venue": "부산사직체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 72
    },
    "away": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 77
    }
  },
  {
    "id": "S47G01N86",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-05",
    "dateRaw": "20251205",
    "dateLabel": "2025.12.05 (금)",
    "time": "19:00",
    "venue": "고양소노아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 72
    },
    "away": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 79
    }
  },
  {
    "id": "S47G01N87",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-05",
    "dateRaw": "20251205",
    "dateLabel": "2025.12.05 (금)",
    "time": "19:00",
    "venue": "잠실실내체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 96
    },
    "away": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 71
    }
  },
  {
    "id": "S47G01N88",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-06",
    "dateRaw": "20251206",
    "dateLabel": "2025.12.06 (토)",
    "time": "14:00",
    "venue": "창원체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 90
    },
    "away": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 60
    }
  },
  {
    "id": "S47G01N89",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-06",
    "dateRaw": "20251206",
    "dateLabel": "2025.12.06 (토)",
    "time": "14:00",
    "venue": "대구체육관",
    "tv": "",
    "isEnded": true,
    "home": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 67
    },
    "away": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 80
    }
  },
  {
    "id": "S47G01N90",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-06",
    "dateRaw": "20251206",
    "dateLabel": "2025.12.06 (토)",
    "time": "16:30",
    "venue": "부산사직체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 80
    },
    "away": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 77
    }
  },
  {
    "id": "S47G01N91",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-07",
    "dateRaw": "20251207",
    "dateLabel": "2025.12.07 (일)",
    "time": "14:00",
    "venue": "창원체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 66
    },
    "away": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 63
    }
  },
  {
    "id": "S47G01N92",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-07",
    "dateRaw": "20251207",
    "dateLabel": "2025.12.07 (일)",
    "time": "14:00",
    "venue": "잠실실내체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 59
    },
    "away": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 75
    }
  },
  {
    "id": "S47G01N93",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-07",
    "dateRaw": "20251207",
    "dateLabel": "2025.12.07 (일)",
    "time": "16:30",
    "venue": "부산사직체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 83
    },
    "away": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 80
    }
  },
  {
    "id": "S47G01N94",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-08",
    "dateRaw": "20251208",
    "dateLabel": "2025.12.08 (월)",
    "time": "19:00",
    "venue": "원주DB프로미아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 82
    },
    "away": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 77
    }
  },
  {
    "id": "S47G01N95",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-09",
    "dateRaw": "20251209",
    "dateLabel": "2025.12.09 (화)",
    "time": "19:00",
    "venue": "고양소노아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 78
    },
    "away": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 87
    }
  },
  {
    "id": "S47G01N96",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-10",
    "dateRaw": "20251210",
    "dateLabel": "2025.12.10 (수)",
    "time": "19:00",
    "venue": "대구체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 80
    },
    "away": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 76
    }
  },
  {
    "id": "S47G01N97",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-11",
    "dateRaw": "20251211",
    "dateLabel": "2025.12.11 (목)",
    "time": "19:00",
    "venue": "원주DB프로미아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 65
    },
    "away": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 63
    }
  },
  {
    "id": "S47G01N98",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-12",
    "dateRaw": "20251212",
    "dateLabel": "2025.12.12 (금)",
    "time": "19:00",
    "venue": "수원 KT 소닉붐 아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 89
    },
    "away": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 69
    }
  },
  {
    "id": "S47G01N100",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-13",
    "dateRaw": "20251213",
    "dateLabel": "2025.12.13 (토)",
    "time": "14:00",
    "venue": "대구체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 81
    },
    "away": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 77
    }
  },
  {
    "id": "S47G01N99",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-13",
    "dateRaw": "20251213",
    "dateLabel": "2025.12.13 (토)",
    "time": "14:00",
    "venue": "잠실학생체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 77
    },
    "away": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 55
    }
  },
  {
    "id": "S47G01N101",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-13",
    "dateRaw": "20251213",
    "dateLabel": "2025.12.13 (토)",
    "time": "16:30",
    "venue": "울산동천체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 61
    },
    "away": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 84
    }
  },
  {
    "id": "S47G01N102",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-14",
    "dateRaw": "20251214",
    "dateLabel": "2025.12.14 (일)",
    "time": "14:00",
    "venue": "고양소노아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 75
    },
    "away": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 80
    }
  },
  {
    "id": "S47G01N103",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-14",
    "dateRaw": "20251214",
    "dateLabel": "2025.12.14 (일)",
    "time": "14:00",
    "venue": "부산사직체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 103
    },
    "away": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 76
    }
  },
  {
    "id": "S47G01N104",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-14",
    "dateRaw": "20251214",
    "dateLabel": "2025.12.14 (일)",
    "time": "16:30",
    "venue": "수원 KT 소닉붐 아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 68
    },
    "away": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 75
    }
  },
  {
    "id": "S47G01N105",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-15",
    "dateRaw": "20251215",
    "dateLabel": "2025.12.15 (월)",
    "time": "19:00",
    "venue": "대구체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 73
    },
    "away": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 76
    }
  },
  {
    "id": "S47G01N106",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-16",
    "dateRaw": "20251216",
    "dateLabel": "2025.12.16 (화)",
    "time": "19:00",
    "venue": "고양소노아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 85
    },
    "away": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 86
    }
  },
  {
    "id": "S47G01N107",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-17",
    "dateRaw": "20251217",
    "dateLabel": "2025.12.17 (수)",
    "time": "19:00",
    "venue": "울산동천체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 63
    },
    "away": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 66
    }
  },
  {
    "id": "S47G01N108",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-18",
    "dateRaw": "20251218",
    "dateLabel": "2025.12.18 (목)",
    "time": "19:00",
    "venue": "부산사직체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 88
    },
    "away": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 84
    }
  },
  {
    "id": "S47G01N109",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-19",
    "dateRaw": "20251219",
    "dateLabel": "2025.12.19 (금)",
    "time": "19:00",
    "venue": "수원 KT 소닉붐 아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 81
    },
    "away": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 83
    }
  },
  {
    "id": "S47G01N110",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-20",
    "dateRaw": "20251220",
    "dateLabel": "2025.12.20 (토)",
    "time": "14:00",
    "venue": "잠실학생체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 74
    },
    "away": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 73
    }
  },
  {
    "id": "S47G01N111",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-20",
    "dateRaw": "20251220",
    "dateLabel": "2025.12.20 (토)",
    "time": "14:00",
    "venue": "대구체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 66
    },
    "away": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 71
    }
  },
  {
    "id": "S47G01N112",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-20",
    "dateRaw": "20251220",
    "dateLabel": "2025.12.20 (토)",
    "time": "16:30",
    "venue": "부산사직체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 108
    },
    "away": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 81
    }
  },
  {
    "id": "S47G01N113",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-21",
    "dateRaw": "20251221",
    "dateLabel": "2025.12.21 (일)",
    "time": "14:00",
    "venue": "창원체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 74
    },
    "away": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 69
    }
  },
  {
    "id": "S47G01N114",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-21",
    "dateRaw": "20251221",
    "dateLabel": "2025.12.21 (일)",
    "time": "14:00",
    "venue": "잠실학생체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 74
    },
    "away": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 87
    }
  },
  {
    "id": "S47G01N115",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-21",
    "dateRaw": "20251221",
    "dateLabel": "2025.12.21 (일)",
    "time": "16:30",
    "venue": "부산사직체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 94
    },
    "away": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 87
    }
  },
  {
    "id": "S47G01N116",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-22",
    "dateRaw": "20251222",
    "dateLabel": "2025.12.22 (월)",
    "time": "19:00",
    "venue": "안양 정관장 아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 90
    },
    "away": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 82
    }
  },
  {
    "id": "S47G01N117",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-23",
    "dateRaw": "20251223",
    "dateLabel": "2025.12.23 (화)",
    "time": "19:00",
    "venue": "창원체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 74
    },
    "away": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 71
    }
  },
  {
    "id": "S47G01N118",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-24",
    "dateRaw": "20251224",
    "dateLabel": "2025.12.24 (수)",
    "time": "19:00",
    "venue": "부산사직체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 98
    },
    "away": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 91
    }
  },
  {
    "id": "S47G01N119",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-25",
    "dateRaw": "20251225",
    "dateLabel": "2025.12.25 (목)",
    "time": "14:00",
    "venue": "울산동천체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 64
    },
    "away": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 74
    }
  },
  {
    "id": "S47G01N120",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-25",
    "dateRaw": "20251225",
    "dateLabel": "2025.12.25 (목)",
    "time": "14:00",
    "venue": "대구체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 83
    },
    "away": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 75
    }
  },
  {
    "id": "S47G01N121",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-25",
    "dateRaw": "20251225",
    "dateLabel": "2025.12.25 (목)",
    "time": "16:30",
    "venue": "안양 정관장 아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 63
    },
    "away": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 69
    }
  },
  {
    "id": "S47G01N122",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-26",
    "dateRaw": "20251226",
    "dateLabel": "2025.12.26 (금)",
    "time": "19:00",
    "venue": "부산사직체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 101
    },
    "away": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 109
    }
  },
  {
    "id": "S47G01N123",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-27",
    "dateRaw": "20251227",
    "dateLabel": "2025.12.27 (토)",
    "time": "14:00",
    "venue": "대구체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 66
    },
    "away": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 67
    }
  },
  {
    "id": "S47G01N124",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-27",
    "dateRaw": "20251227",
    "dateLabel": "2025.12.27 (토)",
    "time": "14:00",
    "venue": "고양소노아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 92
    },
    "away": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 98
    }
  },
  {
    "id": "S47G01N125",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-27",
    "dateRaw": "20251227",
    "dateLabel": "2025.12.27 (토)",
    "time": "16:30",
    "venue": "울산동천체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 75
    },
    "away": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 78
    }
  },
  {
    "id": "S47G01N126",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-28",
    "dateRaw": "20251228",
    "dateLabel": "2025.12.28 (일)",
    "time": "14:00",
    "venue": "창원체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 56
    },
    "away": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 72
    }
  },
  {
    "id": "S47G01N127",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-28",
    "dateRaw": "20251228",
    "dateLabel": "2025.12.28 (일)",
    "time": "14:00",
    "venue": "원주DB프로미아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 81
    },
    "away": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 67
    }
  },
  {
    "id": "S47G01N128",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-28",
    "dateRaw": "20251228",
    "dateLabel": "2025.12.28 (일)",
    "time": "16:30",
    "venue": "부산사직체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 78
    },
    "away": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 84
    }
  },
  {
    "id": "S47G01N129",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-29",
    "dateRaw": "20251229",
    "dateLabel": "2025.12.29 (월)",
    "time": "19:00",
    "venue": "고양소노아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 70
    },
    "away": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 77
    }
  },
  {
    "id": "S47G01N130",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-30",
    "dateRaw": "20251230",
    "dateLabel": "2025.12.30 (화)",
    "time": "19:00",
    "venue": "수원 KT 소닉붐 아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 111
    },
    "away": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 86
    }
  },
  {
    "id": "S47G01N131",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-31",
    "dateRaw": "20251231",
    "dateLabel": "2025.12.31 (수)",
    "time": "19:00",
    "venue": "울산동천체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 68
    },
    "away": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 71
    }
  },
  {
    "id": "S47G01N132",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2025-12-31",
    "dateRaw": "20251231",
    "dateLabel": "2025.12.31 (수)",
    "time": "21:30",
    "venue": "부산사직체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 82
    },
    "away": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 99
    }
  },
  {
    "id": "S47G01N133",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-01",
    "dateRaw": "20260101",
    "dateLabel": "2026.01.01 (목)",
    "time": "14:00",
    "venue": "고양소노아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 70
    },
    "away": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 69
    }
  },
  {
    "id": "S47G01N134",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-01",
    "dateRaw": "20260101",
    "dateLabel": "2026.01.01 (목)",
    "time": "16:30",
    "venue": "잠실학생체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 65
    },
    "away": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 71
    }
  },
  {
    "id": "S47G01N135",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-02",
    "dateRaw": "20260102",
    "dateLabel": "2026.01.02 (금)",
    "time": "19:00",
    "venue": "잠실실내체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 62
    },
    "away": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 80
    }
  },
  {
    "id": "S47G01N136",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-03",
    "dateRaw": "20260103",
    "dateLabel": "2026.01.03 (토)",
    "time": "14:00",
    "venue": "울산동천체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 77
    },
    "away": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 79
    }
  },
  {
    "id": "S47G01N137",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-03",
    "dateRaw": "20260103",
    "dateLabel": "2026.01.03 (토)",
    "time": "14:00",
    "venue": "고양소노아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 64
    },
    "away": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 76
    }
  },
  {
    "id": "S47G01N138",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-03",
    "dateRaw": "20260103",
    "dateLabel": "2026.01.03 (토)",
    "time": "16:30",
    "venue": "잠실학생체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 78
    },
    "away": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 74
    }
  },
  {
    "id": "S47G01N139",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-04",
    "dateRaw": "20260104",
    "dateLabel": "2026.01.04 (일)",
    "time": "14:00",
    "venue": "수원 KT 소닉붐 아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 76
    },
    "away": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 75
    }
  },
  {
    "id": "S47G01N140",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-04",
    "dateRaw": "20260104",
    "dateLabel": "2026.01.04 (일)",
    "time": "14:00",
    "venue": "잠실실내체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 76
    },
    "away": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 83
    }
  },
  {
    "id": "S47G01N141",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-04",
    "dateRaw": "20260104",
    "dateLabel": "2026.01.04 (일)",
    "time": "16:30",
    "venue": "안양 정관장 아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 76
    },
    "away": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 68
    }
  },
  {
    "id": "S47G01N142",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-05",
    "dateRaw": "20260105",
    "dateLabel": "2026.01.05 (월)",
    "time": "19:00",
    "venue": "대구체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 67
    },
    "away": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 77
    }
  },
  {
    "id": "S47G01N143",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-06",
    "dateRaw": "20260106",
    "dateLabel": "2026.01.06 (화)",
    "time": "19:00",
    "venue": "울산동천체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 81
    },
    "away": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 66
    }
  },
  {
    "id": "S47G01N144",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-07",
    "dateRaw": "20260107",
    "dateLabel": "2026.01.07 (수)",
    "time": "19:00",
    "venue": "창원체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 83
    },
    "away": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 70
    }
  },
  {
    "id": "S47G01N145",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-08",
    "dateRaw": "20260108",
    "dateLabel": "2026.01.08 (목)",
    "time": "19:00",
    "venue": "원주DB프로미아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 82
    },
    "away": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 80
    }
  },
  {
    "id": "S47G01N146",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-09",
    "dateRaw": "20260109",
    "dateLabel": "2026.01.09 (금)",
    "time": "19:00",
    "venue": "안양 정관장 아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 78
    },
    "away": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 76
    }
  },
  {
    "id": "S47G01N147",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-10",
    "dateRaw": "20260110",
    "dateLabel": "2026.01.10 (토)",
    "time": "14:00",
    "venue": "잠실학생체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 94
    },
    "away": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 84
    }
  },
  {
    "id": "S47G01N148",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-10",
    "dateRaw": "20260110",
    "dateLabel": "2026.01.10 (토)",
    "time": "14:00",
    "venue": "부산사직체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 75
    },
    "away": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 89
    }
  },
  {
    "id": "S47G01N149",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-10",
    "dateRaw": "20260110",
    "dateLabel": "2026.01.10 (토)",
    "time": "16:30",
    "venue": "창원체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 87
    },
    "away": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 74
    }
  },
  {
    "id": "S47G01N150",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-11",
    "dateRaw": "20260111",
    "dateLabel": "2026.01.11 (일)",
    "time": "14:00",
    "venue": "수원 KT 소닉붐 아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 74
    },
    "away": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 58
    }
  },
  {
    "id": "S47G01N151",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-11",
    "dateRaw": "20260111",
    "dateLabel": "2026.01.11 (일)",
    "time": "14:00",
    "venue": "원주DB프로미아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 73
    },
    "away": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 65
    }
  },
  {
    "id": "S47G01N152",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-11",
    "dateRaw": "20260111",
    "dateLabel": "2026.01.11 (일)",
    "time": "16:30",
    "venue": "잠실학생체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 89
    },
    "away": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 92
    }
  },
  {
    "id": "S47G01N153",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-12",
    "dateRaw": "20260112",
    "dateLabel": "2026.01.12 (월)",
    "time": "19:00",
    "venue": "대구체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 80
    },
    "away": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 72
    }
  },
  {
    "id": "S47G01N154",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-12",
    "dateRaw": "20260112",
    "dateLabel": "2026.01.12 (월)",
    "time": "19:00",
    "venue": "부산사직체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 96
    },
    "away": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 90
    }
  },
  {
    "id": "S47G01N155",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-13",
    "dateRaw": "20260113",
    "dateLabel": "2026.01.13 (화)",
    "time": "19:00",
    "venue": "잠실학생체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 93
    },
    "away": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 65
    }
  },
  {
    "id": "S47G01N156",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-13",
    "dateRaw": "20260113",
    "dateLabel": "2026.01.13 (화)",
    "time": "19:00",
    "venue": "울산동천체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 75
    },
    "away": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 74
    }
  },
  {
    "id": "S47G01N157",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-14",
    "dateRaw": "20260114",
    "dateLabel": "2026.01.14 (수)",
    "time": "19:00",
    "venue": "수원 KT 소닉붐 아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 107
    },
    "away": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 95
    }
  },
  {
    "id": "S47G01N158",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-14",
    "dateRaw": "20260114",
    "dateLabel": "2026.01.14 (수)",
    "time": "19:00",
    "venue": "안양 정관장 아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 79
    },
    "away": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 67
    }
  },
  {
    "id": "S47G01N159",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-15",
    "dateRaw": "20260115",
    "dateLabel": "2026.01.15 (목)",
    "time": "19:00",
    "venue": "잠실학생체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 89
    },
    "away": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 76
    }
  },
  {
    "id": "S47G01N160",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-15",
    "dateRaw": "20260115",
    "dateLabel": "2026.01.15 (목)",
    "time": "19:00",
    "venue": "고양소노아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 90
    },
    "away": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 77
    }
  },
  {
    "id": "S47G10N2",
    "seasonName": "2025-2026",
    "category": "올스타게임",
    "date": "2026-01-17",
    "dateRaw": "20260117",
    "dateLabel": "2026.01.17 (토)",
    "time": "14:00",
    "venue": "잠실실내체육관",
    "tv": "",
    "isEnded": true,
    "home": {
      "code": "4A",
      "name": "팀 아시아",
      "fullName": "팀 아시아",
      "shortName": "팀 아시아",
      "score": 82
    },
    "away": {
      "code": "5A",
      "name": "팀 루키",
      "fullName": "팀 루키",
      "shortName": "팀 루키",
      "score": 79
    }
  },
  {
    "id": "S47G10N1",
    "seasonName": "2025-2026",
    "category": "올스타게임",
    "date": "2026-01-18",
    "dateRaw": "20260118",
    "dateLabel": "2026.01.18 (일)",
    "time": "14:00",
    "venue": "잠실실내체육관",
    "tv": "",
    "isEnded": true,
    "home": {
      "code": "62",
      "name": "팀 브라운",
      "fullName": "팀 브라운",
      "shortName": "팀 브라운",
      "score": 131
    },
    "away": {
      "code": "63",
      "name": "팀 코니",
      "fullName": "팀 코니",
      "shortName": "팀 코니",
      "score": 109
    }
  },
  {
    "id": "S47G01N161",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-21",
    "dateRaw": "20260121",
    "dateLabel": "2026.01.21 (수)",
    "time": "19:00",
    "venue": "수원 KT 소닉붐 아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 62
    },
    "away": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 73
    }
  },
  {
    "id": "S47G01N162",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-21",
    "dateRaw": "20260121",
    "dateLabel": "2026.01.21 (수)",
    "time": "19:00",
    "venue": "원주DB프로미아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 99
    },
    "away": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 74
    }
  },
  {
    "id": "S47G01N163",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-22",
    "dateRaw": "20260122",
    "dateLabel": "2026.01.22 (목)",
    "time": "19:00",
    "venue": "울산동천체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 78
    },
    "away": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 71
    }
  },
  {
    "id": "S47G01N164",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-22",
    "dateRaw": "20260122",
    "dateLabel": "2026.01.22 (목)",
    "time": "19:00",
    "venue": "잠실실내체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 92
    },
    "away": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 85
    }
  },
  {
    "id": "S47G01N165",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-23",
    "dateRaw": "20260123",
    "dateLabel": "2026.01.23 (금)",
    "time": "19:00",
    "venue": "안양 정관장 아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 65
    },
    "away": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 64
    }
  },
  {
    "id": "S47G01N166",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-23",
    "dateRaw": "20260123",
    "dateLabel": "2026.01.23 (금)",
    "time": "19:00",
    "venue": "부산사직체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 65
    },
    "away": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 82
    }
  },
  {
    "id": "S47G01N167",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-24",
    "dateRaw": "20260124",
    "dateLabel": "2026.01.24 (토)",
    "time": "14:00",
    "venue": "울산동천체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 86
    },
    "away": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 78
    }
  },
  {
    "id": "S47G01N168",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-24",
    "dateRaw": "20260124",
    "dateLabel": "2026.01.24 (토)",
    "time": "14:00",
    "venue": "잠실학생체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 95
    },
    "away": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 81
    }
  },
  {
    "id": "S47G01N169",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-24",
    "dateRaw": "20260124",
    "dateLabel": "2026.01.24 (토)",
    "time": "16:30",
    "venue": "잠실실내체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 71
    },
    "away": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 78
    }
  },
  {
    "id": "S47G01N170",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-25",
    "dateRaw": "20260125",
    "dateLabel": "2026.01.25 (일)",
    "time": "14:00",
    "venue": "창원체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 76
    },
    "away": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 53
    }
  },
  {
    "id": "S47G01N171",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-25",
    "dateRaw": "20260125",
    "dateLabel": "2026.01.25 (일)",
    "time": "14:00",
    "venue": "부산사직체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 72
    },
    "away": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 102
    }
  },
  {
    "id": "S47G01N172",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-25",
    "dateRaw": "20260125",
    "dateLabel": "2026.01.25 (일)",
    "time": "16:30",
    "venue": "잠실실내체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 77
    },
    "away": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 91
    }
  },
  {
    "id": "S47G01N173",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-26",
    "dateRaw": "20260126",
    "dateLabel": "2026.01.26 (월)",
    "time": "19:00",
    "venue": "대구체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 74
    },
    "away": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 75
    }
  },
  {
    "id": "S47G01N174",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-27",
    "dateRaw": "20260127",
    "dateLabel": "2026.01.27 (화)",
    "time": "19:00",
    "venue": "고양소노아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 99
    },
    "away": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 54
    }
  },
  {
    "id": "S47G01N175",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-28",
    "dateRaw": "20260128",
    "dateLabel": "2026.01.28 (수)",
    "time": "19:00",
    "venue": "창원체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 86
    },
    "away": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 88
    }
  },
  {
    "id": "S47G01N176",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-29",
    "dateRaw": "20260129",
    "dateLabel": "2026.01.29 (목)",
    "time": "19:00",
    "venue": "안양 정관장 아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 76
    },
    "away": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 85
    }
  },
  {
    "id": "S47G01N177",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-30",
    "dateRaw": "20260130",
    "dateLabel": "2026.01.30 (금)",
    "time": "19:00",
    "venue": "원주DB프로미아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 108
    },
    "away": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 103
    }
  },
  {
    "id": "S47G01N178",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-31",
    "dateRaw": "20260131",
    "dateLabel": "2026.01.31 (토)",
    "time": "14:00",
    "venue": "창원체육관",
    "tv": "",
    "isEnded": true,
    "home": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 76
    },
    "away": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 65
    }
  },
  {
    "id": "S47G01N179",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-31",
    "dateRaw": "20260131",
    "dateLabel": "2026.01.31 (토)",
    "time": "14:00",
    "venue": "부산사직체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 103
    },
    "away": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 90
    }
  },
  {
    "id": "S47G01N180",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-01-31",
    "dateRaw": "20260131",
    "dateLabel": "2026.01.31 (토)",
    "time": "16:30",
    "venue": "잠실학생체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 79
    },
    "away": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 59
    }
  },
  {
    "id": "S47G01N181",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-02-01",
    "dateRaw": "20260201",
    "dateLabel": "2026.02.01 (일)",
    "time": "14:00",
    "venue": "울산동천체육관",
    "tv": "",
    "isEnded": true,
    "home": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 73
    },
    "away": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 88
    }
  },
  {
    "id": "S47G01N182",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-02-01",
    "dateRaw": "20260201",
    "dateLabel": "2026.02.01 (일)",
    "time": "14:00",
    "venue": "수원 KT 소닉붐 아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 89
    },
    "away": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 96
    }
  },
  {
    "id": "S47G01N183",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-02-01",
    "dateRaw": "20260201",
    "dateLabel": "2026.02.01 (일)",
    "time": "16:30",
    "venue": "고양소노아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 80
    },
    "away": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 62
    }
  },
  {
    "id": "S47G01N184",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-02-02",
    "dateRaw": "20260202",
    "dateLabel": "2026.02.02 (월)",
    "time": "19:00",
    "venue": "잠실학생체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 77
    },
    "away": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 120
    }
  },
  {
    "id": "S47G01N185",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-02-03",
    "dateRaw": "20260203",
    "dateLabel": "2026.02.03 (화)",
    "time": "19:00",
    "venue": "창원체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 81
    },
    "away": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 69
    }
  },
  {
    "id": "S47G01N186",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-02-04",
    "dateRaw": "20260204",
    "dateLabel": "2026.02.04 (수)",
    "time": "19:00",
    "venue": "고양소노아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 95
    },
    "away": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 89
    }
  },
  {
    "id": "S47G01N187",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-02-05",
    "dateRaw": "20260205",
    "dateLabel": "2026.02.05 (목)",
    "time": "19:00",
    "venue": "잠실실내체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 79
    },
    "away": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 107
    }
  },
  {
    "id": "S47G01N188",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-02-06",
    "dateRaw": "20260206",
    "dateLabel": "2026.02.06 (금)",
    "time": "19:00",
    "venue": "잠실학생체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 78
    },
    "away": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 75
    }
  },
  {
    "id": "S47G01N189",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-02-07",
    "dateRaw": "20260207",
    "dateLabel": "2026.02.07 (토)",
    "time": "14:00",
    "venue": "안양 정관장 아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 91
    },
    "away": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 79
    }
  },
  {
    "id": "S47G01N190",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-02-07",
    "dateRaw": "20260207",
    "dateLabel": "2026.02.07 (토)",
    "time": "14:00",
    "venue": "고양소노아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 92
    },
    "away": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 78
    }
  },
  {
    "id": "S47G01N191",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-02-07",
    "dateRaw": "20260207",
    "dateLabel": "2026.02.07 (토)",
    "time": "16:30",
    "venue": "잠실실내체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 80
    },
    "away": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 83
    }
  },
  {
    "id": "S47G01N192",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-02-08",
    "dateRaw": "20260208",
    "dateLabel": "2026.02.08 (일)",
    "time": "14:00",
    "venue": "울산동천체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 84
    },
    "away": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 65
    }
  },
  {
    "id": "S47G01N193",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-02-08",
    "dateRaw": "20260208",
    "dateLabel": "2026.02.08 (일)",
    "time": "14:00",
    "venue": "안양 정관장 아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 69
    },
    "away": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 77
    }
  },
  {
    "id": "S47G01N194",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-02-08",
    "dateRaw": "20260208",
    "dateLabel": "2026.02.08 (일)",
    "time": "16:30",
    "venue": "원주DB프로미아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 65
    },
    "away": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 66
    }
  },
  {
    "id": "S47G01N195",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-02-09",
    "dateRaw": "20260209",
    "dateLabel": "2026.02.09 (월)",
    "time": "19:00",
    "venue": "수원 KT 소닉붐 아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 104
    },
    "away": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 101
    }
  },
  {
    "id": "S47G01N196",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-02-10",
    "dateRaw": "20260210",
    "dateLabel": "2026.02.10 (화)",
    "time": "19:00",
    "venue": "대구체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 72
    },
    "away": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 71
    }
  },
  {
    "id": "S47G01N197",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-02-11",
    "dateRaw": "20260211",
    "dateLabel": "2026.02.11 (수)",
    "time": "19:00",
    "venue": "잠실학생체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 81
    },
    "away": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 64
    }
  },
  {
    "id": "S47G01N198",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-02-12",
    "dateRaw": "20260212",
    "dateLabel": "2026.02.12 (목)",
    "time": "19:00",
    "venue": "울산동천체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 87
    },
    "away": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 77
    }
  },
  {
    "id": "S47G01N199",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-02-13",
    "dateRaw": "20260213",
    "dateLabel": "2026.02.13 (금)",
    "time": "19:00",
    "venue": "안양 정관장 아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 74
    },
    "away": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 65
    }
  },
  {
    "id": "S47G01N200",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-02-14",
    "dateRaw": "20260214",
    "dateLabel": "2026.02.14 (토)",
    "time": "14:00",
    "venue": "울산동천체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 76
    },
    "away": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 87
    }
  },
  {
    "id": "S47G01N201",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-02-14",
    "dateRaw": "20260214",
    "dateLabel": "2026.02.14 (토)",
    "time": "14:00",
    "venue": "부산사직체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 88
    },
    "away": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 76
    }
  },
  {
    "id": "S47G01N202",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-02-14",
    "dateRaw": "20260214",
    "dateLabel": "2026.02.14 (토)",
    "time": "16:30",
    "venue": "창원체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 80
    },
    "away": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 58
    }
  },
  {
    "id": "S47G01N203",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-02-15",
    "dateRaw": "20260215",
    "dateLabel": "2026.02.15 (일)",
    "time": "14:00",
    "venue": "잠실학생체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 80
    },
    "away": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 77
    }
  },
  {
    "id": "S47G01N204",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-02-15",
    "dateRaw": "20260215",
    "dateLabel": "2026.02.15 (일)",
    "time": "14:00",
    "venue": "부산사직체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 83
    },
    "away": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 81
    }
  },
  {
    "id": "S47G01N205",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-02-15",
    "dateRaw": "20260215",
    "dateLabel": "2026.02.15 (일)",
    "time": "16:30",
    "venue": "대구체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 71
    },
    "away": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 87
    }
  },
  {
    "id": "S47G01N206",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-02-16",
    "dateRaw": "20260216",
    "dateLabel": "2026.02.16 (월)",
    "time": "14:00",
    "venue": "창원체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 62
    },
    "away": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 79
    }
  },
  {
    "id": "S47G01N207",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-02-16",
    "dateRaw": "20260216",
    "dateLabel": "2026.02.16 (월)",
    "time": "16:30",
    "venue": "원주DB프로미아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 90
    },
    "away": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 80
    }
  },
  {
    "id": "S47G01N208",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-02-17",
    "dateRaw": "20260217",
    "dateLabel": "2026.02.17 (화)",
    "time": "14:00",
    "venue": "대구체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 86
    },
    "away": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 98
    }
  },
  {
    "id": "S47G01N209",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-02-17",
    "dateRaw": "20260217",
    "dateLabel": "2026.02.17 (화)",
    "time": "16:30",
    "venue": "잠실실내체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 79
    },
    "away": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 82
    }
  },
  {
    "id": "S47G01N210",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-02-18",
    "dateRaw": "20260218",
    "dateLabel": "2026.02.18 (수)",
    "time": "14:00",
    "venue": "안양 정관장 아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 89
    },
    "away": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 59
    }
  },
  {
    "id": "S47G01N211",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-02-18",
    "dateRaw": "20260218",
    "dateLabel": "2026.02.18 (수)",
    "time": "16:30",
    "venue": "부산사직체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 74
    },
    "away": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 94
    }
  },
  {
    "id": "S47G01N212",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-02-19",
    "dateRaw": "20260219",
    "dateLabel": "2026.02.19 (목)",
    "time": "19:00",
    "venue": "대구체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 86
    },
    "away": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 80
    }
  },
  {
    "id": "S47G01N213",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-02-19",
    "dateRaw": "20260219",
    "dateLabel": "2026.02.19 (목)",
    "time": "19:00",
    "venue": "고양소노아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 86
    },
    "away": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 64
    }
  },
  {
    "id": "S47G01N214",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-05",
    "dateRaw": "20260305",
    "dateLabel": "2026.03.05 (목)",
    "time": "19:00",
    "venue": "고양소노아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 75
    },
    "away": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 73
    }
  },
  {
    "id": "S47G01N215",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-05",
    "dateRaw": "20260305",
    "dateLabel": "2026.03.05 (목)",
    "time": "19:00",
    "venue": "원주DB프로미아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 84
    },
    "away": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 104
    }
  },
  {
    "id": "S47G01N216",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-06",
    "dateRaw": "20260306",
    "dateLabel": "2026.03.06 (금)",
    "time": "19:00",
    "venue": "창원체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 83
    },
    "away": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 75
    }
  },
  {
    "id": "S47G01N217",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-06",
    "dateRaw": "20260306",
    "dateLabel": "2026.03.06 (금)",
    "time": "19:00",
    "venue": "수원 KT 소닉붐 아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 81
    },
    "away": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 70
    }
  },
  {
    "id": "S47G01N218",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-07",
    "dateRaw": "20260307",
    "dateLabel": "2026.03.07 (토)",
    "time": "14:00",
    "venue": "원주DB프로미아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 81
    },
    "away": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 95
    }
  },
  {
    "id": "S47G01N219",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-07",
    "dateRaw": "20260307",
    "dateLabel": "2026.03.07 (토)",
    "time": "14:00",
    "venue": "잠실실내체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 79
    },
    "away": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 81
    }
  },
  {
    "id": "S47G01N220",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-07",
    "dateRaw": "20260307",
    "dateLabel": "2026.03.07 (토)",
    "time": "16:30",
    "venue": "안양 정관장 아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 66
    },
    "away": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 64
    }
  },
  {
    "id": "S47G01N221",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-08",
    "dateRaw": "20260308",
    "dateLabel": "2026.03.08 (일)",
    "time": "14:00",
    "venue": "창원체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 70
    },
    "away": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 71
    }
  },
  {
    "id": "S47G01N222",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-08",
    "dateRaw": "20260308",
    "dateLabel": "2026.03.08 (일)",
    "time": "14:00",
    "venue": "울산동천체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 95
    },
    "away": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 83
    }
  },
  {
    "id": "S47G01N223",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-08",
    "dateRaw": "20260308",
    "dateLabel": "2026.03.08 (일)",
    "time": "16:30",
    "venue": "원주DB프로미아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 93
    },
    "away": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 79
    }
  },
  {
    "id": "S47G01N224",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-09",
    "dateRaw": "20260309",
    "dateLabel": "2026.03.09 (월)",
    "time": "19:00",
    "venue": "잠실실내체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 79
    },
    "away": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 84
    }
  },
  {
    "id": "S47G01N225",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-10",
    "dateRaw": "20260310",
    "dateLabel": "2026.03.10 (화)",
    "time": "19:00",
    "venue": "부산사직체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 90
    },
    "away": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 89
    }
  },
  {
    "id": "S47G01N226",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-11",
    "dateRaw": "20260311",
    "dateLabel": "2026.03.11 (수)",
    "time": "19:00",
    "venue": "창원체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 70
    },
    "away": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 74
    }
  },
  {
    "id": "S47G01N227",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-12",
    "dateRaw": "20260312",
    "dateLabel": "2026.03.12 (목)",
    "time": "19:00",
    "venue": "잠실학생체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 89
    },
    "away": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 68
    }
  },
  {
    "id": "S47G01N228",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-13",
    "dateRaw": "20260313",
    "dateLabel": "2026.03.13 (금)",
    "time": "19:00",
    "venue": "창원체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 97
    },
    "away": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 88
    }
  },
  {
    "id": "S47G01N229",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-14",
    "dateRaw": "20260314",
    "dateLabel": "2026.03.14 (토)",
    "time": "14:00",
    "venue": "수원 KT 소닉붐 아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 69
    },
    "away": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 75
    }
  },
  {
    "id": "S47G01N230",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-14",
    "dateRaw": "20260314",
    "dateLabel": "2026.03.14 (토)",
    "time": "14:00",
    "venue": "부산사직체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 86
    },
    "away": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 91
    }
  },
  {
    "id": "S47G01N231",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-14",
    "dateRaw": "20260314",
    "dateLabel": "2026.03.14 (토)",
    "time": "16:30",
    "venue": "대구체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 84
    },
    "away": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 74
    }
  },
  {
    "id": "S47G01N232",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-15",
    "dateRaw": "20260315",
    "dateLabel": "2026.03.15 (일)",
    "time": "14:00",
    "venue": "원주DB프로미아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 69
    },
    "away": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 77
    }
  },
  {
    "id": "S47G01N233",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-15",
    "dateRaw": "20260315",
    "dateLabel": "2026.03.15 (일)",
    "time": "14:00",
    "venue": "고양소노아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 98
    },
    "away": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 75
    }
  },
  {
    "id": "S47G01N234",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-15",
    "dateRaw": "20260315",
    "dateLabel": "2026.03.15 (일)",
    "time": "16:30",
    "venue": "울산동천체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 85
    },
    "away": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 74
    }
  },
  {
    "id": "S47G01N235",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-16",
    "dateRaw": "20260316",
    "dateLabel": "2026.03.16 (월)",
    "time": "19:00",
    "venue": "대구체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 80
    },
    "away": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 68
    }
  },
  {
    "id": "S47G01N236",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-18",
    "dateRaw": "20260318",
    "dateLabel": "2026.03.18 (수)",
    "time": "19:00",
    "venue": "수원 KT 소닉붐 아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 66
    },
    "away": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 69
    }
  },
  {
    "id": "S47G01N237",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-19",
    "dateRaw": "20260319",
    "dateLabel": "2026.03.19 (목)",
    "time": "19:00",
    "venue": "고양소노아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 111
    },
    "away": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 77
    }
  },
  {
    "id": "S47G01N238",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-20",
    "dateRaw": "20260320",
    "dateLabel": "2026.03.20 (금)",
    "time": "19:00",
    "venue": "수원 KT 소닉붐 아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 84
    },
    "away": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 82
    }
  },
  {
    "id": "S47G01N239",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-21",
    "dateRaw": "20260321",
    "dateLabel": "2026.03.21 (토)",
    "time": "14:00",
    "venue": "고양소노아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 90
    },
    "away": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 86
    }
  },
  {
    "id": "S47G01N240",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-21",
    "dateRaw": "20260321",
    "dateLabel": "2026.03.21 (토)",
    "time": "16:30",
    "venue": "부산사직체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 100
    },
    "away": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 81
    }
  },
  {
    "id": "S47G01N241",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-22",
    "dateRaw": "20260322",
    "dateLabel": "2026.03.22 (일)",
    "time": "14:00",
    "venue": "안양 정관장 아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 86
    },
    "away": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 77
    }
  },
  {
    "id": "S47G01N242",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-22",
    "dateRaw": "20260322",
    "dateLabel": "2026.03.22 (일)",
    "time": "16:30",
    "venue": "원주DB프로미아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 78
    },
    "away": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 74
    }
  },
  {
    "id": "S47G01N243",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-23",
    "dateRaw": "20260323",
    "dateLabel": "2026.03.23 (월)",
    "time": "19:00",
    "venue": "잠실실내체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 76
    },
    "away": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 73
    }
  },
  {
    "id": "S47G01N244",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-24",
    "dateRaw": "20260324",
    "dateLabel": "2026.03.24 (화)",
    "time": "19:00",
    "venue": "원주DB프로미아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 84
    },
    "away": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 87
    }
  },
  {
    "id": "S47G01N245",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-25",
    "dateRaw": "20260325",
    "dateLabel": "2026.03.25 (수)",
    "time": "19:00",
    "venue": "잠실학생체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 77
    },
    "away": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 78
    }
  },
  {
    "id": "S47G01N246",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-26",
    "dateRaw": "20260326",
    "dateLabel": "2026.03.26 (목)",
    "time": "19:00",
    "venue": "대구체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 67
    },
    "away": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 80
    }
  },
  {
    "id": "S47G01N247",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-27",
    "dateRaw": "20260327",
    "dateLabel": "2026.03.27 (금)",
    "time": "19:00",
    "venue": "부산사직체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 79
    },
    "away": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 84
    }
  },
  {
    "id": "S47G01N248",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-28",
    "dateRaw": "20260328",
    "dateLabel": "2026.03.28 (토)",
    "time": "14:00",
    "venue": "울산동천체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 58
    },
    "away": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 69
    }
  },
  {
    "id": "S47G01N249",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-28",
    "dateRaw": "20260328",
    "dateLabel": "2026.03.28 (토)",
    "time": "14:00",
    "venue": "고양소노아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 81
    },
    "away": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 92
    }
  },
  {
    "id": "S47G01N250",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-28",
    "dateRaw": "20260328",
    "dateLabel": "2026.03.28 (토)",
    "time": "16:30",
    "venue": "잠실실내체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 71
    },
    "away": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 62
    }
  },
  {
    "id": "S47G01N251",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-29",
    "dateRaw": "20260329",
    "dateLabel": "2026.03.29 (일)",
    "time": "14:00",
    "venue": "창원체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 67
    },
    "away": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 55
    }
  },
  {
    "id": "S47G01N252",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-29",
    "dateRaw": "20260329",
    "dateLabel": "2026.03.29 (일)",
    "time": "14:00",
    "venue": "대구체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 80
    },
    "away": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 87
    }
  },
  {
    "id": "S47G01N253",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-29",
    "dateRaw": "20260329",
    "dateLabel": "2026.03.29 (일)",
    "time": "16:30",
    "venue": "잠실실내체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 78
    },
    "away": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 83
    }
  },
  {
    "id": "S47G01N254",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-30",
    "dateRaw": "20260330",
    "dateLabel": "2026.03.30 (월)",
    "time": "19:00",
    "venue": "울산동천체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 81
    },
    "away": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 90
    }
  },
  {
    "id": "S47G01N255",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-03-31",
    "dateRaw": "20260331",
    "dateLabel": "2026.03.31 (화)",
    "time": "19:00",
    "venue": "안양 정관장 아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 84
    },
    "away": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 74
    }
  },
  {
    "id": "S47G01N256",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-04-01",
    "dateRaw": "20260401",
    "dateLabel": "2026.04.01 (수)",
    "time": "19:00",
    "venue": "부산사직체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 81
    },
    "away": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 79
    }
  },
  {
    "id": "S47G01N257",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-04-02",
    "dateRaw": "20260402",
    "dateLabel": "2026.04.02 (목)",
    "time": "19:00",
    "venue": "대구체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 78
    },
    "away": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 76
    }
  },
  {
    "id": "S47G01N258",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-04-03",
    "dateRaw": "20260403",
    "dateLabel": "2026.04.03 (금)",
    "time": "19:00",
    "venue": "수원 KT 소닉붐 아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 60
    },
    "away": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 87
    }
  },
  {
    "id": "S47G01N259",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-04-04",
    "dateRaw": "20260404",
    "dateLabel": "2026.04.04 (토)",
    "time": "14:00",
    "venue": "안양 정관장 아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 95
    },
    "away": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 71
    }
  },
  {
    "id": "S47G01N260",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-04-04",
    "dateRaw": "20260404",
    "dateLabel": "2026.04.04 (토)",
    "time": "14:00",
    "venue": "원주DB프로미아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 80
    },
    "away": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 75
    }
  },
  {
    "id": "S47G01N261",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-04-04",
    "dateRaw": "20260404",
    "dateLabel": "2026.04.04 (토)",
    "time": "16:30",
    "venue": "잠실학생체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 106
    },
    "away": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 102
    }
  },
  {
    "id": "S47G01N262",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-04-05",
    "dateRaw": "20260405",
    "dateLabel": "2026.04.05 (일)",
    "time": "14:00",
    "venue": "창원체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 65
    },
    "away": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 74
    }
  },
  {
    "id": "S47G01N263",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-04-05",
    "dateRaw": "20260405",
    "dateLabel": "2026.04.05 (일)",
    "time": "14:00",
    "venue": "고양소노아레나",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 65
    },
    "away": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 61
    }
  },
  {
    "id": "S47G01N264",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-04-05",
    "dateRaw": "20260405",
    "dateLabel": "2026.04.05 (일)",
    "time": "16:30",
    "venue": "수원 KT 소닉붐 아레나",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 73
    },
    "away": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 69
    }
  },
  {
    "id": "S47G01N265",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-04-06",
    "dateRaw": "20260406",
    "dateLabel": "2026.04.06 (월)",
    "time": "19:00",
    "venue": "잠실학생체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 75
    },
    "away": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 93
    }
  },
  {
    "id": "S47G01N266",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-04-08",
    "dateRaw": "20260408",
    "dateLabel": "2026.04.08 (수)",
    "time": "19:00",
    "venue": "울산동천체육관",
    "tv": "IB SPORTS",
    "isEnded": true,
    "home": {
      "code": "10",
      "name": "울산 현대모비스",
      "fullName": "울산 현대모비스 피버스",
      "shortName": "현대모비스",
      "score": 78
    },
    "away": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 56
    }
  },
  {
    "id": "S47G01N267",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-04-08",
    "dateRaw": "20260408",
    "dateLabel": "2026.04.08 (수)",
    "time": "19:00",
    "venue": "수원 KT 소닉붐 아레나",
    "tv": "GOLF&PBA",
    "isEnded": true,
    "home": {
      "code": "06",
      "name": "수원 KT",
      "fullName": "수원 KT 소닉붐",
      "shortName": "KT",
      "score": 76
    },
    "away": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 72
    }
  },
  {
    "id": "S47G01N268",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-04-08",
    "dateRaw": "20260408",
    "dateLabel": "2026.04.08 (수)",
    "time": "19:00",
    "venue": "안양 정관장 아레나",
    "tv": "",
    "isEnded": true,
    "home": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 67
    },
    "away": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 65
    }
  },
  {
    "id": "S47G01N269",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-04-08",
    "dateRaw": "20260408",
    "dateLabel": "2026.04.08 (수)",
    "time": "19:00",
    "venue": "부산사직체육관",
    "tv": "tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 101
    },
    "away": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 109
    }
  },
  {
    "id": "S47G01N270",
    "seasonName": "2025-2026",
    "category": "정규시즌",
    "date": "2026-04-08",
    "dateRaw": "20260408",
    "dateLabel": "2026.04.08 (수)",
    "time": "19:00",
    "venue": "잠실실내체육관",
    "tv": "",
    "isEnded": true,
    "home": {
      "code": "35",
      "name": "서울 삼성",
      "fullName": "서울 삼성 썬더스",
      "shortName": "삼성",
      "score": 73
    },
    "away": {
      "code": "64",
      "name": "대구 한국가스공사",
      "fullName": "대구 한국가스공사 페가수스",
      "shortName": "가스공사",
      "score": 80
    }
  },
  {
    "id": "S47G03N1",
    "seasonName": "2025-2026",
    "category": "플레이오프",
    "date": "2026-04-12",
    "dateRaw": "20260412",
    "dateLabel": "2026.04.12 (일)",
    "time": "14:00",
    "venue": "잠실학생체육관",
    "tv": "IB SPORTS / tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 76
    },
    "away": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 105
    }
  },
  {
    "id": "S47G03N2",
    "seasonName": "2025-2026",
    "category": "플레이오프",
    "date": "2026-04-13",
    "dateRaw": "20260413",
    "dateLabel": "2026.04.13 (월)",
    "time": "19:00",
    "venue": "원주DB프로미아레나",
    "tv": "IB SPORTS / tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 78
    },
    "away": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 81
    }
  },
  {
    "id": "S47G03N3",
    "seasonName": "2025-2026",
    "category": "플레이오프",
    "date": "2026-04-14",
    "dateRaw": "20260414",
    "dateLabel": "2026.04.14 (화)",
    "time": "19:00",
    "venue": "잠실학생체육관",
    "tv": "IB SPORTS / tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 72
    },
    "away": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 80
    }
  },
  {
    "id": "S47G03N4",
    "seasonName": "2025-2026",
    "category": "플레이오프",
    "date": "2026-04-15",
    "dateRaw": "20260415",
    "dateLabel": "2026.04.15 (수)",
    "time": "19:00",
    "venue": "원주DB프로미아레나",
    "tv": "IB SPORTS / tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 97
    },
    "away": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 105
    }
  },
  {
    "id": "S47G03N5",
    "seasonName": "2025-2026",
    "category": "플레이오프",
    "date": "2026-04-16",
    "dateRaw": "20260416",
    "dateLabel": "2026.04.16 (목)",
    "time": "19:00",
    "venue": "고양소노아레나",
    "tv": "IB SPORTS / tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 66
    },
    "away": {
      "code": "55",
      "name": "서울 SK",
      "fullName": "서울 SK 나이츠",
      "shortName": "SK",
      "score": 65
    }
  },
  {
    "id": "S47G03N6",
    "seasonName": "2025-2026",
    "category": "플레이오프",
    "date": "2026-04-17",
    "dateRaw": "20260417",
    "dateLabel": "2026.04.17 (금)",
    "time": "19:00",
    "venue": "부산사직체육관",
    "tv": "IB SPORTS / tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 98
    },
    "away": {
      "code": "16",
      "name": "원주 DB",
      "fullName": "원주 DB 프로미",
      "shortName": "DB",
      "score": 89
    }
  },
  {
    "id": "S47G03N11",
    "seasonName": "2025-2026",
    "category": "플레이오프",
    "date": "2026-04-23",
    "dateRaw": "20260423",
    "dateLabel": "2026.04.23 (목)",
    "time": "19:00",
    "venue": "창원체육관",
    "tv": "IB SPORTS / tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 63
    },
    "away": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 69
    }
  },
  {
    "id": "S47G03N12",
    "seasonName": "2025-2026",
    "category": "플레이오프",
    "date": "2026-04-24",
    "dateRaw": "20260424",
    "dateLabel": "2026.04.24 (금)",
    "time": "19:00",
    "venue": "안양 정관장 아레나",
    "tv": "IB SPORTS / tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 75
    },
    "away": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 91
    }
  },
  {
    "id": "S47G03N13",
    "seasonName": "2025-2026",
    "category": "플레이오프",
    "date": "2026-04-25",
    "dateRaw": "20260425",
    "dateLabel": "2026.04.25 (토)",
    "time": "14:00",
    "venue": "창원체육관",
    "tv": "IB SPORTS / tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 76
    },
    "away": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 85
    }
  },
  {
    "id": "S47G03N14",
    "seasonName": "2025-2026",
    "category": "플레이오프",
    "date": "2026-04-26",
    "dateRaw": "20260426",
    "dateLabel": "2026.04.26 (일)",
    "time": "14:00",
    "venue": "안양 정관장 아레나",
    "tv": "IB SPORTS / tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 91
    },
    "away": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 83
    }
  },
  {
    "id": "S47G03N15",
    "seasonName": "2025-2026",
    "category": "플레이오프",
    "date": "2026-04-27",
    "dateRaw": "20260427",
    "dateLabel": "2026.04.27 (월)",
    "time": "19:00",
    "venue": "고양소노아레나",
    "tv": "IB SPORTS / tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 90
    },
    "away": {
      "code": "50",
      "name": "창원 LG",
      "fullName": "창원 LG 세이커스",
      "shortName": "LG",
      "score": 80
    }
  },
  {
    "id": "S47G03N16",
    "seasonName": "2025-2026",
    "category": "플레이오프",
    "date": "2026-04-28",
    "dateRaw": "20260428",
    "dateLabel": "2026.04.28 (화)",
    "time": "19:00",
    "venue": "부산사직체육관",
    "tv": "IB SPORTS / tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 83
    },
    "away": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 79
    }
  },
  {
    "id": "S47G03N18",
    "seasonName": "2025-2026",
    "category": "플레이오프",
    "date": "2026-04-30",
    "dateRaw": "20260430",
    "dateLabel": "2026.04.30 (목)",
    "time": "19:00",
    "venue": "부산사직체육관",
    "tv": "IB SPORTS / tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 84
    },
    "away": {
      "code": "70",
      "name": "안양 정관장",
      "fullName": "안양 정관장 레드부스터스",
      "shortName": "정관장",
      "score": 67
    }
  },
  {
    "id": "S47G04N1",
    "seasonName": "2025-2026",
    "category": "챔피언결정전",
    "date": "2026-05-05",
    "dateRaw": "20260505",
    "dateLabel": "2026.05.05 (화)",
    "time": "14:00",
    "venue": "고양소노아레나",
    "tv": "IB SPORTS / tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 67
    },
    "away": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 75
    }
  },
  {
    "id": "S47G04N2",
    "seasonName": "2025-2026",
    "category": "챔피언결정전",
    "date": "2026-05-07",
    "dateRaw": "20260507",
    "dateLabel": "2026.05.07 (목)",
    "time": "19:00",
    "venue": "고양소노아레나",
    "tv": "IB SPORTS / tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 78
    },
    "away": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 96
    }
  },
  {
    "id": "S47G04N3",
    "seasonName": "2025-2026",
    "category": "챔피언결정전",
    "date": "2026-05-09",
    "dateRaw": "20260509",
    "dateLabel": "2026.05.09 (토)",
    "time": "14:00",
    "venue": "부산사직체육관",
    "tv": "IB SPORTS / tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 88
    },
    "away": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 87
    }
  },
  {
    "id": "S47G04N4",
    "seasonName": "2025-2026",
    "category": "챔피언결정전",
    "date": "2026-05-10",
    "dateRaw": "20260510",
    "dateLabel": "2026.05.10 (일)",
    "time": "16:30",
    "venue": "부산사직체육관",
    "tv": "IB SPORTS / tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 80
    },
    "away": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 81
    }
  },
  {
    "id": "S47G04N5",
    "seasonName": "2025-2026",
    "category": "챔피언결정전",
    "date": "2026-05-13",
    "dateRaw": "20260513",
    "dateLabel": "2026.05.13 (수)",
    "time": "19:00",
    "venue": "고양소노아레나",
    "tv": "IB SPORTS / tvN SPORTS",
    "isEnded": true,
    "home": {
      "code": "66",
      "name": "고양 소노",
      "fullName": "고양 소노 스카이거너스",
      "shortName": "소노",
      "score": 68
    },
    "away": {
      "code": "60",
      "name": "부산 KCC",
      "fullName": "부산 KCC 이지스",
      "shortName": "KCC",
      "score": 76
    }
  }
].map((game) => ({
  ...game,
  source: {
    schedule: `${KBL_SCHEDULE_SOURCE.api}?fromDate=${game.dateRaw.slice(0, 6)}01&toDate=${game.dateRaw.slice(0, 6)}31&tcodeList=all`,
    record: `https://www.kbl.or.kr/match/record/${game.id}/${game.dateRaw}`,
  },
}));

function getInitialTeamCode() {
  try {
    const storedTeamCode = localStorage.getItem(TEAM_STORAGE_KEY);
    return TEAM_CONFIGS[storedTeamCode] ? storedTeamCode : "KR";
  } catch {
    return "KR";
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
let activePanel = "play-by-play";
let selectedMatchId = FEATURED_FIBA_MATCH.id;
let selectedCalendarMonth = "2025-11";
let currentContext = buildTeamContext(selectedTeamCode);
let generatedClipCount = 0;
let generatedClipSequence = 1;
let selectedPlayerCodes = new Set();
let activeClipFilter = "all";
let isGeneratingHighlight = false;
let generatedAssetSequence = 1;
let activeDashboardSection = "fan-insight";
let activePbpClip = null;
const generatedAssets = [];

const BASE_CLIP_COUNT = 12;
const PBP_QUARTERS = ["Q1", "Q2", "Q3", "Q4"];
let selectedPbpQuarter = "Q1";
const PBP_CLIPS_BY_QUARTER = {
  "Q1": [
    {
      "id": 1,
      "quarter": "Q1",
      "clock": "08:51/08:51/08:51_to_08:49",
      "start": 2,
      "end": 27,
      "duration": 25,
      "startType": "score;foul;foul",
      "endType": "defensive_rebound",
      "startEvent": "34 Brandon Gilbeck | +1 | 1st of 2 free throws made / 34 Brandon Gilbeck foul drawn / 31 Jaeseok Jang Personal foul; 2 free throws awarded",
      "endEvent": "22 Jun Seok Yeo defensive rebound"
    },
    {
      "id": 2,
      "quarter": "Q1",
      "clock": "08:49_to_08:33",
      "start": 27,
      "end": 43,
      "duration": 16,
      "startType": "defensive_rebound",
      "endType": "defensive_rebound",
      "startEvent": "22 Jun Seok Yeo defensive rebound",
      "endEvent": "34 Brandon Gilbeck defensive rebound"
    },
    {
      "id": 3,
      "quarter": "Q1",
      "clock": "08:33_to_08:20",
      "start": 43,
      "end": 56,
      "duration": 13,
      "startType": "defensive_rebound",
      "endType": "defensive_rebound",
      "startEvent": "34 Brandon Gilbeck defensive rebound",
      "endEvent": "31 Jaeseok Jang defensive rebound"
    },
    {
      "id": 4,
      "quarter": "Q1",
      "clock": "08:20_to_08:10",
      "start": 56,
      "end": 66,
      "duration": 10,
      "startType": "defensive_rebound",
      "endType": "defensive_rebound",
      "startEvent": "31 Jaeseok Jang defensive rebound",
      "endEvent": "34 Brandon Gilbeck defensive rebound"
    },
    {
      "id": 5,
      "quarter": "Q1",
      "clock": "08:10_to_07:51",
      "start": 66,
      "end": 109,
      "duration": 43,
      "startType": "defensive_rebound",
      "endType": "score",
      "startEvent": "34 Brandon Gilbeck defensive rebound",
      "endEvent": "10 Long-Mao Hu | +3 | 3pt jump shot made"
    },
    {
      "id": 6,
      "quarter": "Q1",
      "clock": "07:51_to_07:35",
      "start": 109,
      "end": 125,
      "duration": 16,
      "startType": "score",
      "endType": "defensive_rebound",
      "startEvent": "10 Long-Mao Hu | +3 | 3pt jump shot made",
      "endEvent": "9 Ying-Chun Chen defensive rebound"
    },
    {
      "id": 7,
      "quarter": "Q1",
      "clock": "07:35_to_07:29",
      "start": 125,
      "end": 131,
      "duration": 6,
      "startType": "defensive_rebound",
      "endType": "defensive_rebound",
      "startEvent": "9 Ying-Chun Chen defensive rebound",
      "endEvent": "31 Jaeseok Jang defensive rebound"
    },
    {
      "id": 8,
      "quarter": "Q1",
      "clock": "07:29_to_07:14/07:14/07:14",
      "start": 131,
      "end": 146,
      "duration": 15,
      "startType": "defensive_rebound",
      "endType": "score;foul;foul",
      "startEvent": "31 Jaeseok Jang defensive rebound",
      "endEvent": "31 Jaeseok Jang | +1 | 2nd of 2 free throws made / 31 Jaeseok Jang foul drawn / 1 Bachir Gadiaga Personal foul; 2 free throws awarded"
    },
    {
      "id": 9,
      "quarter": "Q1",
      "clock": "07:14/07:14/07:14_to_06:47",
      "start": 146,
      "end": 233,
      "duration": 87,
      "startType": "score;foul;foul",
      "endType": "score",
      "startEvent": "31 Jaeseok Jang | +1 | 2nd of 2 free throws made / 31 Jaeseok Jang foul drawn / 1 Bachir Gadiaga Personal foul; 2 free throws awarded",
      "endEvent": "1 Bachir Gadiaga | +2 | 2PtsFG under the basket, jump shot made"
    },
    {
      "id": 10,
      "quarter": "Q1",
      "clock": "06:47_to_06:28",
      "start": 233,
      "end": 252,
      "duration": 19,
      "startType": "score",
      "endType": "defensive_rebound",
      "startEvent": "1 Bachir Gadiaga | +2 | 2PtsFG under the basket, jump shot made",
      "endEvent": "34 Brandon Gilbeck defensive rebound"
    },
    {
      "id": 11,
      "quarter": "Q1",
      "clock": "06:28_to_06:08",
      "start": 252,
      "end": 272,
      "duration": 20,
      "startType": "defensive_rebound",
      "endType": "score",
      "startEvent": "34 Brandon Gilbeck defensive rebound",
      "endEvent": "9 Ying-Chun Chen | +3 | 3pt jump shot made"
    },
    {
      "id": 12,
      "quarter": "Q1",
      "clock": "06:08_to_05:50/05:50",
      "start": 272,
      "end": 290,
      "duration": 18,
      "startType": "score",
      "endType": "foul",
      "startEvent": "9 Ying-Chun Chen | +3 | 3pt jump shot made",
      "endEvent": "2 Junyong Choi foul drawn / 9 Ying-Chun Chen Personal foul"
    },
    {
      "id": 13,
      "quarter": "Q1",
      "clock": "05:50/05:50_to_05:45",
      "start": 290,
      "end": 320,
      "duration": 30,
      "startType": "foul",
      "endType": "score",
      "startEvent": "2 Junyong Choi foul drawn / 9 Ying-Chun Chen Personal foul",
      "endEvent": "22 Jun Seok Yeo | +2 | 2pt fadeaway jump shot made"
    },
    {
      "id": 14,
      "quarter": "Q1",
      "clock": "05:45_to_05:23",
      "start": 320,
      "end": 341,
      "duration": 21,
      "startType": "score",
      "endType": "turnover",
      "startEvent": "22 Jun Seok Yeo | +2 | 2pt fadeaway jump shot made",
      "endEvent": "34 Brandon Gilbeck turnover; ball handling"
    },
    {
      "id": 15,
      "quarter": "Q1",
      "clock": "05:23_to_05:06",
      "start": 341,
      "end": 359,
      "duration": 18,
      "startType": "turnover",
      "endType": "score",
      "startEvent": "34 Brandon Gilbeck turnover; ball handling",
      "endEvent": "6 Junghyun Lee | +3 | 3pt jump shot made"
    },
    {
      "id": 16,
      "quarter": "Q1",
      "clock": "05:06_to_04:37",
      "start": 359,
      "end": 388,
      "duration": 29,
      "startType": "score",
      "endType": "defensive_rebound",
      "startEvent": "6 Junghyun Lee | +3 | 3pt jump shot made",
      "endEvent": "team defensive rebound"
    },
    {
      "id": 17,
      "quarter": "Q1",
      "clock": "04:37_to_04:28",
      "start": 388,
      "end": 409,
      "duration": 21,
      "startType": "defensive_rebound",
      "endType": "score",
      "startEvent": "team defensive rebound",
      "endEvent": "22 Jun Seok Yeo | +2 | 2PtsFG under the basket, driving layup made"
    },
    {
      "id": 18,
      "quarter": "Q1",
      "clock": "04:28_to_04:10/04:10",
      "start": 409,
      "end": 427,
      "duration": 18,
      "startType": "score",
      "endType": "foul",
      "startEvent": "22 Jun Seok Yeo | +2 | 2PtsFG under the basket, driving layup made",
      "endEvent": "34 Brandon Gilbeck foul drawn / 33 Seounghyun Lee Personal foul"
    },
    {
      "id": 19,
      "quarter": "Q1",
      "clock": "04:10/04:10_to_03:53",
      "start": 427,
      "end": 552,
      "duration": 125,
      "startType": "foul",
      "endType": "defensive_rebound",
      "startEvent": "34 Brandon Gilbeck foul drawn / 33 Seounghyun Lee Personal foul",
      "endEvent": "11 Woosuk Lee defensive rebound"
    },
    {
      "id": 20,
      "quarter": "Q1",
      "clock": "03:53_to_03:35",
      "start": 552,
      "end": 570,
      "duration": 18,
      "startType": "defensive_rebound",
      "endType": "defensive_rebound",
      "startEvent": "11 Woosuk Lee defensive rebound",
      "endEvent": "39 Chun Hsiang Lu defensive rebound"
    },
    {
      "id": 21,
      "quarter": "Q1",
      "clock": "03:35_to_03:20",
      "start": 570,
      "end": 586,
      "duration": 16,
      "startType": "defensive_rebound",
      "endType": "score",
      "startEvent": "39 Chun Hsiang Lu defensive rebound",
      "endEvent": "0 Benson Lin | +2 | 2pt pullup jump shot made"
    },
    {
      "id": 22,
      "quarter": "Q1",
      "clock": "03:20_to_03:02",
      "start": 586,
      "end": 603,
      "duration": 17,
      "startType": "score",
      "endType": "score",
      "startEvent": "0 Benson Lin | +2 | 2pt pullup jump shot made",
      "endEvent": "2 Junyong Choi | +3 | 3pt jump shot made"
    },
    {
      "id": 23,
      "quarter": "Q1",
      "clock": "03:02_to_02:33/02:33/02:33",
      "start": 603,
      "end": 632,
      "duration": 29,
      "startType": "score",
      "endType": "score;foul;foul",
      "startEvent": "2 Junyong Choi | +3 | 3pt jump shot made",
      "endEvent": "34 Brandon Gilbeck | +1 | 2nd of 2 free throws made / 34 Brandon Gilbeck foul drawn / 33 Seounghyun Lee Personal foul; 2 free throws awarded"
    },
    {
      "id": 24,
      "quarter": "Q1",
      "clock": "02:33/02:33/02:33_to_02:20/02:20/02:20/02:20",
      "start": 632,
      "end": 715,
      "duration": 83,
      "startType": "score;foul;foul",
      "endType": "score;foul;foul",
      "startEvent": "34 Brandon Gilbeck | +1 | 2nd of 2 free throws made / 34 Brandon Gilbeck foul drawn / 33 Seounghyun Lee Personal foul; 2 free throws awarded",
      "endEvent": "11 Woosuk Lee | +1 | 2nd of 2 free throws made / 11 Woosuk Lee | +1 | 1st of 2 free throws made / 11 Woosuk Lee foul drawn / 39 Chun Hsiang Lu Personal foul; 2 free throws awarded"
    },
    {
      "id": 25,
      "quarter": "Q1",
      "clock": "02:20/02:20/02:20/02:20_to_02:01",
      "start": 715,
      "end": 791,
      "duration": 76,
      "startType": "score;foul;foul",
      "endType": "score",
      "startEvent": "11 Woosuk Lee | +1 | 2nd of 2 free throws made / 11 Woosuk Lee | +1 | 1st of 2 free throws made / 11 Woosuk Lee foul drawn / 39 Chun Hsiang Lu Personal foul; 2 free throws awarded",
      "endEvent": "2 Riven Ma | +3 | 3pt pullup jump shot made"
    },
    {
      "id": 26,
      "quarter": "Q1",
      "clock": "02:01_to_01:42",
      "start": 791,
      "end": 810,
      "duration": 19,
      "startType": "score",
      "endType": "score",
      "startEvent": "2 Riven Ma | +3 | 3pt pullup jump shot made",
      "endEvent": "31 Jaeseok Jang | +2 | 2pt floating jump shot made"
    },
    {
      "id": 27,
      "quarter": "Q1",
      "clock": "01:42_to_01:34/01:34",
      "start": 810,
      "end": 818,
      "duration": 8,
      "startType": "score",
      "endType": "foul",
      "startEvent": "31 Jaeseok Jang | +2 | 2pt floating jump shot made",
      "endEvent": "9 Ying-Chun Chen foul drawn / 5 Junhyeong Byeon Personal foul"
    },
    {
      "id": 28,
      "quarter": "Q1",
      "clock": "01:34/01:34_to_01:13",
      "start": 818,
      "end": 870,
      "duration": 52,
      "startType": "foul",
      "endType": "defensive_rebound",
      "startEvent": "9 Ying-Chun Chen foul drawn / 5 Junhyeong Byeon Personal foul",
      "endEvent": "12 Jeonghyeon Moon defensive rebound"
    }
  ],
  "Q2": [
    {
      "id": 1,
      "quarter": "Q2",
      "clock": "09:55/09:55_to_09:45",
      "start": 7,
      "end": 34,
      "duration": 27,
      "startType": "foul",
      "endType": "score",
      "startEvent": "5 Junhyeong Byeon foul drawn / 0 Benson Lin Personal foul",
      "endEvent": "31 Jaeseok Jang | +2 | 2PtsFG under the basket, hook shot made"
    },
    {
      "id": 2,
      "quarter": "Q2",
      "clock": "09:45_to_09:17",
      "start": 34,
      "end": 62,
      "duration": 28,
      "startType": "score",
      "endType": "defensive_rebound",
      "startEvent": "31 Jaeseok Jang | +2 | 2PtsFG under the basket, hook shot made",
      "endEvent": "31 Jaeseok Jang defensive rebound"
    },
    {
      "id": 3,
      "quarter": "Q2",
      "clock": "09:17_to_09:08/09:08/09:08",
      "start": 62,
      "end": 74,
      "duration": 12,
      "startType": "defensive_rebound",
      "endType": "foul;turnover;foul",
      "startEvent": "31 Jaeseok Jang defensive rebound",
      "endEvent": "39 Chun Hsiang Lu foul drawn / 12 Jeonghyeon Moon turnover / 12 Jeonghyeon Moon Offensive foul"
    },
    {
      "id": 4,
      "quarter": "Q2",
      "clock": "09:08/09:08/09:08_to_08:59",
      "start": 74,
      "end": 100,
      "duration": 26,
      "startType": "foul;turnover;foul",
      "endType": "turnover",
      "startEvent": "39 Chun Hsiang Lu foul drawn / 12 Jeonghyeon Moon turnover / 12 Jeonghyeon Moon Offensive foul",
      "endEvent": "0 Benson Lin turnover; bad pass"
    },
    {
      "id": 5,
      "quarter": "Q2",
      "clock": "08:59_to_08:49",
      "start": 100,
      "end": 122,
      "duration": 22,
      "startType": "turnover",
      "endType": "score",
      "startEvent": "0 Benson Lin turnover; bad pass",
      "endEvent": "11 Woosuk Lee | +3 | 3pt jump shot made"
    },
    {
      "id": 6,
      "quarter": "Q2",
      "clock": "08:49_to_08:32",
      "start": 122,
      "end": 138,
      "duration": 16,
      "startType": "score",
      "endType": "turnover",
      "startEvent": "11 Woosuk Lee | +3 | 3pt jump shot made",
      "endEvent": "0 Benson Lin turnover; bad pass"
    },
    {
      "id": 7,
      "quarter": "Q2",
      "clock": "08:32_to_08:27",
      "start": 138,
      "end": 167,
      "duration": 29,
      "startType": "turnover",
      "endType": "turnover",
      "startEvent": "0 Benson Lin turnover; bad pass",
      "endEvent": "5 Junhyeong Byeon turnover; ball handling"
    },
    {
      "id": 8,
      "quarter": "Q2",
      "clock": "08:27_to_08:23",
      "start": 167,
      "end": 170,
      "duration": 3,
      "startType": "turnover",
      "endType": "score",
      "startEvent": "5 Junhyeong Byeon turnover; ball handling",
      "endEvent": "9 Ying-Chun Chen | +2 | 2PtsFG under the basket, points from fastbreak + after turnover, layup made"
    },
    {
      "id": 9,
      "quarter": "Q2",
      "clock": "08:23_to_08:05",
      "start": 170,
      "end": 294,
      "duration": 124,
      "startType": "score",
      "endType": "defensive_rebound",
      "startEvent": "9 Ying-Chun Chen | +2 | 2PtsFG under the basket, points from fastbreak + after turnover, layup made",
      "endEvent": "1 Bachir Gadiaga defensive rebound"
    },
    {
      "id": 10,
      "quarter": "Q2",
      "clock": "08:05_to_07:43/07:43/07:43",
      "start": 294,
      "end": 317,
      "duration": 23,
      "startType": "defensive_rebound",
      "endType": "foul;defensive_rebound",
      "startEvent": "1 Bachir Gadiaga defensive rebound",
      "endEvent": "22 Jun Seok Yeo foul drawn / 1 Bachir Gadiaga Personal foul / team defensive rebound"
    },
    {
      "id": 11,
      "quarter": "Q2",
      "clock": "07:43/07:43/07:43_to_07:16",
      "start": 317,
      "end": 362,
      "duration": 45,
      "startType": "foul;defensive_rebound",
      "endType": "defensive_rebound",
      "startEvent": "22 Jun Seok Yeo foul drawn / 1 Bachir Gadiaga Personal foul / team defensive rebound",
      "endEvent": "39 Chun Hsiang Lu defensive rebound"
    },
    {
      "id": 12,
      "quarter": "Q2",
      "clock": "07:16_to_07:13/07:13",
      "start": 362,
      "end": 365,
      "duration": 3,
      "startType": "defensive_rebound",
      "endType": "foul",
      "startEvent": "39 Chun Hsiang Lu defensive rebound",
      "endEvent": "9 Ying-Chun Chen foul drawn / 12 Jeonghyeon Moon Personal foul"
    },
    {
      "id": 13,
      "quarter": "Q2",
      "clock": "07:13/07:13_to_06:56",
      "start": 365,
      "end": 411,
      "duration": 46,
      "startType": "foul",
      "endType": "defensive_rebound",
      "startEvent": "9 Ying-Chun Chen foul drawn / 12 Jeonghyeon Moon Personal foul",
      "endEvent": "11 Woosuk Lee defensive rebound"
    },
    {
      "id": 14,
      "quarter": "Q2",
      "clock": "06:56_to_06:48",
      "start": 411,
      "end": 419,
      "duration": 8,
      "startType": "defensive_rebound",
      "endType": "score",
      "startEvent": "11 Woosuk Lee defensive rebound",
      "endEvent": "22 Jun Seok Yeo | +2 | 2PtsFG under the basket, jump shot made"
    },
    {
      "id": 15,
      "quarter": "Q2",
      "clock": "06:48_to_06:20",
      "start": 419,
      "end": 447,
      "duration": 28,
      "startType": "score",
      "endType": "turnover",
      "startEvent": "22 Jun Seok Yeo | +2 | 2PtsFG under the basket, jump shot made",
      "endEvent": "team turnover; shot clock violation"
    },
    {
      "id": 16,
      "quarter": "Q2",
      "clock": "06:20_to_05:55/05:55/05:55",
      "start": 447,
      "end": 506,
      "duration": 59,
      "startType": "turnover",
      "endType": "defensive_rebound;foul;foul",
      "startEvent": "team turnover; shot clock violation",
      "endEvent": "62 Kuan-Chuan Chen defensive rebound / 33 Seounghyun Lee foul drawn / 62 Kuan-Chuan Chen Personal foul; 2 free throws awarded"
    },
    {
      "id": 17,
      "quarter": "Q2",
      "clock": "05:55/05:55/05:55_to_05:38/05:38/05:38",
      "start": 506,
      "end": 571,
      "duration": 65,
      "startType": "defensive_rebound;foul;foul",
      "endType": "foul;turnover;foul",
      "startEvent": "62 Kuan-Chuan Chen defensive rebound / 33 Seounghyun Lee foul drawn / 62 Kuan-Chuan Chen Personal foul; 2 free throws awarded",
      "endEvent": "6 Junghyun Lee foul drawn / 62 Kuan-Chuan Chen turnover / 62 Kuan-Chuan Chen Offensive foul"
    },
    {
      "id": 18,
      "quarter": "Q2",
      "clock": "05:38/05:38/05:38_to_05:22",
      "start": 571,
      "end": 613,
      "duration": 42,
      "startType": "foul;turnover;foul",
      "endType": "turnover",
      "startEvent": "6 Junghyun Lee foul drawn / 62 Kuan-Chuan Chen turnover / 62 Kuan-Chuan Chen Offensive foul",
      "endEvent": "22 Jun Seok Yeo 2PtsFG under the basket, points after turnover, driving layup missed"
    },
    {
      "id": 19,
      "quarter": "Q2",
      "clock": "05:22_to_05:15/05:15/05:15",
      "start": 613,
      "end": 620,
      "duration": 7,
      "startType": "turnover",
      "endType": "score;defensive_rebound;turnover",
      "startEvent": "22 Jun Seok Yeo 2PtsFG under the basket, points after turnover, driving layup missed",
      "endEvent": "1 Bachir Gadiaga | +2 | 2PtsFG under the basket, fast break, driving layup made / 1 Bachir Gadiaga defensive rebound / 33 Seounghyun Lee 2PtsFG under the basket, points from second chance + after turnover missed"
    },
    {
      "id": 20,
      "quarter": "Q2",
      "clock": "05:15/05:15/05:15_to_05:07",
      "start": 620,
      "end": 627,
      "duration": 7,
      "startType": "score;defensive_rebound;turnover",
      "endType": "turnover",
      "startEvent": "1 Bachir Gadiaga | +2 | 2PtsFG under the basket, fast break, driving layup made / 1 Bachir Gadiaga defensive rebound / 33 Seounghyun Lee 2PtsFG under the basket, points from second chance + after turnover missed",
      "endEvent": "11 Woosuk Lee turnover; ball handling"
    },
    {
      "id": 21,
      "quarter": "Q2",
      "clock": "05:07_to_05:03",
      "start": 627,
      "end": 634,
      "duration": 7,
      "startType": "turnover",
      "endType": "score",
      "startEvent": "11 Woosuk Lee turnover; ball handling",
      "endEvent": "0 Benson Lin | +2 | 2PtsFG under the basket, points from fastbreak + after turnover, layup made"
    },
    {
      "id": 22,
      "quarter": "Q2",
      "clock": "05:03_to_04:50",
      "start": 634,
      "end": 736,
      "duration": 102,
      "startType": "score",
      "endType": "defensive_rebound",
      "startEvent": "0 Benson Lin | +2 | 2PtsFG under the basket, points from fastbreak + after turnover, layup made",
      "endEvent": "9 Ying-Chun Chen defensive rebound"
    },
    {
      "id": 23,
      "quarter": "Q2",
      "clock": "04:50_to_04:33/04:33/04:33/04:33",
      "start": 736,
      "end": 753,
      "duration": 17,
      "startType": "defensive_rebound",
      "endType": "score;foul;foul",
      "startEvent": "9 Ying-Chun Chen defensive rebound",
      "endEvent": "9 Ying-Chun Chen | +1 | 2nd of 2 free throws made / 9 Ying-Chun Chen | +1 | 1st of 2 free throws made / 9 Ying-Chun Chen foul drawn / 11 Woosuk Lee Personal foul; 2 free throws awarded"
    },
    {
      "id": 24,
      "quarter": "Q2",
      "clock": "04:33/04:33/04:33/04:33_to_04:07",
      "start": 753,
      "end": 835,
      "duration": 82,
      "startType": "score;foul;foul",
      "endType": "score",
      "startEvent": "9 Ying-Chun Chen | +1 | 2nd of 2 free throws made / 9 Ying-Chun Chen | +1 | 1st of 2 free throws made / 9 Ying-Chun Chen foul drawn / 11 Woosuk Lee Personal foul; 2 free throws awarded",
      "endEvent": "2 Junyong Choi | +2 | 2pt jump shot made"
    },
    {
      "id": 25,
      "quarter": "Q2",
      "clock": "04:07_to_03:59/03:59/03:59/03:59",
      "start": 835,
      "end": 843,
      "duration": 8,
      "startType": "score",
      "endType": "defensive_rebound;score;foul;foul",
      "startEvent": "2 Junyong Choi | +2 | 2pt jump shot made",
      "endEvent": "22 Jun Seok Yeo defensive rebound / 9 Ying-Chun Chen | +1 | 1st of 2 free throws made / 9 Ying-Chun Chen foul drawn / 2 Junyong Choi Personal foul; 2 free throws awarded"
    },
    {
      "id": 26,
      "quarter": "Q2",
      "clock": "03:59/03:59/03:59/03:59_to_03:44",
      "start": 843,
      "end": 904,
      "duration": 61,
      "startType": "defensive_rebound;score;foul;foul",
      "endType": "score",
      "startEvent": "22 Jun Seok Yeo defensive rebound / 9 Ying-Chun Chen | +1 | 1st of 2 free throws made / 9 Ying-Chun Chen foul drawn / 2 Junyong Choi Personal foul; 2 free throws awarded",
      "endEvent": "6 Junghyun Lee | +2 | 2PtsFG under the basket, jump shot made"
    },
    {
      "id": 27,
      "quarter": "Q2",
      "clock": "03:44_to_03:22",
      "start": 904,
      "end": 925,
      "duration": 21,
      "startType": "score",
      "endType": "defensive_rebound",
      "startEvent": "6 Junghyun Lee | +2 | 2PtsFG under the basket, jump shot made",
      "endEvent": "22 Jun Seok Yeo defensive rebound"
    },
    {
      "id": 28,
      "quarter": "Q2",
      "clock": "03:22_to_02:56/02:56",
      "start": 925,
      "end": 952,
      "duration": 27,
      "startType": "defensive_rebound",
      "endType": "foul",
      "startEvent": "22 Jun Seok Yeo defensive rebound",
      "endEvent": "6 Junghyun Lee foul drawn / 9 Ying-Chun Chen Personal foul; 2 free throws awarded"
    },
    {
      "id": 29,
      "quarter": "Q2",
      "clock": "02:56/02:56_to_02:54",
      "start": 952,
      "end": 954,
      "duration": 2,
      "startType": "foul",
      "endType": "score",
      "startEvent": "6 Junghyun Lee foul drawn / 9 Ying-Chun Chen Personal foul; 2 free throws awarded",
      "endEvent": "6 Junghyun Lee | +1 | 2nd of 2 free throws made"
    },
    {
      "id": 30,
      "quarter": "Q2",
      "clock": "02:54_to_02:13",
      "start": 954,
      "end": 1087,
      "duration": 133,
      "startType": "score",
      "endType": "defensive_rebound",
      "startEvent": "6 Junghyun Lee | +1 | 2nd of 2 free throws made",
      "endEvent": "11 Woosuk Lee defensive rebound"
    },
    {
      "id": 31,
      "quarter": "Q2",
      "clock": "02:13_to_01:42",
      "start": 1087,
      "end": 1144,
      "duration": 57,
      "startType": "defensive_rebound",
      "endType": "score",
      "startEvent": "11 Woosuk Lee defensive rebound",
      "endEvent": "11 Woosuk Lee | +2 | 2PtsFG inside right, jump shot made"
    },
    {
      "id": 32,
      "quarter": "Q2",
      "clock": "01:42_to_01:24",
      "start": 1144,
      "end": 1162,
      "duration": 18,
      "startType": "score",
      "endType": "score",
      "startEvent": "11 Woosuk Lee | +2 | 2PtsFG inside right, jump shot made",
      "endEvent": "0 Benson Lin | +2 | 2pt jump shot made"
    },
    {
      "id": 33,
      "quarter": "Q2",
      "clock": "01:24_to_01:10",
      "start": 1162,
      "end": 1176,
      "duration": 14,
      "startType": "score",
      "endType": "defensive_rebound",
      "startEvent": "0 Benson Lin | +2 | 2pt jump shot made",
      "endEvent": "34 Brandon Gilbeck defensive rebound"
    }
  ],
  "Q3": [
    {
      "id": 1,
      "quarter": "Q3",
      "clock": "09:48_to_09:18",
      "start": 19,
      "end": 75,
      "duration": 56,
      "startType": "defensive_rebound",
      "endType": "defensive_rebound",
      "startEvent": "31 Jaeseok Jang defensive rebound",
      "endEvent": "0 Benson Lin defensive rebound"
    },
    {
      "id": 2,
      "quarter": "Q3",
      "clock": "09:18_to_09:10",
      "start": 75,
      "end": 83,
      "duration": 8,
      "startType": "defensive_rebound",
      "endType": "defensive_rebound",
      "startEvent": "0 Benson Lin defensive rebound",
      "endEvent": "31 Jaeseok Jang defensive rebound"
    },
    {
      "id": 3,
      "quarter": "Q3",
      "clock": "09:10_to_09:03",
      "start": 83,
      "end": 90,
      "duration": 7,
      "startType": "defensive_rebound",
      "endType": "score",
      "startEvent": "31 Jaeseok Jang defensive rebound",
      "endEvent": "6 Junghyun Lee | +2 | 2PtsFG under the basket, driving layup made"
    },
    {
      "id": 4,
      "quarter": "Q3",
      "clock": "09:03_to_08:39",
      "start": 90,
      "end": 114,
      "duration": 24,
      "startType": "score",
      "endType": "score",
      "startEvent": "6 Junghyun Lee | +2 | 2PtsFG under the basket, driving layup made",
      "endEvent": "34 Brandon Gilbeck | +2 | 2PtsFG under the basket made"
    },
    {
      "id": 5,
      "quarter": "Q3",
      "clock": "08:39_to_08:34",
      "start": 114,
      "end": 119,
      "duration": 5,
      "startType": "score",
      "endType": "score",
      "startEvent": "34 Brandon Gilbeck | +2 | 2PtsFG under the basket made",
      "endEvent": "31 Jaeseok Jang | +2 | 2PtsFG under the basket, fast break, layup made"
    },
    {
      "id": 6,
      "quarter": "Q3",
      "clock": "08:34_to_08:22",
      "start": 119,
      "end": 131,
      "duration": 12,
      "startType": "score",
      "endType": "turnover",
      "startEvent": "31 Jaeseok Jang | +2 | 2PtsFG under the basket, fast break, layup made",
      "endEvent": "10 Long-Mao Hu turnover; bad pass"
    },
    {
      "id": 7,
      "quarter": "Q3",
      "clock": "08:22_to_08:07",
      "start": 131,
      "end": 167,
      "duration": 36,
      "startType": "turnover",
      "endType": "score",
      "startEvent": "10 Long-Mao Hu turnover; bad pass",
      "endEvent": "33 Seounghyun Lee | +2 | 2PtsFG inside right, points after turnover, jump shot made"
    },
    {
      "id": 8,
      "quarter": "Q3",
      "clock": "08:07_to_07:53/07:53",
      "start": 167,
      "end": 180,
      "duration": 13,
      "startType": "score",
      "endType": "foul",
      "startEvent": "33 Seounghyun Lee | +2 | 2PtsFG inside right, points after turnover, jump shot made",
      "endEvent": "9 Ying-Chun Chen foul drawn / 6 Junghyun Lee Personal foul"
    },
    {
      "id": 9,
      "quarter": "Q3",
      "clock": "07:53/07:53_to_07:39",
      "start": 180,
      "end": 226,
      "duration": 46,
      "startType": "foul",
      "endType": "score",
      "startEvent": "9 Ying-Chun Chen foul drawn / 6 Junghyun Lee Personal foul",
      "endEvent": "34 Brandon Gilbeck | +2 | 2PtsFG under the basket, alley oop dunk made"
    },
    {
      "id": 10,
      "quarter": "Q3",
      "clock": "07:39_to_07:24",
      "start": 226,
      "end": 272,
      "duration": 46,
      "startType": "score",
      "endType": "score",
      "startEvent": "34 Brandon Gilbeck | +2 | 2PtsFG under the basket, alley oop dunk made",
      "endEvent": "22 Jun Seok Yeo | +2 | 2PtsFG under the basket, jump shot made"
    },
    {
      "id": 11,
      "quarter": "Q3",
      "clock": "07:24_to_07:13",
      "start": 272,
      "end": 283,
      "duration": 11,
      "startType": "score",
      "endType": "score",
      "startEvent": "22 Jun Seok Yeo | +2 | 2PtsFG under the basket, jump shot made",
      "endEvent": "9 Ying-Chun Chen | +2 | 2pt floating jump shot made"
    },
    {
      "id": 12,
      "quarter": "Q3",
      "clock": "07:13_to_07:05/07:05",
      "start": 283,
      "end": 291,
      "duration": 8,
      "startType": "score",
      "endType": "foul",
      "startEvent": "9 Ying-Chun Chen | +2 | 2pt floating jump shot made",
      "endEvent": "5 Junhyeong Byeon foul drawn / 9 Ying-Chun Chen Personal foul"
    },
    {
      "id": 13,
      "quarter": "Q3",
      "clock": "07:05/07:05_to_06:53",
      "start": 291,
      "end": 323,
      "duration": 32,
      "startType": "foul",
      "endType": "defensive_rebound",
      "startEvent": "5 Junhyeong Byeon foul drawn / 9 Ying-Chun Chen Personal foul",
      "endEvent": "10 Long-Mao Hu defensive rebound"
    },
    {
      "id": 14,
      "quarter": "Q3",
      "clock": "06:53_to_06:44",
      "start": 323,
      "end": 332,
      "duration": 9,
      "startType": "defensive_rebound",
      "endType": "defensive_rebound",
      "startEvent": "10 Long-Mao Hu defensive rebound",
      "endEvent": "33 Seounghyun Lee defensive rebound"
    },
    {
      "id": 15,
      "quarter": "Q3",
      "clock": "06:44_to_06:11",
      "start": 332,
      "end": 381,
      "duration": 49,
      "startType": "defensive_rebound",
      "endType": "score",
      "startEvent": "33 Seounghyun Lee defensive rebound",
      "endEvent": "7 Kisang Yu | +2 | 2pt pullup jump shot made"
    },
    {
      "id": 16,
      "quarter": "Q3",
      "clock": "06:11_to_05:48",
      "start": 381,
      "end": 404,
      "duration": 23,
      "startType": "score",
      "endType": "defensive_rebound",
      "startEvent": "7 Kisang Yu | +2 | 2pt pullup jump shot made",
      "endEvent": "2 Junyong Choi defensive rebound"
    },
    {
      "id": 17,
      "quarter": "Q3",
      "clock": "05:48_to_05:36/05:36/05:36",
      "start": 404,
      "end": 416,
      "duration": 12,
      "startType": "defensive_rebound",
      "endType": "score;foul;foul",
      "startEvent": "2 Junyong Choi defensive rebound",
      "endEvent": "2 Junyong Choi | +1 | 2nd of 2 free throws made / 2 Junyong Choi foul drawn / 0 Benson Lin Personal foul; 2 free throws awarded"
    },
    {
      "id": 18,
      "quarter": "Q3",
      "clock": "05:36/05:36/05:36_to_05:23",
      "start": 416,
      "end": 502,
      "duration": 86,
      "startType": "score;foul;foul",
      "endType": "defensive_rebound",
      "startEvent": "2 Junyong Choi | +1 | 2nd of 2 free throws made / 2 Junyong Choi foul drawn / 0 Benson Lin Personal foul; 2 free throws awarded",
      "endEvent": "5 Junhyeong Byeon defensive rebound"
    },
    {
      "id": 19,
      "quarter": "Q3",
      "clock": "05:23_to_05:10",
      "start": 502,
      "end": 515,
      "duration": 13,
      "startType": "defensive_rebound",
      "endType": "score",
      "startEvent": "5 Junhyeong Byeon defensive rebound",
      "endEvent": "36 Daniel Edi | +2 | 2PtsFG under the basket, layup made"
    },
    {
      "id": 20,
      "quarter": "Q3",
      "clock": "05:10_to_04:50",
      "start": 515,
      "end": 535,
      "duration": 20,
      "startType": "score",
      "endType": "score",
      "startEvent": "36 Daniel Edi | +2 | 2PtsFG under the basket, layup made",
      "endEvent": "34 Brandon Gilbeck | +2 | 2PtsFG under the basket made"
    },
    {
      "id": 21,
      "quarter": "Q3",
      "clock": "04:50_to_04:42",
      "start": 535,
      "end": 543,
      "duration": 8,
      "startType": "score",
      "endType": "turnover",
      "startEvent": "34 Brandon Gilbeck | +2 | 2PtsFG under the basket made",
      "endEvent": "5 Junhyeong Byeon turnover; ball handling"
    },
    {
      "id": 22,
      "quarter": "Q3",
      "clock": "04:42_to_04:38",
      "start": 543,
      "end": 547,
      "duration": 4,
      "startType": "turnover",
      "endType": "score",
      "startEvent": "5 Junhyeong Byeon turnover; ball handling",
      "endEvent": "2 Riven Ma | +2 | 2PtsFG under the basket, points from fastbreak + after turnover, driving layup made"
    },
    {
      "id": 23,
      "quarter": "Q3",
      "clock": "04:38_to_04:23/04:23/04:23/04:23",
      "start": 547,
      "end": 665,
      "duration": 118,
      "startType": "score",
      "endType": "score;foul;foul",
      "startEvent": "2 Riven Ma | +2 | 2PtsFG under the basket, points from fastbreak + after turnover, driving layup made",
      "endEvent": "7 Kisang Yu | +1 | 2nd of 2 free throws made / 7 Kisang Yu | +1 | 1st of 2 free throws made / 7 Kisang Yu foul drawn / 1 Bachir Gadiaga Personal foul; 2 free throws awarded"
    },
    {
      "id": 24,
      "quarter": "Q3",
      "clock": "04:23/04:23/04:23/04:23_to_04:11",
      "start": 665,
      "end": 731,
      "duration": 66,
      "startType": "score;foul;foul",
      "endType": "score",
      "startEvent": "7 Kisang Yu | +1 | 2nd of 2 free throws made / 7 Kisang Yu | +1 | 1st of 2 free throws made / 7 Kisang Yu foul drawn / 1 Bachir Gadiaga Personal foul; 2 free throws awarded",
      "endEvent": "34 Brandon Gilbeck | +2 | 2PtsFG under the basket, dunk made"
    },
    {
      "id": 25,
      "quarter": "Q3",
      "clock": "04:11_to_03:57/03:57",
      "start": 731,
      "end": 745,
      "duration": 14,
      "startType": "score",
      "endType": "foul",
      "startEvent": "34 Brandon Gilbeck | +2 | 2PtsFG under the basket, dunk made",
      "endEvent": "36 Daniel Edi foul drawn / 0 Benson Lin Personal foul"
    },
    {
      "id": 26,
      "quarter": "Q3",
      "clock": "03:57/03:57_to_03:55",
      "start": 745,
      "end": 770,
      "duration": 25,
      "startType": "foul",
      "endType": "score",
      "startEvent": "36 Daniel Edi foul drawn / 0 Benson Lin Personal foul",
      "endEvent": "22 Jun Seok Yeo | +2 | 2PtsFG under the basket, jump shot made"
    },
    {
      "id": 27,
      "quarter": "Q3",
      "clock": "03:55_to_03:22",
      "start": 770,
      "end": 803,
      "duration": 33,
      "startType": "score",
      "endType": "score",
      "startEvent": "22 Jun Seok Yeo | +2 | 2PtsFG under the basket, jump shot made",
      "endEvent": "34 Brandon Gilbeck | +2 | 2PtsFG under the basket, jump shot made"
    },
    {
      "id": 28,
      "quarter": "Q3",
      "clock": "03:22_to_03:05",
      "start": 803,
      "end": 821,
      "duration": 18,
      "startType": "score",
      "endType": "turnover",
      "startEvent": "34 Brandon Gilbeck | +2 | 2PtsFG under the basket, jump shot made",
      "endEvent": "5 Junhyeong Byeon turnover; bad pass"
    },
    {
      "id": 29,
      "quarter": "Q3",
      "clock": "03:05_to_02:59",
      "start": 821,
      "end": 826,
      "duration": 5,
      "startType": "turnover",
      "endType": "turnover",
      "startEvent": "5 Junhyeong Byeon turnover; bad pass",
      "endEvent": "2 Riven Ma 3PtsFG outside left, points from fastbreak + after turnover, jump shot missed"
    },
    {
      "id": 30,
      "quarter": "Q3",
      "clock": "02:59_to_02:55",
      "start": 826,
      "end": 830,
      "duration": 4,
      "startType": "turnover",
      "endType": "defensive_rebound",
      "startEvent": "2 Riven Ma 3PtsFG outside left, points from fastbreak + after turnover, jump shot missed",
      "endEvent": "7 Kisang Yu defensive rebound"
    },
    {
      "id": 31,
      "quarter": "Q3",
      "clock": "02:55_to_02:47",
      "start": 830,
      "end": 838,
      "duration": 8,
      "startType": "defensive_rebound",
      "endType": "score",
      "startEvent": "7 Kisang Yu defensive rebound",
      "endEvent": "7 Kisang Yu | +3 | 3pt jump shot from center made"
    },
    {
      "id": 32,
      "quarter": "Q3",
      "clock": "02:47_to_02:34",
      "start": 838,
      "end": 851,
      "duration": 13,
      "startType": "score",
      "endType": "turnover",
      "startEvent": "7 Kisang Yu | +3 | 3pt jump shot from center made",
      "endEvent": "34 Brandon Gilbeck turnover; ball handling"
    },
    {
      "id": 33,
      "quarter": "Q3",
      "clock": "02:34_to_02:29",
      "start": 851,
      "end": 855,
      "duration": 4,
      "startType": "turnover",
      "endType": "score",
      "startEvent": "34 Brandon Gilbeck turnover; ball handling",
      "endEvent": "36 Daniel Edi | +2 | 2PtsFG under the basket, points from fastbreak + after turnover, layup made"
    },
    {
      "id": 34,
      "quarter": "Q3",
      "clock": "02:29_to_02:10",
      "start": 855,
      "end": 985,
      "duration": 130,
      "startType": "score",
      "endType": "defensive_rebound",
      "startEvent": "36 Daniel Edi | +2 | 2PtsFG under the basket, points from fastbreak + after turnover, layup made",
      "endEvent": "3 Jihoon Park defensive rebound"
    },
    {
      "id": 35,
      "quarter": "Q3",
      "clock": "02:10_to_01:43",
      "start": 985,
      "end": 1012,
      "duration": 27,
      "startType": "defensive_rebound",
      "endType": "defensive_rebound",
      "startEvent": "3 Jihoon Park defensive rebound",
      "endEvent": "1 Bachir Gadiaga defensive rebound"
    },
    {
      "id": 36,
      "quarter": "Q3",
      "clock": "01:43_to_01:36",
      "start": 1012,
      "end": 1019,
      "duration": 7,
      "startType": "defensive_rebound",
      "endType": "score",
      "startEvent": "1 Bachir Gadiaga defensive rebound",
      "endEvent": "1 Bachir Gadiaga | +2 | 2PtsFG under the basket, driving layup made"
    },
    {
      "id": 37,
      "quarter": "Q3",
      "clock": "01:36_to_01:12",
      "start": 1019,
      "end": 1043,
      "duration": 24,
      "startType": "score",
      "endType": "turnover",
      "startEvent": "1 Bachir Gadiaga | +2 | 2PtsFG under the basket, driving layup made",
      "endEvent": "31 Jaeseok Jang turnover; bad pass"
    },
    {
      "id": 38,
      "quarter": "Q3",
      "clock": "01:12_to_01:10/01:10",
      "start": 1043,
      "end": 1045,
      "duration": 2,
      "startType": "turnover",
      "endType": "foul",
      "startEvent": "31 Jaeseok Jang turnover; bad pass",
      "endEvent": "7 Ai-Che Yu foul drawn / 7 Kisang Yu Personal foul"
    }
  ]
};

const modeButtons = document.querySelectorAll(".mode-button");
const fanView = document.querySelector("#fan-view");
const clubView = document.querySelector("#club-view");
const clipList = document.querySelector("#clip-list");
const pbpTimeline = document.querySelector("#pbp-timeline");
const pbpMatchCount = document.querySelector("#pbp-match-count");
const pbpQuarterPill = document.querySelector("#pbp-quarter-pill");
const pbpQuarterButtons = document.querySelectorAll(".pbp-quarter-button[data-pbp-quarter]");
const pbpVideoShell = document.querySelector("#pbp-video-shell");
const pbpVideo = document.querySelector("#pbp-video");
const pbpVideoTitle = document.querySelector("#pbp-video-title");
const pbpVideoMeta = document.querySelector("#pbp-video-meta");
const pbpPostModal = document.querySelector("#pbp-post-modal");
const pbpPostVideo = document.querySelector("#pbp-post-video");
const pbpPostVideoNote = document.querySelector("#pbp-post-video-note");
const pbpPostCloseButtons = document.querySelectorAll("[data-close-pbp-post]");
const pbpPostTitle = document.querySelector("#pbp-post-title");
const pbpPostMeta = document.querySelector("#pbp-post-meta");
const pbpPostTeam = document.querySelector("#pbp-post-team");
const pbpPostEvent = document.querySelector("#pbp-post-event");
const pbpPostCopy = document.querySelector("#pbp-post-copy");
const clipCountLabel = document.querySelector("#clip-count-label");
const clipFilterButtons = document.querySelectorAll(".clip-filter-button");
const generatedEmptyState = document.querySelector("#ai-generated-empty");
const inlineTacticPanel = document.querySelector(".inline-tactic-panel");
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
const authForm = document.querySelector("#auth-form");
const authStatus = document.querySelector("#auth-status");
const authLogoutButton = document.querySelector("#auth-logout");
const mateCreateButtons = document.querySelectorAll("[data-open-mate-create]");
const mateCreateModal = document.querySelector("#mate-create-modal");
const mateCreateForm = document.querySelector("#mate-create-form");
const mateCloseButtons = document.querySelectorAll("[data-close-mate]");
const mateDateInput = document.querySelector("#mate-date-input");
const mateLocationInput = document.querySelector("#mate-location-input");
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

function formatPbpClock(clock) {
  const [rawStart = "", rawEnd = ""] = clock.split("_to_");
  const firstStart = rawStart.split(" / ")[0] || rawStart;
  const firstEnd = rawEnd.split(" / ")[0] || rawEnd;
  return firstEnd ? `${firstStart} → ${firstEnd}` : firstStart;
}

function formatPbpType(type) {
  return type
    .split(";")
    .map((item) => {
      if (item === "defensive_rebound") return "DEF REB";
      if (item === "turnover") return "TOV";
      if (item === "score") return "SCORE";
      if (item === "foul") return "FOUL";
      return item.toUpperCase();
    })
    .join(" + ");
}

function eventTeam(eventText) {
  const koreaNames = [
    "Jun Seok Yeo",
    "Junyong Choi",
    "Jaeseok Jang",
    "Woosuk Lee",
    "Junghyun Lee",
    "Jeonghyeon Moon",
    "Kisang Yu",
    "Junhyeong Byeon",
    "Jihoon Park",
    "Seounghyun Lee",
  ];
  const taipeiNames = [
    "Brandon Gilbeck",
    "Benson Lin",
    "Long-Mao Hu",
    "Ying-Chun Chen",
    "Chun Hsiang Lu",
    "Riven Ma",
    "Bachir Gadiaga",
    "Ai-Che Yu",
    "Chia-Kang Li",
  ];

  const matches = [
    ...koreaNames.map((name) => ({ team: "korea", index: eventText.indexOf(name) })),
    ...taipeiNames.map((name) => ({ team: "taipei", index: eventText.indexOf(name) })),
  ].filter((match) => match.index >= 0);

  matches.sort((a, b) => a.index - b.index);
  return matches[0]?.team || "neutral";
}

function teamLabel(team) {
  if (team === "korea") return "Korea";
  if (team === "taipei") return "Chinese Taipei";
  return "Neutral";
}

function sanitizePbpClipPart(value) {
  return value
    .replaceAll(" / ", "/")
    .replaceAll(";", "-")
    .replaceAll(":", "")
    .replaceAll("/", "-")
    .replaceAll(" ", "_");
}

function pbpClipSource(clip) {
  const quarter = clip.quarter || selectedPbpQuarter;
  return `/api/highlights/clips/${quarter}/${clip.id}/video`;
}

function currentPbpClips() {
  return PBP_CLIPS_BY_QUARTER[selectedPbpQuarter] || [];
}

function renderPlayByPlayTimeline() {
  if (!pbpTimeline) return;

  pbpTimeline.innerHTML = "";
  const clips = currentPbpClips();

  if (pbpQuarterPill) pbpQuarterPill.textContent = `FIBA ${selectedPbpQuarter}`;
  if (pbpMatchCount) pbpMatchCount.textContent = `${selectedPbpQuarter} · ${clips.length} clips`;
  pbpQuarterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.pbpQuarter === selectedPbpQuarter);
  });

  if (!clips.length) {
    const empty = document.createElement("p");
    empty.className = "pbp-empty";
    empty.textContent = `${selectedPbpQuarter} clipped 영상은 아직 생성되지 않았습니다. 1Q~3Q는 아래 timeline에서 바로 재생할 수 있습니다.`;
    pbpTimeline.append(empty);
    return;
  }

  clips.forEach((clip) => {
    const team = eventTeam(`${clip.startEvent} ${clip.endEvent}`);
    const row = document.createElement("button");
    row.className = "pbp-row";
    row.type = "button";
    row.dataset.pbpClipQuarter = clip.quarter;
    row.dataset.pbpClipId = String(clip.id);
    row.setAttribute(
      "aria-label",
      `${formatPbpClock(clip.clock)} ${clip.startEvent} to ${clip.endEvent}`,
    );

    const eventCard = document.createElement("span");
    eventCard.className = `pbp-event ${team}`;
    eventCard.innerHTML = `
      <span class="pbp-before">${escapeHtml(clip.startEvent)}</span>
      <strong>${escapeHtml(clip.endEvent)}</strong>
      <small>${teamLabel(team)} · ${formatPbpType(clip.startType)} → ${formatPbpType(clip.endType)}</small>
    `;

    const time = document.createElement("span");
    time.className = "pbp-time";
    time.innerHTML = `
      <span class="pbp-clock">${formatPbpClock(clip.clock)}</span>
      <span class="pbp-play" aria-hidden="true"></span>
      <span>${clip.duration}s</span>
    `;

    row.append(eventCard, time);
    pbpTimeline.append(row);
  });
}

function openPbpClip(clipId) {
  const clip = currentPbpClips().find((item) => item.id === Number(clipId));
  if (!clip || !pbpPostModal || !pbpPostVideo) return;

  activePbpClip = { ...clip, playbackEnd: clip.duration };
  pbpTimeline?.querySelectorAll(".pbp-row").forEach((row) => {
    row.classList.toggle("active", row.dataset.pbpClipId === String(clip.id));
  });

  if (pbpVideoShell) pbpVideoShell.hidden = true;
  const clipSource = pbpClipSource(clip);
  const seekAndPlay = () => {
    pbpPostVideo.currentTime = 0;
    pbpPostVideo.play().catch(() => {});
  };

  if (pbpPostVideo.getAttribute("src") !== clipSource) {
    pbpPostVideo.src = clipSource;
    pbpPostVideo.load();
    pbpPostVideo.addEventListener("loadedmetadata", seekAndPlay, { once: true });
  } else {
    seekAndPlay();
  }

  if (pbpPostTitle) {
    pbpPostTitle.textContent = `${formatPbpClock(clip.clock)} · ${clip.endEvent}`;
  }
  if (pbpPostMeta) {
    pbpPostMeta.textContent = `${clip.duration}s · ${formatPbpType(clip.startType)} → ${formatPbpType(clip.endType)}`;
  }
  if (pbpPostTeam) {
    pbpPostTeam.textContent = teamLabel(eventTeam(`${clip.startEvent} ${clip.endEvent}`));
  }
  if (pbpPostEvent) {
    pbpPostEvent.textContent = clip.endEvent;
  }
  if (pbpPostCopy) {
    pbpPostCopy.textContent = `${clip.startEvent} 이후 ${clip.duration}초 possession 구간입니다. 시작 이벤트와 종료 이벤트를 cut point로 매칭한 하이라이트 클립입니다.`;
  }
  if (pbpPostVideoNote) {
    pbpPostVideoNote.textContent = "Git LFS 영상 파일이 내려와 있으면 여기서 바로 재생됩니다.";
  }

  pbpPostModal.classList.add("open");
  pbpPostModal.setAttribute("aria-hidden", "false");
}

function closePbpPost() {
  pbpPostModal?.classList.remove("open");
  pbpPostModal?.setAttribute("aria-hidden", "true");
  if (pbpPostVideo) pbpPostVideo.pause();
}

function gameIncludesTeam(game, teamCode) {
  return [game?.home?.code, game?.away?.code].includes(teamCode);
}

function seasonGamesForTeam(teamCode) {
  return KBL_SEASON_GAMES.filter((game) => gameIncludesTeam(game, teamCode));
}

function winnerForMatch(match) {
  if (!match?.isEnded) return null;
  return match.home.score > match.away.score ? match.home : match.away;
}

function loserForMatch(match) {
  const winner = winnerForMatch(match);
  if (!winner) return null;
  return winner.code === match.home.code ? match.away : match.home;
}

function selectedTeamResultForGame(game, teamCode) {
  const side = game.home.code === teamCode ? game.home : game.away;
  const opponent = side.code === game.home.code ? game.away : game.home;
  if (!game.isEnded) return `${game.time} 예정`;
  const result = side.score > opponent.score ? "승" : side.score < opponent.score ? "패" : "무";
  return `${result} ${side.score}-${opponent.score}`;
}

function createMatchFromSeasonGame(game) {
  const winner = winnerForMatch(game);
  const loser = loserForMatch(game);
  const winnerText = winner && loser ? `${winner.name} ${winner.score}-${loser.score} 승리` : "경기 예정";

  return {
    ...game,
    source: {
      ...KBL_SCHEDULE_SOURCE,
      ...game.source,
    },
    crowd: null,
    preGame: {
      title: `${game.home.shortName} vs ${game.away.shortName} 직관메이트`,
      flow: ["팀 선택", "경기 선택", "직관메이트 창", "직관메이트 찾기/모집"],
      summary: [
        `${game.seasonName} ${game.category} 공식 일정에 등록된 ${game.home.name} vs ${game.away.name} 경기입니다.`,
        `${game.dateLabel} ${game.time}, ${game.venue}에서 열리는 매치업으로 경기 전에는 직관메이트 모집을 먼저 보여줍니다.`,
        `${game.tv || "중계 정보 업데이트 예정"} 편성 기준으로 경기 전 알림, 좌석 선호, 응원 스타일을 묶어 메이트를 추천합니다.`,
      ],
      mate: {
        title: `${game.home.shortName} vs ${game.away.shortName} 같이 볼 팬 찾기`,
        copy: `${game.venue}에서 ${game.category} 분위기를 같이 볼 팬을 모집합니다.`,
        gameChoice: `${game.home.name} vs ${game.away.name}`,
        seatChoice: game.home.code === "50" ? "창원 홈 응원석" : "응원석",
        styleChoice: "초보 환영",
        tags: [game.category, game.venue, "초보 환영"],
      },
    },
    postGame: {
      title: winnerText,
      flow: ["팀 선택", "경기 선택", "경기 summary/오늘 잘한 선수 확인", "하이라이트 메이커에서 출전 선수만 선택", "AI 하이라이트 생성"],
      summary: [
        `${game.category} ${game.home.name} ${game.home.score}-${game.away.score} ${game.away.name} 경기 결과를 기반으로 summary를 구성합니다.`,
        `${winnerText}로 기록됐고, 경기 후 팬 웹서비스에서는 선택 팀의 시즌 기록 상위 선수를 하이라이트 후보로 먼저 보여줍니다.`,
        "상세 출전 기록이 연결된 경기에서는 실제 출전 선수만 선택 가능하고, 그 외 경기는 공식 일정+시즌 선수 기록 기반 시연으로 표시합니다.",
      ],
      fanComments: [
        `${game.home.shortName} vs ${game.away.shortName} 경기는 결과만 봐도 관전 포인트가 명확했어요.`,
        "경기 summary를 먼저 보니까 농구를 잘 몰라도 오늘 흐름을 이해하기 쉬웠습니다.",
        "다음에는 이 경기 하이라이트로 직관메이트를 구해보고 싶어요.",
      ],
      starPlayers: [],
    },
    playerStats: {},
    inactivePlayers: {},
    dashboardSignals: [
      `${game.category} 경기 반응을 다음 홈경기 이벤트로 연결`,
      `${game.home.shortName} vs ${game.away.shortName} 하이라이트를 스폰서 패키지 소재로 활용`,
      "경기 선택, summary 열람, 하이라이트 생성 흐름을 ROI 퍼널로 추적",
    ],
  };
}

function matchById(matchId) {
  if (matchId === FEATURED_FIBA_MATCH.id) return FEATURED_FIBA_MATCH;
  if (matchId === FEATURED_KBL_MATCH.id) return FEATURED_KBL_MATCH;

  const seasonGame = KBL_SEASON_GAMES.find((game) => game.id === matchId);
  return seasonGame ? createMatchFromSeasonGame(seasonGame) : null;
}

function featuredMatchForTeam(teamCode) {
  const teamGames = seasonGamesForTeam(teamCode);
  const nextMatchId = teamGames.some((game) => game.id === selectedMatchId)
    ? selectedMatchId
    : teamGames[0]?.id;

  if (!nextMatchId) return null;
  selectedMatchId = nextMatchId;
  return matchById(nextMatchId);
}

function parsePlayClock(clock = "00:00") {
  const [minutes, seconds] = String(clock).split(":").map((part) => Number(part));
  return {
    minutes: Number.isFinite(minutes) ? minutes : 0,
    seconds: Number.isFinite(seconds) ? seconds : 0,
  };
}

function matchOpponentFor(match, teamCode) {
  if (!match) return null;
  return match.home.code === teamCode ? match.away : match.home;
}

function matchSideFor(match, teamCode) {
  if (!match) return null;
  return match.home.code === teamCode ? match.home : match.away;
}

function matchStatRowsFor(teamCode, match = FEATURED_KBL_MATCH) {
  const rows = match?.playerStats?.[teamCode];
  if (!rows) return null;

  return rows.map(
    ([
      pcode,
      name,
      position,
      backNumber,
      score,
      rb,
      ast,
      threep,
      stl,
      bs,
      playClock,
      marginCn,
    ]) => {
      const { minutes, seconds } = parsePlayClock(playClock);

      return {
        player: {
          pcode,
          name,
          teamCode,
          team: TEAM_CONFIGS[teamCode]?.name || "",
          position,
          backNumber,
        },
        records: {
          score,
          rb,
          ast,
          threep,
          stl,
          bs,
          playMin: minutes,
          playSec: seconds,
          marginCn,
        },
        gameCount: 1,
        startCount: 0,
        matchAvailable: true,
        playClock,
      };
    },
  );
}

function matchPlayerOptions(context) {
  if (!context.match) return null;

  const teamCode = context.team.code;
  const playedRows = matchStatRowsFor(teamCode, context.match) || [];
  const inactiveRows = context.match.inactivePlayers?.[teamCode] || [];

  if (!playedRows.length && !inactiveRows.length) return null;

  return [
    ...playedRows.map((row) => ({
      ...row.player,
      matchAvailable: true,
      matchLine: `${row.records.score}점 · ${row.records.rb}리바운드 · ${row.playClock}`,
    })),
    ...inactiveRows.map((player) => ({
      ...player,
      teamCode,
      team: context.team.name,
      matchAvailable: false,
      matchLine: player.reason,
    })),
  ];
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
  const kblEntries = kblData.players?.active?.filter((player) => player.teamCode === code) || [];
  if (kblEntries.length) return kblEntries;

  return (TEAM_CONFIGS[code]?.fallbackStats || []).map((row) => ({
    ...row.player,
    teamCode: code,
    position: row.player.position || "GD",
    backNumber: row.player.backNumber || "",
  }));
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
  const matchPlayers = matchPlayerOptions(context);
  if (matchPlayers) return matchPlayers;

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
      .filter((player) => player.matchAvailable !== false)
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
  const match = featuredMatchForTeam(team.code);
  const stats = matchStatRowsFor(team.code, match) || teamStatsFor(team.code);
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
    match,
    matchSide: matchSideFor(match, team.code),
    opponentSide: matchOpponentFor(match, team.code),
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

  if (team.code === "KR") {
    return {
      assist: {
        title: "여준석 수비 리바운드 → 대표팀 공격 전환",
        meta: "여준석 · defensive rebound",
        easy: "수비 리바운드를 확보하면서 대만 공격을 끊고 대한민국이 다시 공격권을 가져온 장면입니다. 처음 보는 팬도 possession 전환을 이해하기 좋은 대표팀 하이라이트입니다.",
        pro: "FIBA 1Q~3Q play-by-play에서 defensive rebound를 cut point로 삼아 다음 공격 흐름까지 분리했습니다. 리바운드 이후 전환 속도와 매치업 정리를 확인하기 좋은 구간입니다.",
        reason: "여준석은 KOR-TPE 1Q~3Q 클립에서 수비 리바운드와 득점 연결 장면이 반복적으로 등장합니다.",
        next: "Play-by-Play 탭에서 같은 possession 구간을 눌러 잘린 클립으로 바로 확인할 수 있습니다.",
        ctaTitle: "대표팀 Play-by-Play 클립 보기",
        ctaCopy: "리바운드, 파울, 득점 cut point를 기준으로 대만전 흐름을 따라갑니다.",
        progress: "58%",
      },
      clutch: {
        title: "최준용 · 이정현 3점으로 흐름 회복",
        meta: "대표팀 · 3점슛",
        easy: "대표팀 공격이 외곽으로 벌어지면서 3점 기회가 만들어진 장면입니다. 점수 변화가 명확해서 입덕패스 설명에 바로 쓰기 좋습니다.",
        pro: "score cut point 이후 다음 possession까지 이어지는 구간을 보면 대만 수비가 안쪽으로 몰린 뒤 외곽 슈터에게 공간이 생기는 흐름을 확인할 수 있습니다.",
        reason: "최준용과 이정현의 3점 장면은 KOR-TPE 1Q~3Q 대표팀 공격 하이라이트의 핵심입니다.",
        next: "득점 직후 이어지는 대만 possession과 비교하면 경기 흐름을 더 쉽게 설명할 수 있습니다.",
        ctaTitle: "대만전 3점 장면 모아보기",
        ctaCopy: "대표팀 외곽 득점을 저장한 팬에게 다음 FIBA 경기 알림을 추천합니다.",
        progress: "64%",
      },
      rookie: {
        title: "장재석 골밑 장면과 자유투 흐름",
        meta: "장재석 · 골밑/자유투",
        easy: "장재석이 골밑에서 파울을 얻거나 자유투로 점수를 만든 구간입니다. 득점과 파울이 같이 기록돼 있어 play-by-play를 영상으로 이해하기 좋습니다.",
        pro: "foul drawn, free throws made, defensive rebound가 같은 흐름 안에서 묶이는 possession 단위 클립입니다. 공격권 전환과 세트 오펜스 진입을 함께 볼 수 있습니다.",
        reason: "장재석은 1Q~3Q에서 자유투, 리바운드, 골밑 마무리를 대표팀 빅맨 관전 포인트로 보여줍니다.",
        next: "입덕패스에서는 골밑 싸움과 자유투 흐름을 초보자용 카드로 재가공할 수 있습니다.",
        ctaTitle: "대표팀 골밑 관전 포인트",
        ctaCopy: "장재석과 여준석의 골밑 장면을 좋아한 팬에게 대표팀 응원 콘텐츠를 추천합니다.",
        progress: "44%",
      },
    };
  }

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

function hexToRgbTriplet(hex) {
  const normalized = String(hex || "").replace("#", "");
  if (normalized.length !== 6) return "44, 67, 155";

  const red = Number.parseInt(normalized.slice(0, 2), 16);
  const green = Number.parseInt(normalized.slice(2, 4), 16);
  const blue = Number.parseInt(normalized.slice(4, 6), 16);
  return `${red}, ${green}, ${blue}`;
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
  const teamPrimaryRgb = hexToRgbTriplet(colors.primary);
  const teamDarkRgb = hexToRgbTriplet(colors.primaryDark);
  root.style.setProperty("--body-glow-rgb", teamPrimaryRgb);
  root.style.setProperty("--team-dark-rgb", teamDarkRgb);
  root.style.setProperty("--body-start", `rgba(${teamPrimaryRgb}, 0.2)`);
  root.style.setProperty("--body-mid", colors.soft);
  root.style.setProperty("--body-end", colors.paper);
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
      ? currentContext.match
        ? `${names.slice(0, 3).join(" · ")}의 ${currentContext.match.dateLabel} 경기 장면으로 AI 클립을 생성합니다.`
        : `${names.slice(0, 3).join(" · ")} 중심으로 AI 클립을 생성합니다.`
      : "선수를 1명 이상 선택해 주세요.";
  }

  if (generateButton) {
    generateButton.disabled = activeCount === 0 || isGeneratingHighlight;
    if (!isGeneratingHighlight) {
      generateButton.textContent = "하이라이트 생성";
    }
  }
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

function isGeneratedClip(clipId = selectedClip) {
  return Boolean(currentContext.clips[clipId]?.playerNames?.length);
}

function syncGeneratedAiPanel() {
  const generatedCards = [...document.querySelectorAll("#clip-list .highlight-card.generated")];
  const isGeneratedView = activeClipFilter === "generated";
  const hasGeneratedCards = generatedCards.length > 0;
  const selectedGenerated = isGeneratedView && isGeneratedClip();

  if (generatedEmptyState) {
    generatedEmptyState.hidden = !(isGeneratedView && !hasGeneratedCards);
  }

  if (inlineTacticPanel) {
    inlineTacticPanel.hidden = !selectedGenerated;
  }
}

function applyClipFilter() {
  clipFilterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.clipFilter === activeClipFilter);
  });

  document.querySelectorAll("#clip-list .highlight-card").forEach((card) => {
    const isGenerated = card.classList.contains("generated");
    const visible =
      activeClipFilter === "all" ||
      (activeClipFilter === "generated" && isGenerated);

    card.hidden = !visible;
  });

  syncGeneratedAiPanel();
}

function setSelectedClip(clipId) {
  selectedClip = clipId;

  document.querySelectorAll(".highlight-card").forEach((card) => {
    card.classList.toggle("selected", card.dataset.clip === selectedClip);
  });

  updateAnalysis();
  syncGeneratedAiPanel();
}

function resetGeneratedClips() {
  document.querySelectorAll(".highlight-card.generated").forEach((card) => {
    card.remove();
  });
  generatedClipCount = 0;
  if (isGeneratedClip()) selectedClip = "assist";
  updateClipCount();
  applyClipFilter();
}

function updateHighlightCards(context) {
  const cardCopy =
    context.team.code === "KR"
      ? [
          {
            clip: "assist",
            title: context.clips.assist.title,
            meta: "대한민국 · 1Q 08:49 · 수비 리바운드",
            score: "REB",
          },
          {
            clip: "clutch",
            title: context.clips.clutch.title,
            meta: "대한민국 · 1Q 05:23~05:06 · 3점슛",
            score: "+3",
          },
          {
            clip: "rookie",
            title: context.clips.rookie.title,
            meta: "대한민국 · 1Q 07:29~07:14 · 자유투",
            score: "FT",
          },
        ]
      : [
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
    button.dataset.matchAvailable = String(player.matchAvailable !== false);
    button.disabled = player.matchAvailable === false;
    button.classList.toggle("active", selectedPlayerCodes.has(code));
    button.classList.toggle("disabled", player.matchAvailable === false);
    button.setAttribute(
      "aria-pressed",
      String(selectedPlayerCodes.has(code) && player.matchAvailable !== false),
    );

    name.textContent = player.name;
    meta.textContent =
      player.matchLine ||
      [player.position, backNumber].filter(Boolean).join(" · ");

    button.append(name, meta);
    followChipRow.append(button);
  });
}

function monthKeyForGame(game) {
  return game?.date?.slice(0, 7) || "2026-04";
}

function calendarMonthsForTeam(teamCode) {
  return [...new Set(seasonGamesForTeam(teamCode).map(monthKeyForGame))].sort();
}

function formatCalendarMonth(monthKey) {
  const [year, month] = monthKey.split("-");
  return `${year}.${month}`;
}

function dateKeyFromParts(year, month, day) {
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function renderSelectedCalendarGame(context, gamesByDate) {
  const selectedCard = document.querySelector("#calendar-selected-card");
  if (!selectedCard) return;

  const match = context.match;
  if (!match) {
    selectedCard.innerHTML = "<p>선택된 경기가 없습니다.</p>";
    return;
  }

  const opponent = match.home.code === context.team.code ? match.away : match.home;
  const status = match.isEnded
    ? selectedTeamResultForGame(match, context.team.code)
    : `${match.time} 예정`;
  const sameDateGames = gamesByDate.get(match.date) || [];

  selectedCard.innerHTML = `
    <div>
      <span>${escapeHtml(match.dateLabel)} · ${escapeHtml(match.category || "경기")}</span>
      <strong>${escapeHtml(context.team.shortName)} vs ${escapeHtml(opponent.shortName || opponent.name)}</strong>
      <small>${escapeHtml(status)} · ${escapeHtml(match.venue)}</small>
    </div>
    <em>${sameDateGames.length > 1 ? `${sameDateGames.length}경기` : match.tv || "중계 정보 업데이트 예정"}</em>
  `;
}

function renderSeasonCalendar(context) {
  const grid = document.querySelector("#season-calendar-grid");
  if (!grid) return;

  const games = seasonGamesForTeam(context.team.code);
  const months = calendarMonthsForTeam(context.team.code);
  const matchMonth = monthKeyForGame(context.match);

  if (!months.includes(selectedCalendarMonth)) {
    selectedCalendarMonth = months.includes(matchMonth) ? matchMonth : months[0] || matchMonth;
  }

  setText(
    "#season-source-label",
    context.team.code === "KR"
      ? `${FEATURED_FIBA_MATCH.seasonName} · FIBA 공식 일정 · ${games.length}경기`
      : `${KBL_SCHEDULE_SOURCE.seasonName} KBL 공식 일정 · ${games.length}경기`,
  );
  setText("#calendar-month-label", formatCalendarMonth(selectedCalendarMonth));

  const gamesByDate = new Map();
  games.forEach((game) => {
    if (!gamesByDate.has(game.date)) gamesByDate.set(game.date, []);
    gamesByDate.get(game.date).push(game);
  });

  const [yearText, monthText] = selectedCalendarMonth.split("-");
  const year = Number(yearText);
  const month = Number(monthText);
  const firstDay = new Date(year, month - 1, 1).getDay();
  const lastDate = new Date(year, month, 0).getDate();
  const totalCells = Math.ceil((firstDay + lastDate) / 7) * 7;

  grid.innerHTML = "";
  for (let index = 0; index < totalCells; index += 1) {
    const dayNumber = index - firstDay + 1;
    const cell = document.createElement("button");

    cell.type = "button";
    cell.className = "calendar-day";

    if (dayNumber < 1 || dayNumber > lastDate) {
      cell.disabled = true;
      cell.classList.add("muted");
      cell.textContent = "";
      grid.append(cell);
      continue;
    }

    const dateKey = dateKeyFromParts(year, month, dayNumber);
    const dayGames = gamesByDate.get(dateKey) || [];
    const firstGame = dayGames[0];

    cell.textContent = String(dayNumber);
    cell.disabled = dayGames.length === 0;
    cell.classList.toggle("has-game", dayGames.length > 0);
    cell.classList.toggle("active", firstGame?.id === context.match?.id);

    if (firstGame) {
      cell.dataset.calendarGame = firstGame.id;
      cell.setAttribute(
        "aria-label",
        `${firstGame.dateLabel} ${firstGame.home.name} 대 ${firstGame.away.name}`,
      );
    }

    grid.append(cell);
  }

  const prevButton = document.querySelector('[data-calendar-month="prev"]');
  const nextButton = document.querySelector('[data-calendar-month="next"]');
  const currentIndex = months.indexOf(selectedCalendarMonth);
  if (prevButton) prevButton.disabled = currentIndex <= 0;
  if (nextButton) nextButton.disabled = currentIndex === -1 || currentIndex >= months.length - 1;

  renderSelectedCalendarGame(context, gamesByDate);
}

function starPlayersForContext(context) {
  if (!context.match) return [];

  const directStars = context.match.postGame.starPlayers.filter(
    (player) => player.teamCode === context.team.code,
  );

  if (directStars.length) return directStars;

  return [...context.stats]
    .sort((a, b) => statValue(b, "score") - statValue(a, "score"))
    .slice(0, 3)
    .map((row, index) => ({
      pcode: playerCode(row),
      name: playerName(row),
      role: index === 0 ? "팀 내 최다 득점" : "주요 출전 선수",
      line: `${statValue(row, "score")}PTS · ${statValue(row, "rb")}REB · ${statValue(row, "ast")}AST`,
      reason: "선택 팀 기준 경기 후 하이라이트 후보",
    }));
}

function updateMatchFlowPanel(context) {
  const match = context.match;
  renderSeasonCalendar(context);

  if (!match) {
    setText("#flow-selected-team", context.team.fullName);
    setText("#flow-selected-game", "데모 경기 선택 대기");
    setText("#match-flow-title", `${context.team.shortName} 데모 경기`);
    setText("#match-flow-status", "KBL 경기 데이터 연결 준비");
    setText("#match-home-label", context.team.name);
    setText("#match-home-score", "-");
    setText("#match-away-label", "상대팀");
    setText("#match-away-score", "-");
    setText("#match-location", context.team.venue);
    setText("#match-result-label", "경기 선택 후 표시");
    const starRow = document.querySelector("#match-star-row");
    if (starRow) starRow.innerHTML = "";
    return;
  }

  const winner = winnerForMatch(match);
  const loser = loserForMatch(match);
  const stars = starPlayersForContext(context);
  const starRow = document.querySelector("#match-star-row");

  setText("#flow-selected-team", context.team.fullName);
  setText("#flow-selected-game", `${match.dateLabel} ${match.home.shortName} vs ${match.away.shortName}`);
  setText("#match-flow-title", `${match.home.shortName} vs ${match.away.shortName} 경기 정보`);
  setText(
    "#match-flow-status",
    `${match.dateLabel} · ${match.time} · ${match.tv || "중계 정보 업데이트 예정"}`,
  );
  setText("#match-home-label", match.home.name);
  setText("#match-home-score", match.isEnded ? String(match.home.score) : "예정");
  setText("#match-away-label", match.away.name);
  setText("#match-away-score", match.isEnded ? String(match.away.score) : match.time);
  setText(
    "#match-location",
    match.crowd
      ? `${match.venue} · 관중 ${match.crowd.toLocaleString("ko-KR")}명`
      : `${match.venue} · ${match.category}`,
  );
  setText(
    "#match-result-label",
    match.isEnded && winner && loser ? `${winner.name} ${winner.score}-${loser.score} 승` : "경기 예정",
  );

  if (!starRow) return;

  starRow.innerHTML = "";
  stars.forEach((player) => {
    const item = document.createElement("article");
    const role = document.createElement("span");
    const name = document.createElement("strong");
    const line = document.createElement("small");
    const reason = document.createElement("p");

    role.textContent = player.role;
    name.textContent = player.name;
    line.textContent = player.line;
    reason.textContent = player.reason;
    item.append(role, name, line, reason);
    starRow.append(item);
  });
}

function updateFanApp(context) {
  const { team } = context;
  const matchStar = starPlayersForContext(context)[0];

  setText(".app-header strong", `${team.fullName} 맞춤 코트`);
  setText(
    "#fan-web-subtitle",
    context.match
      ? `${context.match.dateLabel} ${context.match.home.shortName} vs ${context.match.away.shortName} 기준으로 하이라이트, 입덕패스, 직관메이트를 웹에서 이어서 확인합니다.`
      : `${team.name} 기준으로 경기 선택, AI 하이라이트 생성, 팬 반응 참여를 웹에서 이어서 확인합니다.`,
  );
  setText(
    ".spotlight-copy h2",
    context.match
      ? `${context.match.postGame.title} · ${matchStar?.name || context.shooterName}`
      : `${context.shooterName} 3점 하이라이트 모음`,
  );
  setText(
    ".spotlight-copy p",
    context.match
      ? `${matchStar?.line || "KBL 공식 기록"} 기준으로 경기 summary와 선수 하이라이트를 만들어요.`
      : `팔로우한 ${team.name} 장면만 2분 18초로 압축했어요.`,
  );

  const dataStrip = document.querySelector(".kbl-data-strip");
  dataStrip?.setAttribute(
    "aria-label",
    team.code === "KR" ? "FIBA 대한민국 대표팀 선수 데이터" : `KBL 공식 ${team.name} 선수 데이터`,
  );

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
  updateMatchFlowPanel(context);
  updateHighlightCards(context);
  applyClipFilter();
}

function updatePassPanel(context) {
  const match = context.match;
  const stars = starPlayersForContext(context);

  setText("#pass-title", `${context.team.shortName} 입덕패스`);
  setText(
    "#pass-copy",
    match
      ? match.postGame.summary[2]
      : `${context.playmakerName}의 패스, ${context.shooterName}의 3점, ${context.rebounderName}의 리바운드를 초보자 설명으로 묶었습니다.`,
  );

  const items = document.querySelectorAll(".pass-list li");
  const passItems = match
    ? [
        match.postGame.summary[0],
        `${stars[0]?.name || context.rebounderName}: ${stars[0]?.line || "오늘 잘한 선수"}`,
        `${stars[1]?.name || context.shooterName}: ${stars[1]?.reason || "하이라이트 후보"}`,
      ]
    : [
        `${context.playmakerName}이 만든 찬스를 30초 카드로 설명`,
        `${context.shooterName} 3점 위치를 코트맵으로 정리`,
        `${context.rebounderName} 리바운드 후 세컨드 찬스 모음`,
      ];

  passItems.forEach((text, index) => {
    if (items[index]) items[index].lastChild.textContent = ` ${text}`;
  });

  const commentList = document.querySelector("#pass-comment-list");
  if (!commentList) return;

  commentList.innerHTML = "";
  (match?.postGame.fanComments || [
    `${context.shooterName} 장면만 모아보니 다음 경기 관전 포인트가 생겼어요.`,
    `${context.rebounderName} 골밑 장면은 직관으로 보고 싶어요.`,
  ]).forEach((comment, index) => {
    const item = document.createElement("article");
    const text = document.createElement("p");
    const reactions = document.createElement("div");

    item.className = "pass-comment-card";
    text.textContent = comment;
    reactions.className = "pass-reaction-row";

    [
      { type: "like", label: `공감 ${12 + index * 4}`, count: 12 + index * 4 },
      { type: "mate", label: "직관 가고 싶음" },
      { type: "goods", label: "굿즈 관심" },
    ].forEach(({ type, label, count }) => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.commentReaction = type;
      if (count) button.dataset.reactionCount = String(count);
      button.textContent = label;
      reactions.append(button);
    });

    item.append(text, reactions);
    commentList.append(item);
  });
}

function updateMatePanel(context) {
  const { team } = context;
  const match = context.match;
  const tags = match?.preGame.mate.tags || team.mateTags;
  const opponent = matchOpponentFor(match, team.code);

  updateMateCount();
  setText("#mate-main-title", match?.preGame.mate.title || "같이 직관가실 분 구해요!");
  setText(
    "#mate-main-copy",
    match?.preGame.mate.copy ||
      `${team.name} 홈·원정 경기에서 ${context.shooterName} 하이라이트를 같이 볼 메이트를 추천합니다.`,
  );
  setText(
    "#mate-venue",
    match
      ? `${match.dateLabel} ${match.venue}`
      : `${team.venue} 또는 원정 경기 · ${team.opponent}전`,
  );
  setText("#mate-seat", match ? `${opponent?.name || "상대팀"}전 직관 모집` : "홈/원정 좌석 선택 가능");
  setText("#mate-game-choice", match?.preGame.mate.gameChoice || `홈·원정 ${team.opponent}전`);
  setText("#mate-seat-choice", match?.preGame.mate.seatChoice || "응원석/원정석");
  setText("#mate-style-choice", match?.preGame.mate.styleChoice || "초보 환영");

  const mateCards = document.querySelectorAll(".mate-card:not(.user-created)");
  const cardData = [
    {
      title: `${team.shortName} 첫 직관 같이 가요`,
      meta: match ? `${match.venue} · 초보자 환영 · 2명 모집` : `${team.city} · 초보자 환영 · 2명 모집`,
      tags: [tags[0], tags[2]],
    },
    {
      title: `${context.shooterName} 3점 보러 가실 분`,
      meta: `${opponent?.name || team.opponent}전 · 응원가 크게 부르는 편`,
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

  ensureMateCommentThreads();
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
    event: opportunityEventName(item),
  }));
}

function opportunityEventName(item) {
  return item?.eventName || item?.campaignName || "팬 웹서비스 이벤트";
}

function revenueOpportunities(context = currentContext) {
  return [
    {
      title: `${context.shooterName} 3점 하이라이트 반응 급상승`,
      scene: `${context.shooterName} 트랜지션 3점`,
      proof: "저장 1,204 · 공유율 18%",
      effect: "예매 CTA 클릭 +128건",
      difficulty: "낮음",
      action: "응원석 단기성 이벤트 추천",
      eventName: `${context.shooterName} 하이라이트 응원석 이벤트`,
      eventType: "단기성 이벤트",
      marketingHorizon: "시즌 중 빠른 실행",
      target: `${context.shooterName} 하이라이트를 저장하거나 공유한 팬`,
      placement: "하이라이트 카드 하단",
      copy: "이 장면, 경기장에서 직접 볼래요?",
      period: "다음 홈경기 D-5 ~ 경기 당일",
      revenue: "예상 예매 매출 기여 384만원",
      sponsorName: "오늘의 클러치 플레이 presented by 브랜드",
      sponsorPlacement: "팬 웹서비스 하이라이트 첫 화면 · 경기장 전광판 리캡",
      sponsorPitch: `${context.shooterName}의 외곽 장면에 몰입한 팬에게 브랜드 노출을 붙이는 클러치 플레이 패키지`,
    },
    {
      title: `${context.rebounderName} 골밑 장면 저장률 높음`,
      scene: `${context.rebounderName} 세컨드 찬스`,
      proof: "저장률 24% · 신규 팬 유입 +9%",
      effect: "굿즈 CTA 클릭 +92건",
      difficulty: "보통",
      action: "선수 굿즈/포토카드 이벤트 추천",
      eventName: `${context.rebounderName} 골밑 포토카드 테스트`,
      eventType: "굿즈 테스트 이벤트",
      marketingHorizon: "프랜차이즈/선수 자산 테스트",
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
      eventName: `${context.team.shortName} 첫 직관 동행 이벤트`,
      eventType: "직관메이트 이벤트",
      marketingHorizon: "경기일 운영 개선",
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
      action: "응원석 첫 직관 가이드 이벤트",
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
      action: "모바일 픽업 안내 이벤트",
      recommendation: "하프타임 전 팬 웹서비스에 모바일 픽업 안내와 혼잡 시간대를 노출",
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
    const eventButton = document.createElement("button");
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
    eventButton.type = "button";
    eventButton.dataset.eventBuilder = String(index);
    eventButton.textContent = "이벤트 만들기";
    sponsorButton.type = "button";
    sponsorButton.dataset.sponsorBuilder = String(index);
    sponsorButton.textContent = "스폰서 제안서";
    actions.append(eventButton, sponsorButton);

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
      copy: `${topPlayerName} 중심 팬 반응을 저장, 공유, 직관메이트 클릭, Fan Voice, Player Context DB로 나눠 분석합니다.`,
      kpis: [
        ["상위 선수", topPlayerName, "팬 반응 점수 1위"],
        ["저장 추정", `${savedEstimate.toLocaleString("ko-KR")}회`, "하이라이트 저장"],
        ["메이트 클릭", `${mateClickEstimate.toLocaleString("ko-KR")}회`, "직관 전환 신호"],
      ],
      workflow: [
        "선수별 반응 점수 비교",
        "Fan Voice와 Player Context DB로 팬 의견과 선수 맥락 보강",
        "저장/공유/직관메이트 클릭을 Revenue Playbook 입력값으로 전달",
      ],
      action: { label: "선수 인사이트 보기", type: "player-context", value: "0" },
    },
    playbook: {
      kicker: "Revenue Playbook",
      title: "Revenue Playbook",
      copy: "AI Strategy Engine이 팬 반응을 단기성 이벤트, 라운드 이벤트, 장기 프랜차이즈 마케팅으로 번역해 우선순위화합니다.",
      kpis: [
        ["매출 기회", `${opportunityCount}개`, "Top 3 추천"],
        ["예매 클릭", "128건", "대표 이벤트 예상"],
        ["굿즈 클릭", "92건", "포토카드 테스트"],
      ],
      workflow: [
        "팬 반응 급상승 장면 확인",
        "GPT-5.4 mini/nano로 후보를 분류하고 GPT-5.5로 전략 초안 생성",
        "Event Builder로 단기 이벤트 또는 라운드 이벤트 초안 생성",
        "필요 시 Sponsor Package Builder로 스폰서 제안서 파생",
      ],
      action: { label: "Top 3 상세 보기", type: "opportunity", value: "0" },
    },
    performance: {
      kicker: "Performance",
      title: "Performance",
      copy: "CTA 클릭, 이벤트 참여, 굿즈 반응, 스폰서 이벤트 반응, 예상 매출 기여를 추적합니다.",
      kpis: [
        ["예매 CTA", "128건", "대표 이벤트 클릭"],
        ["굿즈 CTA", "92건", "포토카드 클릭"],
        ["예상 기여", "660만원", "샘플 합산"],
      ],
      workflow: [
        "퍼널 단계별 전환율 확인",
        "직관메이트, 좌석 선호, 이벤트 반응을 Matchday Ops 관점으로 확인",
        "성과 리포트를 저장하고 다음 이벤트 개선안으로 연결",
      ],
      action: { label: "Performance 상세 보기", type: "funnel", value: "ticket-cta" },
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

  if (actionType === "campaign" || actionType === "event") {
    showEventBuilder(Number(actionValue || 0));
    return;
  }

  if (actionType === "player-context") {
    showPlayerContext(Number(actionValue || 0));
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
    return;
  }

  if (actionType === "matchday-ops") {
    showMatchdayOps();
  }
}

function updateDashboard(context) {
  const { team } = context;
  const match = context.match;

  setText(".match-chip span", match ? "선택 경기" : "내 팀 기준");
  setText(
    ".match-chip strong",
    match
      ? `${match.home.shortName} ${match.home.score} - ${match.away.score} ${match.away.shortName}`
      : team.fullName,
  );
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
      note: team.code === "KR" ? "FIBA 1Q~3Q play-by-play 기반" : `${seasonName} 정규시즌 기록 보유`,
    },
    {
      label: "AI 클립 후보",
      value: context.stats.length * 3,
      note: "득점·패스·리바운드 장면 우선 큐",
    },
    {
      label: "데이터 기준",
      value: team.code === "KR" ? "FIBA" : seasonName,
      note: team.code === "KR" ? "KOR-TPE play-by-play 매칭" : "KBL 공식 선수/기록 API 최신화",
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
  setText(
    "#dashboard-source-label",
    context.team.code === "KR"
      ? `FIBA 공식 Play-by-Play · ${match?.dateLabel || FEATURED_FIBA_MATCH.dateLabel}`
      : match
      ? `KBL 공식 경기 API · ${match.dateLabel} · ${fetchedAt}`
      : `KBL 공식 API · ${seasonName} · ${fetchedAt}`,
  );
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
  if (label.includes("굿즈")) return "굿즈 이벤트";
  if (label.includes("팬 웹서비스") || label.includes("이벤트") || label.includes("캠페인")) return "팬 웹서비스 이벤트";
  if (label.includes("콘텐츠")) return "콘텐츠 패키지";
  return "실행 문서";
}

function createGeneratedAsset(label, sourceOverride, details = {}) {
  const sourceTitle = sourceOverride || dashboardModalTitle?.textContent || "구단 웹 대시보드 액션";
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
      `${sourceTitle}에서 생성된 ${kind}입니다. 팬 웹서비스 노출, 담당자 승인, 스폰서 패키지 저장 흐름으로 이어집니다.`,
    sections: details.sections || [
      ["대상 구단", currentContext.team.fullName],
      ["핵심 선수", `${currentContext.shooterName}, ${currentContext.playmakerName}, ${currentContext.rebounderName}`],
      ["노출 위치", "팬 웹서비스 하이라이트 하단 · 구단 웹 대시보드 생성 결과함"],
      ["다음 액션", "담당자 승인 후 팬 웹서비스 이벤트 카드와 스폰서 제안서에 반영"],
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
    empty.textContent = "액션 메뉴나 추천 이벤트에서 생성한 문서가 여기에 저장됩니다.";
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
      <button type="button" data-modal-action="팬 웹서비스 미리보기">팬 웹서비스 미리보기</button>
      <button type="button" data-modal-action="담당자 승인 요청">담당자 승인 요청</button>
    </div>
  `;
}

function renderOutputPanel(asset) {
  return `
    <div class="modal-output-panel" id="modal-output-panel">
      <h4>생성 완료</h4>
      <p>${escapeHtml(asset.title)} 문서가 <strong>구단 웹 대시보드 > 생성 결과함</strong>에 저장됐습니다.</p>
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

function createEventAsset(index = 0) {
  const item = revenueOpportunities()[index] || revenueOpportunities()[0];
  const eventName = opportunityEventName(item);

  return createGeneratedAsset("팬 웹서비스 이벤트 게시", "Event Builder", {
    kind: "팬 웹서비스 이벤트",
    title: `${eventName} · ${currentContext.team.shortName}`,
    summary: `${item.scene} 반응을 기반으로 ${item.target}에게 ${item.action}을 노출하는 이벤트 초안입니다.`,
    sections: [
      ["이벤트 유형", item.eventType || "단기성 이벤트"],
      ["마케팅 범위", item.marketingHorizon || "시즌 중 실행"],
      ["대상 팬 세그먼트", item.target],
      ["이벤트명", eventName],
      ["노출 위치", item.placement],
      ["CTA 문구", item.copy],
      ["운영 기간", item.period],
      ["성과 지표", `${item.effect} · ${item.revenue}`],
    ],
  });
}

function createCampaignAsset(index = 0) {
  return createEventAsset(index);
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
      ["연결 이벤트", "팬 웹서비스 안내 카드 또는 굿즈/좌석 테스트 이벤트로 전환"],
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
        <div class="modal-preview-card"><span>이벤트 유형</span><strong>${escapeHtml(item.eventType || "단기성 이벤트")}</strong></div>
        <div class="modal-preview-card"><span>마케팅 범위</span><strong>${escapeHtml(item.marketingHorizon || "시즌 중 실행")}</strong></div>
        <div class="modal-preview-card"><span>매출 기여</span><strong>${escapeHtml(item.revenue)}</strong></div>
      </div>
      <ul class="workflow-list">
        <li>추천 액션 확인</li>
        <li>이벤트 초안 생성</li>
        <li>팬 웹서비스 노출 또는 스폰서 제안서로 전환</li>
        <li>Performance에서 예매·굿즈·스폰서 반응 추적</li>
      </ul>
      <div class="modal-action-row">
        <button type="button" data-event-builder="${index}">이벤트 만들기</button>
        <button type="button" data-sponsor-builder="${index}">스폰서 제안서</button>
        <button type="button" data-funnel-stage="ticket-cta">ROI 확인</button>
      </div>
    `,
  });
}

function showEventBuilder(index = 0) {
  const item = revenueOpportunities()[index] || revenueOpportunities()[0];
  const eventName = opportunityEventName(item);

  openDashboardModal({
    kicker: "Event Builder",
    title: eventName,
    subtitle: "Revenue Playbook 추천을 단기성 이벤트, 라운드 이벤트, 장기 프랜차이즈 마케팅 실행 카드로 바꿉니다.",
    body: `
      <ol class="builder-flow" aria-label="이벤트 생성 흐름">
        <li>추천 액션 확인</li>
        <li>이벤트 초안 생성</li>
        <li>문구/대상/노출 위치 수정</li>
        <li>구단 담당자 승인</li>
        <li>팬 웹서비스 게시</li>
        <li>Performance에서 성과 추적</li>
      </ol>
      <div class="modal-detail-grid">
        <div class="modal-detail-card"><span>이벤트 유형</span><strong>${escapeHtml(item.eventType || "단기성 이벤트")}</strong></div>
        <div class="modal-detail-card"><span>마케팅 범위</span><strong>${escapeHtml(item.marketingHorizon || "시즌 중 실행")}</strong></div>
        <div class="modal-detail-card"><span>추천 액션</span><strong>${escapeHtml(item.action)}</strong></div>
      </div>
      <div class="builder-form-grid">
        <label>
          <span>이벤트 유형</span>
          <select>
            <option>${escapeHtml(item.eventType || "단기성 이벤트")}</option>
            <option>라운드 이벤트</option>
            <option>장기 프랜차이즈 마케팅</option>
          </select>
        </label>
        <label>
          <span>대상 팬 세그먼트</span>
          <input type="text" value="${escapeHtml(item.target)}" />
        </label>
        <label>
          <span>이벤트명</span>
          <input type="text" value="${escapeHtml(eventName)}" />
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
        <div class="modal-detail-card"><span>대표 장면</span><strong>${escapeHtml(item.scene)}</strong></div>
        <div class="modal-detail-card"><span>예상 효과</span><strong>${escapeHtml(item.effect)}</strong></div>
        <div class="modal-detail-card"><span>성과 추적</span><strong>${escapeHtml(item.revenue)}</strong></div>
      </div>
      <div class="modal-action-row">
        <button type="button" data-save-event-builder="${index}" data-event-save-kind="publish">팬 웹서비스 이벤트 게시</button>
        <button type="button" data-save-event-builder="${index}" data-event-save-kind="draft">이벤트 초안 저장</button>
        <button type="button" data-funnel-stage="ticket-cta">성과 추적 보기</button>
      </div>
    `,
  });
}

function showCampaignBuilder(index = 0) {
  showEventBuilder(index);
}

function showSponsorBuilder(index = 0) {
  const item = revenueOpportunities()[index] || revenueOpportunities()[0];

  openDashboardModal({
    kicker: "Sponsor Package Builder",
    title: item.sponsorName,
    subtitle: "Event Builder에서 파생된 이벤트 반응을 스폰서 영업 자료로 바로 쓸 수 있는 제안서 초안으로 묶습니다.",
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
        <li><strong>상품 예시</strong> 라운드 MVP 팬 투표 sponsored by 브랜드</li>
        <li><strong>상품 예시</strong> 직관메이트 매칭 이벤트 스폰서</li>
        <li><strong>상품 예시</strong> 프랜차이즈 스타 굿즈 스폰서</li>
      </ul>
      <div class="modal-action-row">
        <button type="button" data-save-sponsor-builder="${index}">스폰서 제안서 저장</button>
        <button type="button" data-event-builder="${index}">연결 이벤트 만들기</button>
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
    subtitle: "팬 의견을 운영 개선 액션과 이벤트 테스트로 연결합니다.",
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
        <li><strong>연결 방식</strong> 팬 웹서비스 안내 카드, 굿즈 테스트, 좌석/동행 이벤트 중 하나로 전환</li>
        <li><strong>성과 확인</strong> Performance에서 클릭률과 불만 감소 신호를 추적</li>
      </ul>
      <div class="modal-action-row">
        <button type="button" data-save-fan-voice-report="${escapeHtml(category)}">운영 개선 리포트 생성</button>
        <button type="button" data-event-builder="2">이벤트 테스트 만들기</button>
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
        <li>팬 웹서비스와 구단 웹 대시보드에서 같은 데이터 기준으로 렌더링</li>
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
    subtitle: "구단이 어떤 선수를 콘텐츠, 이벤트, 굿즈, 스폰서 자산으로 밀어야 하는지 판단하는 화면입니다.",
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
        <li><strong>추천 이벤트</strong> ${escapeHtml(name)} 장면 하단에 응원석 예매 CTA와 굿즈 배너 노출</li>
        <li><strong>구단 액션</strong> 숏폼 3개 생성 후 팬 웹서비스 첫 화면과 스폰서 패키지에 저장</li>
      </ul>
      <div class="modal-action-row">
        <button type="button" data-event-builder="${index}">선수 이벤트 만들기</button>
        <button type="button" data-player-context="${index}">Player Context DB</button>
        <button type="button" data-sponsor-builder="${index}">스폰서 패키지</button>
      </div>
    `,
  });
}

function showPlayerContext(index = 0) {
  const row = currentContext.uniqueLeaders[index] || currentContext.uniqueLeaders[0];
  if (!row) return;

  const stats = statRowForPlayer(row);
  const player = rosterEntryForPlayer(row);
  const name = playerName(stats, player.name);
  const score = [92, 90, 86, 84][index] || 82;
  const isFranchiseCandidate = score >= 88 ? "프랜차이즈 스타 후보" : "장기 육성 후보";
  const totalMinutes = statValue(stats, "playMin");
  const avgMinutes = (totalMinutes / gameCount(stats)).toFixed(1);

  openDashboardModal({
    kicker: "Player Context DB",
    title: `${name} 선수 컨텍스트`,
    subtitle: "공식 공개 정보 기반으로 선수 역할, 최근 폼, 출전 시간, 부상/복귀 예정, 라운드 활약, 장기 마케팅 자산 여부를 관리합니다.",
    body: `
      <div class="modal-detail-grid">
        <div class="modal-detail-card"><span>역할/포지션</span><strong>${escapeHtml(currentContext.team.name)} · ${escapeHtml(player.position || "POS")} · #${escapeHtml(player.backNumber || "-")}</strong></div>
        <div class="modal-detail-card"><span>최근 폼</span><strong>하이라이트 반응 상승 · 팬 반응 ${score}</strong></div>
        <div class="modal-detail-card"><span>시즌 기록</span><strong>${formatPerGame(stats, "score", "PTS")} · ${formatPerGame(stats, "ast", "AST")}</strong></div>
      </div>
      <div class="modal-stat-grid">
        <div class="modal-preview-card"><span>출전 시간</span><strong>${avgMinutes} MIN · 총 ${totalMinutes.toLocaleString("ko-KR")}분</strong></div>
        <div class="modal-preview-card"><span>부상/복귀 예정</span><strong>공식 공개 정보 확인 필요</strong></div>
        <div class="modal-preview-card"><span>라운드 활약</span><strong>베스트 장면 후보</strong></div>
        <div class="modal-preview-card"><span>자산 분류</span><strong>${escapeHtml(isFranchiseCandidate)}</strong></div>
      </div>
      <ul class="modal-list">
        <li><strong>Event Builder 근거</strong> ${escapeHtml(name)} 반응을 응원석 단기 이벤트나 라운드 베스트 장면 투표로 전환</li>
        <li><strong>Sponsor Builder 근거</strong> 인기 장면, 저장률, 공유율을 선수 굿즈/라운드 MVP 스폰서 제안에 첨부</li>
        <li><strong>데이터 관리</strong> 실제 서비스에서는 KBL 공식 기록, 구단 공개 소식, 부상/복귀 공지를 함께 동기화</li>
      </ul>
      <div class="modal-action-row">
        <button type="button" data-event-builder="${index}">이 선수로 이벤트 생성</button>
        <button type="button" data-sponsor-builder="${index}">스폰서 패키지</button>
        <button type="button" data-funnel-stage="ticket-cta">Performance 확인</button>
      </div>
    `,
  });
}

function showMatchdayOps() {
  const mateClicks = Math.round(92 * 2.3).toLocaleString("ko-KR");

  openDashboardModal({
    kicker: "Matchday Ops",
    title: "경기일 운영 인사이트",
    subtitle: "직관메이트, 좌석 선호, 경기장 불만, 이벤트 반응을 모아 다음 홈·원정 경기 운영 개선으로 연결합니다.",
    body: `
      <div class="modal-detail-grid">
        <div class="modal-detail-card"><span>직관메이트 클릭</span><strong>${mateClicks}회</strong></div>
        <div class="modal-detail-card"><span>좌석 선호 응답</span><strong>응원석/시야 문의 +31%</strong></div>
        <div class="modal-detail-card"><span>이벤트 반응</span><strong>동행 이벤트 참여 84팀</strong></div>
      </div>
      <ul class="workflow-list">
        <li>홈·원정 경기 날짜와 좌석/응원 성향 수집</li>
        <li>직관메이트 모집글과 응원석 안내 이벤트를 팬 웹서비스에 노출</li>
        <li>매점 대기, 시야, 이동 동선 불만을 Fan Voice로 분류</li>
        <li>이벤트 참여와 예매 CTA 클릭을 Performance에서 추적</li>
      </ul>
      <ul class="modal-list">
        <li><strong>운영 액션</strong> 초보 팬 좌석 안내 카드와 동행 모집글을 경기 D-7부터 노출</li>
        <li><strong>수익화 액션</strong> 직관메이트 매칭 이벤트 스폰서와 응원석 예매 CTA를 함께 제안</li>
        <li><strong>다음 확인</strong> 댓글 반응, 좌석 선호, 홈/원정 선택 데이터를 다음 경기 추천에 반영</li>
      </ul>
      <div class="modal-action-row">
        <button type="button" data-event-builder="2">직관메이트 이벤트 만들기</button>
        <button type="button" data-save-fan-voice-report="venue">운영 리포트 저장</button>
        <button type="button" data-funnel-stage="mate-click">Performance 확인</button>
      </div>
    `,
  });
}

function showAiStrategyDecision() {
  openDashboardModal({
    kicker: "AI Strategy Engine",
    title: "구단에게 제공하는 AI 전략·이벤트 기획 방식",
    subtitle: "팬 행동 데이터를 바로 게시 가능한 이벤트 브리프와 스폰서 제안서로 바꾸는 운영 의사결정 레이어입니다.",
    body: `
      <div class="modal-detail-grid">
        <div class="modal-detail-card"><span>전략 생성</span><strong>GPT-5.5</strong></div>
        <div class="modal-detail-card"><span>대량 분류</span><strong>GPT-5.4 mini/nano</strong></div>
        <div class="modal-detail-card"><span>음성/자막</span><strong>gpt-4o-transcribe</strong></div>
      </div>
      <ol class="builder-flow" aria-label="AI 전략 생성 흐름">
        <li>Fan Insight에서 선수별 반응, 하이라이트 저장·공유, 직관메이트 클릭, Fan Voice를 집계</li>
        <li>Player Context DB와 경기 일정, 좌석/굿즈 재고, 스폰서 제약 조건을 함께 검색</li>
        <li>GPT-5.4 mini/nano가 팬 의견과 행동 로그를 분류하고 매출 기회 후보를 점수화</li>
        <li>GPT-5.5가 Top 3 기회, 이벤트 초안, 스폰서 패키지, Performance 개선안을 구조화</li>
        <li>구단 담당자가 승인하면 팬 웹서비스 이벤트 카드로 게시하고 ROI를 추적</li>
      </ol>
      <ul class="modal-list">
        <li><strong>구단 제공 산출물</strong> 이번 주 매출 기회 Top 3, 이벤트 브리프, 대상 팬 세그먼트, CTA 문구, 노출 위치, 예상 KPI</li>
        <li><strong>스폰서 산출물</strong> 대표 장면, 팬 반응 지표, 예상 노출 위치, 제안 문구가 포함된 스폰서 제안서 초안</li>
        <li><strong>품질 관리</strong> RAG 기반 근거 첨부, 구조화 JSON 출력, 자동 게시 금지, 담당자 승인, 결과 로그 재학습</li>
        <li><strong>모델 원칙</strong> MVP는 GPT-5.6 preview에 의존하지 않고, 정확도 검증 후 비용·지연이 낮은 모델로 단계적 전환</li>
      </ul>
      <div class="modal-action-row">
        <button type="button" data-event-builder="0">Event Builder 열기</button>
        <button type="button" data-sponsor-builder="0">스폰서 제안서 보기</button>
        <button type="button" data-funnel-stage="ticket-cta">Performance 확인</button>
      </div>
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
      title: `${currentContext.team.name} 홈경기 이벤트`,
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
      ${modalActions(["콘텐츠 생성", "수정", "팬 웹서비스에 노출", "스폰서 패키지로 저장"])}
    `,
  });
}

function showRevenueAction(index) {
  const item = dashboardRecommendations()[index];
  if (!item) return;
  const opportunity = revenueOpportunities()[index] || revenueOpportunities()[0];

  openDashboardModal({
    kicker: "Revenue Playbook",
    title: item.event,
    subtitle: `${item.scene}의 ${item.reaction} 반응을 실제 이벤트 실행으로 연결합니다.`,
    body: `
      <div class="modal-detail-grid">
        <div class="modal-detail-card"><span>추천 장면</span><strong>${escapeHtml(item.scene)}</strong></div>
        <div class="modal-detail-card"><span>팬 반응</span><strong>${escapeHtml(item.reaction)}</strong></div>
        <div class="modal-detail-card"><span>추천 액션</span><strong>${escapeHtml(item.action)}</strong></div>
      </div>
      <ul class="workflow-list">
        <li>추천 장면 선택</li>
        <li>${escapeHtml(item.action)} 이벤트 템플릿 생성</li>
        <li>구단 담당자 승인</li>
        <li>팬 웹서비스 하이라이트 하단 노출</li>
        <li>클릭률, 예매 전환, 굿즈 CTA 반응 추적</li>
      </ul>
      <div class="modal-detail-grid">
        <div class="modal-detail-card"><span>대상 세그먼트</span><strong>${escapeHtml(opportunity.target)}</strong></div>
        <div class="modal-detail-card"><span>CTA 문구</span><strong>${escapeHtml(opportunity.copy)}</strong></div>
        <div class="modal-detail-card"><span>예상 매출 기여</span><strong>${escapeHtml(opportunity.revenue)}</strong></div>
      </div>
      <div class="modal-action-row">
        <button type="button" data-event-builder="${index}">이벤트 만들기</button>
        <button type="button" data-sponsor-builder="${index}">스폰서 패키지</button>
        <button type="button" data-funnel-stage="ticket-cta">ROI 보기</button>
      </div>
    `,
  });
}

function createPerformanceAsset(stage = "ticket-cta") {
  const data =
    {
      "highlight-create": ["하이라이트 생성", "11K", "26%", "선수 미선택 이탈 18%", currentContext.playmakerName, "선택 선수 기반 생성", "예상 후속 CTA 1,840건", "선수 선택 기본값과 추천 조합을 먼저 제시"],
      "tactics-view": ["작전판AI 열람", "7.4K", "67%", "해설 난이도 전환 전 이탈 14%", currentContext.shooterName, "3점 작전판AI 해설", "입덕패스 열람 +1.2K", "초보 해설 첫 문장을 더 짧게 노출"],
      "mate-click": ["직관메이트 클릭", "3.2K", "43%", "좌석 정보 부족 이탈 12%", currentContext.shooterName, "같은 선수 관심 매칭", "동행 이벤트 참여 84팀", "좌석/응원 성향을 모집글 카드에 먼저 표시"],
      "ticket-cta": ["예매 CTA 클릭", "128", "4.0%", "예매 링크 전환 전 이탈 9%", currentContext.shooterName, "응원석 예매 CTA", "예상 예매 매출 384만원", "하이라이트 카드 하단 CTA 문구를 응원석 중심으로 변경"],
      "goods-cta": ["굿즈 CTA 클릭", "92", "2.9%", "상품 상세 전 이탈 11%", currentContext.rebounderName, "포토카드/굿즈 이벤트", "예상 굿즈 매출 276만원", "저장률 높은 골밑 장면과 한정 포토카드 문구를 연결"],
      "sponsor-event": ["스폰서 이벤트 참여", "56", "1.7%", "쿠폰 저장 전 이탈 8%", currentContext.shooterName, "직관메이트 매칭 이벤트 스폰서", "스폰서 노출 가치 140만원", "이벤트 카드 CTA와 쿠폰 저장 버튼을 분리 노출"],
    }[stage] || {};

  return createGeneratedAsset("Performance 리포트 저장", "Performance", {
    kind: "성과 리포트",
    title: `${data[0] || "Performance"} 성과 리포트 · ${currentContext.team.shortName}`,
    summary: "팬 웹서비스에서 발생한 CTA 클릭, 이벤트 참여, 굿즈 반응, 스폰서 이벤트 반응과 예상 매출 기여를 정리한 성과 리포트입니다.",
    sections: [
      ["단계", data[0] || "Performance"],
      ["사용자 수", data[1] || "-"],
      ["전환율", data[2] || "-"],
      ["이탈 신호", data[3] || "-"],
      ["관련 선수", data[4] || "-"],
      ["예상 기여", data[6] || "-"],
      ["추천 개선 액션", data[7] || "-"],
    ],
  });
}

function showFunnelDetail(stage) {
  const data = {
    "highlight-create": ["하이라이트 생성", "11K", "26%", "선수 미선택 이탈 18%", currentContext.playmakerName, "선택 선수 기반 생성", "예상 후속 CTA 1,840건", "선수 선택 기본값과 추천 조합을 먼저 제시"],
    "tactics-view": ["작전판AI 열람", "7.4K", "67%", "해설 난이도 전환 전 이탈 14%", currentContext.shooterName, "3점 작전판AI 해설", "입덕패스 열람 +1.2K", "초보 해설 첫 문장을 더 짧게 노출"],
    "mate-click": ["직관메이트 클릭", "3.2K", "43%", "좌석 정보 부족 이탈 12%", currentContext.shooterName, "같은 선수 관심 매칭", "동행 이벤트 참여 84팀", "좌석/응원 성향을 모집글 카드에 먼저 표시"],
    "ticket-cta": ["예매 CTA 클릭", "128", "4.0%", "예매 링크 전환 전 이탈 9%", currentContext.shooterName, "응원석 예매 CTA", "예상 예매 매출 384만원", "하이라이트 카드 하단 CTA 문구를 응원석 중심으로 변경"],
    "goods-cta": ["굿즈 CTA 클릭", "92", "2.9%", "상품 상세 전 이탈 11%", currentContext.rebounderName, "포토카드/굿즈 이벤트", "예상 굿즈 매출 276만원", "저장률 높은 골밑 장면과 한정 포토카드 문구를 연결"],
    "sponsor-event": ["스폰서 이벤트 참여", "56", "1.7%", "쿠폰 저장 전 이탈 8%", currentContext.shooterName, "직관메이트 매칭 이벤트 스폰서", "스폰서 노출 가치 140만원", "이벤트 카드 CTA와 쿠폰 저장 버튼을 분리 노출"],
  }[stage];

  if (!data) return;

  openDashboardModal({
    kicker: "Performance",
    title: data[0],
    subtitle: "CTA 클릭, 이벤트 참여, 굿즈 반응, 스폰서 이벤트 반응과 예상 매출 기여를 확인합니다.",
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
        <li><strong>추적 범위</strong> 예매 CTA, 이벤트 참여, 굿즈 반응, 스폰서 이벤트 참여</li>
      </ul>
      <div class="modal-action-row">
        <button type="button" data-event-builder="0">이벤트로 전환</button>
        <button type="button" data-save-performance-report="${escapeHtml(stage)}">Performance 리포트 저장</button>
      </div>
    `,
  });
}

function showDashboardMenu(menu) {
  const menuData = {
    campaign: [
      "Event Builder",
      "Revenue Playbook 추천을 팬 웹서비스 이벤트 카드로 바꾸는 메뉴입니다.",
      ["추천 장면 불러오기", "CTA 문구 생성", "구단 담당자 승인", "팬 웹서비스 노출 예약"],
    ],
    sponsor: [
      "Sponsor Package Builder",
      "Event Builder에서 파생된 인기 장면과 팬 반응을 스폰서 제안서 형태로 묶습니다.",
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
    `현재 ${context.team.name} 기준으로 Play-by-Play, 하이라이트, 입덕패스, 직관메이트 추천이 개인화됩니다.`,
  );
  setText(
    "#profile-data-note",
    `등록 선수 ${context.roster.length}명 · 기록 선수 ${context.stats.length}명`,
  );

  renderTeamOptions(context);
}

function updateAuthStatus(user) {
  if (!authStatus) return;

  if (user) {
    authStatus.textContent = `${user.name}님으로 로그인 중 · ${currentContext.team.fullName} 세션`;
    profileButton.textContent = user.name.slice(0, 2).toUpperCase();
    return;
  }

  authStatus.textContent = "로그인하면 선호팀과 Play-by-Play 시청 흐름이 서버 세션에 연결됩니다.";
  profileButton.textContent = "MY";
}

async function requestAuth(path, payload) {
  const response = await fetch(path, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "인증 요청에 실패했습니다.");
  return data;
}

async function loadCurrentUser() {
  try {
    const response = await fetch("/api/auth/me");
    const data = await response.json();
    updateAuthStatus(data.user);
    if (data.user?.favoriteTeamCode && TEAM_CONFIGS[data.user.favoriteTeamCode]) {
      renderTeam(data.user.favoriteTeamCode);
    }
  } catch {
    updateAuthStatus(null);
  }
}

async function handleAuthSubmit(event) {
  const submitter = event.submitter;
  const action = submitter?.dataset.authAction || "login";
  if (!submitter) return;

  event.preventDefault();
  const formData = new FormData(authForm);
  const payload = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    favoriteTeamCode: currentContext.team.code,
  };

  try {
    submitter.disabled = true;
    authStatus.textContent = action === "register" ? "회원가입 중..." : "로그인 중...";
    const data = await requestAuth(`/api/auth/${action}`, payload);
    updateAuthStatus(data.user);
    showToast(`${data.user.name}님, CourtLens에 연결됐습니다.`);
  } catch (error) {
    authStatus.textContent = error.message;
  } finally {
    submitter.disabled = false;
  }
}

async function logoutUser() {
  try {
    await requestAuth("/api/auth/logout", {});
    updateAuthStatus(null);
    showToast("로그아웃되었습니다.");
  } catch (error) {
    authStatus.textContent = error.message;
  }
}

function renderTeam(teamCode = selectedTeamCode) {
  selectedTeamCode = teamCode;
  currentContext = buildTeamContext(selectedTeamCode);
  selectedCalendarMonth = monthKeyForGame(currentContext.match);
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

function dateInputValueAfter(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function formatMateDate(value) {
  if (!value) return "선택 날짜";

  const [year, month, day] = value.split("-");
  if (!year || !month || !day) return value;

  return `${year}.${month}.${day}`;
}

const MATE_SEED_COMMENTS = [
  {
    author: "현장팬",
    comment: "관심 있어요. 경기 전 30분 전에 맞춰서 합류할 수 있어요.",
  },
  {
    author: "입덕팬",
    comment: "처음 직관이라 응원석 분위기 같이 보면 좋겠어요.",
  },
  {
    author: "전술팬",
    comment: "하이라이트 장면 얘기하면서 같이 보면 재미있을 것 같아요.",
  },
];

function createMateCommentItem(author, comment, options = {}) {
  const item = document.createElement("div");
  const avatar = document.createElement("span");
  const body = document.createElement("div");
  const meta = document.createElement("span");
  const text = document.createElement("p");

  item.className = `mate-comment${options.mine ? " mine" : ""}`;
  avatar.className = "mate-comment-avatar";
  avatar.textContent = options.mine ? "나" : author.slice(0, 1);
  meta.className = "mate-comment-meta";
  meta.textContent = options.meta || `${author} · 댓글`;
  text.textContent = comment;

  body.append(meta, text);
  item.append(avatar, body);
  return item;
}

function updateMateCommentCount(thread) {
  const count = thread.querySelectorAll(".mate-comment").length;
  const countEl = thread.querySelector(".mate-comment-count");
  if (countEl) countEl.textContent = `댓글 ${count}`;
}

function createMateCommentThread(index = 0) {
  const seedComment = MATE_SEED_COMMENTS[index % MATE_SEED_COMMENTS.length];
  const thread = document.createElement("div");
  const header = document.createElement("div");
  const label = document.createElement("span");
  const count = document.createElement("strong");
  const list = document.createElement("div");
  const form = document.createElement("form");
  const input = document.createElement("input");
  const button = document.createElement("button");
  const status = document.createElement("small");

  thread.className = "mate-comment-thread";
  header.className = "mate-comment-header";
  label.textContent = "공개 댓글";
  count.className = "mate-comment-count";
  list.className = "mate-comment-list";
  list.append(createMateCommentItem(seedComment.author, seedComment.comment));

  form.className = "mate-comment-form";
  input.type = "text";
  input.name = "comment";
  input.placeholder = "댓글로 같이 갈 의사를 남겨보세요.";
  input.setAttribute("aria-label", "직관메이트 댓글");
  button.type = "submit";
  button.textContent = "댓글 등록";
  status.className = "mate-comment-status";
  status.setAttribute("aria-live", "polite");

  header.append(label, count);
  form.append(input, button, status);
  thread.append(header, list, form);
  updateMateCommentCount(thread);
  return thread;
}

function ensureMateCommentThreads() {
  document.querySelectorAll(".mate-card").forEach((card, index) => {
    if (card.querySelector(".mate-comment-thread")) return;
    card.append(createMateCommentThread(index));
  });
}

function handleMateCommentSubmit(event) {
  const form = event.target.closest(".mate-comment-form");
  if (!form) return;

  event.preventDefault();

  const card = form.closest(".mate-card");
  const title = card?.querySelector("strong")?.textContent || "직관메이트";
  const thread = form.closest(".mate-comment-thread");
  const list = thread?.querySelector(".mate-comment-list");
  const input = form.querySelector("[name='comment']");
  const status = form.querySelector(".mate-comment-status");
  const comment = input.value.trim();

  if (!comment) {
    status.textContent = "댓글 내용을 입력해 주세요.";
    input.focus();
    return;
  }

  list?.append(createMateCommentItem("나", comment, { mine: true, meta: "나 · 방금 전" }));
  input.value = "";
  status.textContent = "댓글이 등록됐습니다.";
  if (thread) updateMateCommentCount(thread);
  showToast(`${title} 모집글에 댓글을 남겼습니다.`);
}

function populateMateForm() {
  if (!matePlayerInput) return;

  const pickedPlayers = selectedPlayers();
  const players = pickedPlayers.length ? pickedPlayers : displayRosterPlayers(currentContext).slice(0, 6);
  const match = currentContext.match;
  const opponent = matchOpponentFor(match, currentContext.team.code);

  matePlayerInput.innerHTML = "";
  players
    .filter((player) => player.matchAvailable !== false)
    .forEach((player) => {
      const option = document.createElement("option");
      option.value = player.name;
      option.textContent = player.name;
      matePlayerInput.append(option);
    });

  if (mateDateInput) {
    mateDateInput.min = dateInputValueAfter(0);
    mateDateInput.value = match?.date || dateInputValueAfter(7);
  }
  if (mateLocationInput) {
    mateLocationInput.value = match?.away.code === currentContext.team.code ? "원정 경기" : "홈 경기";
  }
  if (mateGameInput) {
    mateGameInput.options[0].textContent =
      match?.preGame.mate.gameChoice || `${currentContext.team.opponent}전`;
  }
  if (mateSeatInput) {
    mateSeatInput.options[0].textContent =
      match?.preGame.mate.seatChoice || `${currentContext.team.city} 응원석`;
  }
  if (mateNoteInput) {
    mateNoteInput.value = match
      ? `${match.dateLabel} ${opponent?.name || "상대팀"}전 같이 보실 분 찾아요. 경기 전 직관메이트로 만나서 오늘 관전 포인트 같이 보고 싶어요.`
      : `${currentContext.shooterName} 하이라이트 보고 같이 경기 보실 분 찾아요. 처음 직관이어도 편하게 오세요.`;
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
  metaEl.textContent = `${formatMateDate(values.date)} · ${values.location} · ${values.game} · ${values.seat} · ${values.style}`;
  noteEl.className = "safety-note";
  noteEl.textContent = values.note;
  tags.className = "mate-tags";

  [
    values.player,
    values.location,
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
  ensureMateCommentThreads();
  updateMateCount();
}

function submitMatePost(event) {
  event.preventDefault();

  createMatePostCard({
    date: mateDateInput?.value || dateInputValueAfter(7),
    location: mateLocationInput?.value || "홈 경기",
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
    activeClipFilter = "generated";
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

pbpTimeline?.addEventListener("click", (event) => {
  const row = event.target.closest(".pbp-row");
  if (!row) return;

  selectedPbpQuarter = row.dataset.pbpClipQuarter || selectedPbpQuarter;
  openPbpClip(row.dataset.pbpClipId);
});

pbpQuarterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedPbpQuarter = button.dataset.pbpQuarter || "Q1";
    activePbpClip = null;
    if (pbpPostVideo) {
      pbpPostVideo.pause();
      pbpPostVideo.removeAttribute("src");
      pbpPostVideo.load();
    }
    renderPlayByPlayTimeline();
  });
});

pbpVideo?.addEventListener("timeupdate", () => {
  if (!activePbpClip || pbpVideo.currentTime < activePbpClip.playbackEnd) return;

  pbpVideo.pause();
  pbpVideo.currentTime = activePbpClip.playbackEnd;
});

pbpPostVideo?.addEventListener("timeupdate", () => {
  if (!activePbpClip || pbpPostVideo.currentTime < activePbpClip.playbackEnd) return;

  pbpPostVideo.pause();
  pbpPostVideo.currentTime = activePbpClip.playbackEnd;
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

  if (chip.disabled || chip.dataset.matchAvailable === "false") {
    showToast("해당 경기를 뛰지 않은 선수는 선택할 수 없습니다.");
    return;
  }

  const code = chip.dataset.playerCode;
  if (!code) return;

  if (selectedPlayerCodes.has(code)) {
    selectedPlayerCodes.delete(code);
  } else {
    selectedPlayerCodes.add(code);
  }

  chip.classList.toggle("active", selectedPlayerCodes.has(code));
  chip.setAttribute("aria-pressed", String(selectedPlayerCodes.has(code)));
  updateFollowCount();
  applyClipFilter();
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => setFanPanel(button.dataset.panel));
});

fanView?.addEventListener("click", (event) => {
  const calendarMonthButton = event.target.closest("[data-calendar-month]");
  if (calendarMonthButton) {
    const months = calendarMonthsForTeam(currentContext.team.code);
    const currentIndex = months.indexOf(selectedCalendarMonth);
    const direction = calendarMonthButton.dataset.calendarMonth === "prev" ? -1 : 1;
    const nextMonth = months[currentIndex + direction];
    if (nextMonth) {
      selectedCalendarMonth = nextMonth;
      updateMatchFlowPanel(currentContext);
    }
    return;
  }

  const calendarGameButton = event.target.closest("[data-calendar-game]");
  if (calendarGameButton) {
    selectedMatchId = calendarGameButton.dataset.calendarGame;
    const selectedGame = KBL_SEASON_GAMES.find((game) => game.id === selectedMatchId);
    if (selectedGame) selectedCalendarMonth = monthKeyForGame(selectedGame);
    renderTeam(currentContext.team.code);
    showToast(`${selectedGame?.dateLabel || "선택 경기"} 기준으로 팬 웹서비스 흐름을 갱신했습니다.`);
    return;
  }

  const commentReactionButton = event.target.closest("[data-comment-reaction]");
  if (commentReactionButton) {
    const isActive = commentReactionButton.classList.toggle("active");
    const baseCount = Number(commentReactionButton.dataset.reactionCount || 0);
    if (commentReactionButton.dataset.commentReaction === "like" && baseCount) {
      commentReactionButton.textContent = `공감 ${baseCount + (isActive ? 1 : 0)}`;
    }
    showToast("팬 댓글 반응이 Fan Voice 분석 입력으로 반영되었습니다.");
    return;
  }
});

clipFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeClipFilter = button.dataset.clipFilter;
    if (activeClipFilter === "generated" && !isGeneratedClip()) {
      const generatedCard = clipList.querySelector(".highlight-card.generated");
      if (generatedCard) setSelectedClip(generatedCard.dataset.clip);
    }
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

authForm?.addEventListener("submit", handleAuthSubmit);
authLogoutButton?.addEventListener("click", logoutUser);

mateCreateButtons.forEach((button) => {
  button.addEventListener("click", openMateModal);
});

mateCloseButtons.forEach((button) => {
  button.addEventListener("click", closeMateModal);
});

mateCreateForm?.addEventListener("submit", submitMatePost);

document.querySelector(".mate-list")?.addEventListener("submit", handleMateCommentSubmit);

dashboardCloseButtons.forEach((button) => {
  button.addEventListener("click", closeDashboardModal);
});

document.querySelector("#club-view")?.addEventListener("click", (event) => {
  const sectionButton = event.target.closest("[data-dashboard-section]");
  if (sectionButton) {
    setDashboardSection(sectionButton.dataset.dashboardSection);
    return;
  }

  const eventBuilder = event.target.closest("[data-event-builder]");
  if (eventBuilder) {
    showEventBuilder(Number(eventBuilder.dataset.eventBuilder || 0));
    return;
  }

  const campaignBuilder = event.target.closest("[data-campaign-builder]");
  if (campaignBuilder) {
    showEventBuilder(Number(campaignBuilder.dataset.campaignBuilder || 0));
    return;
  }

  const playerContext = event.target.closest("[data-player-context]");
  if (playerContext) {
    showPlayerContext(Number(playerContext.dataset.playerContext || 0));
    return;
  }

  const matchdayOps = event.target.closest("[data-matchday-ops]");
  if (matchdayOps) {
    showMatchdayOps();
    return;
  }

  const aiStrategy = event.target.closest("[data-ai-strategy]");
  if (aiStrategy) {
    showAiStrategyDecision();
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

  const eventBuilder = event.target.closest("[data-event-builder]");
  if (eventBuilder) {
    showEventBuilder(Number(eventBuilder.dataset.eventBuilder || 0));
    return;
  }

  const campaignBuilder = event.target.closest("[data-campaign-builder]");
  if (campaignBuilder) {
    showEventBuilder(Number(campaignBuilder.dataset.campaignBuilder || 0));
    return;
  }

  const playerContext = event.target.closest("[data-player-context]");
  if (playerContext) {
    showPlayerContext(Number(playerContext.dataset.playerContext || 0));
    return;
  }

  const matchdayOps = event.target.closest("[data-matchday-ops]");
  if (matchdayOps) {
    showMatchdayOps();
    return;
  }

  const aiStrategy = event.target.closest("[data-ai-strategy]");
  if (aiStrategy) {
    showAiStrategyDecision();
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

  const saveEvent = event.target.closest("[data-save-event-builder]");
  if (saveEvent) {
    appendModalOutput(createEventAsset(Number(saveEvent.dataset.saveEventBuilder || 0)));
    return;
  }

  const saveCampaign = event.target.closest("[data-save-campaign-builder]");
  if (saveCampaign) {
    appendModalOutput(createEventAsset(Number(saveCampaign.dataset.saveCampaignBuilder || 0)));
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

  const savePerformance = event.target.closest("[data-save-performance-report]");
  if (savePerformance) {
    appendModalOutput(createPerformanceAsset(savePerformance.dataset.savePerformanceReport));
    return;
  }

  const action = event.target.closest("[data-modal-action]");
  if (!action) return;

  const asset = createGeneratedAsset(action.dataset.modalAction);
  appendModalOutput(asset);
});

generateButton.addEventListener("click", generateHighlightFromSelection);

pbpPostCloseButtons.forEach((button) => {
  button.addEventListener("click", closePbpPost);
});

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

  if (pbpPostModal?.classList.contains("open")) {
    closePbpPost();
  }

  if (dashboardModal?.classList.contains("open")) {
    closeDashboardModal();
  }
});

renderPlayByPlayTimeline();
setFanPanel(activePanel);
renderTeam(selectedTeamCode);
loadCurrentUser();
