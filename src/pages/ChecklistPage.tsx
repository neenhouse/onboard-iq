import { useState, useMemo } from "react";
import { newHires, checklistTemplates } from "../lib/mock-data";
import type { ChecklistItem } from "../lib/types";

type Tab = "Frontend" | "Backend" | "Fullstack" | "DevOps";

export default function ChecklistPage() {
  const [selectedHire, setSelectedHire] = useState(newHires[0]!.id);
  const [activeTab, setActiveTab] = useState<Tab>(
    newHires[0]!.role as Tab
  );
  const [items, setItems] = useState<Record<string, ChecklistItem[]>>(() => {
    const map: Record<string, ChecklistItem[]> = {};
    for (const t of checklistTemplates) {
      map[t.role] = t.items.map((i) => ({ ...i }));
    }
    return map;
  });

  const hire = newHires.find((h) => h.id === selectedHire);
  const currentItems = useMemo(() => items[activeTab] ?? [], [items, activeTab]);

  const completedCount = currentItems.filter((i) => i.completed).length;
  const totalCount = currentItems.length;
  const progressPct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  function toggleItem(itemId: string) {
    setItems((prev) => ({
      ...prev,
      [activeTab]: (prev[activeTab] ?? []).map((i) =>
        i.id === itemId ? { ...i, completed: !i.completed } : i
      ),
    }));
  }

  // Group by category
  const categories = useMemo(() => {
    const cats = new Map<string, ChecklistItem[]>();
    for (const item of currentItems) {
      const existing = cats.get(item.category) ?? [];
      existing.push(item);
      cats.set(item.category, existing);
    }
    return cats;
  }, [currentItems]);

  return (
    <div>
      <div className="page-header">
        <h2>Role-Based Checklists</h2>
        <p>
          Personalized onboarding task lists based on role, seniority, and team.
        </p>
      </div>

      {/* Hire selector */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
        <label style={{ fontSize: "0.875rem", color: "var(--color-text-muted)" }}>
          New Hire:
        </label>
        <select
          className="select-control"
          value={selectedHire}
          onChange={(e) => {
            setSelectedHire(e.target.value);
            const h = newHires.find((n) => n.id === e.target.value);
            if (h) setActiveTab(h.role as Tab);
          }}
        >
          {newHires.map((h) => (
            <option key={h.id} value={h.id}>
              {h.name} ({h.role})
            </option>
          ))}
        </select>
        {hire && (
          <span className="badge badge-primary">{hire.role} - {hire.seniority}</span>
        )}
      </div>

      {/* Tabs for role templates */}
      <div className="tab-list">
        {(["Frontend", "Backend", "Fullstack", "DevOps"] as Tab[]).map((tab) => (
          <button
            key={tab}
            type="button"
            className={`tab-button${activeTab === tab ? " active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab} ({(items[tab] ?? []).length})
          </button>
        ))}
      </div>

      {/* Progress */}
      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
          <span style={{ fontSize: "0.9rem", fontWeight: 600 }}>
            Progress: {completedCount} of {totalCount} items
          </span>
          <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--color-primary)" }}>
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

      {/* Checklist grouped by category */}
      {Array.from(categories.entries()).map(([category, catItems]) => (
        <div key={category} className="card" style={{ marginBottom: "1rem" }}>
          <div className="card-header">
            <h3>{category}</h3>
            <span className="badge badge-muted">
              {catItems.filter((i) => i.completed).length}/{catItems.length}
            </span>
          </div>
          {catItems.map((item) => (
            <div key={item.id} className="checklist-item">
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleItem(item.id)}
                aria-label={`Mark "${item.title}" as ${item.completed ? "incomplete" : "complete"}`}
              />
              <div className="checklist-item-content">
                <div className={`checklist-item-title${item.completed ? " completed" : ""}`}>
                  {item.title}
                </div>
                <div className="checklist-item-meta">
                  {item.description} &middot; Due day {item.dueDay}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
