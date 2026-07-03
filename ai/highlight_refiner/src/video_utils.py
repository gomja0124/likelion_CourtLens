"""ffmpeg 기반 영상 유틸 (Colab에는 ffmpeg이 기본 설치되어 있다)."""

import json
import subprocess
import tempfile
from pathlib import Path
from typing import List, Tuple


def probe_duration(video_path: str) -> float:
    """영상 길이(초)."""
    out = subprocess.run(
        [
            "ffprobe", "-v", "error",
            "-show_entries", "format=duration",
            "-of", "json", str(video_path),
        ],
        capture_output=True, text=True, check=True,
    )
    return float(json.loads(out.stdout)["format"]["duration"])


def extract_frames(video_path: str, out_dir: str, fps: float = 2.0, height: int = 224) -> List[Path]:
    """fps 간격으로 프레임을 jpg로 추출해 경로 목록을 시간순으로 반환."""
    out = Path(out_dir)
    out.mkdir(parents=True, exist_ok=True)
    subprocess.run(
        [
            "ffmpeg", "-y", "-v", "error", "-i", str(video_path),
            "-vf", f"fps={fps},scale=-2:{height}",
            "-q:v", "3", str(out / "frame_%06d.jpg"),
        ],
        check=True,
    )
    return sorted(out.glob("frame_*.jpg"))


def extract_audio_wav(video_path: str, out_path: str, sample_rate: int = 16000) -> str:
    """모노 16kHz wav로 오디오 추출."""
    subprocess.run(
        [
            "ffmpeg", "-y", "-v", "error", "-i", str(video_path),
            "-vn", "-ac", "1", "-ar", str(sample_rate),
            "-c:a", "pcm_s16le", str(out_path),
        ],
        check=True,
    )
    return str(out_path)


def cut_video(video_path: str, intervals: List[Tuple[float, float]], out_path: str) -> str:
    """keep 구간들만 이어붙여 새 영상 생성 (정밀 컷을 위해 재인코딩)."""
    if not intervals:
        raise ValueError("자를 구간이 없습니다.")

    with tempfile.TemporaryDirectory() as tmp:
        parts = []
        for i, (start, end) in enumerate(intervals):
            part = Path(tmp) / f"part_{i:03d}.mp4"
            subprocess.run(
                [
                    "ffmpeg", "-y", "-v", "error",
                    "-ss", f"{start:.2f}", "-to", f"{end:.2f}",
                    "-i", str(video_path),
                    "-c:v", "libx264", "-preset", "veryfast", "-crf", "20",
                    "-c:a", "aac", "-movflags", "+faststart",
                    str(part),
                ],
                check=True,
            )
            parts.append(part)

        if len(parts) == 1:
            subprocess.run(["cp", str(parts[0]), str(out_path)], check=True)
        else:
            concat_list = Path(tmp) / "concat.txt"
            concat_list.write_text("".join(f"file '{p}'\n" for p in parts))
            subprocess.run(
                [
                    "ffmpeg", "-y", "-v", "error",
                    "-f", "concat", "-safe", "0", "-i", str(concat_list),
                    "-c", "copy", str(out_path),
                ],
                check=True,
            )
    return str(out_path)
