
import os
from pathlib import Path
from dotenv import load_dotenv

env_path = Path(__file__).resolve().parent / ".env"

load_dotenv(env_path, override=True)

print("ENV file exists:", env_path.exists())
print("Model selected:", os.getenv("GEMINI_MODEL"))
print("API key detected:", bool(os.getenv("GEMINI_API_KEY")))