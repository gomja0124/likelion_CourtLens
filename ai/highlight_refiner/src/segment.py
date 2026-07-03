"""세그먼트 점수 → 최종 keep 구간 결정 (순수 파이썬, 의존성 없음).

모델이 뱉은 초 단위 하이라이트 점수를 받아
스무딩 → 히스테리시스 임계값 → 구간 병합/필터 → 패딩 순으로
최종적으로 남길 (start_sec, end_sec) 구간 목록을 만든다.
"""

from typing import List, Tuple

Interval = Tuple[float, float]


def smooth_scores(scores: List[float], window: int = 3) -> List[float]:
    """이동 평균 스무딩. window는 홀수 권장."""
    if window <= 1 or not scores:
        return list(scores)
    half = window // 2
    out = []
    for i in range(len(scores)):
        lo = max(0, i - half)
        hi = min(len(scores), i + half + 1)
        out.append(sum(scores[lo:hi]) / (hi - lo))
    return out


def _raw_keep_runs(scores: List[float], hi: float, lo: float) -> List[Tuple[int, int]]:
    """히스테리시스: hi 이상에서 켜지고 lo 미만에서 꺼진다. [start, end) 인덱스."""
    runs = []
    active = False
    start = 0
    for i, s in enumerate(scores):
        if not active and s >= hi:
            active = True
            start = i
        elif active and s < lo:
            runs.append((start, i))
            active = False
    if active:
        runs.append((start, len(scores)))
    return runs


def _merge_close(runs: List[Tuple[int, int]], max_gap: int) -> List[Tuple[int, int]]:
    if not runs:
        return []
    merged = [runs[0]]
    for start, end in runs[1:]:
        prev_start, prev_end = merged[-1]
        if start - prev_end <= max_gap:
            merged[-1] = (prev_start, end)
        else:
            merged.append((start, end))
    return merged


def select_keep_intervals(
    scores: List[float],
    seg_duration: float = 1.0,
    hi: float = 0.6,
    lo: float = 0.45,
    min_len_sec: float = 3.0,
    merge_gap_sec: float = 2.0,
    pad_sec: float = 0.5,
    smooth_window: int = 3,
    total_duration: float | None = None,
) -> List[Interval]:
    """점수 시퀀스에서 남길 구간(초 단위)을 결정한다.

    아무 구간도 임계값을 못 넘으면 최고 점수 세그먼트를 중심으로
    min_len_sec 길이의 구간 하나를 반환한다 (빈 출력 방지).
    """
    if not scores:
        return []

    smoothed = smooth_scores(scores, smooth_window)
    runs = _raw_keep_runs(smoothed, hi, lo)
    runs = _merge_close(runs, max_gap=max(0, round(merge_gap_sec / seg_duration)))
    runs = [r for r in runs if (r[1] - r[0]) * seg_duration >= min_len_sec]

    if not runs:
        # 폴백: 최고 점수 중심으로 최소 길이 구간 하나
        peak = max(range(len(smoothed)), key=lambda i: smoothed[i])
        half = min_len_sec / 2
        center = (peak + 0.5) * seg_duration
        runs_sec = [(center - half, center + half)]
    else:
        runs_sec = [(s * seg_duration, e * seg_duration) for s, e in runs]

    limit = total_duration if total_duration is not None else len(scores) * seg_duration
    padded: List[Interval] = []
    for start, end in runs_sec:
        start = max(0.0, start - pad_sec)
        end = min(limit, end + pad_sec)
        if padded and start <= padded[-1][1]:
            padded[-1] = (padded[-1][0], max(padded[-1][1], end))
        else:
            padded.append((start, end))
    return [(round(s, 2), round(e, 2)) for s, e in padded if e > s]
