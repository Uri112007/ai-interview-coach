
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import evaluation

from app.routes import questions

app = FastAPI(
    title="AI Interview Coach API",
    description="An AI-powered interview preparation platform",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(questions.router)
app.include_router(evaluation.router)


@app.get("/")
def home():
    return {
        "message": "Welcome to AI Interview Coach API"
    }


@app.get("/api/health")
def health_check():
    return {
        "status": "healthy",
        "application": "AI Interview Coach"
    }
