"""Pest detection inference pipeline."""


class PestInferenceEngine:
    """Inference engine for pest detection using YOLOv8."""

    def __init__(self, model_path: str, backend: str = "onnx"):
        """Initialize the pest detection engine."""
        self.model_path = model_path
        self.backend = backend
        # TODO: Load YOLO model

    def detect(self, image) -> dict:
        """Run pest detection on an image.

        Returns:
            Dictionary with detections (bounding boxes, classes, confidences) and pest_count.
        """
        raise NotImplementedError
