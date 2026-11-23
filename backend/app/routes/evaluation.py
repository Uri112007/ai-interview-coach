
from fastapi import APIRouter, HTTPException

from app.models.schemas import EvaluationRequest
from app.services.ai_service import evaluate_interview_answer

router = APIRouter(
    prefix="/api/evaluation",
    tags=["Answer Evaluation"]
)


@router.post("/evaluate")
def evaluate_answer(request: EvaluationRequest):

    try:
        result = evaluate_interview_answer(
            question=request.question,
            answer=request.answer,
            job_role=request.job_role
        )

        return {
            "success": True,
            "job_role": request.job_role,
            "evaluation": result
        }

    except RuntimeError as error:
        raise HTTPException(
            status_code=503,
            detail=str(error)
        )

    except Exception as error:
        print("EVALUATION ROUTE ERROR:", repr(error))

        raise HTTPException(
            status_code=502,
            detail="Unable to evaluate answer. Check the backend terminal."
        )
