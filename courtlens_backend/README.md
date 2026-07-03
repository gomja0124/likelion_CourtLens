# courtlens_backend

Django 프로젝트 설정 디렉터리입니다.

- `settings.py`: 환경변수, 앱, 미들웨어, DB, static 설정
- `urls.py`: 프론트 파일 서빙과 API 라우팅
- `wsgi.py`: gunicorn 배포 진입점
- `asgi.py`: ASGI 서버를 사용할 때의 진입점

운영 배포에서는 `.env` 또는 플랫폼 환경변수로 `SECRET_KEY`, `DEBUG`, `ALLOWED_HOSTS`, `DATABASE_URL`을 설정합니다.
