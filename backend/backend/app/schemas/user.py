"""Pydantic schemas for user endpoints."""

from pydantic import BaseModel, EmailStr
from typing import Optional


class UserCreate(BaseModel):
    """Schema for user registration."""

    name: str
    email: EmailStr
    phone: str
    password: str
    role: str = "farmer"
    language: str = "en"


class UserResponse(BaseModel):
    """Schema for user response."""

    id: int
    name: str
    email: str
    phone: str
    role: str
    language: str

    class Config:
        from_attributes = True


class TokenResponse(BaseModel):
    """Schema for authentication token."""

    access_token: str
    token_type: str = "bearer"
