"""Extension officer referral workflow API endpoints."""

from fastapi import APIRouter

router = APIRouter()


@router.post("/create")
async def create_referral(detection_id: str, notes: str = ""):
    """Create a referral to the nearest extension officer or lab."""
    # TODO: Implement referral creation
    return {"message": "Referral creation endpoint"}


@router.get("/status/{referral_id}")
async def get_referral_status(referral_id: str):
    """Get the current status of a referral."""
    # TODO: Implement referral status retrieval
    return {"message": "Referral status endpoint"}


@router.put("/respond/{referral_id}")
async def respond_to_referral(referral_id: str):
    """Extension officer responds to a referral."""
    # TODO: Implement referral response handling
    return {"message": "Referral response endpoint"}
