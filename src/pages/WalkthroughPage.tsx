import { useState } from "react";
import { newHires, walkthroughStops } from "../lib/mock-data";

export default function WalkthroughPage() {
  const [selectedHire, setSelectedHire] = useState(newHires[0]!.id);
  const hire = newHires.find((h) => h.id === selectedHire)!;
  const stops = walkthroughStops[hire.role] ?? [];
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  function markComplete(stepIndex: number) {
    setCompletedSteps((prev) => {
      const next = new Set(prev);
      next.add(stepIndex);
      return next;
    });
    if (stepIndex < stops.length - 1) {
      setCurrentStep(stepIndex + 1);
    }
  }

  const progressPct =
    stops.length > 0
      ? Math.round((completedSteps.size / stops.length) * 100)
      : 0;

  return (
    <div>
      <div className="page-header">
        <h2>Codebase Walkthrough</h2>
        <p>
          Guided tour of the codebase -- navigate key files and understand
          architecture.
        </p>
      </div>

      {/* Hire selector */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "1.5rem",
        }}
      >
        <label
          style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}
        >
          New Hire:
        </label>
        <select
          className="select-control"
          value={selectedHire}
          onChange={(e) => {
            setSelectedHire(e.target.value);
            setCurrentStep(0);
            setCompletedSteps(new Set());
          }}
        >
          {newHires.map((h) => (
            <option key={h.id} value={h.id}>
              {h.name} ({h.role})
            </option>
          ))}
        </select>
        <span className="badge badge-primary">{hire.role} Walkthrough</span>
      </div>

      {/* Progress */}
      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "0.75rem",
          }}
        >
          <span style={{ fontSize: "0.9rem", fontWeight: 600 }}>
            {completedSteps.size} of {stops.length} stops completed
          </span>
          <span
            style={{
              fontSize: "0.9rem",
              fontWeight: 700,
              color: "var(--color-primary)",
            }}
          >
            {progressPct}%
          </span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-bar-fill orange"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      {/* Walkthrough Steps */}
      {stops.map((stop, idx) => (
        <div
          key={stop.id}
          className={`walkthrough-step${idx === currentStep ? " active" : ""}`}
        >
          <div className="walkthrough-step-header">
            <div
              className={`walkthrough-step-number${completedSteps.has(idx) ? " done" : ""}`}
            >
              {completedSteps.has(idx) ? "\u2713" : idx + 1}
            </div>
            <div>
              <strong style={{ fontSize: "0.95rem" }}>{stop.title}</strong>
            </div>
            <span className="walkthrough-step-path">{stop.path}</span>
          </div>

          {idx === currentStep && (
            <>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--color-text)",
                  marginBottom: "0.5rem",
                }}
              >
                {stop.explanation}
              </p>
              <div className="walkthrough-code">
                <pre>{stop.codeSnippet}</pre>
              </div>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "var(--color-primary)",
                  fontStyle: "italic",
                  marginBottom: "0.75rem",
                }}
              >
                Why this matters: {stop.whyItMatters}
              </p>
              {!completedSteps.has(idx) && (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => markComplete(idx)}
                >
                  {idx < stops.length - 1
                    ? "Mark Complete & Continue"
                    : "Mark Complete"}
                </button>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}
