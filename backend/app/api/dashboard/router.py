"""Extension-worker and officer dashboard API endpoints."""

from fastapi import APIRouter

router = APIRouter()


@router.get("/extension-worker")
async def extension_worker_dashboard():
    """Get extension worker dashboard data (pending validations, referrals)."""
    # TODO: Implement extension worker dashboard
    return {"message": "Extension worker dashboard endpoint"}


@router.get("/officer")
async def officer_surveillance_dashboard():
    """Get officer surveillance dashboard with aggregated regional analytics."""
    # TODO: Implement officer surveillance dashboard
    return {"message": "Officer surveillance dashboard endpoint"}


@router.get("/analytics")
async def get_analytics(region: str = None, period: str = "7d"):
    """Get aggregated analytics for disease/pest trends."""
    # TODO: Implement analytics aggregation
    return {"message": "Analytics endpoint"}
