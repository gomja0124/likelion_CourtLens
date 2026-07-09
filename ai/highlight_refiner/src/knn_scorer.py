"""하이라이트-only 학습: one-class kNN 유사도 스코어러.

풀경기(음성) 영상 없이 NBA 공식 하이라이트만으로 동작한다.
하이라이트 세그먼트의 CLIP 시각 임베딩을 '기준 은행'으로 저장하고,
새 세그먼트의 점수 = 은행에서 가장 가까운 k개와의 평균 코사인 유사도.
하이라이트다운 장면일수록 은행과 가깝고(점수↑), 대기/잡컷은 멀다(점수↓).

- 유사도는 **시각 임베딩만**으로 계산한다 (구조가 명확하고 스케일이 안정적).
- 오디오(함성/휘슬 에너지)는 클리핑된 z-점수 기반의 **작은 보너스 항(±0.08)**으로만
  더한다. 오디오를 벡터에 섞으면 분포 밖 입력에서 시각 신호를 압도할 수 있다.
- 점수는 은행 자체의 유사도 분포로 0~1 범위에 보정해서
  segment.py의 기본 임계값(hi=0.6, lo=0.45)과 같은 스케일로 맞춘다.
"""

from pathlib import Path

import numpy as np

from .features import VISUAL_DIM

AUDIO_BONUS = 0.08   # 오디오가 점수에 더할 수 있는 최대치 (±)
AUDIO_Z_CLIP = 2.0   # 오디오 z-점수 클리핑 범위


class KnnScorer:
    def __init__(self, bank: np.ndarray, audio_mean: np.ndarray, audio_std: np.ndarray,
                 cal_lo: float, cal_hi: float, k: int = 20):
        self.bank = bank          # (M, 512) L2 정규화된 시각 임베딩 은행
        self.audio_mean = audio_mean
        self.audio_std = audio_std
        self.cal_lo = cal_lo
        self.cal_hi = cal_hi
        self.k = k

    # ---------- 구축 ----------

    @classmethod
    def build(cls, features: np.ndarray, k: int = 20, max_bank: int = 20000,
              seed: int = 42) -> "KnnScorer":
        """하이라이트 세그먼트 특징 (M, 516) → 스코어러."""
        rng = np.random.default_rng(seed)
        features = np.asarray(features, dtype=np.float32)
        if len(features) > max_bank:
            idx = rng.choice(len(features), size=max_bank, replace=False)
            features = features[np.sort(idx)]

        bank = cls._unit(features[:, :VISUAL_DIM])
        audio = features[:, VISUAL_DIM:]
        audio_mean = audio.mean(axis=0)
        audio_std = audio.std(axis=0) + 1e-6

        # 보정: 은행 스스로의 top-k 시각 유사도 분포 (자기 자신 제외)
        sample_idx = rng.choice(len(bank), size=min(1000, len(bank)), replace=False)
        sims = bank[sample_idx] @ bank.T                    # (S, M)
        np.put_along_axis(sims, np.argmax(sims, axis=1)[:, None], -1.0, axis=1)
        kk = min(k, sims.shape[1] - 1)
        topk = np.sort(sims, axis=1)[:, -kk:].mean(axis=1)

        p5, p50 = float(np.percentile(topk, 5)), float(np.percentile(topk, 50))
        spread = max(p50 - p5, 1e-3)
        # 은행 중앙값(전형적 하이라이트) → 약 0.8, 하위 꼬리 아래로 한 스프레드 → 0 부근
        cal_hi = p50
        cal_lo = p5 - spread
        return cls(bank, audio_mean, audio_std, cal_lo, cal_hi, k)

    @staticmethod
    def _unit(x: np.ndarray) -> np.ndarray:
        return x / (np.linalg.norm(x, axis=1, keepdims=True) + 1e-8)

    # ---------- 점수 ----------

    def score(self, features: np.ndarray, device: str = None) -> list:
        """(N, 516) 특징 → 0~1 하이라이트 점수. (device 인자는 MLP와 인터페이스 통일용)"""
        features = np.asarray(features, dtype=np.float32)
        visual = self._unit(features[:, :VISUAL_DIM])

        sims = visual @ self.bank.T                          # (N, M)
        k = min(self.k, sims.shape[1])
        topk = np.sort(sims, axis=1)[:, -k:].mean(axis=1)
        scaled = (topk - self.cal_lo) / max(self.cal_hi - self.cal_lo, 1e-6) * 0.8

        # 오디오 보너스: 은행 대비 시끄럽고 변화가 크면 +, 조용하면 -
        audio_z = (features[:, VISUAL_DIM:] - self.audio_mean) / self.audio_std
        audio_z = np.clip(audio_z, -AUDIO_Z_CLIP, AUDIO_Z_CLIP).mean(axis=1)
        bonus = AUDIO_BONUS * audio_z / AUDIO_Z_CLIP

        return np.clip(scaled + bonus, 0.0, 1.0).tolist()

    # ---------- 저장/로드 ----------

    def save(self, path: str):
        Path(path).parent.mkdir(parents=True, exist_ok=True)
        np.savez_compressed(
            path, bank=self.bank, audio_mean=self.audio_mean, audio_std=self.audio_std,
            cal_lo=self.cal_lo, cal_hi=self.cal_hi, k=self.k,
        )

    @classmethod
    def load(cls, path: str) -> "KnnScorer":
        data = np.load(path)
        return cls(
            data["bank"], data["audio_mean"], data["audio_std"],
            float(data["cal_lo"]), float(data["cal_hi"]), int(data["k"]),
        )


def build_bank(highlight_videos, clip_model, clip_preprocess,
               out_path: str, device: str = "cuda", k: int = 20) -> KnnScorer:
    """하이라이트 영상들 → 특징 추출 → KnnScorer 저장."""
    from tqdm import tqdm

    from .features import extract_segment_features

    all_feats = []
    for path in tqdm(highlight_videos, desc="하이라이트 은행 구축"):
        feats, _ = extract_segment_features(path, clip_model, clip_preprocess, device)
        all_feats.append(feats)

    scorer = KnnScorer.build(np.concatenate(all_feats), k=k)
    scorer.save(out_path)
    print(f"은행 저장: {out_path} ({len(scorer.bank)} 세그먼트)")
    return scorer
