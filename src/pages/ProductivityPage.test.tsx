import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import ProductivityPage from "./ProductivityPage";

describe("ProductivityPage", () => {
  function renderPage() {
    return render(
      <MemoryRouter>
        <ProductivityPage />
      </MemoryRouter>
    );
  }

  it("renders the page heading", () => {
    renderPage();
    expect(
      screen.getByText("Time-to-Productivity Dashboard")
    ).toBeInTheDocument();
  });

  it("renders key metric stat cards", () => {
    renderPage();
    expect(screen.getByText("Avg. Days to First PR")).toBeInTheDocument();
    expect(screen.getByText("Avg. Days to First Deploy")).toBeInTheDocument();
    expect(screen.getByText("Avg. Days to First Review")).toBeInTheDocument();
    expect(screen.getByText("Active New Hires")).toBeInTheDocument();
  });

  it("renders checklist completion table", () => {
    renderPage();
    expect(screen.getByText("Checklist Completion by Hire")).toBeInTheDocument();
  });

  it("renders 30-day milestone status table", () => {
    renderPage();
    expect(screen.getByText("30-Day Milestone Status")).toBeInTheDocument();
  });
});
