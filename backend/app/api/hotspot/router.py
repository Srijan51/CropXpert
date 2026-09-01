"""Geospatial disease/pest hotspot API endpoints."""

from fastapi import APIRouter

router = APIRouter()


@router.get("/map-data")
async def get_hotspot_data(region: str = None):
    """Get geospatial hotspot data for the map visualization."""
    # TODO: Implement PostGIS-powered hotspot aggregation
    return {"message": "Hotspot map data endpoint"}


@router.get("/clusters")
async def get_disease_clusters():
    """Get clustered disease/pest reports for regional analysis."""
    # TODO: Implement spatial clustering
    return {"message": "Disease cluster endpoint"}
