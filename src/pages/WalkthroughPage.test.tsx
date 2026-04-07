import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import WalkthroughPage from "./WalkthroughPage";

describe("WalkthroughPage", () => {
  function renderPage() {
    return render(
      <MemoryRouter>
        <WalkthroughPage />
      </MemoryRouter>
    );
  }

  it("renders the page heading", () => {
    renderPage();
    expect(screen.getByText("Codebase Walkthrough")).toBeInTheDocument();
  });

  it("renders the new hire selector", () => {
    renderPage();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("renders progress information", () => {
    renderPage();
    expect(screen.getByText(/stops completed/)).toBeInTheDocument();
  });

  it("renders the first walkthrough step", () => {
    renderPage();
    expect(screen.getByText("Application Entry Point")).toBeInTheDocument();
  });

  it("Mark Complete button advances to the next step", () => {
    renderPage();
    const markCompleteBtn = screen.getByText("Mark Complete & Continue");
    fireEvent.click(markCompleteBtn);
    expect(screen.getByText("Router and Layout Shell")).toBeInTheDocument();
  });
});
