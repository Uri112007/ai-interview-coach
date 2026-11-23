
from pydantic import BaseModel, Field


class QuestionRequest(BaseModel):
    job_role: str = Field(min_length=2, max_length=150)

    job_description: str = Field(
        min_length=30,
        max_length=12000
    )

    resume_text: str = Field(
        min_length=20,
        max_length=12000
    )

    difficulty: str = "Junior"

    number_of_questions: int = Field(
        default=10,
        ge=1,
        le=20
    )


class EvaluationRequest(BaseModel):
    question: str = Field(min_length=5, max_length=3000)
    answer: str = Field(min_length=10, max_length=10000)
    job_role: str = Field(min_length=2, max_length=150)