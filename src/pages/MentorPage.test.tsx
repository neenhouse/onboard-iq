import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import MentorPage from "./MentorPage";

describe("MentorPage", () => {
  function renderPage() {
    return render(
      <MemoryRouter>
        <MentorPage />
      </MemoryRouter>
    );
  }

  it("renders the page heading", () => {
    renderPage();
    expect(screen.getByText("Mentor Matching")).toBeInTheDocument();
  });

  it("renders the new hire selector", () => {
    renderPage();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("renders mentor cards with match scores", () => {
    renderPage();
    const matchScoreLabels = screen.getAllByText("Match Score");
    expect(matchScoreLabels.length).toBeGreaterThan(0);
  });

  it("shows the Assigned Mentor badge for the current hire's mentor", () => {
    renderPage();
    expect(screen.getByText("Assigned Mentor")).toBeInTheDocument();
  });
});
