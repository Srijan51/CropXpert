"""Disease classification model architecture."""


class DiseaseClassifier:
    """Multi-task model: disease classification + severity estimation.

    Architecture:
        - Backbone: EfficientNet-B0/B3 or MobileNetV3 (via timm)
        - Head 1: Disease classification (N classes)
        - Head 2: Severity estimation (mild/moderate/severe)
    """

    def __init__(self, backbone: str = "efficientnet_b0", num_classes: int = 38, severity_head: bool = True):
        """Initialize the model."""
        # TODO: Build model using timm
        raise NotImplementedError

    def forward(self, x):
        """Forward pass."""
        raise NotImplementedError
