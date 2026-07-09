# api/migrations

Django가 `api` 앱의 DB 스키마 변경 이력을 저장하는 디렉터리입니다.

모델을 수정한 뒤에는 아래 명령으로 migration을 생성하고 적용합니다.

```bash
python manage.py makemigrations
python manage.py migrate
```
