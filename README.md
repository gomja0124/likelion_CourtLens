# CourtLens MVP

> KBL/FIBA 팬이 팀과 달력에서 경기를 고르면 summary, Play-by-Play, 하이라이트, 입덕패스, 직관메이트를 한 화면에서 탐색하는 팬 웹서비스 프로토타입

이 README는 현재 구현된 MVP를 실행하고 확인하기 위한 요약 문서입니다. 전체 서비스 기획은 [courtlens-service-plan.md](./docs/planning/courtlens-service-plan.md), 구현/디자인 정리안은 [courtlens-implementation-design-plan.md](./docs/planning/courtlens-implementation-design-plan.md), AI 모델 계획은 [courtlens-ai-model-development-plan.md](./docs/planning/courtlens-ai-model-development-plan.md)를 기준으로 봅니다.

현재 구현은 팬 웹 프론트엔드에 Django 백엔드를 붙인 배포형 프로토타입입니다. KBL 시즌 일정, LG vs KT 샘플 경기 데이터, FIBA KOR vs TPE Play-by-Play 클립 데이터는 프론트 데모 흐름에 포함되어 있고, 백엔드는 로그인 세션과 하이라이트 클립 API, 영상 스트리밍을 제공합니다.

## MVP 목표

CourtLens MVP의 목표는 완전한 영상 분석 모델을 만드는 것이 아니라, 팬이 경기 흐름을 Play-by-Play와 하이라이트, 입덕패스, 직관메이트로 이어서 소비하는 팬 웹서비스 경험을 보여주는 것입니다.

핵심 데모 흐름:

1. 팬이 선호팀을 고르고 KBL 공식 시즌 일정 달력에서 경기 날짜를 선택합니다.
2. 경기가 없는 날짜는 선택할 수 없고, 선택한 경기의 summary와 오늘 잘한 선수가 표시됩니다.
3. 하이라이트 탭에서만 하이라이트 메이커가 보이고, 해당 경기 출전 선수 중심으로 AI 하이라이트를 생성합니다.
4. 미출전 선수는 흐림 처리되어 선택할 수 없습니다.
5. 작전판AI는 선택한 하이라이트를 초보/농잘알 모드로 설명합니다.
6. 팬은 입덕패스에서 경기 summary, 선수 관전 포인트, 댓글 반응을 남깁니다.
7. 직관메이트 탭에서는 같은 경기를 볼 팬을 찾거나 모집글에 댓글로 참여합니다.
8. FIBA KOR vs TPE 경기는 Play-by-Play 탭에서 1Q~4Q clipped 영상과 OT1 timeline-only 기록을 quarter별로 확인합니다.
9. KBL 구단 경기는 `https://www.kbl.or.kr/match/schedule` 기준 일정 timeline만 표시하고, 상세 possession 클립은 대표팀 경기에서만 제공합니다.

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

## MVP 제외 범위

- 전체 경기 영상 업로드 UI
- 전체 경기 영상의 실시간 자동 클립 추출
- 실제 예매, 굿즈몰, 구단 CRM 연동
- 운영용 사용자 계정/DB 기반 권한 관리
- 구단 웹 대시보드와 구단 담당자 승인 플로우
- 실시간 경기 중 자동 하이라이트 생성

## FIBA Play-by-Play 하이라이트 매칭 데모

`codex/play-by-play-highlight-matching` 브랜치에는 FIBA 2027 Basketball World Cup Asian Qualifiers `KOR vs TPE` 1Q~4Q play-by-play timeline과 잘린 하이라이트 영상을 매칭하는 데모가 포함되어 있습니다. OT1은 별도 녹화 영상이 없어 FIBA 공식 timeline과 최종 점수만 표시합니다.
대한민국 남자농구 대표팀은 프론트 프로토타입의 하이라이트 메이커에서 12인 엔트리 전체를 선수 칩으로 선택할 수 있습니다.

데모 동작:

1. 팬 웹서비스의 `Play-by-Play` 탭에 `FIBA Play-by-Play 하이라이트 매칭` 섹션이 표시됩니다.
2. 각 timeline row는 `score`, `defensive rebound`, `turnover`, `foul`을 cut point로 삼아 만든 possession 단위 구간입니다.
3. row 위쪽의 회색 텍스트는 시작 cut point이고, 아래쪽 강조 텍스트가 해당 클립의 핵심 종료 이벤트입니다.
4. 섹션 안의 `1Q`, `2Q`, `3Q`, `4Q`, `OT1` 버튼으로 quarter를 선택합니다. 현재 실제 클립은 `1Q`, `2Q`, `3Q`, `4Q`에 연결되어 있습니다.
5. 1Q~4Q timeline row를 누르면 원본 경기 영상이 아니라 `media/clips/q1_cutpoint_segmentss/`, `media/clips/q2_cutpoint_segmentss/`, `media/clips/q3_cutpoint_segmentss/`, `media/clips/q4_cutpoint_segmentss/`에 저장된 잘린 `.mov` 클립이 바로 재생됩니다. OT1 row는 영상 없이 timeline 기록만 보여줍니다.
6. 시간 표시는 `08:51 -> 08:49`처럼 FIBA 경기 시계 기준의 구간을 의미합니다.

이 브랜치에서 사용하는 FIBA 관련 파일:

```text
media/clips/q1_cutpoint_segmentss/        # Git LFS로 관리되는 1Q 잘린 클립 28개
media/clips/q2_cutpoint_segmentss/        # Git LFS로 관리되는 2Q 잘린 클립 33개
media/clips/q3_cutpoint_segmentss/        # Git LFS로 관리되는 3Q 잘린 클립 38개
media/clips/q4_cutpoint_segmentss/        # Git LFS로 관리되는 4Q 잘린 클립 36개
data/highlights/q1_cutpoint_segments_plan.json
data/highlights/q2_cutpoint_segments_plan.json
data/highlights/q3_cutpoint_segments_plan.json
data/highlights/q4_cutpoint_segments_plan.json
data/highlights/q1_cutpoint_clip_timeline_matching.json
data/raw/fiba_pbp_raw.json                # FIBA play-by-play 원문 추출 데이터
data/raw/video_clock_samples.csv          # 영상 시각과 경기 시계 매핑 샘플
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
ls -lh media/clips/q1_cutpoint_segmentss media/clips/q2_cutpoint_segmentss media/clips/q3_cutpoint_segmentss media/clips/q4_cutpoint_segmentss
```

각 `.mov` 파일이 수십 MB에서 수백 MB로 보이면 정상입니다. 몇십 바이트 정도로 보이면 LFS 포인터만 받은 상태이므로 `git lfs pull`을 다시 실행합니다.

원본 전체 경기 영상 `media/source/1Q.mov`, `media/source/2Q.mov`, `media/source/3Q.mov`, `media/source/4Q.mov`는 이 브랜치의 프론트 실행에는 필요하지 않습니다. 프론트는 API를 통해 이미 잘린 `media/clips/q1_cutpoint_segmentss/*.mov`, `media/clips/q2_cutpoint_segmentss/*.mov`, `media/clips/q3_cutpoint_segmentss/*.mov`, `media/clips/q4_cutpoint_segmentss/*.mov` 파일을 재생합니다.

## 데이터 기준

- `frontend/app.js`는 LG vs KT 샘플 경기, KBL 2025-2026 시즌 일정, FIBA KOR vs TPE Play-by-Play, 달력 선택, 팬 웹서비스 인터랙션 데이터를 담고 있습니다.
- `frontend/kbl-data.js`는 KBL 선수/기록 기반 보조 정적 데이터를 담고 있습니다.
- 현재 MVP는 브라우저에서 실시간 크롤링하지 않고 저장된 정적 데이터를 사용합니다.
- AI 하이라이트, 작전판AI 해설, 이벤트/문서 생성은 실제 AI 파이프라인이 붙었다는 전제의 UI 목업입니다.
- AI 모델 계획은 `하이라이트 추출 모델 → 작전판AI/입덕패스 팬 이해 LLM → 팬 매칭/추천 모델` 축으로 정리합니다.
- 발표 자료와 발표 대본은 로컬 전용 파일로 관리하며 Git에는 올리지 않습니다.

## 실행 방법

Django 서버가 프론트 정적 파일과 로그인/하이라이트 API를 함께 제공합니다.

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
python manage.py migrate
python manage.py runserver 127.0.0.1:8765
```

브라우저에서 아래 주소를 엽니다.

```text
http://127.0.0.1:8765/index.html
```

배포 환경에서는 `.env` 또는 플랫폼 환경변수로 `SECRET_KEY`, `DEBUG`, `ALLOWED_HOSTS`, `DATABASE_URL`을 설정합니다. `Procfile`은 `gunicorn courtlens_backend.wsgi:application`을 사용합니다.

FIBA play-by-play 매칭 데모를 확인하려면 `Play-by-Play` 탭으로 이동한 뒤 `1Q`, `2Q`, `3Q`, `4Q`, `OT1` 중 하나를 선택합니다. 1Q~4Q timeline row를 클릭하면 연결된 잘린 클립이 모달 영상 플레이어에서 열리고, OT1은 영상 없이 공식 timeline과 최종 점수만 표시합니다.

## 백엔드 API

### 인증

- `POST /api/auth/register` - `{ "name", "email", "password", "favoriteTeamCode" }`
- `POST /api/auth/login` - `{ "email", "password" }`
- `POST /api/auth/logout`
- `GET /api/auth/me`
- `POST /api/auth/favorite-team` - `{ "favoriteTeamCode" }`

비밀번호는 Django 기본 PBKDF2 해시로 저장되고, 세션은 `HttpOnly` 쿠키로 유지됩니다. 현재 구현은 Django 기본 `User`와 `Session`을 사용하고, 선호팀은 `UserProfile.favorite_team_code`에 저장합니다.

### Play-by-Play 하이라이트

- `GET /api/health`
- `GET /api/highlights/quarters`
- `GET /api/highlights/clips?quarter=Q1`
- `GET /api/highlights/clips?quarter=Q4`
- `GET /api/highlights/clips?quarter=Q1&eventType=score`
- `GET /api/highlights/clips?quarter=Q1&player=Yeo`
- `GET /api/highlights/clips/Q1/1`
- `GET /api/highlights/clips/Q1/1/video`
- `GET /api/highlights/clips/Q4/1/video`

영상 API는 브라우저 `<video>` 재생을 위해 `Range` 요청을 처리합니다.
OT1은 영상 클립이 없는 timeline-only 데이터라 프론트 정적 데이터로 표시하고, 영상 API는 1Q~4Q 클립에만 연결됩니다.
KBL 구단/경기는 별도 play-by-play 클립 데이터가 없으므로 프론트에서 KBL 공식 일정 API 출처의 경기 일시, 장소, 최종 스코어/예정 정보만 timeline-only로 표시합니다.

## 확인 명령

```bash
python -m compileall manage.py courtlens_backend api
python manage.py check
git diff --check
git lfs ls-files
```

## 주요 파일

```text
.
├── manage.py                               # Django 관리 명령
├── requirements.txt                        # Django 배포 의존성
├── Procfile                                # gunicorn 배포 엔트리
├── courtlens_backend/                      # Django settings/urls/asgi/wsgi
├── api/                                    # 인증/하이라이트 API
├── frontend/                               # 팬 웹서비스 HTML/CSS/JS
├── data/                                   # 하이라이트 매칭 결과와 원천 데이터
├── media/                                  # Git LFS 클립과 원본 영상 위치
├── scripts/                                # KBL/FIBA 데이터 처리 및 클립 생성 스크립트
└── docs/planning/                          # 기획안, 구현안, AI 계획, IR 문안
```
