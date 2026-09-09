"""Referral ORM model."""

from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey
from sqlalchemy.sql import func

from app.core.database import Base


class Referral(Base):
    """Referral model for extension officer escalation workflow."""

    __tablename__ = "referrals"

    id = Column(Integer, primary_key=True, index=True)
    detection_id = Column(Integer, ForeignKey("detections.id"), nullable=False)
    farmer_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    officer_id = Column(Integer, ForeignKey("users.id"))
    status = Column(String(50), default="pending")  # pending, assigned, resolved
    notes = Column(Text)
    response = Column(Text)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    resolved_at = Column(DateTime(timezone=True))
