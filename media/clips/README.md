# media/clips

Play-by-Play timeline과 연결되는 잘린 하이라이트 클립 디렉터리입니다.

- `q1_cutpoint_segmentss/`: 1Q 클립
- `q2_cutpoint_segmentss/`: 2Q 클립
- `q3_cutpoint_segmentss/`: 3Q 클립

Django의 `/api/highlights/clips/<quarter>/<id>/video` API가 이 파일들을 Range 스트리밍으로 제공합니다.
