# OnboardIQ -- Product Requirements Document

## Overview

OnboardIQ is an engineering onboarding platform that replaces scattered tools and tribal knowledge with a unified, role-aware, measurable system. This PRD defines 8 core features for the initial release.

---

## Feature 1: Landing Page

### Summary
Public marketing page that communicates the value proposition and drives sign-ups.

### Requirements
- **LP-1**: Hero section with headline, subheadline, and primary CTA ("Get Started").
- **LP-2**: Feature grid showcasing all 7 platform capabilities with icons and short descriptions.
- **LP-3**: Social proof section with testimonial placeholders and metric callouts (e.g., "40% faster first commit").
- **LP-4**: Pricing section with Free, Team, and Enterprise tiers.
- **LP-5**: Footer with navigation links, legal links, and company info.
- **LP-6**: Fully responsive -- mobile-first design.
- **LP-7**: Lighthouse performance score above 90.
- **LP-8**: SEO meta tags and Open Graph tags for social sharing.

### Acceptance Criteria
- Page loads in under 2 seconds on 3G.
- All CTAs link to sign-up flow.
- Passes WCAG 2.1 AA accessibility audit.

---

## Feature 2: Role-Based Checklist Engine

### Summary
Dynamic checklist system that generates personalized onboarding task lists based on role, team, seniority, and tech stack.

### Requirements
- **CL-1**: Admin interface to create and manage checklist templates.
- **CL-2**: Template variables: role (frontend, backend, fullstack, infra, data, mobile), seniority (junior, mid, senior, staff), team, tech stack tags.
- **CL-3**: Checklist items support: title, description, due date (relative to start date), category, dependencies, assigned owner, verification method.
- **CL-4**: Auto-generate personalized checklist when a new hire is added to the system.
- **CL-5**: New hire can mark items complete; some items require manager verification.
- **CL-6**: Progress bar and completion percentage visible to new hire and manager.
- **CL-7**: Overdue items highlighted with escalation notifications.
- **CL-8**: Bulk operations: assign checklist to cohort, reset checklist, export as CSV.

### Acceptance Criteria
- A new hire with role=backend, seniority=mid sees only relevant tasks.
- Manager can verify completion of gated items.
- Overdue items trigger email notification after 48 hours.

---

## Feature 3: Codebase Walkthrough Generator

### Summary
Automated tool that generates guided tours of relevant codebases, highlighting architecture, key files, and conventions for each role.

### Requirements
- **CW-1**: Connect to GitHub/GitLab repositories via OAuth.
- **CW-2**: Analyze repository structure and generate a dependency graph.
- **CW-3**: Create role-specific walkthrough paths (e.g., frontend engineer sees UI components first, backend sees API routes first).
- **CW-4**: Each walkthrough step includes: file path, code snippet, explanation, and "why this matters" context.
- **CW-5**: Interactive mode: new hire navigates steps sequentially with progress tracking.
- **CW-6**: Admin can customize walkthrough by adding/removing/reordering steps.
- **CW-7**: AI-powered summaries of complex files using LLM integration.
- **CW-8**: Walkthrough completion feeds into checklist progress.

### Acceptance Criteria
- Walkthrough generates within 60 seconds for a repository under 10k files.
- New hire can complete a walkthrough and see it reflected in their checklist.
- Admin can edit any generated walkthrough step.

---

## Feature 4: Access Provisioning Tracker

### Summary
Centralized dashboard showing the status of all tool and system access requests for each new hire.

### Requirements
- **AP-1**: Predefined access catalog: GitHub org, CI/CD, cloud console (AWS/GCP), monitoring (Datadog, Grafana), communication (Slack channels), documentation (Confluence, Notion), IDE licenses, VPN.
- **AP-2**: Role-based access templates -- auto-request correct tools based on role and team.
- **AP-3**: Status tracking per tool: Pending, In Progress, Granted, Blocked, Revoked.
- **AP-4**: Integration hooks for IT ticketing systems (Jira Service Management, ServiceNow) -- webhook-based.
- **AP-5**: New hire dashboard: "What I have" vs "What I'm waiting for."
- **AP-6**: Manager dashboard: aggregate view of team access status.
- **AP-7**: SLA tracking: flag access requests exceeding 24-hour target.
- **AP-8**: Audit log of all provisioning actions with timestamps and actors.

### Acceptance Criteria
- New hire sees real-time status of all pending access requests.
- SLA violations surface in manager dashboard within 1 hour.
- Audit log is immutable and exportable.

---

## Feature 5: Mentor Matching

### Summary
Algorithm-driven mentor assignment that pairs new hires with experienced engineers based on skills, availability, team proximity, and preferences.

### Requirements
- **MM-1**: Mentor profile: skills, availability (hours/week), max mentees, team, preferred communication style.
- **MM-2**: Matching algorithm considers: skill overlap, team proximity, timezone, workload balance, new hire preferences.
- **MM-3**: New hire can express preferences (e.g., "prefer someone on my team" or "prefer cross-team perspective").
- **MM-4**: Manager can override or adjust matches.
- **MM-5**: Mentor/mentee dashboard: shared goals, meeting cadence, conversation log.
- **MM-6**: Automated meeting scheduling suggestions based on calendar availability.
- **MM-7**: Feedback mechanism: both parties rate the match at 30/60/90 days.
- **MM-8**: Analytics: mentor utilization, match satisfaction scores, mentorship impact on time-to-productivity.

### Acceptance Criteria
- Matching completes within 5 seconds of new hire creation.
- Match satisfaction score above 4.0/5.0 average.
- Manager can reassign mentor with one click.

---

## Feature 6: Milestone Tracker (30/60/90 Day)

### Summary
Structured milestone framework with clear success criteria at 30, 60, and 90 day checkpoints.

### Requirements
- **MT-1**: Default milestone templates per phase:
  - **30 days**: Environment setup, codebase familiarity, first PR merged, team introductions complete.
  - **60 days**: Independent task completion, code review participation, architecture understanding.
  - **90 days**: Feature ownership, on-call readiness, mentoring newer hires.
- **MT-2**: Custom milestones: managers can add role-specific or team-specific milestones.
- **MT-3**: Each milestone has: title, description, success criteria, evidence requirements, reviewer.
- **MT-4**: Self-assessment + manager assessment at each checkpoint.
- **MT-5**: Traffic light status: On Track (green), At Risk (yellow), Behind (red).
- **MT-6**: Automated checkpoint reminders at day 25, 55, and 85.
- **MT-7**: Retrospective prompts at each checkpoint for continuous improvement.
- **MT-8**: Historical comparison: how does this hire's progress compare to role average.

### Acceptance Criteria
- New hire sees their milestone timeline on day 1.
- Manager receives automated reminder 5 days before each checkpoint.
- Status updates are visible in the time-to-productivity dashboard.

---

## Feature 7: Knowledge Check Quizzes

### Summary
Short assessments that validate new hire understanding at key onboarding phases.

### Requirements
- **KQ-1**: Quiz builder: multiple choice, true/false, short answer, code snippet questions.
- **KQ-2**: Quizzes tied to checklist phases (e.g., "Complete after codebase walkthrough").
- **KQ-3**: Auto-grading for objective questions; manager review for subjective answers.
- **KQ-4**: Passing threshold configurable per quiz (default 80%).
- **KQ-5**: Retry policy: configurable max attempts with cooldown period.
- **KQ-6**: Results visible to new hire and manager with per-question breakdown.
- **KQ-7**: Knowledge gap identification: flag areas where multiple hires struggle.
- **KQ-8**: Quiz analytics: pass rates, average scores, time to complete, common wrong answers.

### Acceptance Criteria
- Quiz creation takes under 5 minutes for 10 questions.
- Failed quiz blocks checklist progression (if configured).
- Knowledge gap report generated weekly for managers.

---

## Feature 8: Time-to-Productivity Dashboard

### Summary
Analytics dashboard providing aggregate and per-hire visibility into onboarding effectiveness.

### Requirements
- **TP-1**: Key metrics: time to first commit, time to first PR merged, time to first production deploy, checklist completion rate, quiz scores, milestone status.
- **TP-2**: Cohort comparison: compare onboarding cohorts over time.
- **TP-3**: Role-based filtering: view metrics by role, seniority, team, or manager.
- **TP-4**: Individual drill-down: detailed timeline for a specific new hire.
- **TP-5**: Trend lines: are we getting better or worse at onboarding over time.
- **TP-6**: Bottleneck identification: which checklist items or access requests cause the most delays.
- **TP-7**: Export: CSV and PDF report generation.
- **TP-8**: Configurable date ranges and comparison periods.

### Acceptance Criteria
- Dashboard loads in under 3 seconds with 1000+ hires in the system.
- Metrics update in real-time as new hires complete tasks.
- Export generates correctly formatted PDF with charts.

---

## Non-Functional Requirements

- **Performance**: All pages load in under 2 seconds. API responses under 200ms (p95).
- **Accessibility**: WCAG 2.1 AA compliance on all pages.
- **Security**: Role-based access control. SOC 2 Type II alignment.
- **Scalability**: Support 10,000 concurrent users.
- **Data Retention**: Onboarding data retained for 3 years. Configurable per org.
- **Uptime**: 99.9% availability SLA.
