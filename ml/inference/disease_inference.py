"""Disease classification inference pipeline."""


class DiseaseInferenceEngine:
    """Inference engine for disease classification.

    Supports PyTorch, ONNX, and TFLite backends.
    """

    def __init__(self, model_path: str, backend: str = "onnx"):
        """Initialize the inference engine.

        Args:
            model_path: Path to the exported model file.
            backend: Inference backend ('pytorch', 'onnx', 'tflite').
        """
        self.model_path = model_path
        self.backend = backend
        # TODO: Load model based on backend

    def predict(self, image) -> dict:
        """Run inference on a single image.

        Returns:
            Dictionary with disease_name, confidence, severity.
        """
        raise NotImplementedError

    def preprocess(self, image):
        """Preprocess image for model input."""
        raise NotImplementedError
