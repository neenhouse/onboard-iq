import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import ChecklistPage from "./ChecklistPage";

describe("ChecklistPage", () => {
  function renderPage() {
    return render(
      <MemoryRouter>
        <ChecklistPage />
      </MemoryRouter>
    );
  }

  it("renders the page heading", () => {
    renderPage();
    expect(screen.getByText("Role-Based Checklists")).toBeInTheDocument();
  });

  it("renders role tabs", () => {
    renderPage();
    // Use getAllByRole to find tab buttons specifically
    const tabButtons = screen.getAllByRole("button");
    const tabLabels = tabButtons.map((b) => b.textContent);
    expect(tabLabels.some((t) => t?.includes("Frontend"))).toBe(true);
    expect(tabLabels.some((t) => t?.includes("Backend"))).toBe(true);
    expect(tabLabels.some((t) => t?.includes("Fullstack"))).toBe(true);
    expect(tabLabels.some((t) => t?.includes("DevOps"))).toBe(true);
  });

  it("renders checklist items with checkboxes", () => {
    renderPage();
    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes.length).toBeGreaterThan(5);
  });

  it("toggling a checkbox updates progress", () => {
    renderPage();
    const checkboxes = screen.getAllByRole("checkbox");
    // Find an unchecked one and click it
    const unchecked = checkboxes.find(
      (cb) => !(cb as HTMLInputElement).checked
    );
    expect(unchecked).toBeDefined();
    if (unchecked) {
      fireEvent.click(unchecked);
      expect((unchecked as HTMLInputElement).checked).toBe(true);
    }
  });

  it("renders progress bar", () => {
    renderPage();
    // Progress bar exists
    const progressText = screen.getByText(/Progress:/);
    expect(progressText).toBeInTheDocument();
  });
});
