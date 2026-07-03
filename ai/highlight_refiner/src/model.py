"""세그먼트 하이라이트 점수 모델.

CLIP 임베딩(동결) 위에 얹는 얕은 MLP 헤드.
학습 파라미터가 40만 개 수준이라 Colab T4에서 수 분이면 수렴한다.
시간적 문맥은 추론 단계의 스무딩/히스테리시스(segment.py)가 담당한다.
"""

import torch
import torch.nn as nn

FEATURE_DIM = 516  # visual 512 + audio 4


class HighlightScorer(nn.Module):
    def __init__(self, in_dim: int = FEATURE_DIM, hidden: int = 256, dropout: float = 0.3):
        super().__init__()
        self.net = nn.Sequential(
            nn.LayerNorm(in_dim),
            nn.Linear(in_dim, hidden),
            nn.GELU(),
            nn.Dropout(dropout),
            nn.Linear(hidden, hidden // 2),
            nn.GELU(),
            nn.Dropout(dropout),
            nn.Linear(hidden // 2, 1),
        )

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        return self.net(x).squeeze(-1)  # logits

    @torch.no_grad()
    def score(self, features, device: str = "cuda") -> list:
        """(N, 516) 특징 → 0~1 하이라이트 점수 리스트."""
        self.eval()
        x = torch.as_tensor(features, dtype=torch.float32, device=device)
        return torch.sigmoid(self(x)).cpu().tolist()
