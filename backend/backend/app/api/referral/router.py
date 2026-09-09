"""Extension officer referral workflow API endpoints."""

from fastapi import APIRouter, HTTPException, status

router = APIRouter()


@router.post("/create")
async def create_referral(detection_id: str, notes: str = ""):
    """Create a referral to the nearest extension officer or lab."""
    # TODO: Implement referral creation
    raise HTTPException(status_code=status.HTTP_501_NOT_IMPLEMENTED, detail="Referral creation is not implemented")


@router.get("/status/{referral_id}")
async def get_referral_status(referral_id: str):
    """Get the current status of a referral."""
    # TODO: Implement referral status retrieval
    raise HTTPException(status_code=status.HTTP_501_NOT_IMPLEMENTED, detail="Referral status retrieval is not implemented")


@router.put("/respond/{referral_id}")
async def respond_to_referral(referral_id: str):
    """Extension officer responds to a referral."""
    # TODO: Implement referral response handling
    raise HTTPException(status_code=status.HTTP_501_NOT_IMPLEMENTED, detail="Referral response is not implemented")
