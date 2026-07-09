"""NBA 학습 영상 수집 (yt-dlp).

- positive: NBA 공식 하이라이트 영상 → 모든 세그먼트를 '하이라이트다운 장면'으로 사용
- negative: 풀경기/롱폼 중계 영상에서 랜덤 샘플 → 대부분 비하이라이트 구간

주의: 수집 영상은 팀 내부 연구/데모 용도로만 사용하고 재배포하지 않는다.
"""

import subprocess
from pathlib import Path
from typing import List


def download_videos(urls: List[str], out_dir: str, max_height: int = 360) -> List[Path]:
    """URL 목록을 mp4로 다운로드. 임베딩 추출에는 360p면 충분하다."""
    out = Path(out_dir)
    out.mkdir(parents=True, exist_ok=True)
    for url in urls:
        subprocess.run(
            [
                "yt-dlp",
                "-f", f"bv*[height<={max_height}][ext=mp4]+ba[ext=m4a]/b[height<={max_height}][ext=mp4]/b",
                "--merge-output-format", "mp4",
                "-o", str(out / "%(id)s.%(ext)s"),
                url,
            ],
            check=True,
        )
    return sorted(out.glob("*.mp4"))
