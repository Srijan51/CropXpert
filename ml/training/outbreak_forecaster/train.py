"""Train the outbreak risk forecasting model (XGBoost).

Usage:
    python -m training.outbreak_forecaster.train --config configs/outbreak_forecaster.yaml
"""

import argparse


def load_features(config: dict):
    """Load and prepare feature matrix from processed data."""
    # TODO: Load CSV, feature selection, train/test split
    raise NotImplementedError


def train_xgboost(config: dict):
    """Train XGBoost model with cross-validation."""
    # TODO: Implement XGBoost training with:
    # - Cross-validation
    # - Hyperparameter tuning
    # - Early stopping
    # - MLflow logging
    raise NotImplementedError


def main():
    """Entry point for outbreak forecaster training."""
    parser = argparse.ArgumentParser(description="Train outbreak forecaster")
    parser.add_argument("--config", type=str, default="configs/outbreak_forecaster.yaml")
    args = parser.parse_args()

    train_xgboost(vars(args))


if __name__ == "__main__":
    main()
