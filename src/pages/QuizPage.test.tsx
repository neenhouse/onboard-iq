import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import QuizPage from "./QuizPage";

describe("QuizPage", () => {
  function renderPage() {
    return render(
      <MemoryRouter>
        <QuizPage />
      </MemoryRouter>
    );
  }

  it("renders quiz list view initially", () => {
    renderPage();
    expect(screen.getByText("Knowledge Check Quizzes")).toBeInTheDocument();
    expect(screen.getByText("Company Tech Stack")).toBeInTheDocument();
    expect(screen.getByText("Development Processes")).toBeInTheDocument();
    expect(screen.getByText("Security and Compliance")).toBeInTheDocument();
  });

  it("clicking Start Quiz enters quiz-taking mode", () => {
    renderPage();
    const startButtons = screen.getAllByText("Start Quiz");
    fireEvent.click(startButtons[0]!);
    // Should show first quiz question
    expect(
      screen.getByText("1. Which frontend framework does OnboardIQ use?")
    ).toBeInTheDocument();
  });

  it("shows quiz options that are selectable", () => {
    renderPage();
    const startButtons = screen.getAllByText("Start Quiz");
    fireEvent.click(startButtons[0]!);
    expect(screen.getByText("React 19")).toBeInTheDocument();
    expect(screen.getByText("Angular 17")).toBeInTheDocument();
  });
});
