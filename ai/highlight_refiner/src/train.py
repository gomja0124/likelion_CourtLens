"""HighlightScorer 학습 루프."""

import numpy as np
import torch
import torch.nn as nn
from torch.utils.data import DataLoader, TensorDataset

from .model import HighlightScorer


def _auc(labels: np.ndarray, scores: np.ndarray) -> float:
    """ROC-AUC (순위 기반, 외부 의존성 없이 계산)."""
    order = np.argsort(scores)
    ranks = np.empty(len(scores))
    ranks[order] = np.arange(1, len(scores) + 1)
    pos = labels == 1
    n_pos, n_neg = pos.sum(), (~pos).sum()
    if n_pos == 0 or n_neg == 0:
        return float("nan")
    return float((ranks[pos].sum() - n_pos * (n_pos + 1) / 2) / (n_pos * n_neg))


def train_scorer(
    dataset_path: str,
    out_path: str = "checkpoints/highlight_scorer.pt",
    device: str = "cuda",
    epochs: int = 8,
    batch_size: int = 512,
    lr: float = 1e-3,
    val_ratio: float = 0.15,
    seed: int = 42,
) -> HighlightScorer:
    data = np.load(dataset_path)
    X, y = data["features"].astype(np.float32), data["labels"].astype(np.float32)

    rng = np.random.default_rng(seed)
    idx = rng.permutation(len(X))
    n_val = int(len(X) * val_ratio)
    val_idx, train_idx = idx[:n_val], idx[n_val:]

    train_ds = TensorDataset(torch.from_numpy(X[train_idx]), torch.from_numpy(y[train_idx]))
    train_loader = DataLoader(train_ds, batch_size=batch_size, shuffle=True)
    X_val = torch.from_numpy(X[val_idx]).to(device)
    y_val = y[val_idx]

    model = HighlightScorer(in_dim=X.shape[1]).to(device)
    # 클래스 불균형 보정
    pos_weight = torch.tensor([(y[train_idx] == 0).sum() / max(1, (y[train_idx] == 1).sum())]).to(device)
    criterion = nn.BCEWithLogitsLoss(pos_weight=pos_weight)
    optimizer = torch.optim.AdamW(model.parameters(), lr=lr)

    for epoch in range(1, epochs + 1):
        model.train()
        total_loss = 0.0
        for xb, yb in train_loader:
            xb, yb = xb.to(device), yb.to(device)
            optimizer.zero_grad()
            loss = criterion(model(xb), yb)
            loss.backward()
            optimizer.step()
            total_loss += loss.item() * len(xb)

        model.eval()
        with torch.no_grad():
            val_scores = torch.sigmoid(model(X_val)).cpu().numpy()
        val_auc = _auc(y_val, val_scores)
        print(f"epoch {epoch:2d} | loss {total_loss / len(train_idx):.4f} | val AUC {val_auc:.4f}")

    import os
    os.makedirs(os.path.dirname(out_path) or ".", exist_ok=True)
    torch.save({"state_dict": model.state_dict(), "in_dim": X.shape[1]}, out_path)
    print(f"저장됨: {out_path}")
    return model


def load_scorer(checkpoint_path: str, device: str = "cuda") -> HighlightScorer:
    ckpt = torch.load(checkpoint_path, map_location=device, weights_only=True)
    model = HighlightScorer(in_dim=ckpt["in_dim"]).to(device)
    model.load_state_dict(ckpt["state_dict"])
    model.eval()
    return model
