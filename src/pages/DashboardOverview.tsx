import { newHires, teamMembers, checklistTemplates, productivityMetrics } from "../lib/mock-data";

export default function DashboardOverview() {
  const totalChecklistItems = checklistTemplates.reduce(
    (sum, t) => sum + t.items.length,
    0
  );
  const completedItems = checklistTemplates.reduce(
    (sum, t) => sum + t.items.filter((i) => i.completed).length,
    0
  );

  return (
    <div>
      <div className="page-header">
        <h2>Dashboard Overview</h2>
        <p>Welcome back. Here is a snapshot of your onboarding program.</p>
      </div>

      {/* Stats */}
      <div className="stat-grid">
        <div className="stat-card">
          <div className="stat-card-label">Active New Hires</div>
          <div className="stat-card-value">{newHires.length}</div>
          <div className="stat-card-sub">Currently onboarding</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-label">Team Mentors</div>
          <div className="stat-card-value">{teamMembers.length}</div>
          <div className="stat-card-sub">
            {teamMembers.filter((m) => m.currentMentees < m.maxMentees).length}{" "}
            available
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-card-label">Checklist Completion</div>
          <div className="stat-card-value">
            {Math.round((completedItems / totalChecklistItems) * 100)}%
          </div>
          <div className="stat-card-sub">
            {completedItems} of {totalChecklistItems} items
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-card-label">Avg. Days to First PR</div>
          <div className="stat-card-value">
            {productivityMetrics[0]?.averageDays ?? "—"}
          </div>
          <div className="stat-card-sub">Across all hires</div>
        </div>
      </div>

      {/* New hires table */}
      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <div className="card-header">
          <h3>Active New Hires</h3>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Team</th>
              <th>Start Date</th>
              <th>Seniority</th>
            </tr>
          </thead>
          <tbody>
            {newHires.map((hire) => (
              <tr key={hire.id}>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <div
                      className="avatar"
                      style={{
                        background: hire.avatarColor,
                        width: 32,
                        height: 32,
                        fontSize: "0.75rem",
                      }}
                    >
                      {hire.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    {hire.name}
                  </div>
                </td>
                <td>
                  <span className="badge badge-primary">{hire.role}</span>
                </td>
                <td>{hire.team}</td>
                <td>{hire.startDate}</td>
                <td>{hire.seniority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mentors */}
      <div className="card">
        <div className="card-header">
          <h3>Available Mentors</h3>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Team</th>
              <th>Capacity</th>
              <th>Hours/Week</th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((tm) => (
              <tr key={tm.id}>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <div
                      className="avatar"
                      style={{
                        background: tm.avatarColor,
                        width: 32,
                        height: 32,
                        fontSize: "0.75rem",
                      }}
                    >
                      {tm.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    {tm.name}
                  </div>
                </td>
                <td>{tm.role}</td>
                <td>{tm.team}</td>
                <td>
                  {tm.currentMentees}/{tm.maxMentees} mentees
                </td>
                <td>{tm.availabilityHoursPerWeek}h</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
