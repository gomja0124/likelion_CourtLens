# data/highlights

FIBA KOR vs TPE Play-by-Play 하이라이트 매칭 결과와 클립 생성 계획입니다.

- `q*_cutpoint_segments_plan.json`: possession cut point 기반 구간 계획
- `q1_cutpoint_clip_timeline_matching.json`: timeline row와 실제 Q1 클립 파일 매칭
- `clip_plan.*`, `fiba_clip_events.*`, `korea_1q_highlight_plan.*`: 이벤트 매핑과 실험용 하이라이트 계획

Django API는 이 디렉터리의 JSON 파일을 읽어 `/api/highlights/...` 응답을 만듭니다.
