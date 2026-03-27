import "../App.css";

const features = [
  {
    title: "Role-Based Checklists",
    description:
      "Dynamic task lists that adapt to role, seniority, team, and tech stack.",
    icon: "\u2611",
  },
  {
    title: "Codebase Walkthroughs",
    description:
      "Guided tours of relevant repositories with architecture context.",
    icon: "\u{1F4BB}",
  },
  {
    title: "Access Provisioning",
    description:
      "Track every tool and system access request from pending to granted.",
    icon: "\u{1F511}",
  },
  {
    title: "Mentor Matching",
    description:
      "Algorithm-driven pairing based on skills, availability, and team proximity.",
    icon: "\u{1F91D}",
  },
  {
    title: "30/60/90 Milestones",
    description:
      "Structured checkpoints with clear success criteria and progress tracking.",
    icon: "\u{1F3AF}",
  },
  {
    title: "Knowledge Quizzes",
    description:
      "Validate understanding at each phase with auto-graded assessments.",
    icon: "\u{1F4DD}",
  },
  {
    title: "Productivity Metrics",
    description:
      "Time-to-first-commit, checklist completion rates, and trend analysis.",
    icon: "\u{1F4CA}",
  },
];

export default function LandingPage() {
  return (
    <div className="landing">
      <header className="hero">
        <h1>OnboardIQ</h1>
        <p className="tagline">
          Reduce engineering time-to-productivity from months to weeks.
        </p>
        <p className="subtitle">
          Structured, measurable, and personalized onboarding for engineering
          teams.
        </p>
        <button className="cta-button" type="button">
          Get Started
        </button>
      </header>

      <section className="features">
        <h2>Everything you need for engineering onboarding</h2>
        <div className="feature-grid">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="metrics-callout">
        <div className="metric">
          <span className="metric-value">40%</span>
          <span className="metric-label">Faster first commit</span>
        </div>
        <div className="metric">
          <span className="metric-value">30%</span>
          <span className="metric-label">Faster first deploy</span>
        </div>
        <div className="metric">
          <span className="metric-value">90%</span>
          <span className="metric-label">Checklist completion at 30 days</span>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2026 OnboardIQ. All rights reserved.</p>
      </footer>
    </div>
  );
}
