import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import AccessPage from "./AccessPage";

describe("AccessPage", () => {
  function renderPage() {
    return render(
      <MemoryRouter>
        <AccessPage />
      </MemoryRouter>
    );
  }

  it("renders the page heading", () => {
    renderPage();
    expect(screen.getByText("Access Provisioning")).toBeInTheDocument();
  });

  it("renders tool names in the table", () => {
    renderPage();
    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("Slack")).toBeInTheDocument();
    expect(screen.getByText("Jira")).toBeInTheDocument();
    expect(screen.getByText("AWS Console")).toBeInTheDocument();
    expect(screen.getByText("Datadog")).toBeInTheDocument();
  });

  it("shows status badges", () => {
    renderPage();
    const granted = screen.getAllByText("Granted");
    const pending = screen.getAllByText("Pending");
    expect(granted.length).toBeGreaterThan(0);
    expect(pending.length).toBeGreaterThan(0);
  });

  it("shows summary stat cards", () => {
    renderPage();
    expect(screen.getByText("Tools provisioned")).toBeInTheDocument();
    expect(screen.getByText("Awaiting approval")).toBeInTheDocument();
    expect(screen.getByText("Not yet requested")).toBeInTheDocument();
  });
});
