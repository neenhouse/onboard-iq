import { useState } from "react";
import { newHires, getAccessToolsForHire } from "../lib/mock-data";

export default function AccessPage() {
  const [selectedHire, setSelectedHire] = useState(newHires[0]!.id);
  const hire = newHires.find((h) => h.id === selectedHire)!;
  const tools = getAccessToolsForHire(selectedHire);

  const granted = tools.filter((t) => t.status === "granted").length;
  const pending = tools.filter((t) => t.status === "pending").length;
  const notStarted = tools.filter((t) => t.status === "not-started").length;

  function statusBadge(status: string) {
    switch (status) {
      case "granted":
        return <span className="badge badge-success">Granted</span>;
      case "pending":
        return <span className="badge badge-warning">Pending</span>;
      default:
        return <span className="badge badge-muted">Not Started</span>;
    }
  }

  return (
    <div>
      <div className="page-header">
        <h2>Access Provisioning</h2>
        <p>
          Track tool and system access requests for each new hire.
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
      </div>

      {/* Summary stats */}
      <div className="stat-grid">
        <div className="stat-card">
          <div className="stat-card-label">Granted</div>
          <div className="stat-card-value" style={{ color: "var(--color-success)" }}>
            {granted}
          </div>
          <div className="stat-card-sub">Tools provisioned</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-label">Pending</div>
          <div className="stat-card-value" style={{ color: "var(--color-warning)" }}>
            {pending}
          </div>
          <div className="stat-card-sub">Awaiting approval</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-label">Not Started</div>
          <div className="stat-card-value" style={{ color: "var(--color-text-muted)" }}>
            {notStarted}
          </div>
          <div className="stat-card-sub">Not yet requested</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-label">Total Tools</div>
          <div className="stat-card-value">{tools.length}</div>
          <div className="stat-card-sub">For {hire.role} role</div>
        </div>
      </div>

      {/* Access table */}
      <div className="card">
        <div className="card-header">
          <h3>Access Status for {hire.name}</h3>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Tool</th>
              <th>Status</th>
              <th>Requested</th>
              <th>Granted</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool) => (
              <tr key={tool.id}>
                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "var(--radius-sm)",
                        background: "var(--color-primary-muted)",
                        color: "var(--color-primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        fontSize: "0.7rem",
                        flexShrink: 0,
                      }}
                    >
                      {tool.icon}
                    </div>
                    <strong>{tool.name}</strong>
                  </div>
                </td>
                <td>{statusBadge(tool.status)}</td>
                <td style={{ color: "var(--color-text-muted)", fontSize: "0.85rem" }}>
                  {tool.requestedDate ?? "—"}
                </td>
                <td style={{ color: "var(--color-text-muted)", fontSize: "0.85rem" }}>
                  {tool.grantedDate ?? "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
