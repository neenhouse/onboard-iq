import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import MilestonePage from "./MilestonePage";

describe("MilestonePage", () => {
  function renderPage() {
    return render(
      <MemoryRouter>
        <MilestonePage />
      </MemoryRouter>
    );
  }

  it("renders the page heading", () => {
    renderPage();
    expect(screen.getByText("Milestone Tracker (30/60/90)")).toBeInTheDocument();
  });

  it("renders the new hire selector", () => {
    renderPage();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("renders the 30/60/90 day phases", () => {
    renderPage();
    expect(screen.getByText("First 30 Days")).toBeInTheDocument();
    expect(screen.getByText("Days 31-60")).toBeInTheDocument();
    expect(screen.getByText("Days 61-90")).toBeInTheDocument();
  });

  it("renders progress bars for each phase", () => {
    renderPage();
    const progressBars = document.querySelectorAll(".progress-bar");
    expect(progressBars.length).toBeGreaterThan(0);
  });
});
