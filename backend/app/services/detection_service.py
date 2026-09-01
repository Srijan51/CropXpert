"""Disease and pest detection business logic."""


class DetectionService:
    """Service for processing crop image detection requests."""

    async def classify_disease(self, image_path: str) -> dict:
        """Run disease classification model on the uploaded image."""
        # TODO: Load model, preprocess image, run inference
        raise NotImplementedError

    async def detect_pests(self, image_path: str) -> dict:
        """Run pest detection model (YOLOv8) on the uploaded image."""
        # TODO: Load YOLO model, run detection, return bounding boxes and counts
        raise NotImplementedError

    async def estimate_severity(self, image_path: str, disease: str) -> str:
        """Estimate disease severity from the image."""
        # TODO: Implement severity estimation head
        raise NotImplementedError
