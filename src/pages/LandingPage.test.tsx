import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import LandingPage from "./LandingPage";

describe("LandingPage", () => {
  function renderLanding() {
    return render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );
  }

  it("renders the hero headline", () => {
    renderLanding();
    expect(
      screen.getByText("Onboard engineers in weeks, not months")
    ).toBeInTheDocument();
  });

  it("renders all 7 feature cards", () => {
    renderLanding();
    expect(screen.getByText("Role-Based Checklists")).toBeInTheDocument();
    expect(screen.getByText("Codebase Walkthroughs")).toBeInTheDocument();
    expect(screen.getByText("Access Provisioning")).toBeInTheDocument();
    expect(screen.getByText("Mentor Matching")).toBeInTheDocument();
    expect(screen.getByText("30/60/90 Milestones")).toBeInTheDocument();
    expect(screen.getByText("Knowledge Quizzes")).toBeInTheDocument();
    expect(screen.getByText("Productivity Dashboard")).toBeInTheDocument();
  });

  it("renders three pricing tiers", () => {
    renderLanding();
    expect(screen.getByText("Free")).toBeInTheDocument();
    expect(screen.getByText("Team")).toBeInTheDocument();
    expect(screen.getByText("Enterprise")).toBeInTheDocument();
  });

  it("renders the Get Started CTA", () => {
    renderLanding();
    const buttons = screen.getAllByText("Get Started");
    expect(buttons.length).toBeGreaterThanOrEqual(1);
  });

  it("renders metric callouts", () => {
    renderLanding();
    expect(screen.getByText("40%")).toBeInTheDocument();
    expect(screen.getByText("30%")).toBeInTheDocument();
    expect(screen.getByText("2.5x")).toBeInTheDocument();
  });
});
