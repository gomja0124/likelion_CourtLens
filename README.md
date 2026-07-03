# CourtLens MVP

> KBL 팬이 팀과 경기를 고르면 경기 전에는 직관메이트를 찾고, 경기 후에는 summary와 출전 선수 기반 AI 하이라이트를 구단의 이벤트·스폰서·ROI 액션으로 연결하는 MVP 프로토타입

이 README는 현재 구현된 MVP를 실행하고 확인하기 위한 요약 문서입니다. 전체 서비스 기획은 [courtlens-service-plan.md](./기획안/courtlens-service-plan.md), 구현/디자인 정리안은 [courtlens-implementation-design-plan.md](./기획안/courtlens-implementation-design-plan.md), 발표 메시지는 [court-lens-ir-draft.md](./기획안/court-lens-ir-draft.md)를 기준으로 봅니다.

## MVP 목표

CourtLens MVP의 목표는 완전한 영상 분석 모델을 만드는 것이 아니라, 팬 앱에서 발생한 관심이 구단 대시보드에서 실행 가능한 매출 액션으로 바뀌는 흐름을 보여주는 것입니다.

핵심 데모 흐름:

경기 전:

1. 팬이 선호팀과 볼 경기를 선택합니다.
2. 직관메이트 창으로 들어갑니다.
3. 같은 경기를 보러 갈 직관메이트를 찾거나 모집글을 작성합니다.

경기 후:

1. 팬이 선호팀과 다시 볼 경기를 선택합니다.
2. 경기 summary와 오늘 잘한 선수가 먼저 표시됩니다.
3. 하이라이트 메이커에서 해당 경기를 뛴 선수만 선택하고, 미출전 선수는 흐림 처리되어 선택할 수 없습니다.
4. 개인화 하이라이트 카드가 생성되고 작전판AI가 쉬운 해설을 제공합니다.
5. 팬은 입덕패스에서 경기 summary, 선수 관전 포인트, 댓글 반응을 남깁니다.
6. 구단 대시보드는 하이라이트 메이커 행동과 댓글 반응을 바탕으로 이번 주 매출 기회 Top 3를 보여줍니다.
7. 구단 담당자는 Event Builder에서 이벤트 초안을 만들고 Sponsor Package Builder에서 스폰서 제안서를 저장합니다.
8. Performance / ROI에서 예매 CTA, 굿즈 CTA, 이벤트 참여, 스폰서 이벤트 반응을 추적합니다.

## MVP 구현 범위

### 팬 앱

- 창원 LG 세이커스 / 수원 KT 소닉붐 팀 전환
- 팀별 컬러, 경기 목록, 주요 기록 리더 자동 반영
- 경기 선택
- 경기 전 직관메이트 창 진입과 메이트 찾기
- 경기 후 경기 summary와 오늘 잘한 선수 노출
- 경기 후 하이라이트 메이커 내부 출전 선수 다중 선택
- 경기 후 해당 경기를 뛰지 않은 선수 흐림 처리와 선택 비활성화
- 경기 후 AI 하이라이트 생성 인터랙션
- 생성된 클립 선택 시 작전판AI 설명 갱신
- 작전판AI 초보/농잘알 해설
- 입덕패스 경기 summary와 댓글 반응
- 직관메이트 모집글 작성
- 홈/원정 경기 선택
- 신청 멘트 입력과 신청 완료 상태

### 구단 대시보드

- 이번 주 매출 기회 Top 3
- `Fan Insight`, `Revenue Playbook`, `Performance` 3축 메뉴
- AI Strategy Engine 카드와 상세 모달
- Event Builder 모달
- Sponsor Package Builder 모달
- Fan Voice / Matchday Ops 확장 모달
- Performance / ROI 단계별 상세 모달
- 이벤트 문서, 스폰서 제안서, Performance 리포트 생성 결과함
- KBL 10개 구단 데이터 패널

## MVP 제외 범위

- 실제 경기 영상 업로드 및 자동 클립 추출
- 실제 play-by-play와 영상 타임라인 자동 동기화
- 실제 예매, 굿즈몰, 구단 CRM 연동
- 사용자 계정/서버 저장소 기반 선호팀 관리
- 실제 구단 담당자 승인 및 팬 앱 배포 플로우
- 실시간 경기 중 자동 하이라이트 생성

## 데이터 기준

- `kbl-data.js`는 KBL 경기/선수/기록 기반 정적 데이터를 담고 있습니다.
- 현재 MVP는 브라우저에서 실시간 크롤링하지 않고 저장된 정적 데이터를 사용합니다.
- AI 하이라이트, 작전판AI 해설, 이벤트/문서 생성은 실제 AI 파이프라인이 붙었다는 전제의 UI 목업입니다.
- 발표 자료와 발표 대본은 로컬 전용 파일로 관리하며 Git에는 올리지 않습니다.

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

## 주요 파일

```text
.
├── index.html                              # 팬 앱 + 구단 대시보드 프로토타입
├── styles.css                              # 전체 UI 스타일
├── app.js                                  # 인터랙션, 팀 전환, 모달, 생성 결과함 로직
├── kbl-data.js                             # KBL 선수/기록 기반 정적 데이터
├── scripts/fetch-kbl-data.mjs              # KBL 데이터 수집 스크립트
└── 기획안/
    ├── courtlens-service-plan.md               # 최신 서비스 기획안
    ├── courtlens-implementation-design-plan.md  # MVP 구현/디자인 정리안
    └── court-lens-ir-draft.md                  # IR 발표 메시지 및 제출 문안
```
