import { Link } from "react-router-dom";

const features = [
  {
    title: "Role-Based Checklists",
    description:
      "Dynamic task lists that adapt to role, seniority, team, and tech stack.",
    icon: "✅",
  },
  {
    title: "Codebase Walkthroughs",
    description:
      "Guided tours of relevant repositories with architecture context.",
    icon: "🗂️",
  },
  {
    title: "Access Provisioning",
    description:
      "Track every tool and system access request from pending to granted.",
    icon: "🔑",
  },
  {
    title: "Mentor Matching",
    description:
      "Algorithm-driven pairing based on skills, availability, and proximity.",
    icon: "🤝",
  },
  {
    title: "30/60/90 Milestones",
    description:
      "Structured checkpoints with clear success criteria and progress tracking.",
    icon: "🎯",
  },
  {
    title: "Knowledge Quizzes",
    description:
      "Validate understanding at each phase with auto-graded assessments.",
    icon: "📝",
  },
  {
    title: "Productivity Dashboard",
    description:
      "Time-to-first-commit, checklist completion rates, and trend analysis.",
    icon: "📈",
  },
];

const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    period: "",
    description: "For small teams getting started",
    features: [
      "Up to 5 new hires",
      "Basic checklist templates",
      "Access tracking",
      "Community support",
    ],
    featured: false,
  },
  {
    name: "Team",
    price: "$29",
    period: "/user/mo",
    description: "For growing engineering teams",
    features: [
      "Unlimited new hires",
      "Custom checklist templates",
      "Mentor matching algorithm",
      "30/60/90 milestone tracking",
      "Knowledge quizzes",
      "Productivity dashboard",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations",
    features: [
      "Everything in Team",
      "SSO / SAML integration",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantees",
      "Audit logs & compliance",
    ],
    featured: false,
  },
];

export default function LandingPage() {
  return (
    <div className="landing">
      <a href="#main-content" className="skip-to-content">Skip to content</a>
      {/* Nav */}
      <nav className="landing-nav">
        <div className="landing-logo">
          <div className="landing-logo-icon">OQ</div>
          OnboardIQ
        </div>
        <ul className="landing-nav-links">
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>

      {/* Hero */}
      <header id="main-content" className="hero">
        <h1>Onboard engineers in weeks, not months</h1>
        <p className="tagline">
          Structured, measurable, and personalized onboarding for engineering
          teams.
        </p>
        <p className="subtitle">
          Role-based checklists, codebase walkthroughs, mentor matching, and
          real-time productivity metrics -- all in one platform.
        </p>
        <div className="hero-buttons">
          <Link to="/dashboard">
            <button className="cta-button" type="button">
              Get Started
            </button>
          </Link>
          <a href="#features">
            <button className="cta-button-secondary" type="button">
              See Features
            </button>
          </a>
        </div>
      </header>

      {/* Features */}
      <section className="features" id="features">
        <h2>Everything you need for engineering onboarding</h2>
        <p>
          Seven integrated tools that replace scattered docs, tribal knowledge,
          and manual tracking.
        </p>
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

      {/* Metrics callout */}
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
          <span className="metric-value">2.5x</span>
          <span className="metric-label">Faster to full productivity</span>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing-section" id="pricing">
        <h2>Simple, transparent pricing</h2>
        <div className="pricing-grid">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`pricing-card${tier.featured ? " featured" : ""}`}
            >
              {tier.featured && (
                <span className="pricing-badge">Most Popular</span>
              )}
              <h3>{tier.name}</h3>
              <div className="pricing-price">
                {tier.price}
                {tier.period && <span>{tier.period}</span>}
              </div>
              <p className="pricing-desc">{tier.description}</p>
              <ul className="pricing-features">
                {tier.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <button
                className={
                  tier.featured ? "cta-button" : "cta-button-secondary"
                }
                type="button"
                style={{ width: "100%", textAlign: "center" }}
              >
                {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <ul className="footer-links">
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#!">Documentation</a>
          </li>
          <li>
            <a href="#!">Privacy</a>
          </li>
          <li>
            <a href="#!">Terms</a>
          </li>
        </ul>
        <p>&copy; 2026 OnboardIQ. All rights reserved.</p>
      </footer>
    </div>
  );
}
