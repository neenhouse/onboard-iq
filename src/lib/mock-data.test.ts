import { describe, it, expect } from "vitest";
import {
  teamMembers,
  newHires,
  checklistTemplates,
  getAccessToolsForHire,
  getMilestonesForHire,
  getMentorMatches,
  quizzes,
  productivityMetrics,
} from "./mock-data";

describe("mock-data", () => {
  it("has 5 team members", () => {
    expect(teamMembers).toHaveLength(5);
  });

  it("has 3 new hires", () => {
    expect(newHires).toHaveLength(3);
  });

  it("has checklist templates for all 4 roles", () => {
    const roles = checklistTemplates.map((t) => t.role);
    expect(roles).toContain("Frontend");
    expect(roles).toContain("Backend");
    expect(roles).toContain("Fullstack");
    expect(roles).toContain("DevOps");
  });

  it("each checklist template has at least 15 items", () => {
    for (const template of checklistTemplates) {
      expect(template.items.length).toBeGreaterThanOrEqual(15);
    }
  });

  it("returns access tools for each new hire", () => {
    for (const hire of newHires) {
      const tools = getAccessToolsForHire(hire.id);
      expect(tools.length).toBeGreaterThan(0);
      // Each tool has required fields
      for (const tool of tools) {
        expect(tool.name).toBeTruthy();
        expect(["granted", "pending", "not-started"]).toContain(tool.status);
      }
    }
  });

  it("returns milestones with 3 phases per hire", () => {
    for (const hire of newHires) {
      const milestones = getMilestonesForHire(hire.id);
      expect(milestones).toHaveLength(3);
      expect(milestones.map((m) => m.phase)).toEqual([
        "30-day",
        "60-day",
        "90-day",
      ]);
    }
  });

  it("milestone statuses include on-track, at-risk, and behind", () => {
    const allStatuses = new Set<string>();
    for (const hire of newHires) {
      for (const m of getMilestonesForHire(hire.id)) {
        allStatuses.add(m.status);
      }
    }
    expect(allStatuses.has("on-track")).toBe(true);
    expect(allStatuses.has("at-risk")).toBe(true);
    expect(allStatuses.has("behind")).toBe(true);
  });

  it("returns mentor matches sorted by match score descending", () => {
    for (const hire of newHires) {
      const matches = getMentorMatches(hire.id);
      expect(matches.length).toBe(5);
      for (let i = 1; i < matches.length; i++) {
        expect(matches[i]!.matchScore).toBeLessThanOrEqual(
          matches[i - 1]!.matchScore
        );
      }
    }
  });

  it("has 3 quizzes with at least 5 questions each", () => {
    expect(quizzes).toHaveLength(3);
    for (const quiz of quizzes) {
      expect(quiz.questions.length).toBeGreaterThanOrEqual(5);
      // Each question has correct index within options range
      for (const q of quiz.questions) {
        expect(q.correctIndex).toBeGreaterThanOrEqual(0);
        expect(q.correctIndex).toBeLessThan(q.options.length);
      }
    }
  });

  it("has 3 productivity metrics with data for all hires", () => {
    expect(productivityMetrics).toHaveLength(3);
    for (const metric of productivityMetrics) {
      expect(metric.hires).toHaveLength(3);
      expect(metric.averageDays).toBeGreaterThan(0);
    }
  });
});
