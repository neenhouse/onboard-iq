# OnboardIQ -- Agent Instructions

## Project Context

OnboardIQ is an engineering onboarding platform built with React 19 + Vite 7 + Cloudflare Workers. The platform provides role-based checklists, codebase walkthroughs, access provisioning tracking, mentor matching, milestone tracking, knowledge check quizzes, and time-to-productivity metrics.

## Conventions

### Code Style
- TypeScript strict mode -- no `any` types without justification.
- Functional React components only -- no class components.
- Named exports preferred over default exports.
- CSS custom properties for all design tokens.
- All API responses follow `{ data, error, meta }` envelope pattern.

### File Naming
- Components: `PascalCase.tsx`
- Hooks: `useCamelCase.ts`
- Utilities: `camelCase.ts`
- Tests: `ComponentName.test.tsx` (co-located with source)
- CSS: `component-name.css` (co-located with component)

### Git
- Conventional commits: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`
- Branch naming: `feat/short-description`, `fix/short-description`
- PRs require passing CI before merge.

### API Design
- RESTful routes under `/api/v1/`
- All endpoints return JSON with consistent error format.
- Authentication via session tokens stored in HttpOnly cookies.

## Project Structure

```
src/
  pages/              Route-level components
    LandingPage.tsx
    DashboardPage.tsx
    ChecklistPage.tsx
    WalkthroughPage.tsx
    MilestonePage.tsx
    QuizPage.tsx
    MetricsPage.tsx
  components/
    ui/               Reusable: Button, Card, Badge, Modal, ProgressBar
    sections/         Page sections: Hero, Features, Pricing
  hooks/              useChecklist, useMentor, useMilestones, useMetrics
  lib/                API client, date utils, role helpers
worker/
  routes/             /api/v1/checklists, /api/v1/mentors, etc.
  durable-objects/    Real-time collaboration objects
```
