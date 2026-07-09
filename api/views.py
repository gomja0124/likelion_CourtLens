import json
import mimetypes
import re
from pathlib import Path

from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.http import FileResponse, Http404, HttpResponse, JsonResponse, StreamingHttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods

from .models import UserProfile


BASE_DIR = Path(__file__).resolve().parent.parent
FRONTEND_DIR = BASE_DIR / "frontend"
HIGHLIGHT_DATA_DIR = BASE_DIR / "data" / "highlights"
CLIP_MEDIA_DIR = BASE_DIR / "media" / "clips"

QUARTER_CONFIGS = {
    "Q1": {
        "plan_file": "q1_cutpoint_clip_timeline_matching.json",
        "clip_directory": "q1_cutpoint_segmentss",
    },
    "Q2": {
        "plan_file": "q2_cutpoint_segments_plan.json",
        "clip_directory": "q2_cutpoint_segmentss",
    },
    "Q3": {
        "plan_file": "q3_cutpoint_segments_plan.json",
        "clip_directory": "q3_cutpoint_segmentss",
    },
    "Q4": {
        "plan_file": "q4_cutpoint_segments_plan.json",
        "clip_directory": "q4_cutpoint_segmentss",
    },
}

ROOT_ASSETS = {"app.js", "styles.css", "kbl-data.js"}


def read_json_body(request):
    if not request.body:
        return {}
    return json.loads(request.body.decode("utf-8"))


def normalize_email(email):
    return str(email or "").strip().lower()


def public_user(user):
    profile, _ = UserProfile.objects.get_or_create(user=user)
    return {
        "id": user.id,
        "name": user.first_name or user.username,
        "email": user.email,
        "favoriteTeamCode": profile.favorite_team_code,
        "createdAt": user.date_joined.isoformat(),
    }


def index(_request):
    return FileResponse((FRONTEND_DIR / "index.html").open("rb"), content_type="text/html; charset=utf-8")


def root_asset(request):
    asset_name = Path(request.path).name
    if asset_name not in ROOT_ASSETS:
        raise Http404("지원하지 않는 정적 파일입니다.")

    file_path = FRONTEND_DIR / asset_name
    content_type = mimetypes.guess_type(file_path.name)[0] or "application/octet-stream"
    return FileResponse(file_path.open("rb"), content_type=content_type)


def health(_request):
    return JsonResponse({"ok": True, "service": "courtlens-django-backend"})


@csrf_exempt
@require_http_methods(["POST"])
def register_user(request):
    try:
        body = read_json_body(request)
    except json.JSONDecodeError:
        return JsonResponse({"ok": False, "message": "JSON 형식이 올바르지 않습니다."}, status=400)

    name = str(body.get("name") or "").strip()
    email = normalize_email(body.get("email"))
    password = str(body.get("password") or "")
    favorite_team_code = str(body.get("favoriteTeamCode") or "KR")

    if not name or not email or not password:
        return JsonResponse({"ok": False, "message": "이름, 이메일, 비밀번호를 모두 입력해 주세요."}, status=400)

    if "@" not in email:
        return JsonResponse({"ok": False, "message": "올바른 이메일 형식이 아닙니다."}, status=400)

    if len(password) < 8:
        return JsonResponse({"ok": False, "message": "비밀번호는 8자 이상이어야 합니다."}, status=400)

    if User.objects.filter(username=email).exists():
        return JsonResponse({"ok": False, "message": "이미 가입된 이메일입니다."}, status=409)

    user = User.objects.create_user(username=email, email=email, password=password, first_name=name)
    UserProfile.objects.create(user=user, favorite_team_code=favorite_team_code)
    login(request, user)
    return JsonResponse({"ok": True, "user": public_user(user)}, status=201)


@csrf_exempt
@require_http_methods(["POST"])
def login_user(request):
    try:
        body = read_json_body(request)
    except json.JSONDecodeError:
        return JsonResponse({"ok": False, "message": "JSON 형식이 올바르지 않습니다."}, status=400)

    email = normalize_email(body.get("email"))
    password = str(body.get("password") or "")
    user = authenticate(request, username=email, password=password)

    if user is None:
        return JsonResponse({"ok": False, "message": "이메일 또는 비밀번호가 올바르지 않습니다."}, status=401)

    login(request, user)
    return JsonResponse({"ok": True, "user": public_user(user)})


@csrf_exempt
@require_http_methods(["POST"])
def logout_user(request):
    logout(request)
    return JsonResponse({"ok": True})


def current_user(request):
    return JsonResponse({"ok": True, "user": public_user(request.user) if request.user.is_authenticated else None})


@csrf_exempt
@require_http_methods(["POST"])
def update_favorite_team(request):
    if not request.user.is_authenticated:
        return JsonResponse({"ok": False, "message": "로그인이 필요합니다."}, status=401)

    try:
        body = read_json_body(request)
    except json.JSONDecodeError:
        return JsonResponse({"ok": False, "message": "JSON 형식이 올바르지 않습니다."}, status=400)

    favorite_team_code = str(body.get("favoriteTeamCode") or "").strip()
    if not favorite_team_code:
        return JsonResponse({"ok": False, "message": "선호팀을 선택해 주세요."}, status=400)

    profile, _ = UserProfile.objects.get_or_create(user=request.user)
    profile.favorite_team_code = favorite_team_code
    profile.save(update_fields=["favorite_team_code", "updated_at"])
    return JsonResponse({"ok": True, "user": public_user(request.user)})


def normalize_quarter(value):
    return str(value or "").strip().upper()


def read_json_file(file_name):
    return json.loads((HIGHLIGHT_DATA_DIR / file_name).read_text(encoding="utf-8"))


def list_clip_files(directory_name):
    directory = CLIP_MEDIA_DIR / directory_name
    if not directory.exists():
        return []
    return sorted(item.name for item in directory.iterdir() if item.suffix == ".mov")


def dedupe_clock_part(value):
    parts = []
    for part in str(value or "").split("/"):
        part = part.strip()
        if part and part not in parts:
            parts.append(part)
    return "/".join(parts)


def normalize_clock_range(value):
    raw_value = str(value or "")
    if "_to_" not in raw_value:
        return dedupe_clock_part(raw_value)

    start, end = raw_value.split("_to_", 1)
    return f"{dedupe_clock_part(start)}_to_{dedupe_clock_part(end)}"


def normalize_highlight_clip(record, quarter, clip_files, index):
    config = QUARTER_CONFIGS[quarter]
    clip_id = int(record.get("clip_id") or record.get("event_id") or index + 1)
    clip_file = record.get("clip_file") or (clip_files[clip_id - 1] if clip_id - 1 < len(clip_files) else None)
    clip_path = f"media/clips/{config['clip_directory']}/{clip_file}" if clip_file else None

    return {
        "id": clip_id,
        "quarter": quarter,
        "clock": normalize_clock_range(record.get("game_clock_range") or record.get("clock_remaining") or ""),
        "duration": int(record.get("duration_sec") or 0),
        "start": int(record.get("video_start_sec") or record.get("clip_start_sec") or 0),
        "end": int(record.get("video_end_sec") or record.get("clip_end_sec") or 0),
        "startType": record.get("start_cut_type") or record.get("start_type") or "",
        "endType": record.get("end_cut_type") or record.get("end_type") or "",
        "startEvent": record.get("start_timeline_event") or record.get("start_description") or "",
        "endEvent": record.get("end_timeline_event") or record.get("end_description") or "",
        "clipFile": clip_file,
        "clipPath": clip_path,
        "videoUrl": f"/api/highlights/clips/{quarter}/{clip_id}/video",
        "sourceUrl": record.get("fiba_url"),
    }


def load_quarter_clips(quarter):
    config = QUARTER_CONFIGS.get(quarter)
    if not config:
        return None

    records = read_json_file(config["plan_file"])
    clip_files = list_clip_files(config["clip_directory"])
    return [normalize_highlight_clip(record, quarter, clip_files, index) for index, record in enumerate(records)]


def filter_clips(clips, request):
    event_type = str(request.GET.get("eventType") or "").strip().lower()
    player = str(request.GET.get("player") or "").strip().lower()

    filtered = []
    for clip in clips:
        event_text = f"{clip['startType']} {clip['endType']}".lower()
        player_text = f"{clip['startEvent']} {clip['endEvent']}".lower()
        if event_type and event_type not in event_text:
            continue
        if player and player not in player_text:
            continue
        filtered.append(clip)
    return filtered


def highlight_quarters(_request):
    quarters = {}
    for quarter in QUARTER_CONFIGS:
        clips = load_quarter_clips(quarter) or []
        event_types = sorted({event_type for clip in clips for event_type in [clip["startType"], clip["endType"]] if event_type})
        quarters[quarter] = {
            "quarter": quarter,
            "clipCount": len(clips),
            "eventTypes": event_types,
            "firstClock": clips[0]["clock"] if clips else None,
            "lastClock": clips[-1]["clock"] if clips else None,
        }
    return JsonResponse({"ok": True, "quarters": quarters})


def highlight_clips(request):
    quarter = normalize_quarter(request.GET.get("quarter") or "Q1")
    clips = load_quarter_clips(quarter)
    if clips is None:
        return JsonResponse({"ok": False, "message": "지원하지 않는 quarter입니다."}, status=404)
    return JsonResponse({"ok": True, "quarter": quarter, "clips": filter_clips(clips, request)})


def find_clip_or_404(quarter, clip_id):
    quarter = normalize_quarter(quarter)
    clips = load_quarter_clips(quarter)
    if clips is None:
        raise Http404("지원하지 않는 quarter입니다.")

    for clip in clips:
        if clip["id"] == clip_id:
            return clip
    raise Http404("하이라이트 클립을 찾을 수 없습니다.")


def highlight_clip_detail(_request, quarter, clip_id):
    return JsonResponse({"ok": True, "clip": find_clip_or_404(quarter, clip_id)})


def ranged_file_response(request, file_path):
    file_size = file_path.stat().st_size
    content_type = mimetypes.guess_type(file_path.name)[0] or "application/octet-stream"
    range_header = request.headers.get("Range")

    if not range_header:
        response = FileResponse(file_path.open("rb"), content_type=content_type)
        response["Content-Length"] = str(file_size)
        response["Accept-Ranges"] = "bytes"
        return response

    match = re.match(r"bytes=(\d*)-(\d*)", range_header)
    if not match:
        return HttpResponse(status=416, headers={"Content-Range": f"bytes */{file_size}"})

    start = int(match.group(1) or 0)
    end = int(match.group(2) or file_size - 1)
    if start >= file_size or end >= file_size or start > end:
        return HttpResponse(status=416, headers={"Content-Range": f"bytes */{file_size}"})

    def stream():
        with file_path.open("rb") as file:
            file.seek(start)
            remaining = end - start + 1
            while remaining > 0:
                chunk = file.read(min(8192, remaining))
                if not chunk:
                    break
                remaining -= len(chunk)
                yield chunk

    response = StreamingHttpResponse(stream(), status=206, content_type=content_type)
    response["Content-Range"] = f"bytes {start}-{end}/{file_size}"
    response["Content-Length"] = str(end - start + 1)
    response["Accept-Ranges"] = "bytes"
    return response


def highlight_clip_video(request, quarter, clip_id):
    clip = find_clip_or_404(quarter, clip_id)
    if not clip["clipPath"]:
        raise Http404("연결된 영상 파일이 없습니다.")
    return ranged_file_response(request, BASE_DIR / clip["clipPath"])


def clip_file(request, directory, filename):
    if directory not in {config["clip_directory"] for config in QUARTER_CONFIGS.values()}:
        raise Http404("지원하지 않는 클립 디렉터리입니다.")
    return ranged_file_response(request, CLIP_MEDIA_DIR / directory / filename)
