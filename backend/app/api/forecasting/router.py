"""Weather-based outbreak risk forecasting API endpoints."""

from fastapi import APIRouter

router = APIRouter()


@router.get("/risk")
async def get_outbreak_risk(latitude: float, longitude: float):
    """Get disease/pest outbreak risk forecast for a location."""
    # TODO: Implement outbreak risk prediction
    return {"message": "Outbreak risk forecast endpoint"}


@router.get("/weather")
async def get_weather_data(latitude: float, longitude: float):
    """Get current weather data for risk calculation."""
    # TODO: Implement weather data fetching
    return {"message": "Weather data endpoint"}
