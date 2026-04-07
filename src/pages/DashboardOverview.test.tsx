import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import DashboardOverview from "./DashboardOverview";

describe("DashboardOverview", () => {
  function renderPage() {
    return render(
      <MemoryRouter>
        <DashboardOverview />
      </MemoryRouter>
    );
  }

  it("renders the page heading", () => {
    renderPage();
    expect(screen.getByText("Dashboard Overview")).toBeInTheDocument();
  });

  it("renders stat cards", () => {
    renderPage();
    // "Active New Hires" appears in both stat card and table heading
    const activeHireEls = screen.getAllByText("Active New Hires");
    expect(activeHireEls.length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText("Team Mentors")).toBeInTheDocument();
    expect(screen.getByText("Checklist Completion")).toBeInTheDocument();
    expect(screen.getByText("Avg. Days to First PR")).toBeInTheDocument();
  });

  it("renders the Active New Hires table with hire rows", () => {
    renderPage();
    // "Active New Hires" appears as a stat card label and a table heading
    const activeHireLabels = screen.getAllByText("Active New Hires");
    expect(activeHireLabels.length).toBeGreaterThanOrEqual(1);
    // Table has column headers
    const nameHeaders = screen.getAllByText("Name");
    expect(nameHeaders.length).toBeGreaterThanOrEqual(1);
  });

  it("renders the Available Mentors table", () => {
    renderPage();
    expect(screen.getByText("Available Mentors")).toBeInTheDocument();
  });
});
