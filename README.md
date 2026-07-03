# CourtLens

> KBL 팬이 좋아하는 팀과 선수를 고르면 AI가 개인화 하이라이트와 쉬운 전술 해설을 만들고, 그 관심을 직관메이트와 구단의 매출 액션으로 연결하는 농구 팬 경험 플랫폼

CourtLens는 팬에게는 농구를 더 쉽게 이해하고 다음 직관까지 이어지는 경험을 제공하고, 구단에게는 팬 반응을 이벤트 실행, 스폰서 상품화, ROI 추적으로 연결하는 액션형 B2B SaaS를 제공합니다.

## 핵심 방향

이 프로젝트의 최신 방향성은 구단 대시보드를 단순 분석 화면이 아니라 `매출 액션 운영툴`로 보여주는 것입니다.

- 팬 앱은 라이트 팬이 좋아하는 선수와 장면을 중심으로 경기를 이해하게 만듭니다.
- 직관메이트는 하이라이트 관심을 다음 경기 동행과 직관 의도로 연결합니다.
- 구단 대시보드는 팬 반응을 `Fan Insight → Revenue Playbook → AI Strategy Engine → Event Builder/Sponsor Package → Performance` 흐름으로 운영합니다.
- 구단이 돈을 낼 이유는 팬 데이터를 보는 것이 아니라, 바로 실행할 이벤트와 스폰서 제안서를 얻는 데 있습니다.

## 문제 정의

프로농구는 재미없는 스포츠가 아닙니다. 문제는 라이트 팬이 그 재미를 이해하기까지 넘어야 할 장벽이 높다는 점입니다.

- 전체 경기를 볼 시간은 부족하지만 좋아하는 선수의 장면만 빠르게 모아보기 어렵습니다.
- 픽앤롤, 스페이싱, 미스매치 같은 전술을 모르면 좋은 플레이를 놓치기 쉽습니다.
- 혼자 직관을 가기 부담스럽고, 같은 선수나 장면을 좋아하는 팬을 찾기 어렵습니다.
- 구단은 팬들이 어떤 선수, 장면, 콘텐츠에 반응하는지 파악하고 티켓, 굿즈, 스폰서 매출로 연결하기 어렵습니다.
- 팬 의견은 SNS, 커뮤니티, 유튜브 댓글에 흩어져 있어 구단이 빠르게 이벤트나 굿즈 기획으로 바꾸기 어렵습니다.

## 제품 구조

CourtLens는 팬 앱과 구단 대시보드로 구성됩니다.

### 팬 앱

- **팀/선수 선택**: 사용자가 선호팀을 바꾸고 팀 로스터에서 보고 싶은 선수를 여러 명 선택합니다.
- **AI 하이라이트 생성**: 선택한 선수 조합을 기준으로 개인화 하이라이트 카드가 생성되는 흐름을 시연합니다.
- **작전판AI**: 하이라이트 장면을 초보 모드와 농잘알 모드로 설명합니다.
- **입덕패스**: 처음 보는 팬도 따라갈 수 있도록 선수와 팀의 관전 포인트를 짧게 제공합니다.
- **직관메이트**: 관심 선수, 경기, 좌석, 응원 성향을 기반으로 같이 직관 갈 사람을 찾는 모집글을 생성합니다.

### 구단 대시보드

- **이번 주 매출 기회 Top 3**: 팬 반응을 바탕으로 바로 실행할 이벤트 기회 3개를 첫 화면에 노출합니다.
- **Fan Insight**: 선수별 팬 반응, 하이라이트 저장/공유, 직관메이트 클릭, Fan Voice, Player Context DB를 연결합니다.
- **Revenue Playbook**: 단기성 이벤트, 라운드 이벤트, 장기 프랜차이즈 마케팅 후보를 제안합니다.
- **AI Strategy Engine**: 팬 행동과 선수 맥락을 이벤트 브리프, 스폰서 제안서, Performance 개선안으로 변환합니다.
- **Event Builder**: 추천 액션을 대상, 문구, 노출 위치, 기간이 있는 팬 앱 이벤트 카드로 만듭니다.
- **Sponsor Package Builder**: 인기 장면과 팬 반응 데이터를 스폰서 영업 제안서 초안으로 묶습니다.
- **Performance / ROI**: 하이라이트부터 예매, 굿즈, 이벤트, 스폰서 반응까지 전환과 예상 매출 기여를 추적합니다.
- **생성 결과함**: 이벤트 문서, 스폰서 제안서, Performance 리포트를 저장하고 다시 열람합니다.

## 현재 MVP 상태

현재 MVP는 `정적 웹 프로토타입 + KBL 샘플/공식 API 기반 데이터 + 구단 액션형 대시보드`입니다.

구현된 범위:

- 창원 LG 세이커스와 수원 KT 소닉붐 팀 전환
- KBL 선수/기록 기반 정적 데이터 사용
- 팀별 컬러, 선수 목록, 주요 기록 리더 자동 반영
- 선수 다중 선택 및 AI 하이라이트 생성 인터랙션
- 생성된 클립 선택 시 작전판AI 설명 갱신
- 직관메이트 모집글 작성, 홈/원정 선택, 신청 멘트 입력
- 구단 대시보드 `이번 주 매출 기회 Top 3`
- `Fan Insight`, `Revenue Playbook`, `Performance` 3축 메뉴
- `AI Strategy Engine` 카드와 상세 모달
- `Event Builder`, `Sponsor Package Builder`, `Fan Voice`, `Matchday Ops`, `Performance` 상세 모달
- 생성 결과함 문서 미리보기 및 다운로드

MVP에서 의도적으로 제외한 범위:

- 실제 경기 영상 업로드 및 자동 클립 추출
- 실제 play-by-play와 영상 타임라인 자동 동기화
- 사용자 계정/서버 저장소 기반 선호팀 관리
- 실제 예매, 굿즈몰, 구단 CRM 연동
- 실제 구단 담당자 승인 및 배포 플로우

## MVP 데모 흐름

1. 팬이 선호팀과 보고 싶은 선수를 선택합니다.
2. 개인화 하이라이트 카드가 생성되고 작전판AI가 쉬운 해설을 제공합니다.
3. 팬은 입덕패스로 선수 관전 포인트를 이해하고 직관메이트 모집글을 작성합니다.
4. 구단 대시보드는 팬 반응을 바탕으로 이번 주 매출 기회 Top 3를 보여줍니다.
5. 구단 담당자는 Event Builder에서 이벤트 초안을 만들고, Sponsor Package Builder에서 스폰서 제안서를 저장합니다.
6. Performance / ROI에서 예매 CTA, 굿즈 CTA, 이벤트 참여, 스폰서 이벤트 반응을 추적합니다.

## AI 전략 및 모델 결정

구단에게 제공하는 AI 기능은 `분석 결과`가 아니라 바로 실행 가능한 `마케팅·이벤트 운영안`이어야 합니다.

제공 흐름:

1. 팬 앱에서 하이라이트 조회, 저장, 공유, 작전판AI 열람, 직관메이트 클릭, 예매·굿즈 CTA 반응을 수집합니다.
2. Player Context DB, 경기 일정, 좌석/굿즈 재고, 스폰서 제약 조건을 함께 검색합니다.
3. AI가 이번 주 매출 기회 Top 3, 이벤트 대상 팬 세그먼트, CTA 문구, 노출 위치, 예상 KPI, 스폰서 패키지 초안을 생성합니다.
4. 구단 담당자가 승인하면 Event Builder에서 팬 앱 이벤트 카드로 게시하고 Performance에서 ROI를 추적합니다.

기획 기준 모델 스택:

- 전략 생성/이벤트 기획: `gpt-5.5`
  - Revenue Playbook, Event Builder, Sponsor Package처럼 맥락 추론과 문안 품질이 중요한 고가치 작업에 사용합니다.
- 대량 분류/세그먼트 라벨링: `gpt-5.4-mini`
  - Fan Voice 분류, 팬 행동 로그 요약, 선수/장면별 기회 후보 분류처럼 반복 호출이 많은 작업에 사용합니다.
- 저비용 스코어링/랭킹: `gpt-5.4-nano`
  - 수천 건 단위의 후보 점수화, 간단 태깅, 사전 필터링에 사용합니다.
- 음성/자막 처리: `gpt-4o-transcribe` 또는 `gpt-4o-mini-transcribe`
  - 중계 ASR, 자막 추출, 경기 시간 동기화 보조에 사용합니다.
- 영상 클립 추출: OpenCV, 경기 시간 OCR, play-by-play 동기화
  - MVP에서는 영상 생성 모델에 의존하지 않고 공식 영상/클립에서 이벤트 앞뒤 8~12초를 잘라 개인화 하이라이트를 구성합니다.

`GPT-5.6`은 preview 접근성을 전제로 삼지 않습니다. MVP와 IR에서는 `gpt-5.5`로 전략 품질 기준을 만들고, 비용과 지연이 큰 분류/랭킹 작업은 `gpt-5.4-mini/nano`로 낮추는 구조를 사용합니다.

## 실행 방법

정적 HTML/CSS/JS 프로토타입입니다. 별도 패키지 설치 없이 로컬 서버로 실행할 수 있습니다.

```bash
python3 -m http.server 5173 --bind 127.0.0.1
```

브라우저에서 아래 주소를 엽니다.

```text
http://127.0.0.1:5173/index.html
```

`file://`로 직접 열어도 대부분 동작하지만, 로컬 서버로 확인하는 방식을 권장합니다.

## 파일 구조

```text
.
├── index.html                              # 팬 앱 + 구단 대시보드 프로토타입
├── styles.css                              # 전체 UI 스타일
├── app.js                                  # 인터랙션, 팀 전환, 모달, 생성 결과함 로직
├── kbl-data.js                             # KBL 공식 API 기반 정적 데이터
├── scripts/fetch-kbl-data.mjs              # KBL 데이터 수집 스크립트
├── courtlens-service-plan.md               # 최신 서비스 기획안
├── courtlens-implementation-design-plan.md  # MVP 구현/디자인 정리안
└── court-lens-ir-draft.md                  # IR 발표 메시지 및 제출 문안
```

발표 자료와 발표 대본은 로컬 전용 파일로 관리하며 Git에는 올리지 않습니다.

## 기술 스택

현재 프로토타입:

- Frontend: HTML, CSS, Vanilla JavaScript
- Data: KBL 공식 API 기반 정적 JS 데이터
- Prototype: 정적 웹 프로토타입

제품화 확장 시:

- Frontend: React 또는 Next.js, TypeScript
- Backend: FastAPI 또는 Node.js
- AI/Video: Python, OpenCV, OCR, ASR, OpenAI Responses API
- Data: PostgreSQL, Redis, event tracking
- Infra: Vercel, AWS S3, Cloud Run

## 비즈니스 모델

CourtLens는 팬에게 먼저 과금하는 모델보다 구단과 스폰서 중심의 B2B 모델을 우선합니다.

- 구단 SaaS 사용료: 팬 반응 분석, Revenue Playbook, Event Builder, Performance 리포트 제공
- 초기 구축비: 구단별 브랜딩, 티켓/굿즈 링크, 관리자 계정, 이벤트/스폰서 템플릿 세팅
- 성과형 수수료: 하이라이트 시청 후 예매, 굿즈 클릭, 이벤트 참여 등 전환 기반
- 스폰서 패키지 수익 쉐어: 인기 장면과 팬 반응 데이터를 활용한 스폰서 상품화

## 관련 문서

- [서비스 기획서](./courtlens-service-plan.md)
- [구현/디자인 정리안](./courtlens-implementation-design-plan.md)
- [IR Draft](./court-lens-ir-draft.md)
- [Prototype](./index.html)
- [Figma Prototype](https://www.figma.com/design/hLLc9qHneQUmqQxAkTOGDM)
