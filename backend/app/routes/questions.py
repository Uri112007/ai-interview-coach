
from fastapi import APIRouter, HTTPException

from app.models.schemas import QuestionRequest
from app.services.ai_service import generate_interview_questions

router = APIRouter(
    prefix="/api/questions",
    tags=["Interview Questions"]
)


@router.post("/generate")
def generate_questions(request: QuestionRequest):

    if request.difficulty not in ["Junior", "Senior"]:
        raise HTTPException(
            status_code=400,
            detail="Difficulty must be Junior or Senior."
        )

    try:
        questions = generate_interview_questions(
            job_role=request.job_role,
            job_description=request.job_description,
            resume_text=request.resume_text,
            difficulty=request.difficulty,
            number_of_questions=request.number_of_questions
        )

        return {
            "success": True,
            "job_role": request.job_role,
            "difficulty": request.difficulty,
            "questions": questions
        }

    except RuntimeError as error:
        raise HTTPException(
            status_code=503,
            detail=str(error)
        )

    except Exception as error:
        print("AI GENERATION ERROR:", repr(error))

        raise HTTPException(
            status_code=502,
            detail="Unable to generate questions. Please check the backend terminal."
        )