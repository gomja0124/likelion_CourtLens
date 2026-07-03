"""세그먼트 특징 추출: CLIP 프레임 임베딩 + 오디오 에너지 특징.

1초 세그먼트마다
- 시각: fps=2로 뽑은 프레임 2장의 CLIP 임베딩 평균 (512차원, 인코더 동결)
- 오디오: RMS 에너지 / 에너지 변화량 / 최대 진폭 / 스펙트럴 플럭스 근사 (4차원)
를 이어붙여 516차원 벡터를 만든다.
"""

import tempfile
import wave
from pathlib import Path
from typing import Tuple

import numpy as np

from .video_utils import extract_audio_wav, extract_frames, probe_duration

FRAME_FPS = 2.0  # 세그먼트(1초)당 프레임 2장
AUDIO_SR = 16000
VISUAL_DIM = 512
AUDIO_DIM = 4


def load_clip_encoder(device: str = "cuda"):
    """OpenCLIP ViT-B/32 인코더 로드 (동결)."""
    import open_clip
    import torch

    model, _, preprocess = open_clip.create_model_and_transforms(
        "ViT-B-32", pretrained="laion2b_s34b_b79k"
    )
    model = model.to(device).eval()
    for p in model.parameters():
        p.requires_grad_(False)
    return model, preprocess


def _audio_features_per_second(wav_path: str, num_seconds: int) -> np.ndarray:
    """초당 (rms, rms 변화량, 피크, 플럭스 근사) 특징."""
    with wave.open(wav_path, "rb") as w:
        raw = w.readframes(w.getnframes())
        sr = w.getframerate()
    samples = np.frombuffer(raw, dtype=np.int16).astype(np.float32) / 32768.0

    feats = np.zeros((num_seconds, AUDIO_DIM), dtype=np.float32)
    prev_rms = 0.0
    for i in range(num_seconds):
        chunk = samples[i * sr : (i + 1) * sr]
        if chunk.size == 0:
            feats[i] = feats[i - 1] if i else 0.0
            continue
        rms = float(np.sqrt(np.mean(chunk**2)))
        peak = float(np.max(np.abs(chunk)))
        # 0.1초 서브프레임 에너지 변화의 합 = 플럭스 근사 (함성 폭발/휘슬 반응)
        sub = chunk[: (chunk.size // 1600) * 1600].reshape(-1, 1600)
        sub_rms = np.sqrt(np.mean(sub**2, axis=1)) if sub.size else np.zeros(1)
        flux = float(np.sum(np.abs(np.diff(sub_rms)))) if sub_rms.size > 1 else 0.0
        feats[i] = [rms, rms - prev_rms, peak, flux]
        prev_rms = rms
    return feats


def extract_segment_features(
    video_path: str,
    clip_model,
    clip_preprocess,
    device: str = "cuda",
    batch_size: int = 128,
) -> Tuple[np.ndarray, float]:
    """영상 → (세그먼트 수, 516) 특징 행렬과 영상 길이를 반환."""
    import torch
    from PIL import Image

    duration = probe_duration(video_path)
    num_seconds = max(1, int(duration))

    with tempfile.TemporaryDirectory() as tmp:
        frame_paths = extract_frames(video_path, tmp, fps=FRAME_FPS)
        wav_path = extract_audio_wav(video_path, str(Path(tmp) / "audio.wav"), AUDIO_SR)

        # CLIP 임베딩 (배치 처리)
        embeddings = []
        for start in range(0, len(frame_paths), batch_size):
            batch = frame_paths[start : start + batch_size]
            images = torch.stack(
                [clip_preprocess(Image.open(p).convert("RGB")) for p in batch]
            ).to(device)
            with torch.no_grad():
                emb = clip_model.encode_image(images)
                emb = emb / emb.norm(dim=-1, keepdim=True)
            embeddings.append(emb.cpu().numpy())
        frame_embs = (
            np.concatenate(embeddings) if embeddings
            else np.zeros((0, VISUAL_DIM), dtype=np.float32)
        )

        audio_feats = _audio_features_per_second(wav_path, num_seconds)

    frames_per_seg = int(FRAME_FPS)
    visual = np.zeros((num_seconds, VISUAL_DIM), dtype=np.float32)
    for i in range(num_seconds):
        seg = frame_embs[i * frames_per_seg : (i + 1) * frames_per_seg]
        if seg.size:
            visual[i] = seg.mean(axis=0)
        elif i:
            visual[i] = visual[i - 1]

    return np.concatenate([visual, audio_feats], axis=1), duration
