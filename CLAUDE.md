# OnboardIQ -- Root CLAUDE.md

Engineering onboarding platform. Role-based checklist engine, codebase walkthrough generator, access provisioning tracker, mentor matching, 30/60/90 day milestone tracking, knowledge check quizzes, time-to-productivity metrics.

## Documentation Hierarchy

```
CLAUDE.md                  (this file -- root authority, tech stack, commands, team)
  .claude/CLAUDE.md        (agent instructions, conventions, project structure)
  docs/vision.md           (north star vision and design principles)
  docs/prd.md              (product requirements -- 8 features)
  docs/specs/              (technical specs)
  docs/prds/               (additional PRDs)
  docs/research/           (research and exploration notes)
```

When documents conflict, resolve by walking up the chain.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, TypeScript, Vite 7 |
| Styling | CSS custom properties (design system TBD) |
| Backend | Cloudflare Workers, D1 (SQLite), KV |
| Deploy | Cloudflare Pages via GitHub Actions |
| Testing | Vitest + React Testing Library |
| Tooling | pnpm (package manager), mise (runtime versions) |

## Dev Commands

```bash
pnpm dev           # Start dev server (port 5173)
pnpm build         # TypeScript check + Vite production build
pnpm test          # Run Vitest
pnpm lint          # ESLint
pnpm lint:fix      # ESLint with auto-fix
pnpm format        # Prettier format
```

## Conventions

- Use **pnpm** as package manager (never npm or yarn)
- Use **mise** for runtime versions (see `.mise.toml`)
- CSS custom properties for theming (defined in `src/index.css`)
- React.lazy + Suspense for route-level code splitting
- Tests live next to source files (`Component.test.tsx`)
- All dates stored as ISO 8601 strings in UTC

## Agent Team Roles

Six agents defined in `.claude/agents/`:

| Agent | Role | Scope | Writes Code |
|-------|------|-------|-------------|
| `ceo` | Strategic leadership, vision, priorities | Strategy docs | No |
| `team-lead` | Orchestrator -- decomposes, delegates, monitors | Task management | No |
| `frontend-dev` | React, CSS, components, pages | `src/` | Yes |
| `backend-dev` | Cloudflare Workers, APIs, D1, KV | `worker/` | Yes |
| `content-writer` | Copy, messaging, SEO, meta tags | Text content | No |
| `qa` | Testing, accessibility, performance | Tests + read-only | Yes (tests) |

## Single Source of Truth

| Concern | Source File |
|---------|------------|
| Vision and design principles | `docs/vision.md` |
| Product requirements | `docs/prd.md` |
| Runtime versions | `.mise.toml` |
| CSS design tokens (live) | `src/index.css` |
| Worker config | `wrangler.jsonc` |
| CI/CD pipeline | `.github/workflows/deploy.yml` |

## Project Structure

```
src/
  pages/           Route-level components
  components/
    ui/            Reusable UI components
    sections/      Page sections
  hooks/           Custom React hooks
  lib/             Utilities and shared logic
worker/
  routes/          API endpoints
  durable-objects/ WebSocket Durable Objects
docs/
  specs/           Technical specs
  prds/            Product requirement documents
  research/        Research and exploration notes
```
