"""User management and authentication API endpoints."""

from fastapi import APIRouter

router = APIRouter()


@router.post("/register")
async def register_user():
    """Register a new user (farmer or extension worker)."""
    # TODO: Implement user registration
    return {"message": "User registration endpoint"}


@router.post("/login")
async def login():
    """Authenticate user and return access token."""
    # TODO: Implement user login
    return {"message": "User login endpoint"}


@router.get("/profile")
async def get_profile():
    """Get current user profile."""
    # TODO: Implement profile retrieval
    return {"message": "User profile endpoint"}
