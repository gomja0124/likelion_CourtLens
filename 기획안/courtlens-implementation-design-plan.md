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
- Campaign Builder, Sponsor Package Builder, Performance 리포트
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

## 4. 역할별 구현 업무

MVP는 정적 프로토타입이지만, 지금까지 학습한 웹/Git, HTML/CSS, JS/TS, React, Figma, DRF, Django, DB, JWT, API 연결, 배포/운영, 창업론, 스프린트 방법론을 실제 역할 분장으로 연결해두어야 제품화 단계에서 바로 백로그로 전환할 수 있다.

### 배운 기술 스택 반영 방식

| 배운 내용 | CourtLens 기획안 반영 방식 |
| --- | --- |
| 웹 개발/Git 기초 | `main` 기준 버전 관리, 기능 브랜치, commit/push 흐름, README와 기획안 문서 분리 |
| HTML/CSS + JS/TS | 현재 MVP는 정적 HTML/CSS/Vanilla JS로 구현하고, 이벤트 트리거는 `data-*` 속성으로 명확히 관리 |
| React 입문/실습/심화 | 제품화 단계에서 팬 앱과 구단 대시보드를 React + TypeScript 컴포넌트로 전환 |
| React 함수형 패러다임 | 화면 상태, 모달, 생성 결과함, API 로딩 상태를 함수형 컴포넌트와 hooks 중심으로 관리 |
| Figma 기초/실습 | 팬 앱 플로우, 구단 대시보드 IA, 컴포넌트, 반응형 레이아웃, 발표용 화면을 Figma로 정리 |
| DRF 입문 | Django REST Framework로 팬 앱/구단 대시보드 API를 설계 |
| Django 실습/DB | Team, Player, HighlightClip, FanAction, RevenueOpportunity, GeneratedAsset 모델과 DB 마이그레이션 설계 |
| Django 심화/JWT | 팬 사용자, 구단 관리자, 운영자 역할을 JWT 인증과 권한으로 분리 |
| API 연결 | React 프론트엔드가 DRF API를 호출하고, 로딩/오류/빈 상태를 화면에 반영 |
| uv 환경 관리 | Django 프로젝트 의존성, 실행 스크립트, 개발 환경을 `uv` 기준으로 표준화 |
| 혼자만의 서비스에서 모두의 서비스로 | 구단별 데이터 접근 범위, 배포 환경 변수, 로그/모니터링, 승인 워크플로우를 고려 |
| 창업론 | 구단이 돈을 낼 이유를 Revenue Playbook, Campaign Builder, Sponsor Package, ROI로 증명 |
| 스프린트/개발 방법론 | 기능을 1주 단위 스프린트와 데모 가능한 산출물 기준으로 쪼개어 관리 |

### 프론트엔드

해야 할 일:

- 현재 MVP 구현
  - HTML/CSS/Vanilla JS로 발표 가능한 정적 프로토타입 유지
  - `kbl-data.js` 샘플 데이터를 화면 상태와 연결
  - `data-revenue-opportunity`, `data-campaign-builder`, `data-sponsor-builder`, `data-funnel-stage`, `data-fan-voice-category` 같은 DOM 트리거 관리
- 팬 앱 화면 구현
  - 선호팀 전환, 선수 선택, 선택 선수 수 표시
  - AI 하이라이트 생성 버튼, 생성 중 상태, 생성 완료 토스트
  - 생성된 클립 카드와 작전판AI 패널 연결
  - 입덕패스 카드와 직관메이트 모집글 작성 모달
- 구단 대시보드 구현
  - 이번 주 매출 기회 Top 3 카드
  - Fan Insight, Revenue Playbook, Performance 3축 메뉴
  - AI Strategy Engine 카드와 상세 모달
  - Campaign Builder, Sponsor Package Builder, Performance 상세 모달
  - 생성 결과함 문서 카드와 다운로드/상세 보기
- 상태/인터랙션
  - 팀 변경 시 전체 데이터와 문구 갱신
  - 카드 클릭, 모달 열기/닫기, 저장 후 결과함 반영
  - 모바일/데스크톱 반응형 레이아웃
  - 비어 있음, 생성 중, 저장 완료, 오류 상태 정의
- 제품화 전환 시
  - React + TypeScript로 팬 앱/구단 대시보드 컴포넌트화
  - 함수형 컴포넌트와 hooks로 팀 선택, 모달, 생성 결과함, API 로딩 상태 관리
  - 정적 JS 객체를 DRF API 응답으로 교체
  - API 클라이언트, 타입 정의, 에러 핸들링, optimistic UI 정리
  - 이벤트 로그 수집용 `trackFanAction()` 공통 함수 추가

프론트엔드 산출물:

- 팬 앱 프로토타입
- 구단 대시보드 프로토타입
- 모달/토스트/생성 결과함 인터랙션
- 데모용 캡처 가능한 화면
- React 전환 시 컴포넌트 목록과 API 연결 명세

### 백엔드

해야 할 일:

- Django/DRF 프로젝트 구성
  - `uv`로 Python/Django 개발 환경과 의존성 관리
  - Django 앱을 `clubs`, `fans`, `games`, `highlights`, `campaigns`, `ai_ops` 단위로 분리
  - Django REST Framework로 팬 앱과 구단 대시보드 API 제공
- 데이터 API 설계
  - 구단, 선수, 경기, 하이라이트, 팬 행동, 생성 문서 API 제공
  - 팬 앱과 구단 대시보드가 같은 데이터 기준을 바라보도록 정규화
- DB 설계
  - PostgreSQL 기준으로 Team, Player, Game, HighlightClip, FanAction, RevenueOpportunity, GeneratedAsset 모델 정의
  - 팬 행동 로그는 개인 식별보다 익명/집계 분석에 적합하게 저장
  - 구단별 데이터 접근 범위와 감사 로그를 위한 필드 포함
- 인증/권한
  - JWT 기반 로그인
  - 팬 사용자, 구단 관리자, 서비스 운영자 권한 분리
  - 구단 관리자는 본인 구단의 팬 반응/캠페인/스폰서 자료만 접근
- 팬 행동 로그 저장
  - 하이라이트 조회/저장/공유
  - 작전판AI 열람
  - 직관메이트 클릭/모집글 작성/신청
  - 예매/굿즈/이벤트/스폰서 CTA 클릭
- 구단 대시보드 데이터 집계
  - 선수별 반응 점수
  - Revenue Opportunity Top 3 후보
  - Funnel / ROI 단계별 전환율과 이탈률
  - GeneratedAsset 저장소
- AI 호출 오케스트레이션
  - 프론트엔드가 OpenAI API를 직접 호출하지 않도록 서버에서만 모델 호출
  - 요청 데이터 정제, RAG 컨텍스트 조회, 모델 호출, JSON 검증, 결과 저장
  - 구단 담당자 승인 전에는 팬 앱에 자동 게시하지 않음
- 제품화 전환 시
  - PostgreSQL 또는 Supabase에 핵심 엔티티 저장
  - Redis/Queue로 긴 AI 작업 비동기 처리
  - 관리자 권한, 구단별 데이터 접근 범위, 감사 로그 추가

백엔드 산출물:

- Django/DRF 프로젝트 구조
- API 명세
- DB 스키마
- JWT 인증/권한 정책
- 팬 행동 로그 구조
- AI Strategy Engine 서버 함수
- 생성 문서 저장/조회 API

### 디자인

해야 할 일:

- Figma 기반 기획/디자인
  - 팬 앱 모바일 플로우와 구단 대시보드 데스크톱 플로우를 별도 프레임으로 정리
  - IA, user flow, wireframe, high-fidelity 화면, prototype 순서로 산출
  - 개발자가 그대로 구현할 수 있도록 spacing, color token, typography, component state를 명시
- 팬 앱 디자인
  - 모바일 우선 레이아웃
  - 팀 컬러 기반 브랜딩
  - 선수 선택, 하이라이트 카드, 작전판AI, 입덕패스, 직관메이트 화면
  - 초보 팬도 이해할 수 있는 짧은 문구와 명확한 CTA
- 구단 대시보드 디자인
  - SaaS 운영툴처럼 조용하고 정보 밀도 높은 화면
  - 매출 기회 Top 3가 첫 화면에서 바로 보이도록 배치
  - Campaign Builder와 Sponsor Package Builder를 실제 업무 문서처럼 설계
  - Performance는 숫자만 나열하지 않고 이탈 원인과 다음 액션을 함께 표시
- 디자인 시스템
  - 팀 컬러 토큰
  - 카드, 탭, 버튼, 모달, 토스트, 문서 카드 컴포넌트
  - 모바일/데스크톱 breakpoint
  - 긴 텍스트와 숫자 지표가 넘치지 않는 규칙
- 발표/IR 시각화
  - 팬 앱 → 구단 대시보드 데이터 흐름도
  - AI Strategy Engine 입력/처리/출력 다이어그램
  - B2B SaaS 가치가 드러나는 대시보드 캡처

디자인 산출물:

- Figma IA/user flow/wireframe
- 팬 앱 주요 화면
- 구단 대시보드 주요 화면
- Campaign Builder / Sponsor Package / Performance 모달
- 디자인 시스템 토큰과 컴포넌트 명세
- 발표용 화면 캡처와 흐름도

### AI/데이터

해야 할 일:

- play-by-play 이벤트 구조화
- 경기 시간 OCR/ASR 기반 영상 타임라인 동기화 설계
- 하이라이트 후보 점수화 기준 정의
- Fan Voice 분류 기준 정의
- Revenue Opportunity 점수화 기준 정의
- 모델별 입력/출력 JSON 스키마 정의
- AI 추천 결과의 근거 지표와 검증 기준 정의
- Django 백엔드에서만 OpenAI API를 호출하도록 서비스 레이어 설계
- 모델별 역할, 프롬프트 버전, JSON schema, fallback 템플릿 관리
- 구단 담당자가 승인하기 전까지 AI 산출물이 팬 앱에 자동 게시되지 않도록 상태 관리

AI/데이터 산출물:

- 하이라이트 후보 산출 규칙
- Fan Voice 분류 라벨
- Revenue Opportunity 스코어링 규칙
- AI Strategy Engine 프롬프트/출력 스키마
- 모델 평가 기준
- 모델 선택표와 백엔드 연동 흐름

## 5. 프론트엔드 구현 방향

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

React 전환 기준:

- `TeamSelector`, `PlayerSelector`, `HighlightCard`, `TacticBoard`, `RookiePass`, `MatePostForm`
- `RevenueOpportunityCard`, `CampaignBuilderModal`, `SponsorPackageModal`, `FunnelStageModal`, `FanVoicePanel`, `GeneratedAssetList`
- `useSelectedTeam`, `useSelectedPlayers`, `useGeneratedAssets`, `useClubDashboard` 같은 hooks로 상태 분리
- API 호출은 별도 client 모듈로 분리하고, 로딩/오류/빈 상태를 모든 주요 화면에 표시
- TypeScript interface는 백엔드 serializer 응답 구조와 1:1로 맞춘다

## 6. 팬 앱 화면 구조

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

## 7. 구단 대시보드 화면 구조

구단 대시보드는 조용하고 실무적인 운영툴처럼 보여야 한다. 핵심은 `보여주는 분석`이 아니라 `실행 가능한 액션`이다.

### 1. 이번 주 매출 기회 Top 3

필수 요소:

- 관련 선수/장면
- 팬 반응 근거
- 예상 효과
- 실행 난이도
- 추천 액션
- 캠페인 만들기 버튼
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

### 4. Campaign Builder

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

## 8. 백엔드/API 기획

MVP에서는 실제 서버를 반드시 만들 필요는 없다. 다만 제품화 시 필요한 데이터 구조와 API 경계를 문서화한다.

### 백엔드 기술 선택

| 항목 | 선택 | 이유 |
| --- | --- | --- |
| 웹 프레임워크 | Django | 관리자 화면, ORM, 인증, DB 마이그레이션을 빠르게 구성 |
| API | Django REST Framework | React 프론트엔드와 팬 앱/구단 대시보드 API 연결에 적합 |
| DB | PostgreSQL | 팬 행동 로그, 경기 데이터, 캠페인 문서를 관계형으로 관리 |
| 인증 | JWT | 팬 사용자와 구단 관리자 API 접근 권한 분리 |
| 환경 관리 | uv | Django 프로젝트 의존성, 실행 명령, 개발 환경 표준화 |
| 비동기 작업 | Celery/Redis 또는 Django-Q | 하이라이트 생성, AI 전략 생성, 리포트 생성 같은 긴 작업 처리 |
| 파일/미디어 | S3 호환 스토리지 | 영상 클립 썸네일, 제안서 파일, 리포트 파일 저장 |

### API 연결 원칙

- React 프론트엔드는 DRF API만 호출한다.
- OpenAI API, DB 집계, 스폰서/캠페인 생성 로직은 Django 백엔드 내부 서비스로 숨긴다.
- API 응답에는 화면 렌더링에 필요한 지표와 `nextAction`을 함께 내려준다.
- POST 계열 API는 저장 전 schema validation을 수행하고, 저장 후 `GeneratedAsset`으로 조회 가능하게 만든다.
- 구단 대시보드 API는 JWT 권한을 확인해 요청한 구단의 데이터만 반환한다.

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
| POST | /api/clubs/:teamId/campaigns/draft | Campaign Builder 초안 생성 |
| POST | /api/clubs/:teamId/sponsor-packages/draft | Sponsor Package 초안 생성 |
| GET | /api/clubs/:teamId/performance | Performance / ROI 데이터 |
| GET | /api/clubs/:teamId/generated-assets | 생성 결과함 문서 목록 |
| GET | /api/clubs/:teamId/generated-assets/:assetId | 생성 문서 상세 |

## 9. 모델 연동 지점

모델 개발은 별도 범위지만, 프론트/백엔드에서는 다음 입력과 출력을 받을 수 있어야 한다.

AI 모델은 "직접 학습한 자체 모델"부터 시작하지 않는다. MVP/초기 제품은 OpenAI API를 Django 백엔드에서 호출하고, CourtLens가 가진 경기 데이터, 팬 행동 로그, Player Context DB, Fan Voice 라벨을 컨텍스트로 넣어 구조화된 결과를 생성한다. 이후 실제 데이터가 쌓이면 스코어링 규칙, 프롬프트, 평가셋, 필요 시 fine-tuning 순서로 고도화한다.

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

아래 모델명은 2026년 7월 3일 기준 OpenAI API 모델 문서를 확인해 정한 초기 기획안이다. 실제 구현에서는 환경 변수와 model registry로 분리해 모델 교체가 가능하게 만든다.

| 용도 | 모델/방식 | 사용 위치 |
| --- | --- | --- |
| 마케팅 전략/이벤트 기획/스폰서 제안서 생성 | `gpt-5.5` | Campaign Builder, Sponsor Package, Funnel / ROI 개선안 |
| Fan Voice 분류/팬 세그먼트 라벨링/짧은 문구 생성 | `gpt-5.4-mini` | Fan Voice, 대상 팬 세그먼트, CTA 문구 후보 |
| 후보 점수화/랭킹/저비용 반복 평가 | `gpt-5.4-nano` | Revenue Opportunity Top 3 후보 필터링 |
| ASR/자막 처리 | `gpt-4o-mini-transcribe`, 품질 우선 시 `gpt-4o-transcribe` | 경기 중계/선수명/상황 문맥 추출 |
| 영상 구간 추출 | OpenCV + OCR + play-by-play 동기화 | 모델 호출 전후의 미디어 파이프라인 |
| 구조화 검증 | JSON schema + 서버 검증 로직 | 모든 AI 산출물 저장 전 |

모델 선택 기준:

- 비용이 크고 사고력이 필요한 전략 초안은 상위 모델을 사용한다.
- 대량 분류와 반복 라벨링은 mini 모델로 비용을 낮춘다.
- 단순 후보 랭킹과 사전 필터링은 nano 모델로 지연과 비용을 줄인다.
- 팬에게 노출되는 문구와 구단 영업 자료는 schema 검증과 사람 승인 후 저장한다.
- 모델명은 환경 변수로 분리해, OpenAI 모델 라인업이 바뀌어도 코드 수정 없이 교체한다.

참고 기준:

- OpenAI API Models 문서: https://developers.openai.com/api/docs/models
- OpenAI Structured Outputs 문서: https://developers.openai.com/api/docs/guides/structured-outputs

### 모델 호출 방식

구단 대시보드에서 사용하는 AI는 프론트엔드에서 직접 가져오지 않는다. API 키와 모델 호출 로직은 백엔드에만 둔다.

기본 구조:

1. React 프론트엔드가 DRF endpoint를 호출한다.
2. Django view/serializer가 요청 권한과 입력값을 검증한다.
3. `ai_ops` service layer가 FanAction 집계, Player Context DB, 경기 일정, 좌석/굿즈 재고, 스폰서 제약 조건을 조회한다.
4. `gpt-5.4-nano`가 후보 이벤트와 팬 반응을 1차 점수화한다.
5. `gpt-5.4-mini`가 Fan Voice와 행동 로그를 분류하고 세그먼트 라벨을 만든다.
6. `gpt-5.5`가 Top 3 기회, 이벤트 브리프, 스폰서 제안서, Performance 개선안을 구조화 JSON으로 생성한다.
7. 백엔드는 JSON schema를 검증하고 근거 지표를 붙여 `GeneratedAsset` 또는 `RevenueOpportunity`로 저장한다.
8. 프론트엔드는 저장된 결과를 Campaign Builder, Sponsor Package Builder, Funnel / ROI, 생성 결과함에 표시한다.

모델을 가져오는 방식:

```text
React UI
  -> DRF API
  -> Django ai_ops service
  -> OpenAI SDK / Responses API
  -> JSON schema validation
  -> PostgreSQL 저장
  -> GeneratedAsset 조회
```

Django 내부 모듈 예시:

```text
ai_ops/
  clients/openai_client.py
  services/revenue_strategy.py
  services/fan_voice_classifier.py
  services/sponsor_package_generator.py
  schemas/revenue_opportunity.schema.json
  schemas/generated_asset.schema.json
  prompts/strategy_v1.md
```

모델 설정 방식:

```text
STRATEGY_MODEL=gpt-5.5
CLASSIFIER_MODEL=gpt-5.4-mini
RANKER_MODEL=gpt-5.4-nano
TRANSCRIBE_MODEL=gpt-4o-mini-transcribe
```

운영 원칙:

- OpenAI API 키는 서버 환경 변수로만 관리한다.
- 프론트엔드 번들에는 API 키나 모델 호출 코드가 들어가지 않는다.
- 모든 AI 출력은 JSON schema로 검증한 뒤 저장한다.
- 프롬프트 버전, 모델명, 입력 데이터 snapshot, 생성 결과를 함께 기록한다.
- 추천 결과에는 근거 지표, 관련 선수, 관련 콘텐츠, 팬 세그먼트를 함께 저장한다.
- 자동 게시하지 않고 구단 담당자 승인 단계를 거친다.
- 실패 시에는 샘플 템플릿 기반 초안으로 fallback한다.
- 동일 입력에 대해서는 캐시를 적용해 비용과 지연을 줄인다.

제품화 시 AI API 예시:

| Method | Endpoint | 설명 |
| --- | --- | --- |
| POST | /api/ai/highlight/explain | 하이라이트 장면의 초보/농잘알 설명 생성 |
| POST | /api/ai/fan-voice/classify | 팬 의견을 좌석, 굿즈, 경기장 경험, 선수 콘텐츠, 이벤트, 응원 문화로 분류 |
| POST | /api/clubs/:teamId/ai/revenue-opportunities | 이번 주 매출 기회 Top 3 생성 |
| POST | /api/clubs/:teamId/ai/campaign-draft | Campaign Builder 캠페인 초안 생성 |
| POST | /api/clubs/:teamId/ai/sponsor-package | Sponsor Package 제안서 초안 생성 |
| POST | /api/clubs/:teamId/ai/performance-actions | Funnel / ROI 개선 액션 생성 |

## 10. 디자인 방향

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
- 각 카드가 Campaign Builder, Sponsor Package, Performance로 이어져야 한다.
- 분석과 실행이 분리되지 않아야 한다.

### 컴포넌트

- 팀/선수 칩
- 하이라이트 카드
- 작전판AI 설명 패널
- 입덕패스 카드
- 직관메이트 모집 카드
- Revenue Opportunity 카드
- Campaign Builder 모달
- Sponsor Package 모달
- Performance 상세 모달
- 생성 결과함 문서 카드

## 11. 개발 일정 예시

### Sprint 0: Git/기획 정리

- main 브랜치 기준 문서와 MVP 범위 정리
- README는 MVP 요약, 기획안 폴더는 서비스/구현/IR 문서로 분리
- issue/backlog 형태로 팬 앱, 구단 대시보드, AI, 디자인 작업 분해

### Sprint 1: HTML/CSS + JS/TS 정적 MVP

- 현재 구조처럼 `index.html`, `styles.css`, `app.js`, `kbl-data.js`로 발표 가능한 화면 구현
- 팬 앱 핵심 흐름과 구단 대시보드 Top 3/Builder/ROI/Fan Voice 시연
- 모바일 390px, 데스크톱 1280px 기준 레이아웃 점검

### Sprint 2: React + TypeScript 전환

- 팬 앱과 구단 대시보드를 컴포넌트 단위로 재구성
- hooks로 상태/모달/생성 결과함 관리
- API client, type 정의, 로딩/오류/빈 상태 구현

### Sprint 3: Django + DRF + DB + JWT

- `uv` 기반 Django 프로젝트 구성
- Team, Player, Game, HighlightClip, FanAction, RevenueOpportunity, GeneratedAsset 모델 작성
- DRF serializer/viewset/API route 구현
- JWT 인증으로 팬/구단 관리자/운영자 권한 분리

### Sprint 4: API 연결 + AI Strategy Engine

- React 화면을 DRF API에 연결
- Django `ai_ops` service에서 OpenAI 모델 호출
- Campaign Builder, Sponsor Package, Fan Voice, Funnel / ROI 산출물을 `GeneratedAsset`으로 저장
- 프롬프트 버전, JSON schema, fallback 템플릿, 사람 승인 상태 관리

### Sprint 5: Figma/QA/발표 패키징

- Figma에서 팬 앱/구단 대시보드 핵심 화면과 컴포넌트 정리
- 디자인 토큰, 반응형 규칙, 빈/오류/생성 중 상태 명세
- 데모 시나리오, 화면 캡처, 발표용 흐름도 정리

## 12. 구현 리스크와 대응

### 1. 영상과 play-by-play 시간 매칭

경기 시계 시간과 실제 영상 시간은 다르다. MVP에서는 자동 매칭을 완성하지 않고 샘플 연결로 보여준다.

### 2. 기능 범위 과다

팬 앱, 구단 대시보드, 모델 파이프라인을 모두 완성하려 하면 범위가 커진다. MVP에서는 흐름과 사업성 증명에 집중한다.

### 3. B2B 수익화 설득

구단이 비용을 낼 이유가 분명해야 한다. 따라서 구단 대시보드는 지표보다 캠페인 초안, 스폰서 제안서, Performance 리포트가 중요하다.

### 4. AI 추천 신뢰성

추천에는 근거 지표와 관련 선수/콘텐츠/팬 세그먼트를 붙인다. 자동 게시하지 않고 구단 담당자 승인 단계를 둔다.

### 5. 개인정보와 팬 안전

팬 행동 데이터는 익명/집계 중심으로 사용한다. 직관메이트는 신고, 차단, 공개 범위, 안전 가이드가 필요하다.

### 6. AI 모델 비용과 모델명 변경

모델 호출 비용과 모델 라인업은 바뀔 수 있다. 따라서 코드에는 모델명을 직접 박지 않고 `STRATEGY_MODEL`, `CLASSIFIER_MODEL`, `RANKER_MODEL`, `TRANSCRIBE_MODEL` 환경 변수와 model registry를 사용한다. 비용이 부담되면 nano/mini 모델과 캐시를 먼저 쓰고, 최종 캠페인/스폰서 문서 생성에만 상위 모델을 호출한다.

## 13. 최종 정리

CourtLens MVP의 개발 초점은 완전한 AI 모델이 아니라, 팬이 남긴 관심이 구단의 실행 가능한 매출 액션으로 바뀌는 모습을 보여주는 것이다.

팬 앱은 라이트 팬이 경기를 이해하고 직관으로 넘어가게 만들고, 구단 대시보드는 Fan Insight, Revenue Playbook, AI Strategy Engine, Campaign Builder, Sponsor Package, Performance를 통해 B2B SaaS로서의 구매 이유를 만든다.
