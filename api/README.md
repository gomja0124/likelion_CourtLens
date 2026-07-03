# api

Django 앱 레벨의 백엔드 API 코드입니다.

- `views.py`: 인증 API, 하이라이트 데이터 API, 클립 영상 Range 스트리밍
- `models.py`: Django `User`와 연결되는 `UserProfile`
- `migrations/`: DB 스키마 변경 이력

프론트와 연결되는 공개 API 경로는 `courtlens_backend/urls.py`에 정의되어 있습니다. 신규 기능은 먼저 URL을 추가한 뒤 이 앱에 view/model을 붙이는 방식으로 확장합니다.
