# frontend

CourtLens 팬 웹서비스의 브라우저 자산을 모아 둔 디렉터리입니다.

- `index.html`: 팬 웹서비스 화면 구조
- `styles.css`: 전체 UI 스타일
- `app.js`: KBL/FIBA 데모 데이터, 화면 상태, 인터랙션 로직
- `kbl-data.js`: KBL 선수/기록 기반 보조 정적 데이터

Django는 루트 URL, `/index.html`, `/app.js`, `/styles.css`, `/kbl-data.js` 요청을 이 디렉터리의 파일로 서빙합니다. 프론트에서 서버 기능을 사용할 때는 `/api/...` 경로를 호출합니다.
