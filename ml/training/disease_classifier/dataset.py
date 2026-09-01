"""Dataset class for crop disease image classification."""


class DiseaseDataset:
    """PyTorch dataset for crop disease images."""

    def __init__(self, root_dir: str, transform=None):
        """Initialize the dataset.

        Args:
            root_dir: Path to the image directory (organized by class folders).
            transform: Image transformations to apply.
        """
        self.root_dir = root_dir
        self.transform = transform
        # TODO: Load image paths and labels

    def __len__(self) -> int:
        """Return the number of samples."""
        raise NotImplementedError

    def __getitem__(self, idx: int):
        """Return a single sample (image, label)."""
        raise NotImplementedError
