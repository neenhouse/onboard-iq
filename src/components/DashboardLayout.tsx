import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { to: "/dashboard", label: "Overview", icon: "OV", end: true },
  { to: "/dashboard/checklists", label: "Checklists", icon: "CL" },
  { to: "/dashboard/walkthrough", label: "Walkthrough", icon: "CW" },
  { to: "/dashboard/access", label: "Access", icon: "AP" },
  { to: "/dashboard/mentors", label: "Mentors", icon: "MM" },
  { to: "/dashboard/milestones", label: "Milestones", icon: "MT" },
  { to: "/dashboard/quizzes", label: "Quizzes", icon: "KQ" },
  { to: "/dashboard/productivity", label: "Productivity", icon: "TD" },
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
