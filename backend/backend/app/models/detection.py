"""Detection ORM model."""

from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey, Text
from sqlalchemy.sql import func
from geoalchemy2 import Geometry

from app.core.database import Base


class Detection(Base):
    """Detection model storing disease/pest identification results."""

    __tablename__ = "detections"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    image_url = Column(String(512), nullable=False)
    detection_type = Column(String(50), nullable=False)  # disease, pest
    disease_name = Column(String(255))
    pest_name = Column(String(255))
    confidence = Column(Float)
    severity = Column(String(50))  # mild, moderate, severe
    pest_count = Column(Integer)
    crop_type = Column(String(100))
    location = Column(Geometry("POINT", srid=4326))
    notes = Column(Text)
    is_confirmed = Column(Integer, default=0)  # 0=pending, 1=confirmed, -1=corrected
    created_at = Column(DateTime(timezone=True), server_default=func.now())
