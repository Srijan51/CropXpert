"""Pydantic schemas for detection endpoints."""

from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class DetectionResult(BaseModel):
    """Response schema for a detection result."""

    id: int
    detection_type: str
    disease_name: Optional[str] = None
    pest_name: Optional[str] = None
    confidence: float
    severity: Optional[str] = None
    pest_count: Optional[int] = None
    crop_type: Optional[str] = None
    created_at: datetime

    class Config:
        from_attributes = True


class DetectionRequest(BaseModel):
    """Request schema for detection submission."""

    crop_type: Optional[str] = None
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    notes: Optional[str] = None
