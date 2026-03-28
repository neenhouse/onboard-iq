import { useState } from "react";
import { newHires, getMilestonesForHire } from "../lib/mock-data";

export default function MilestonePage() {
  const [selectedHire, setSelectedHire] = useState(newHires[0]!.id);
  const hire = newHires.find((h) => h.id === selectedHire)!;
  const milestones = getMilestonesForHire(selectedHire);

  function statusBadge(status: string) {
    switch (status) {
      case "on-track":
        return <span className="badge badge-success">On Track</span>;
      case "at-risk":
        return <span className="badge badge-warning">At Risk</span>;
      case "behind":
        return <span className="badge badge-danger">Behind</span>;
      default:
        return <span className="badge badge-muted">{status}</span>;
    }
  }

  function progressColor(status: string): string {
    switch (status) {
      case "on-track":
        return "green";
      case "at-risk":
        return "yellow";
      case "behind":
        return "red";
      default:
        return "orange";
    }
  }

  return (
    <div>
      <div className="page-header">
        <h2>Milestone Tracker (30/60/90)</h2>
        <p>
          Structured milestone framework with clear success criteria at each
          checkpoint.
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
          onChange={(e) => setSelectedHire(e.target.value)}
        >
          {newHires.map((h) => (
            <option key={h.id} value={h.id}>
              {h.name} ({h.role})
            </option>
          ))}
        </select>
        <span className="badge badge-primary">{hire.role}</span>
        <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
          Started: {hire.startDate}
        </span>
      </div>

      {/* Milestone phases */}
      {milestones.map((phase) => {
        const completedGoals = phase.goals.filter((g) => g.completed).length;
        const totalGoals = phase.goals.length;
        return (
          <div key={phase.phase} className="milestone-phase">
            <div className="milestone-phase-header">
              <div className="milestone-phase-title">
                <h3>{phase.label}</h3>
                {statusBadge(phase.status)}
              </div>
              <span
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--color-text-muted)",
                }}
              >
                {completedGoals}/{totalGoals} goals
              </span>
            </div>

            {/* Progress bar */}
            <div style={{ marginBottom: "1rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.35rem",
                }}
              >
                <span
                  style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}
                >
                  Progress
                </span>
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "var(--color-text)",
                  }}
                >
                  {phase.progress}%
                </span>
              </div>
              <div className="progress-bar">
                <div
                  className={`progress-bar-fill ${progressColor(phase.status)}`}
                  style={{ width: `${phase.progress}%` }}
                />
              </div>
            </div>

            {/* Goals */}
            <ul className="milestone-goals">
              {phase.goals.map((goal) => (
                <li key={goal.id}>
                  <div
                    className={`milestone-check ${goal.completed ? "done" : "pending"}`}
                  >
                    {goal.completed ? "\u2713" : "\u2022"}
                  </div>
                  <span
                    style={{
                      color: goal.completed
                        ? "var(--color-text-muted)"
                        : "var(--color-text)",
                      textDecoration: goal.completed ? "line-through" : "none",
                    }}
                  >
                    {goal.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
