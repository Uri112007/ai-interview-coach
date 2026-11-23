
import { useState } from "react";
import "./Evaluation.css";

function Evaluation() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [jobRole, setJobRole] = useState("Python Developer");

  const [evaluation, setEvaluation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleEvaluate() {
    if (!question.trim() || !answer.trim()) {
      setError("Please enter both a question and an answer.");
      return;
    }

    setLoading(true);
    setError("");
    setEvaluation(null);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/evaluation/evaluate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question,
            answer,
            job_role: jobRole,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Evaluation failed.");
      }

      setEvaluation(data.evaluation);
    } catch (err) {
      setError(err.message || "Unable to connect to the backend.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="evaluation-container">
      <h1>AI Answer Evaluation</h1>

      <p className="evaluation-subtitle">
        Practice interview questions and receive
        personalized AI feedback.
      </p>

      <div className="evaluation-form">
        <label>Job Role</label>

        <input
          type="text"
          value={jobRole}
          onChange={(e) => setJobRole(e.target.value)}
          placeholder="e.g. Python Developer"
        />

        <label>Interview Question</label>

        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter your interview question..."
          rows={3}
        />

        <label>Your Answer</label>

        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Write your interview answer here..."
          rows={7}
        />

        <button
          onClick={handleEvaluate}
          disabled={loading}
        >
          {loading ? "Evaluating..." : "Evaluate My Answer"}
        </button>

        {error && (
          <p className="evaluation-error">{error}</p>
        )}
      </div>

      {evaluation && (
        <div className="evaluation-results">
          <h2>Your Evaluation</h2>

          <div className="overall-score">
            {evaluation.overall_score}/100
          </div>

          <h3>Score Breakdown</h3>

          {Object.entries(evaluation.scores).map(
            ([category, score]) => (
              <div className="score-item" key={category}>
                <div className="score-label">
                  <span>
                    {category.replaceAll("_", " ")}
                  </span>
                  <strong>{score}/100</strong>
                </div>

                <div className="score-bar">
                  <div
                    className="score-fill"
                    style={{
                      width: `${score}%`,
                    }}
                  />
                </div>
              </div>
            )
          )}

          <h3>What You Did Well</h3>

          <ul>
            {evaluation.strengths.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>Areas for Improvement</h3>

          <ul>
            {evaluation.improvements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {evaluation.star_analysis?.applicable && (
            <>
              <h3>STAR Method Analysis</h3>

              {Object.entries(
                evaluation.star_analysis.scores
              ).map(([category, score]) => (
                <div className="score-item" key={category}>
                  <div className="score-label">
                    <span>{category.toUpperCase()}</span>
                    <strong>{score}/100</strong>
                  </div>

                  <div className="score-bar">
                    <div
                      className="score-fill"
                      style={{
                        width: `${score}%`,
                      }}
                    />
                  </div>
                </div>
              ))}

              <p>
                {evaluation.star_analysis.feedback}
              </p>
            </>
          )}

          {!evaluation.star_analysis?.applicable && (
            <p>
              STAR analysis is not applicable to this question.
            </p>
          )}

          <h3>Suggested Improved Answer</h3>

          <div className="suggested-answer">
            {evaluation.suggested_answer}
          </div>
        </div>
      )}
    </div>
  );
}

export default Evaluation;
