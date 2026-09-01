"""Train the pest detection model (YOLOv8/v11).

Usage:
    python -m training.pest_detector.train --config configs/pest_detector.yaml
"""

import argparse


def train_yolo(config_path: str):
    """Train YOLOv8/v11 model using Ultralytics."""
    # TODO: Load config, initialize YOLO model, train with Ultralytics API
    raise NotImplementedError


def main():
    """Entry point for pest detector training."""
    parser = argparse.ArgumentParser(description="Train pest detector")
    parser.add_argument("--config", type=str, default="configs/pest_detector.yaml")
    args = parser.parse_args()

    train_yolo(args.config)


if __name__ == "__main__":
    main()
