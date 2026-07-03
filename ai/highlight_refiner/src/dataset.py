"""학습 데이터셋 구축.

- positive: NBA 공식 하이라이트 영상의 모든 1초 세그먼트 (label=1)
- negative: 풀경기 중계 영상에서 랜덤 샘플한 세그먼트 (label=0)
  풀경기에도 하이라이트성 장면이 일부 섞이지만(~10%대) 라벨 노이즈로 감내한다.

결과는 .npz (features, labels)로 저장해 재학습 시 재사용한다.
"""

from pathlib import Path
from typing import List

import numpy as np
from tqdm import tqdm

from .features import extract_segment_features


def build_dataset(
    highlight_videos: List[str],
    fullgame_videos: List[str],
    clip_model,
    clip_preprocess,
    out_path: str,
    device: str = "cuda",
    neg_per_video: int = 400,
    seed: int = 42,
) -> dict:
    rng = np.random.default_rng(seed)
    features, labels = [], []

    for path in tqdm(highlight_videos, desc="하이라이트(양성)"):
        feats, _ = extract_segment_features(path, clip_model, clip_preprocess, device)
        features.append(feats)
        labels.append(np.ones(len(feats), dtype=np.float32))

    for path in tqdm(fullgame_videos, desc="풀경기(음성)"):
        feats, _ = extract_segment_features(path, clip_model, clip_preprocess, device)
        if len(feats) > neg_per_video:
            idx = rng.choice(len(feats), size=neg_per_video, replace=False)
            feats = feats[np.sort(idx)]
        features.append(feats)
        labels.append(np.zeros(len(feats), dtype=np.float32))

    X = np.concatenate(features)
    y = np.concatenate(labels)
    Path(out_path).parent.mkdir(parents=True, exist_ok=True)
    np.savez_compressed(out_path, features=X, labels=y)
    return {"num_segments": len(X), "num_positive": int(y.sum()), "path": out_path}
