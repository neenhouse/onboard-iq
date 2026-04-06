import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { to: "/dashboard", label: "Overview", icon: "⊞", end: true },
  { to: "/dashboard/checklists", label: "Checklists", icon: "✓" },
  { to: "/dashboard/walkthrough", label: "Walkthrough", icon: "⇢" },
  { to: "/dashboard/access", label: "Access", icon: "⊙" },
  { to: "/dashboard/mentors", label: "Mentors", icon: "⇌" },
  { to: "/dashboard/milestones", label: "Milestones", icon: "◎" },
  { to: "/dashboard/quizzes", label: "Quizzes", icon: "?" },
  { to: "/dashboard/productivity", label: "Productivity", icon: "↑" },
];

export default function DashboardLayout() {
  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="sidebar-brand-icon">OQ</div>
          <h1>OnboardIQ</h1>
        </div>
        <ul className="sidebar-nav">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <span className="sidebar-nav-icon">{item.icon}</span>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
