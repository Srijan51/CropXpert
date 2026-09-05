"""Advisory ORM model."""

from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey
from sqlalchemy.sql import func

from app.core.database import Base


class Advisory(Base):
    """Advisory model storing generated treatment recommendations."""

    __tablename__ = "advisories"

    id = Column(Integer, primary_key=True, index=True)
    detection_id = Column(Integer, ForeignKey("detections.id"), nullable=False)
    content = Column(Text, nullable=False)
    language = Column(String(10), default="en")
    pesticide_recommendation = Column(Text)
    dosage_info = Column(Text)
    ipm_strategy = Column(Text)
    audio_url = Column(String(512))  # TTS audio file URL
    created_at = Column(DateTime(timezone=True), server_default=func.now())
