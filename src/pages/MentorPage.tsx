import { useState } from "react";
import { newHires, getMentorMatches } from "../lib/mock-data";

export default function MentorPage() {
  const [selectedHire, setSelectedHire] = useState(newHires[0]!.id);
  const hire = newHires.find((h) => h.id === selectedHire)!;
  const matches = getMentorMatches(selectedHire);

  return (
    <div>
      <div className="page-header">
        <h2>Mentor Matching</h2>
        <p>
          Algorithm-driven mentor assignment based on skills, availability, and
          team proximity.
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
        <span className="badge badge-primary">{hire.role} - {hire.team}</span>
      </div>

      {/* Mentor cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {matches.map((mentor, idx) => {
          const isAssigned = mentor.id === hire.mentorId;
          return (
            <div
              key={mentor.id}
              className="mentor-card"
              style={
                isAssigned
                  ? {
                      borderColor: "var(--color-primary)",
                      boxShadow: "0 0 0 1px var(--color-primary-border)",
                    }
                  : {}
              }
            >
              {isAssigned && (
                <span
                  className="badge badge-primary"
                  style={{ alignSelf: "flex-start" }}
                >
                  Assigned Mentor
                </span>
              )}
              <div className="mentor-card-header">
                <div
                  className="avatar"
                  style={{ background: mentor.avatarColor }}
                >
                  {mentor.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="mentor-card-info">
                  <h4>
                    {idx + 1}. {mentor.name}
                  </h4>
                  <p>
                    {mentor.role} &middot; {mentor.team}
                  </p>
                </div>
              </div>

              <div className="mentor-skills">
                {mentor.skills.map((skill) => (
                  <span key={skill} className="mentor-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mentor-match-score">
                <span className="mentor-match-score-value">
                  {mentor.matchScore}%
                </span>
                <span className="mentor-match-score-label">Match Score</span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.8rem",
                  color: "var(--color-text-muted)",
                }}
              >
                <span>
                  Availability: {mentor.availabilityHoursPerWeek}h/week
                </span>
                <span>
                  Capacity: {mentor.currentMentees}/{mentor.maxMentees} mentees
                </span>
              </div>

              <div
                style={{
                  fontSize: "0.8rem",
                  color: "var(--color-text-muted)",
                }}
              >
                Timezone: {mentor.timezone}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
