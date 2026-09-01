"""Follow-up monitoring and active learning API endpoints."""

from fastapi import APIRouter, UploadFile, File

router = APIRouter()


@router.post("/follow-up")
async def submit_follow_up(detection_id: str, image: UploadFile = File(...), outcome: str = ""):
    """Submit a follow-up observation for active learning."""
    # TODO: Implement follow-up submission
    return {"message": "Follow-up submission endpoint"}


@router.get("/timeline/{detection_id}")
async def get_monitoring_timeline(detection_id: str):
    """Get the monitoring timeline for a detection case."""
    # TODO: Implement monitoring timeline
    return {"message": "Monitoring timeline endpoint"}


@router.post("/confirm/{detection_id}")
async def confirm_diagnosis(detection_id: str, confirmed: bool = True):
    """Farmer or officer confirms/corrects a diagnosis for model retraining."""
    # TODO: Implement diagnosis confirmation for active learning
    return {"message": "Diagnosis confirmation endpoint"}
