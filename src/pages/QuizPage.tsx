import { useState } from "react";
import { quizzes } from "../lib/mock-data";
import type { Quiz } from "../lib/types";

type QuizState = "list" | "taking" | "results";

export default function QuizPage() {
  const [state, setState] = useState<QuizState>("list");
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  function startQuiz(quiz: Quiz) {
    setActiveQuiz(quiz);
    setAnswers({});
    setSubmitted(false);
    setState("taking");
  }

  function selectAnswer(questionId: string, optionIndex: number) {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  }

  function submitQuiz() {
    setSubmitted(true);
    setState("results");
  }

  function getScore(): { correct: number; total: number; percentage: number } {
    if (!activeQuiz) return { correct: 0, total: 0, percentage: 0 };
    const total = activeQuiz.questions.length;
    const correct = activeQuiz.questions.filter(
      (q) => answers[q.id] === q.correctIndex
    ).length;
    return { correct, total, percentage: Math.round((correct / total) * 100) };
  }

  function backToList() {
    setState("list");
    setActiveQuiz(null);
    setAnswers({});
    setSubmitted(false);
  }

  // Quiz list view
  if (state === "list") {
    return (
      <div>
        <div className="page-header">
          <h2>Knowledge Check Quizzes</h2>
          <p>
            Validate your understanding of our tech stack, processes, and security
            practices.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {quizzes.map((quiz) => (
            <div key={quiz.id} className="card">
              <h3
                style={{
                  fontSize: "1.1rem",
                  marginBottom: "0.5rem",
                  color: "var(--color-text-heading)",
                }}
              >
                {quiz.title}
              </h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--color-text-muted)",
                  marginBottom: "1rem",
                }}
              >
                {quiz.description}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <span className="badge badge-muted">
                  {quiz.questions.length} questions
                </span>
                <span
                  style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}
                >
                  Passing: {quiz.passingScore}%
                </span>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                style={{ width: "100%" }}
                onClick={() => startQuiz(quiz)}
              >
                Start Quiz
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Results view
  if (state === "results" && activeQuiz) {
    const score = getScore();
    const passed = score.percentage >= activeQuiz.passingScore;

    return (
      <div>
        <div className="page-header">
          <h2>{activeQuiz.title} -- Results</h2>
        </div>

        <div className="card" style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <div className={`score-circle ${passed ? "pass" : "fail"}`}>
            <span className="score-circle-value">{score.percentage}%</span>
            <span className="score-circle-label">Score</span>
          </div>
          <p
            style={{
              fontSize: "1.1rem",
              fontWeight: 600,
              color: passed ? "var(--color-success)" : "var(--color-danger)",
              marginBottom: "0.5rem",
            }}
          >
            {passed ? "Passed!" : "Not Passed"}
          </p>
          <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
            {score.correct} of {score.total} correct &middot; Passing threshold:{" "}
            {activeQuiz.passingScore}%
          </p>
        </div>

        {/* Review answers */}
        {activeQuiz.questions.map((q, qi) => {
          const userAnswer = answers[q.id];
          const isCorrect = userAnswer === q.correctIndex;

          return (
            <div key={q.id} className="quiz-question">
              <h4>
                {qi + 1}. {q.question}
              </h4>
              {q.options.map((opt, oi) => {
                let className = "quiz-option";
                if (oi === q.correctIndex) className += " correct";
                else if (oi === userAnswer && !isCorrect)
                  className += " incorrect";

                return (
                  <div key={oi} className={className}>
                    <input type="radio" checked={oi === userAnswer} readOnly />
                    <span>{opt}</span>
                    {oi === q.correctIndex && (
                      <span style={{ marginLeft: "auto", fontSize: "0.75rem" }}>
                        Correct
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}

        <button
          type="button"
          className="btn btn-outline"
          onClick={backToList}
          style={{ marginTop: "1rem" }}
        >
          Back to Quizzes
        </button>
      </div>
    );
  }

  // Taking quiz view
  if (!activeQuiz) return null;

  const answeredCount = Object.keys(answers).length;
  const totalQuestions = activeQuiz.questions.length;

  return (
    <div>
      <div className="page-header">
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <h2>{activeQuiz.title}</h2>
          <span className="badge badge-muted">
            {answeredCount}/{totalQuestions} answered
          </span>
        </div>
        <p>{activeQuiz.description}</p>
      </div>

      {activeQuiz.questions.map((q, qi) => (
        <div key={q.id} className="quiz-question">
          <h4>
            {qi + 1}. {q.question}
          </h4>
          {q.options.map((opt, oi) => (
            <div
              key={oi}
              className={`quiz-option${answers[q.id] === oi ? " selected" : ""}`}
              onClick={() => selectAnswer(q.id, oi)}
            >
              <input
                type="radio"
                name={q.id}
                checked={answers[q.id] === oi}
                onChange={() => selectAnswer(q.id, oi)}
              />
              <span>{opt}</span>
            </div>
          ))}
        </div>
      ))}

      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <button type="button" className="btn btn-outline" onClick={backToList}>
          Cancel
        </button>
        <button
          type="button"
          className="btn btn-primary"
          disabled={answeredCount < totalQuestions}
          onClick={submitQuiz}
          style={{
            opacity: answeredCount < totalQuestions ? 0.5 : 1,
          }}
        >
          Submit Quiz ({answeredCount}/{totalQuestions})
        </button>
      </div>
    </div>
  );
}
