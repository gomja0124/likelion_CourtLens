# scripts

KBL/FIBA 데이터 수집, Play-by-Play 파싱, 영상 시계 매핑, 클립 생성에 쓰는 개발용 스크립트입니다.

- `fetch-kbl-data.mjs`: KBL 데이터를 받아 `frontend/kbl-data.js`를 갱신
- `parse-fiba-pbp.mjs`: `data/raw/fiba_pbp_raw.json`을 이벤트 목록으로 변환
- `map-events-to-video.mjs`: 이벤트와 영상 시각 샘플을 매칭
- `build-cutpoint-segments.mjs`: possession 단위 cut point segment plan 생성
- `cut-clips.swift`: segment plan을 실제 `.mov` 클립으로 export
- `scan-video-clock.swift`: 원본 영상에서 경기 시계 샘플 CSV 생성

스크립트는 저장소 루트에서 실행하는 것을 전제로 경로가 설정되어 있습니다.
