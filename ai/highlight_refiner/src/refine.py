"""KBL 1차 클립 → 정제된 하이라이트 (엔드투엔드 추론).

1. 클립을 1초 세그먼트로 나눠 특징 추출
2. 학습된 HighlightScorer로 세그먼트별 하이라이트 점수 계산
3. 스무딩 + 히스테리시스 임계값으로 keep 구간 결정
4. ffmpeg로 keep 구간만 이어붙여 최종 클립 생성
"""

from pathlib import Path
from typing import List, Tuple

from .features import extract_segment_features
from .segment import select_keep_intervals, smooth_scores
from .video_utils import cut_video


def refine_clip(
    video_path: str,
    scorer,
    clip_model,
    clip_preprocess,
    out_path: str | None = None,
    device: str = "cuda",
    hi: float = 0.6,
    lo: float = 0.45,
    min_len_sec: float = 3.0,
    merge_gap_sec: float = 2.0,
    pad_sec: float = 0.5,
) -> dict:
    """정제 실행. 점수/구간/출력 경로를 담은 dict 반환."""
    video_path = str(video_path)
    if out_path is None:
        p = Path(video_path)
        out_path = str(p.with_name(f"{p.stem}_refined.mp4"))

    features, duration = extract_segment_features(
        video_path, clip_model, clip_preprocess, device
    )
    scores = scorer.score(features, device=device)

    intervals = select_keep_intervals(
        scores,
        seg_duration=1.0,
        hi=hi,
        lo=lo,
        min_len_sec=min_len_sec,
        merge_gap_sec=merge_gap_sec,
        pad_sec=pad_sec,
        total_duration=duration,
    )
    cut_video(video_path, intervals, out_path)

    kept = sum(e - s for s, e in intervals)
    return {
        "input": video_path,
        "output": out_path,
        "duration": round(duration, 1),
        "kept_duration": round(kept, 1),
        "removed_ratio": round(1 - kept / duration, 3) if duration else 0.0,
        "intervals": intervals,
        "scores": scores,
    }


def plot_scores(result: dict, hi: float = 0.6, lo: float = 0.45, save_to: str | None = None):
    """점수 타임라인 + keep 구간 시각화 (발표 자료용)."""
    import matplotlib.pyplot as plt

    scores = result["scores"]
    smoothed = smooth_scores(scores, 3)
    fig, ax = plt.subplots(figsize=(12, 3.5))
    ax.plot(scores, alpha=0.35, label="raw score")
    ax.plot(smoothed, linewidth=2, label="smoothed")
    ax.axhline(hi, linestyle="--", linewidth=1, color="green", label=f"hi={hi}")
    ax.axhline(lo, linestyle="--", linewidth=1, color="orange", label=f"lo={lo}")
    for start, end in result["intervals"]:
        ax.axvspan(start, end, alpha=0.15, color="green")
    ax.set_xlabel("time (sec)")
    ax.set_ylabel("highlight score")
    ax.set_ylim(0, 1)
    ax.legend(loc="lower right", fontsize=8)
    ax.set_title(Path(result["input"]).name)
    fig.tight_layout()
    if save_to:
        fig.savefig(save_to, dpi=150)
    return fig
