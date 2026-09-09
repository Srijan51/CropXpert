"""Follow-up monitoring and active learning API endpoints."""

from fastapi import APIRouter, File, HTTPException, UploadFile, status

router = APIRouter()


@router.post("/follow-up")
async def submit_follow_up(detection_id: str, image: UploadFile = File(...), outcome: str = ""):
    """Submit a follow-up observation for active learning."""
    # TODO: Implement follow-up submission
    raise HTTPException(status_code=status.HTTP_501_NOT_IMPLEMENTED, detail="Follow-up submission is not implemented")


@router.get("/timeline/{detection_id}")
async def get_monitoring_timeline(detection_id: str):
    """Get the monitoring timeline for a detection case."""
    # TODO: Implement monitoring timeline
    raise HTTPException(status_code=status.HTTP_501_NOT_IMPLEMENTED, detail="Monitoring timeline is not implemented")


@router.post("/confirm/{detection_id}")
async def confirm_diagnosis(detection_id: str, confirmed: bool = True):
    """Farmer or officer confirms/corrects a diagnosis for model retraining."""
    # TODO: Implement diagnosis confirmation for active learning
    raise HTTPException(status_code=status.HTTP_501_NOT_IMPLEMENTED, detail="Diagnosis confirmation is not implemented")
