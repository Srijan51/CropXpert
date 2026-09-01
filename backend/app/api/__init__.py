"""API router aggregation."""

from fastapi import APIRouter

from app.api.detection.router import router as detection_router
from app.api.forecasting.router import router as forecasting_router
from app.api.advisory.router import router as advisory_router
from app.api.hotspot.router import router as hotspot_router
from app.api.referral.router import router as referral_router
from app.api.monitoring.router import router as monitoring_router
from app.api.users.router import router as users_router
from app.api.dashboard.router import router as dashboard_router

router = APIRouter()

router.include_router(detection_router, prefix="/detection", tags=["Detection"])
router.include_router(forecasting_router, prefix="/forecasting", tags=["Forecasting"])
router.include_router(advisory_router, prefix="/advisory", tags=["Advisory"])
router.include_router(hotspot_router, prefix="/hotspot", tags=["Hotspot"])
router.include_router(referral_router, prefix="/referral", tags=["Referral"])
router.include_router(monitoring_router, prefix="/monitoring", tags=["Monitoring"])
router.include_router(users_router, prefix="/users", tags=["Users"])
router.include_router(dashboard_router, prefix="/dashboard", tags=["Dashboard"])
