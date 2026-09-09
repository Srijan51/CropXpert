"""API router aggregation."""

from fastapi import APIRouter

from app.api.hotspot.router import router as hotspot_router
from app.api.referral.router import router as referral_router
from app.api.monitoring.router import router as monitoring_router
from app.api.users.router import router as users_router

router = APIRouter()

router.include_router(hotspot_router, prefix="/hotspot", tags=["Hotspot"])
router.include_router(referral_router, prefix="/referral", tags=["Referral"])
router.include_router(monitoring_router, prefix="/monitoring", tags=["Monitoring"])
router.include_router(users_router, prefix="/users", tags=["Users"])
