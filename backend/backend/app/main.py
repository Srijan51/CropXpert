"""CropXpert FastAPI Application Entry Point."""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.api import router as api_router


def create_app() -> FastAPI:
    """Create and configure the FastAPI application."""
    application = FastAPI(
        title=settings.APP_NAME,
        description="AI-Powered Crop Disease & Pest Detection Advisory System",
        version="0.1.0",
        docs_url="/docs",
        redoc_url="/redoc",
    )

    # CORS middleware
    application.add_middleware(
        CORSMiddleware,
        allow_origins=settings.CORS_ORIGINS,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # Include API routers
    application.include_router(api_router, prefix="/api/v1")

    @application.get("/health")
    async def health_check():
        """Health check endpoint."""
        return {"status": "healthy", "service": "cropxpert-api"}

    return application


app = create_app()
