"""Model export utilities (ONNX, TFLite)."""


def export_to_onnx(model, input_shape: tuple, output_path: str):
    """Export a PyTorch model to ONNX format."""
    # TODO: Implement ONNX export with torch.onnx.export
    raise NotImplementedError


def export_to_tflite(onnx_path: str, output_path: str):
    """Convert an ONNX model to TFLite format."""
    # TODO: Implement ONNX -> TFLite conversion
    raise NotImplementedError


def quantize_model(model_path: str, output_path: str, method: str = "dynamic"):
    """Quantize a model for edge deployment."""
    # TODO: Implement model quantization
    raise NotImplementedError
