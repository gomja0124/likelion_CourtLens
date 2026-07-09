# data

CourtLens 데모와 하이라이트 매칭에 필요한 정적 데이터 파일을 모아 둔 디렉터리입니다.

- `highlights/`: API가 직접 읽는 클립 매칭 결과와 생성 계획
- `raw/`: FIBA play-by-play 원문, 영상 시계 샘플처럼 가공 전/중간 원천 데이터

서버 런타임에서 하이라이트 API는 `data/highlights/`의 JSON을 읽습니다. 데이터 재생성 스크립트도 이 디렉터리를 기준으로 입출력합니다.
