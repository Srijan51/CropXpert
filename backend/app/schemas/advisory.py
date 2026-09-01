"""Pydantic schemas for advisory endpoints."""

from pydantic import BaseModel
from typing import Optional


class AdvisoryRequest(BaseModel):
    """Request schema for advisory generation."""

    detection_id: int
    language: str = "en"


class AdvisoryResponse(BaseModel):
    """Response schema for a generated advisory."""

    id: int
    detection_id: int
    content: str
    language: str
    pesticide_recommendation: Optional[str] = None
    dosage_info: Optional[str] = None
    ipm_strategy: Optional[str] = None
    audio_url: Optional[str] = None

    class Config:
        from_attributes = True
