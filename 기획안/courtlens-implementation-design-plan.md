# CourtLens MVP 구현/디자인 정리안

## 1. 문서 목적

이 문서는 최신 CourtLens 기획안을 실제 프로토타입과 개발 범위로 옮기기 위한 실행 정리안이다.

서비스 기획안은 "왜 만드는가"를 설명하고, 이 문서는 "MVP에서 무엇을 보여줄 것인가"를 정의한다. 현재 MVP의 초점은 완전한 AI 모델이 아니라 팬 앱과 구단 대시보드가 하나의 데이터 흐름으로 연결되고, 이 흐름이 구단의 매출 액션으로 이어지는 모습을 보여주는 것이다.

## 2. 제품 표면

| 제품 표면 | 대상 | 목적 | MVP 상태 |
| --- | --- | --- | --- |
| 팬 앱 | KBL 팬 | 좋아하는 선수 중심 하이라이트, 쉬운 해설, 직관메이트 제공 | 구현 |
| 구단 대시보드 | 구단 마케팅/콘텐츠 담당자 | 팬 반응을 이벤트, 스폰서, ROI 운영으로 연결 | 구현 |
| AI Strategy Engine | 구단 담당자/운영자 | 팬 행동과 선수 맥락을 실행 문서로 변환 | UI/문서화 구현 |
| 모델 파이프라인 | 개발자/운영자 | play-by-play와 영상 클립 연결 | 구조만 정의 |
| 관리자/권한 도구 | 서비스 운영자 | 계정, 승인, 배포, 권한 관리 | MVP 제외 |

## 3. MVP 우선순위

### P0: 발표에서 반드시 보여줄 것

- 선호팀 전환: 창원 LG 세이커스 / 수원 KT 소닉붐
- 선수 선택 기반 AI 하이라이트 생성 인터랙션
- 작전판AI 초보/농잘알 해설
- 입덕패스
- 직관메이트 모집글 작성과 신청
- 구단 대시보드 `이번 주 매출 기회 Top 3`
- `Fan Insight → Revenue Playbook → Performance` 3축
- AI Strategy Engine 카드와 상세 모달
- Event Builder, Sponsor Package Builder, Performance 리포트
- 생성 결과함

### P1: 설득력을 높이는 보조 기능

- Fan Voice 카테고리별 운영 개선 액션
- Player Context DB 모달
- Matchday Ops 모달
- KBL 10개 구단 데이터 패널
- 콘텐츠 자동 생성 큐 미리보기
- Funnel / ROI 단계별 상세 모달

### P2: MVP 이후

- 실제 KBL API 자동 수집 배치
- 실제 경기 영상 URL과 타임코드 자동 매칭
- 실제 예매/굿즈몰/CRM 연동
- 구단 담당자 승인/게시 워크플로우
- 로그인/권한 시스템
- 다종목 확장

## 4. 프론트엔드 구현 방향

현재 프로토타입은 정적 웹 기반으로 유지한다.

- HTML
- CSS
- Vanilla JavaScript
- `kbl-data.js` 정적 데이터
- 브라우저에서 바로 확인 가능한 구조

이유:

- 아이디어톤에서는 실제 서비스 완성보다 사용 흐름 설득이 중요하다.
- 팀원이 빠르게 열어보고 수정할 수 있다.
- 발표 화면 캡처와 데모 준비가 쉽다.

제품화 단계에서는 React 또는 Next.js, TypeScript, API 기반 데이터 로딩, 공통 디자인 시스템으로 전환할 수 있다.

## 5. 팬 앱 화면 구조

### 1. 팀/선수 선택

필수 요소:

- 마이페이지 선호팀 변경
- 팀 컬러 자동 반영
- 팀별 선수 칩 렌더링
- 다중 선수 선택
- 선택 선수 수와 생성 CTA 표시

사용자 메시지:

- 팬은 전체 경기보다 좋아하는 선수의 장면을 먼저 볼 수 있다.
- 팀이 바뀌면 선수, 색상, 추천 문구도 함께 바뀐다.

### 2. AI 하이라이트

필수 요소:

- 하이라이트 생성 버튼
- 생성 중 상태
- 방금 생성된 클립 카드
- 생성된 클립 선택 시 작전판AI 패널 갱신

MVP 전제:

- 실제 영상 생성이 아니라 AI 생성 흐름을 UI로 시연한다.
- 실제 제품에서는 play-by-play, 영상 타임코드, OCR/ASR을 연결해 이벤트 앞뒤 8~12초를 잘라낸다.

### 3. 작전판AI

필수 요소:

- 초보 모드
- 농잘알 모드
- 선택 장면의 쉬운 해설
- 전술적 설명

사용자 메시지:

- 농구를 몰라도 장면의 의미를 이해할 수 있다.
- 전술을 아는 팬에게도 더 깊은 설명을 제공할 수 있다.

### 4. 입덕패스

필수 요소:

- 선수별 입덕 포인트
- 팀 관전 포인트
- 하이라이트와 이어지는 짧은 설명

사용자 메시지:

- 오늘 처음 본 팬도 어떤 선수를 보면 되는지 알 수 있다.

### 5. 직관메이트

필수 요소:

- 홈/원정 경기 선택
- 날짜 선택
- 경기/좌석/응원 성향 선택
- 관심 선수 선택
- 모집글 작성
- 모집글 카드 생성
- 신청 멘트 입력과 신청 완료 상태

사용자 메시지:

- 혼자 직관하기 부담스러운 팬을 연결한다.
- 같은 선수나 장면에 반응한 팬끼리 다음 경기를 같이 볼 수 있다.
- 구단은 직관 의도, 좌석 선호, 초보 팬 니즈를 얻는다.

## 6. 구단 대시보드 화면 구조

구단 대시보드는 조용하고 실무적인 운영툴처럼 보여야 한다. 핵심은 `보여주는 분석`이 아니라 `실행 가능한 액션`이다.

### 1. 이번 주 매출 기회 Top 3

필수 요소:

- 관련 선수/장면
- 팬 반응 근거
- 예상 효과
- 실행 난이도
- 추천 액션
- 이벤트 만들기 버튼
- 스폰서 제안서 버튼

대표 예시:

- 유기상 3점 하이라이트 반응 급상승 → 응원석 단기성 이벤트
- 아셈 마레이 골밑 장면 저장률 높음 → 포토카드/굿즈 테스트
- 직관메이트 클릭률 증가 → 다음 홈경기 동행 이벤트

### 2. 3축 메뉴

현재 UI는 구단 대시보드를 3축으로 단순화한다.

- Fan Insight: 선수별 반응, 하이라이트 저장/공유, Fan Voice, Player Context DB
- Revenue Playbook: 단기 이벤트, 라운드 이벤트, 장기 프랜차이즈 마케팅
- Performance: CTA 클릭, 이벤트 참여, 굿즈 반응, 스폰서 이벤트 반응, 예상 매출 기여

### 3. AI Strategy Engine

필수 요소:

- Input: 팬 행동 + 선수 맥락
- Model: 전략 생성 모델 + 분류/랭킹 모델
- Output: 실행 가능한 이벤트 브리프
- 상세 모달: 데이터 입력, 처리 흐름, 모델 원칙, 산출물, 승인 흐름

역할:

- Revenue Playbook이 단순 추천 목록이 아니라 AI가 근거를 붙여 만든 전략 초안임을 보여준다.

### 4. Event Builder

필수 요소:

- 추천 액션 확인
- 이벤트 초안 생성
- 이벤트 유형
- 대상 팬 세그먼트
- 이벤트명
- 노출 위치
- CTA 문구
- 운영 기간
- 게시/저장 버튼

### 5. Sponsor Package Builder

필수 요소:

- 패키지명
- 대표 장면
- 팬 반응 지표
- 예상 노출 위치
- 제안 문구
- 스폰서 제안서 저장

### 6. Performance / ROI

필수 단계:

- 하이라이트 생성
- 작전판AI 열람
- 직관메이트 클릭
- 예매 CTA 클릭
- 굿즈 CTA 클릭
- 스폰서 이벤트 참여

각 단계 상세:

- 사용자 수
- 전환율
- 이탈률
- 관련 선수
- 관련 콘텐츠
- 예상 매출 기여
- 추천 개선 액션

## 7. 백엔드/API 기획

MVP에서는 실제 서버를 반드시 만들 필요는 없다. 다만 제품화 시 필요한 데이터 구조와 API 경계를 문서화한다.

### 핵심 데이터 모델

#### Team

| 필드 | 설명 |
| --- | --- |
| id | 구단 ID |
| name | 구단명 |
| shortName | 약칭 |
| venue | 홈구장 |
| colors | 팀 컬러 |

#### Player

| 필드 | 설명 |
| --- | --- |
| id | 선수 ID |
| teamId | 소속 구단 |
| name | 선수명 |
| number | 등번호 |
| position | 포지션 |
| stats | 시즌 기록 |
| profileTags | 역할, 최근 폼, 입덕 포인트 |

#### HighlightClip

| 필드 | 설명 |
| --- | --- |
| id | 하이라이트 ID |
| teamId | 구단 ID |
| playerIds | 포함 선수 |
| sourceEventIds | 기반 play-by-play 이벤트 |
| title | 클립 제목 |
| easyExplanation | 초보자용 설명 |
| proExplanation | 전술 설명 |
| videoStartSec | 영상 시작 시점 |
| videoEndSec | 영상 종료 시점 |

#### FanAction

| 필드 | 설명 |
| --- | --- |
| id | 행동 ID |
| userId | 팬 ID |
| targetType | player, clip, pass, mate, event, sponsor |
| targetId | 대상 ID |
| actionType | view, save, share, comment, click, apply |
| createdAt | 발생 시각 |

#### RevenueOpportunity

| 필드 | 설명 |
| --- | --- |
| id | 기회 ID |
| teamId | 구단 ID |
| scene | 관련 장면 |
| proof | 팬 반응 근거 |
| effect | 예상 효과 |
| difficulty | 실행 난이도 |
| recommendedAction | 추천 액션 |
| eventType | 단기성 이벤트, 라운드 이벤트, 장기 마케팅 |
| expectedRevenue | 예상 매출 기여 |

#### GeneratedAsset

| 필드 | 설명 |
| --- | --- |
| id | 문서 ID |
| kind | 이벤트 문서, 스폰서 제안서, Performance 리포트 |
| title | 문서 제목 |
| summary | 요약 |
| sections | 구조화 내용 |
| createdAt | 생성 시각 |

### API 설계 초안

| Method | Endpoint | 설명 |
| --- | --- | --- |
| GET | /api/teams | 구단 목록 |
| GET | /api/teams/:teamId/players | 구단 선수 목록 |
| GET | /api/games/:gameId | 경기 정보 |
| GET | /api/games/:gameId/play-by-play | 경기 이벤트 로그 |
| GET | /api/games/:gameId/highlight-candidates | 하이라이트 후보 |
| POST | /api/highlights | 선택 선수 기반 하이라이트 생성 |
| POST | /api/mate-posts | 직관메이트 모집글 생성 |
| GET | /api/clubs/:teamId/insights | 구단 Fan Insight |
| GET | /api/clubs/:teamId/revenue-opportunities | 이번 주 매출 기회 Top 3 |
| POST | /api/clubs/:teamId/events/draft | Event Builder 초안 생성 |
| POST | /api/clubs/:teamId/sponsor-packages/draft | Sponsor Package 초안 생성 |
| GET | /api/clubs/:teamId/performance | Performance / ROI 데이터 |

## 8. 모델 연동 지점

모델 개발은 별도 범위지만, 프론트/백엔드에서는 다음 입력과 출력을 받을 수 있어야 한다.

### AI 하이라이트/해설

입력:

- 경기 ID
- play-by-play 이벤트 목록
- 선수 정보
- 경기 스코어 흐름
- 연결 가능한 영상 URL
- 팬이 선택한 선수 목록

출력:

- 하이라이트 후보 이벤트
- 선수별 영향도 점수
- 클립 제목
- 초보자용 설명
- 농잘알용 설명
- 영상 시작/종료 시점

### AI Strategy Engine

입력:

- FanAction 집계
- Player Context DB
- Fan Voice 분류 결과
- 경기 일정
- 좌석/굿즈 재고
- 스폰서 제약 조건

출력:

- Revenue Opportunity Top 3
- 이벤트 브리프
- 대상 팬 세그먼트
- CTA 문구
- 노출 위치
- 예상 KPI
- 스폰서 제안 문구
- Performance 개선 액션

모델 스택:

- 전략 생성/이벤트 기획: `gpt-5.5`
- 대량 분류/세그먼트 라벨링: `gpt-5.4-mini`
- 후보 스코어링/랭킹: `gpt-5.4-nano`
- ASR/자막 처리: `gpt-4o-transcribe` 또는 `gpt-4o-mini-transcribe`
- 영상 구간 추출: OpenCV, OCR, play-by-play 동기화

## 9. 디자인 방향

### 팬 앱

- 모바일 앱처럼 보여야 한다.
- 초보 팬이 부담 없이 들어와 "무엇을 보면 되는지" 바로 알 수 있어야 한다.
- 카드 기반 정보 구조를 사용한다.
- 팀 컬러를 적극적으로 반영한다.
- 버튼은 다음 행동이 명확해야 한다.

### 구단 대시보드

- SaaS 운영툴처럼 조용하고 정보 밀도가 있어야 한다.
- 과한 장식보다 지표, 추천, 실행 버튼이 잘 보여야 한다.
- 대시보드 첫 화면에서 매출 기회 Top 3가 보여야 한다.
- 각 카드가 Event Builder, Sponsor Package, Performance로 이어져야 한다.
- 분석과 실행이 분리되지 않아야 한다.

### 컴포넌트

- 팀/선수 칩
- 하이라이트 카드
- 작전판AI 설명 패널
- 입덕패스 카드
- 직관메이트 모집 카드
- Revenue Opportunity 카드
- Event Builder 모달
- Sponsor Package 모달
- Performance 상세 모달
- 생성 결과함 문서 카드

## 10. 개발 일정 예시

### Day 1: 제품 구조 확정

- 최신 서비스 기획안 정리
- MVP 포함/제외 범위 확정
- 팬 앱과 구단 대시보드 데모 흐름 확정

### Day 2: 팬 앱 MVP

- 팀/선수 선택
- AI 하이라이트 생성 인터랙션
- 작전판AI/입덕패스
- 직관메이트 모집글 작성

### Day 3: 구단 대시보드 MVP

- Revenue Opportunity Top 3
- 3축 메뉴
- AI Strategy Engine
- Event Builder
- Sponsor Package Builder
- Performance / ROI

### Day 4: 발표 정리

- README/기획서/IR draft 정리
- 데모 흐름 점검
- 발표 스크립트 정리
- 로컬 발표 자료 생성

## 11. 구현 리스크와 대응

### 1. 영상과 play-by-play 시간 매칭

경기 시계 시간과 실제 영상 시간은 다르다. MVP에서는 자동 매칭을 완성하지 않고 샘플 연결로 보여준다.

### 2. 기능 범위 과다

팬 앱, 구단 대시보드, 모델 파이프라인을 모두 완성하려 하면 범위가 커진다. MVP에서는 흐름과 사업성 증명에 집중한다.

### 3. B2B 수익화 설득

구단이 비용을 낼 이유가 분명해야 한다. 따라서 구단 대시보드는 지표보다 이벤트 초안, 스폰서 제안서, Performance 리포트가 중요하다.

### 4. AI 추천 신뢰성

추천에는 근거 지표와 관련 선수/콘텐츠/팬 세그먼트를 붙인다. 자동 게시하지 않고 구단 담당자 승인 단계를 둔다.

### 5. 개인정보와 팬 안전

팬 행동 데이터는 익명/집계 중심으로 사용한다. 직관메이트는 신고, 차단, 공개 범위, 안전 가이드가 필요하다.

## 12. 최종 정리

CourtLens MVP의 개발 초점은 완전한 AI 모델이 아니라, 팬이 남긴 관심이 구단의 실행 가능한 매출 액션으로 바뀌는 모습을 보여주는 것이다.

팬 앱은 라이트 팬이 경기를 이해하고 직관으로 넘어가게 만들고, 구단 대시보드는 Fan Insight, Revenue Playbook, AI Strategy Engine, Event Builder, Sponsor Package, Performance를 통해 B2B SaaS로서의 구매 이유를 만든다.
