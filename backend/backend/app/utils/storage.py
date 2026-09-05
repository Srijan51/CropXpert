"""S3/MinIO object storage utilities."""


async def upload_image(file_data: bytes, filename: str) -> str:
    """Upload an image to S3/MinIO and return the URL."""
    # TODO: Implement MinIO/S3 upload
    raise NotImplementedError


async def get_image_url(filename: str) -> str:
    """Generate a presigned URL for an image."""
    # TODO: Implement presigned URL generation
    raise NotImplementedError
