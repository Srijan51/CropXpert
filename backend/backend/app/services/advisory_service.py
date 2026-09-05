"""Advisory generation service using Groq LLM."""


class AdvisoryService:
    """Service for generating treatment advisories via LLM."""

    async def generate_advisory(self, detection_result: dict, language: str = "en") -> str:
        """Generate an IPM advisory using Groq-hosted Llama 3.3."""
        # TODO: Build prompt, call Groq API, parse response
        raise NotImplementedError

    async def translate_advisory(self, text: str, target_language: str) -> str:
        """Translate advisory text to target language using LLM."""
        # TODO: Implement translation via LLM
        raise NotImplementedError

    async def generate_tts(self, text: str, language: str) -> str:
        """Convert advisory text to speech and return audio URL."""
        # TODO: Implement TTS
        raise NotImplementedError
