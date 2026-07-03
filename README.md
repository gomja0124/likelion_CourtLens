# CourtLens MVP

> KBL 팬이 팀과 달력에서 경기를 고르면 summary, 하이라이트, 입덕패스, 직관메이트 반응을 구단의 이벤트·스폰서·ROI 액션으로 연결하는 MVP 프로토타입

이 README는 현재 구현된 MVP를 실행하고 확인하기 위한 요약 문서입니다. 전체 서비스 기획은 [courtlens-service-plan.md](./기획안/courtlens-service-plan.md), 구현/디자인 정리안은 [courtlens-implementation-design-plan.md](./기획안/courtlens-implementation-design-plan.md), AI 모델 계획은 [courtlens-ai-model-development-plan.md](./기획안/courtlens-ai-model-development-plan.md)를 기준으로 봅니다.

현재 구현은 정적 웹 프론트엔드 프로토타입입니다. 백엔드/API는 붙어 있지 않고, KBL 시즌 일정과 LG vs KT 샘플 경기 데이터를 `app.js`에 포함해 팬 웹서비스와 구단 웹 대시보드 데모 흐름을 재현합니다.

## MVP 목표

CourtLens MVP의 목표는 완전한 영상 분석 모델을 만드는 것이 아니라, 팬 웹서비스에서 발생한 관심이 구단 웹 대시보드에서 실행 가능한 매출 액션으로 바뀌는 흐름을 보여주는 것입니다.

핵심 데모 흐름:

1. 팬이 선호팀을 고르고 KBL 공식 시즌 일정 달력에서 경기 날짜를 선택합니다.
2. 경기가 없는 날짜는 선택할 수 없고, 선택한 경기의 summary와 오늘 잘한 선수가 표시됩니다.
3. 하이라이트 탭에서만 하이라이트 메이커가 보이고, 해당 경기 출전 선수 중심으로 AI 하이라이트를 생성합니다.
4. 미출전 선수는 흐림 처리되어 선택할 수 없습니다.
5. 작전판AI는 선택한 하이라이트를 초보/농잘알 모드로 설명합니다.
6. 팬은 입덕패스에서 경기 summary, 선수 관전 포인트, 댓글 반응을 남깁니다.
7. 직관메이트 탭에서는 같은 경기를 볼 팬을 찾거나 모집글에 댓글로 참여합니다.
8. 구단 웹 대시보드는 하이라이트 메이커 행동과 댓글 반응을 바탕으로 이번 주 매출 기회 Top 3를 보여줍니다.
9. 구단 담당자는 Event Builder에서 이벤트 초안을 만들고 Sponsor Package Builder에서 스폰서 제안서를 저장합니다.
10. Performance / ROI에서 예매 CTA, 굿즈 CTA, 이벤트 참여, 스폰서 이벤트 반응을 추적합니다.

## MVP 구현 범위

### 팬 웹서비스

- 창원 LG 세이커스 / 수원 KT 소닉붐 팀 전환
- 팀별 컬러, 시즌 일정 달력, 주요 기록 리더 자동 반영
- KBL 공식 시즌 일정 기반 달력형 경기 선택
- 경기가 없는 날짜 disabled 처리
- 선택 경기 summary와 오늘 잘한 선수 노출
- 하이라이트 탭 내부 하이라이트 메이커와 출전 선수 다중 선택
- 해당 경기를 뛰지 않은 선수 흐림 처리와 선택 비활성화
- 선택 경기 기반 AI 하이라이트 생성 인터랙션
- 생성된 클립 선택 시 작전판AI 설명 갱신
- 작전판AI 초보/농잘알 해설, 장면 태그, 다음 행동 CTA
- 입덕패스 경기 summary, 선수 관전 포인트, 댓글 반응
- 직관메이트 모집글 작성
- 홈/원정 경기 선택
- 모집글 하단 댓글 등록 상태

### 구단 웹 대시보드

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

- 전체 경기 영상 업로드 UI
- 전체 경기 영상의 실시간 자동 클립 추출
- 실제 예매, 굿즈몰, 구단 CRM 연동
- 사용자 계정/서버 저장소 기반 선호팀 관리
- 실제 구단 담당자 승인 및 팬 웹서비스 배포 플로우
- 실시간 경기 중 자동 하이라이트 생성

## FIBA Play-by-Play 하이라이트 매칭 데모

`codex/play-by-play-highlight-matching` 브랜치에는 FIBA 2027 Basketball World Cup Asian Qualifiers `KOR vs TPE` 1쿼터 play-by-play timeline과 잘린 하이라이트 영상을 매칭하는 데모가 포함되어 있습니다.

데모 동작:

1. 팬 웹서비스의 `하이라이트` 탭에 `FIBA 1Q Play-by-Play 하이라이트 매칭` 섹션이 표시됩니다.
2. 각 timeline row는 `score`, `defensive rebound`, `turnover`, `foul`을 cut point로 삼아 만든 possession 단위 구간입니다.
3. row 위쪽의 회색 텍스트는 시작 cut point이고, 아래쪽 강조 텍스트가 해당 클립의 핵심 종료 이벤트입니다.
4. timeline row를 누르면 원본 경기 영상이 아니라 `q1_cutpoint_segmentss/`에 저장된 잘린 `.mov` 클립이 바로 재생됩니다.
5. 시간 표시는 `08:51 -> 08:49`처럼 FIBA 경기 시계 기준의 구간을 의미합니다.

이 브랜치에서 사용하는 FIBA 관련 파일:

```text
q1_cutpoint_segmentss/                    # Git LFS로 관리되는 1Q 잘린 클립 28개
q1_cutpoint_segments_plan.json            # cut point 기반 클립 생성 계획
q1_cutpoint_clip_timeline_matching.json   # 프론트 timeline과 클립 매칭 데이터
fiba_pbp_raw.json                         # FIBA play-by-play 원문 추출 데이터
video_clock_samples.csv                   # 영상 시각과 경기 시계 매핑 샘플
scripts/parse-fiba-pbp.mjs                # FIBA play-by-play 파서
scripts/map-events-to-video.mjs           # 이벤트와 영상 시간 매핑
scripts/build-cutpoint-segments.mjs       # possession 단위 segment plan 생성
scripts/cut-clips.swift                   # .mov 클립 export
```

클립 파일은 용량이 커서 Git LFS로 올라가 있습니다. 이 브랜치를 새로 clone해서 수정하려면 먼저 Git LFS를 준비해야 합니다.

```bash
git lfs install
git clone -b codex/play-by-play-highlight-matching git@github.com:gomja0124/likelion_CourtLens.git
cd likelion_CourtLens
git lfs pull
```

클립이 실제로 내려왔는지 확인합니다.

```bash
ls -lh q1_cutpoint_segmentss
```

각 `.mov` 파일이 수십 MB에서 수백 MB로 보이면 정상입니다. 몇십 바이트 정도로 보이면 LFS 포인터만 받은 상태이므로 `git lfs pull`을 다시 실행합니다.

원본 전체 경기 영상 `video/1Q.mov`는 이 브랜치의 프론트 실행에는 필요하지 않습니다. 프론트는 이미 잘린 `q1_cutpoint_segmentss/*.mov` 파일을 직접 참조합니다.

## 데이터 기준

- `app.js`는 LG vs KT 샘플 경기, KBL 2025-2026 시즌 일정, 달력 선택, 팬 웹서비스/구단 웹 대시보드 인터랙션 데이터를 담고 있습니다.
- `kbl-data.js`는 KBL 선수/기록 기반 보조 정적 데이터를 담고 있습니다.
- 현재 MVP는 브라우저에서 실시간 크롤링하지 않고 저장된 정적 데이터를 사용합니다.
- AI 하이라이트, 작전판AI 해설, 이벤트/문서 생성은 실제 AI 파이프라인이 붙었다는 전제의 UI 목업입니다.
- AI 모델 계획은 `하이라이트 추출 모델 → 작전판AI/입덕패스 팬 이해 LLM → 구단 이벤트/마케팅 전략 LLM` 3축으로 정리합니다.
- 발표 자료와 발표 대본은 로컬 전용 파일로 관리하며 Git에는 올리지 않습니다.

## 실행 방법

정적 HTML/CSS/JS 프로토타입입니다. 별도 패키지 설치 없이 로컬 서버로 실행할 수 있습니다.

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

브라우저에서 아래 주소를 엽니다.

```text
http://127.0.0.1:8765/index.html
```

`file://`로 직접 열어도 대부분 동작하지만, 로컬 서버로 확인하는 방식을 권장합니다.

FIBA play-by-play 매칭 데모를 확인하려면 `하이라이트` 탭으로 이동한 뒤 `FIBA 1Q Play-by-Play 하이라이트 매칭` 영역의 timeline row를 클릭합니다. 클릭한 row에 연결된 잘린 클립이 같은 섹션의 영상 플레이어에서 열립니다.

## 확인 명령

```bash
node --check app.js
git diff --check
git lfs ls-files
```

## 주요 파일

```text
.
├── index.html                              # 팬 웹서비스 + 구단 웹 대시보드 프로토타입
├── styles.css                              # 전체 UI 스타일
├── app.js                                  # KBL 일정/샘플 경기 데이터, 인터랙션, 모달, 생성 결과함 로직
├── kbl-data.js                             # KBL 선수/기록 기반 보조 정적 데이터
├── q1_cutpoint_segmentss/                  # FIBA 1Q play-by-play 매칭용 잘린 클립, Git LFS
├── q1_cutpoint_clip_timeline_matching.json # timeline row와 클립 파일 매칭
├── q1_cutpoint_segments_plan.json          # cut point 기반 클립 생성 계획
├── scripts/                                # KBL/FIBA 데이터 처리 및 클립 생성 스크립트
└── 기획안/
    ├── courtlens-service-plan.md               # 최신 서비스 기획안
    ├── courtlens-implementation-design-plan.md  # MVP 구현/디자인 정리안
    ├── courtlens-ai-model-development-plan.md   # AI 모델 개발 계획안
    └── court-lens-ir-draft.md                  # IR 발표 메시지 및 제출 문안
```
