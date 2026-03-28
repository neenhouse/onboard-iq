import { newHires, productivityMetrics, checklistTemplates, getMilestonesForHire } from "../lib/mock-data";

export default function ProductivityPage() {
  const maxDays = 25; // scale for bar chart

  // Calculate aggregate stats
  const avgFirstPR = productivityMetrics[0]?.averageDays ?? 0;
  const avgFirstDeploy = productivityMetrics[1]?.averageDays ?? 0;
  const avgFirstReview = productivityMetrics[2]?.averageDays ?? 0;

  // Checklist stats per hire
  const hireChecklistStats = newHires.map((hire) => {
    const template = checklistTemplates.find((t) => t.role === hire.role);
    const items = template?.items ?? [];
    const completed = items.filter((i) => i.completed).length;
    return {
      name: hire.name,
      role: hire.role,
      total: items.length,
      completed,
      percentage: items.length > 0 ? Math.round((completed / items.length) * 100) : 0,
    };
  });

  // Milestone status per hire
  const hireMilestoneStats = newHires.map((hire) => {
    const milestones = getMilestonesForHire(hire.id);
    const thirtyDay = milestones.find((m) => m.phase === "30-day");
    return {
      name: hire.name,
      role: hire.role,
      status: thirtyDay?.status ?? "on-track",
      progress: thirtyDay?.progress ?? 0,
    };
  });

  return (
    <div>
      <div className="page-header">
        <h2>Time-to-Productivity Dashboard</h2>
        <p>
          Aggregate and per-hire visibility into onboarding effectiveness and
          velocity.
        </p>
      </div>

      {/* Key metrics */}
      <div className="stat-grid">
        <div className="stat-card">
          <div className="stat-card-label">Avg. Days to First PR</div>
          <div className="stat-card-value" style={{ color: "var(--color-primary)" }}>
            {avgFirstPR}
          </div>
          <div className="stat-card-sub">Across {newHires.length} hires</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-label">Avg. Days to First Deploy</div>
          <div className="stat-card-value" style={{ color: "var(--color-primary)" }}>
            {avgFirstDeploy}
          </div>
          <div className="stat-card-sub">Across {newHires.length} hires</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-label">Avg. Days to First Review</div>
          <div className="stat-card-value" style={{ color: "var(--color-primary)" }}>
            {avgFirstReview}
          </div>
          <div className="stat-card-sub">Across {newHires.length} hires</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-label">Active New Hires</div>
          <div className="stat-card-value">{newHires.length}</div>
          <div className="stat-card-sub">Currently onboarding</div>
        </div>
      </div>

      {/* Bar charts for each metric */}
      {productivityMetrics.map((metric) => (
        <div key={metric.label} className="card" style={{ marginBottom: "1.5rem" }}>
          <div className="card-header">
            <h3>{metric.label}</h3>
            <span className="badge badge-primary">
              Avg: {metric.averageDays} days
            </span>
          </div>
          <div className="bar-chart">
            {metric.hires.map((hire) => {
              const heightPct = Math.min((hire.days / maxDays) * 100, 100);
              const color =
                hire.days <= metric.averageDays
                  ? "var(--color-success)"
                  : hire.days <= metric.averageDays * 1.3
                    ? "var(--color-primary)"
                    : "var(--color-danger)";
              return (
                <div key={hire.name} className="bar-chart-item">
                  <span className="bar-chart-value">{hire.days}d</span>
                  <div
                    className="bar-chart-bar"
                    style={{
                      height: `${heightPct}%`,
                      background: color,
                    }}
                  />
                  <span className="bar-chart-label">{hire.name}</span>
                </div>
              );
            })}
          </div>
          {/* Average line label */}
          <div
            style={{
              textAlign: "center",
              fontSize: "0.8rem",
              color: "var(--color-text-muted)",
              marginTop: "0.5rem",
              borderTop: "1px dashed var(--color-border)",
              paddingTop: "0.5rem",
            }}
          >
            Team average: {metric.averageDays} days
          </div>
        </div>
      ))}

      {/* Checklist completion comparison */}
      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <div className="card-header">
          <h3>Checklist Completion by Hire</h3>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Progress</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {hireChecklistStats.map((stat) => (
              <tr key={stat.name}>
                <td>{stat.name}</td>
                <td>
                  <span className="badge badge-primary">{stat.role}</span>
                </td>
                <td style={{ minWidth: 200 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div className="progress-bar" style={{ flex: 1 }}>
                      <div
                        className="progress-bar-fill orange"
                        style={{ width: `${stat.percentage}%` }}
                      />
                    </div>
                    <span style={{ fontSize: "0.8rem", fontWeight: 600, minWidth: 35 }}>
                      {stat.percentage}%
                    </span>
                  </div>
                </td>
                <td style={{ color: "var(--color-text-muted)", fontSize: "0.85rem" }}>
                  {stat.completed}/{stat.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 30-day milestone status comparison */}
      <div className="card">
        <div className="card-header">
          <h3>30-Day Milestone Status</h3>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            {hireMilestoneStats.map((stat) => {
              const badgeClass =
                stat.status === "on-track"
                  ? "badge-success"
                  : stat.status === "at-risk"
                    ? "badge-warning"
                    : "badge-danger";
              const barColor =
                stat.status === "on-track"
                  ? "green"
                  : stat.status === "at-risk"
                    ? "yellow"
                    : "red";
              return (
                <tr key={stat.name}>
                  <td>{stat.name}</td>
                  <td>
                    <span className="badge badge-primary">{stat.role}</span>
                  </td>
                  <td>
                    <span className={`badge ${badgeClass}`}>
                      {stat.status === "on-track"
                        ? "On Track"
                        : stat.status === "at-risk"
                          ? "At Risk"
                          : "Behind"}
                    </span>
                  </td>
                  <td style={{ minWidth: 180 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <div className="progress-bar" style={{ flex: 1 }}>
                        <div
                          className={`progress-bar-fill ${barColor}`}
                          style={{ width: `${stat.progress}%` }}
                        />
                      </div>
                      <span style={{ fontSize: "0.8rem", fontWeight: 600, minWidth: 35 }}>
                        {stat.progress}%
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
