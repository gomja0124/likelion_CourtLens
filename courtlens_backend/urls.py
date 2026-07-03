from django.contrib import admin
from django.urls import path, re_path

from api import views


urlpatterns = [
    path("admin/", admin.site.urls),
    path("", views.index),
    path("index.html", views.index),
    path("app.js", views.root_asset),
    path("styles.css", views.root_asset),
    path("kbl-data.js", views.root_asset),
    path("api/health", views.health),
    path("api/auth/register", views.register_user),
    path("api/auth/login", views.login_user),
    path("api/auth/logout", views.logout_user),
    path("api/auth/me", views.current_user),
    path("api/highlights/quarters", views.highlight_quarters),
    path("api/highlights/clips", views.highlight_clips),
    path("api/highlights/clips/<str:quarter>/<int:clip_id>", views.highlight_clip_detail),
    path("api/highlights/clips/<str:quarter>/<int:clip_id>/video", views.highlight_clip_video),
    re_path(r"^media/clips/(?P<directory>q[123]_cutpoint_segmentss)/(?P<filename>[^/]+\.mov)$", views.clip_file),
]
