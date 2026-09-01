"""Evaluation metrics and scripts for disease classifier."""


def evaluate_model(model, dataloader) -> dict:
    """Evaluate the model on a test set.

    Returns:
        Dictionary with accuracy, precision, recall, F1, confusion matrix.
    """
    # TODO: Implement evaluation pipeline
    raise NotImplementedError


def generate_classification_report(predictions, labels, class_names: list) -> str:
    """Generate a detailed classification report."""
    # TODO: Use sklearn classification_report
    raise NotImplementedError
