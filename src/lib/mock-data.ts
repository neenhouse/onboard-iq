/* OnboardIQ -- Mock data */

import type {
  TeamMember,
  NewHire,
  ChecklistTemplate,
  AccessTool,
  WalkthroughStop,
  MilestonePhase,
  Quiz,
  ProductivityMetric,
} from "./types";

/* ---- Team Members (5) ---- */
export const teamMembers: TeamMember[] = [
  {
    id: "tm-1",
    name: "Sarah Chen",
    role: "Staff Frontend Engineer",
    team: "Platform UI",
    skills: ["React", "TypeScript", "CSS", "Accessibility", "Performance"],
    avatarColor: "#f97316",
    availabilityHoursPerWeek: 4,
    maxMentees: 2,
    currentMentees: 1,
    timezone: "America/Los_Angeles",
  },
  {
    id: "tm-2",
    name: "Marcus Johnson",
    role: "Senior Backend Engineer",
    team: "API Platform",
    skills: ["Go", "PostgreSQL", "gRPC", "Kubernetes", "Observability"],
    avatarColor: "#3b82f6",
    availabilityHoursPerWeek: 3,
    maxMentees: 2,
    currentMentees: 0,
    timezone: "America/New_York",
  },
  {
    id: "tm-3",
    name: "Priya Patel",
    role: "Senior Fullstack Engineer",
    team: "Growth",
    skills: ["React", "Node.js", "PostgreSQL", "Redis", "A/B Testing"],
    avatarColor: "#22c55e",
    availabilityHoursPerWeek: 5,
    maxMentees: 3,
    currentMentees: 1,
    timezone: "America/Chicago",
  },
  {
    id: "tm-4",
    name: "James Kim",
    role: "Staff DevOps Engineer",
    team: "Infrastructure",
    skills: ["Terraform", "AWS", "Kubernetes", "CI/CD", "Docker"],
    avatarColor: "#a855f7",
    availabilityHoursPerWeek: 3,
    maxMentees: 2,
    currentMentees: 1,
    timezone: "America/Los_Angeles",
  },
  {
    id: "tm-5",
    name: "Elena Rodriguez",
    role: "Senior Frontend Engineer",
    team: "Platform UI",
    skills: ["React", "TypeScript", "Design Systems", "Testing", "GraphQL"],
    avatarColor: "#ec4899",
    availabilityHoursPerWeek: 4,
    maxMentees: 2,
    currentMentees: 0,
    timezone: "America/Denver",
  },
];

/* ---- New Hires (3) ---- */
export const newHires: NewHire[] = [
  {
    id: "nh-1",
    name: "Alex Rivera",
    role: "Frontend",
    seniority: "Mid",
    team: "Platform UI",
    startDate: "2026-03-10",
    avatarColor: "#fb923c",
    mentorId: "tm-1",
  },
  {
    id: "nh-2",
    name: "Jordan Taylor",
    role: "Backend",
    seniority: "Senior",
    team: "API Platform",
    startDate: "2026-03-17",
    avatarColor: "#60a5fa",
    mentorId: "tm-2",
  },
  {
    id: "nh-3",
    name: "Sam Nguyen",
    role: "DevOps",
    seniority: "Junior",
    team: "Infrastructure",
    startDate: "2026-03-24",
    avatarColor: "#c084fc",
    mentorId: "tm-4",
  },
];

/* ---- Checklist Templates ---- */

const frontendItems = [
  { id: "fe-1", title: "Set up local development environment", description: "Clone repo, install deps, run dev server", category: "Setup", completed: true, dueDay: 1 },
  { id: "fe-2", title: "Configure IDE with team extensions", description: "ESLint, Prettier, recommended VS Code settings", category: "Setup", completed: true, dueDay: 1 },
  { id: "fe-3", title: "Review design system documentation", description: "Read through component library docs and Figma files", category: "Learn", completed: true, dueDay: 2 },
  { id: "fe-4", title: "Complete codebase walkthrough", description: "Follow the guided tour of the frontend architecture", category: "Learn", completed: true, dueDay: 3 },
  { id: "fe-5", title: "Review component naming conventions", description: "Understand BEM + CSS custom properties pattern", category: "Learn", completed: false, dueDay: 3 },
  { id: "fe-6", title: "Set up Storybook locally", description: "Run Storybook, review existing component stories", category: "Setup", completed: false, dueDay: 4 },
  { id: "fe-7", title: "Shadow a code review session", description: "Observe PR review process with mentor", category: "Team", completed: false, dueDay: 5 },
  { id: "fe-8", title: "Meet with design team lead", description: "Understand design handoff process", category: "Team", completed: false, dueDay: 5 },
  { id: "fe-9", title: "Fix a starter bug (good-first-issue)", description: "Pick from labeled issues in GitHub", category: "Ship", completed: false, dueDay: 7 },
  { id: "fe-10", title: "Write unit tests for your fix", description: "Add Vitest tests covering your change", category: "Ship", completed: false, dueDay: 7 },
  { id: "fe-11", title: "Submit first PR", description: "Open a pull request and respond to review feedback", category: "Ship", completed: false, dueDay: 8 },
  { id: "fe-12", title: "Complete accessibility audit training", description: "Review WCAG 2.1 AA checklist and tools", category: "Learn", completed: false, dueDay: 10 },
  { id: "fe-13", title: "Review performance monitoring setup", description: "Understand Web Vitals tracking and budgets", category: "Learn", completed: false, dueDay: 12 },
  { id: "fe-14", title: "Attend frontend guild meeting", description: "Join the bi-weekly frontend community meeting", category: "Team", completed: false, dueDay: 14 },
  { id: "fe-15", title: "Complete React 19 features quiz", description: "Test understanding of React Server Components, Actions", category: "Learn", completed: false, dueDay: 14 },
  { id: "fe-16", title: "Set up E2E testing environment", description: "Configure Playwright, run existing test suite", category: "Setup", completed: false, dueDay: 15 },
  { id: "fe-17", title: "Review CI/CD pipeline for frontend", description: "Understand build, test, and deploy stages", category: "Learn", completed: false, dueDay: 18 },
  { id: "fe-18", title: "Complete first feature independently", description: "Implement a feature from spec to deploy", category: "Ship", completed: false, dueDay: 25 },
];

const backendItems = [
  { id: "be-1", title: "Set up local development environment", description: "Clone repo, set up Go toolchain, configure DB", category: "Setup", completed: true, dueDay: 1 },
  { id: "be-2", title: "Configure development database", description: "Run PostgreSQL locally, seed development data", category: "Setup", completed: true, dueDay: 1 },
  { id: "be-3", title: "Review API architecture documentation", description: "Understand service boundaries and data flow", category: "Learn", completed: true, dueDay: 2 },
  { id: "be-4", title: "Complete codebase walkthrough", description: "Follow guided tour of backend service architecture", category: "Learn", completed: false, dueDay: 3 },
  { id: "be-5", title: "Review database schema and migrations", description: "Understand table relationships and migration history", category: "Learn", completed: false, dueDay: 3 },
  { id: "be-6", title: "Set up observability stack locally", description: "Configure Jaeger, Prometheus, and Grafana", category: "Setup", completed: false, dueDay: 4 },
  { id: "be-7", title: "Review gRPC service definitions", description: "Read proto files and understand service contracts", category: "Learn", completed: false, dueDay: 5 },
  { id: "be-8", title: "Meet with platform team lead", description: "Understand service ownership and on-call rotation", category: "Team", completed: false, dueDay: 5 },
  { id: "be-9", title: "Shadow an incident response drill", description: "Observe team handling a simulated incident", category: "Team", completed: false, dueDay: 7 },
  { id: "be-10", title: "Fix a starter bug (good-first-issue)", description: "Pick from labeled issues in GitHub", category: "Ship", completed: false, dueDay: 7 },
  { id: "be-11", title: "Write integration tests for your fix", description: "Add tests covering API behavior changes", category: "Ship", completed: false, dueDay: 8 },
  { id: "be-12", title: "Submit first PR", description: "Open a pull request with proper documentation", category: "Ship", completed: false, dueDay: 9 },
  { id: "be-13", title: "Review error handling patterns", description: "Understand custom error types and response codes", category: "Learn", completed: false, dueDay: 10 },
  { id: "be-14", title: "Set up local Kubernetes environment", description: "Install minikube, deploy services locally", category: "Setup", completed: false, dueDay: 12 },
  { id: "be-15", title: "Review authentication and authorization flow", description: "Understand JWT, RBAC, and API key management", category: "Learn", completed: false, dueDay: 14 },
  { id: "be-16", title: "Attend backend guild meeting", description: "Join the bi-weekly backend community meeting", category: "Team", completed: false, dueDay: 14 },
  { id: "be-17", title: "Complete database optimization quiz", description: "Test understanding of query patterns and indexing", category: "Learn", completed: false, dueDay: 18 },
  { id: "be-18", title: "Complete first API endpoint independently", description: "Design, implement, test, and deploy a new endpoint", category: "Ship", completed: false, dueDay: 25 },
];

const fullstackItems = [
  { id: "fs-1", title: "Set up local development environment", description: "Clone both repos, install all dependencies", category: "Setup", completed: true, dueDay: 1 },
  { id: "fs-2", title: "Configure full-stack dev environment", description: "Run frontend, backend, and DB concurrently", category: "Setup", completed: true, dueDay: 1 },
  { id: "fs-3", title: "Review system architecture overview", description: "Understand how frontend and backend communicate", category: "Learn", completed: true, dueDay: 2 },
  { id: "fs-4", title: "Complete frontend codebase walkthrough", description: "Guided tour of React component architecture", category: "Learn", completed: false, dueDay: 3 },
  { id: "fs-5", title: "Complete backend codebase walkthrough", description: "Guided tour of API service architecture", category: "Learn", completed: false, dueDay: 4 },
  { id: "fs-6", title: "Review API contract and TypeScript types", description: "Understand shared type definitions and API schema", category: "Learn", completed: false, dueDay: 5 },
  { id: "fs-7", title: "Meet with both team leads", description: "Understand expectations from frontend and backend", category: "Team", completed: false, dueDay: 5 },
  { id: "fs-8", title: "Review database schema", description: "Understand data models and relationships", category: "Learn", completed: false, dueDay: 6 },
  { id: "fs-9", title: "Fix a starter bug (full-stack)", description: "Fix spanning frontend and backend changes", category: "Ship", completed: false, dueDay: 8 },
  { id: "fs-10", title: "Write tests for both layers", description: "Unit + integration tests for your changes", category: "Ship", completed: false, dueDay: 9 },
  { id: "fs-11", title: "Submit first PR", description: "Open cross-stack pull request", category: "Ship", completed: false, dueDay: 10 },
  { id: "fs-12", title: "Review deployment pipeline", description: "Understand how frontend and backend deploy together", category: "Learn", completed: false, dueDay: 12 },
  { id: "fs-13", title: "Shadow a production deployment", description: "Observe the release process end to end", category: "Team", completed: false, dueDay: 14 },
  { id: "fs-14", title: "Complete API design quiz", description: "Test understanding of REST patterns and best practices", category: "Learn", completed: false, dueDay: 15 },
  { id: "fs-15", title: "Review monitoring and alerting setup", description: "Understand observability for both frontend and backend", category: "Learn", completed: false, dueDay: 18 },
  { id: "fs-16", title: "Attend cross-team standup", description: "Join the weekly all-hands engineering sync", category: "Team", completed: false, dueDay: 14 },
  { id: "fs-17", title: "Complete a feature end-to-end", description: "Implement from UI to database independently", category: "Ship", completed: false, dueDay: 25 },
];

const devopsItems = [
  { id: "do-1", title: "Set up local development environment", description: "Clone infra repo, install Terraform and kubectl", category: "Setup", completed: true, dueDay: 1 },
  { id: "do-2", title: "Configure AWS CLI and credentials", description: "Set up SSO, configure named profiles", category: "Setup", completed: true, dueDay: 1 },
  { id: "do-3", title: "Review infrastructure architecture", description: "Understand VPC, EKS, RDS topology", category: "Learn", completed: false, dueDay: 2 },
  { id: "do-4", title: "Complete codebase walkthrough", description: "Guided tour of infrastructure-as-code repo", category: "Learn", completed: false, dueDay: 3 },
  { id: "do-5", title: "Review Terraform module structure", description: "Understand module composition and state management", category: "Learn", completed: false, dueDay: 4 },
  { id: "do-6", title: "Set up monitoring dashboards locally", description: "Access Grafana and Datadog, review existing dashboards", category: "Setup", completed: false, dueDay: 5 },
  { id: "do-7", title: "Meet with SRE team lead", description: "Understand on-call rotation and incident response", category: "Team", completed: false, dueDay: 5 },
  { id: "do-8", title: "Review CI/CD pipeline architecture", description: "Understand GitHub Actions workflows and deployment stages", category: "Learn", completed: false, dueDay: 6 },
  { id: "do-9", title: "Shadow an infrastructure change", description: "Observe a Terraform plan/apply cycle in staging", category: "Team", completed: false, dueDay: 7 },
  { id: "do-10", title: "Fix a starter infrastructure issue", description: "Address a small Terraform or Kubernetes config change", category: "Ship", completed: false, dueDay: 8 },
  { id: "do-11", title: "Submit first infrastructure PR", description: "Open a pull request with proper plan output", category: "Ship", completed: false, dueDay: 9 },
  { id: "do-12", title: "Review disaster recovery procedures", description: "Understand backup, restore, and failover processes", category: "Learn", completed: false, dueDay: 10 },
  { id: "do-13", title: "Complete Kubernetes security quiz", description: "Test understanding of RBAC, network policies, secrets", category: "Learn", completed: false, dueDay: 14 },
  { id: "do-14", title: "Set up cost monitoring alerts", description: "Configure AWS cost explorer and budget alerts", category: "Ship", completed: false, dueDay: 15 },
  { id: "do-15", title: "Attend infrastructure guild meeting", description: "Join the bi-weekly infrastructure community meeting", category: "Team", completed: false, dueDay: 14 },
  { id: "do-16", title: "Review security compliance checklist", description: "Understand SOC 2 and security baseline requirements", category: "Learn", completed: false, dueDay: 18 },
  { id: "do-17", title: "Complete first infrastructure project", description: "Design and implement an infrastructure improvement", category: "Ship", completed: false, dueDay: 25 },
];

export const checklistTemplates: ChecklistTemplate[] = [
  { role: "Frontend", items: frontendItems },
  { role: "Backend", items: backendItems },
  { role: "Fullstack", items: fullstackItems },
  { role: "DevOps", items: devopsItems },
];

/* ---- Access Provisioning ---- */
export function getAccessToolsForHire(hireId: string): AccessTool[] {
  const statuses: Record<string, AccessTool[]> = {
    "nh-1": [
      { id: "at-1", name: "GitHub", icon: "GH", status: "granted", requestedDate: "2026-03-10", grantedDate: "2026-03-10" },
      { id: "at-2", name: "Slack", icon: "SL", status: "granted", requestedDate: "2026-03-10", grantedDate: "2026-03-10" },
      { id: "at-3", name: "Jira", icon: "JR", status: "granted", requestedDate: "2026-03-10", grantedDate: "2026-03-11" },
      { id: "at-4", name: "AWS Console", icon: "AW", status: "pending", requestedDate: "2026-03-11" },
      { id: "at-5", name: "Datadog", icon: "DD", status: "pending", requestedDate: "2026-03-12" },
      { id: "at-6", name: "Figma", icon: "FG", status: "granted", requestedDate: "2026-03-10", grantedDate: "2026-03-10" },
      { id: "at-7", name: "Vercel", icon: "VC", status: "not-started" },
      { id: "at-8", name: "1Password", icon: "1P", status: "granted", requestedDate: "2026-03-10", grantedDate: "2026-03-10" },
    ],
    "nh-2": [
      { id: "at-1", name: "GitHub", icon: "GH", status: "granted", requestedDate: "2026-03-17", grantedDate: "2026-03-17" },
      { id: "at-2", name: "Slack", icon: "SL", status: "granted", requestedDate: "2026-03-17", grantedDate: "2026-03-17" },
      { id: "at-3", name: "Jira", icon: "JR", status: "pending", requestedDate: "2026-03-17" },
      { id: "at-4", name: "AWS Console", icon: "AW", status: "pending", requestedDate: "2026-03-18" },
      { id: "at-5", name: "Datadog", icon: "DD", status: "not-started" },
      { id: "at-6", name: "PagerDuty", icon: "PD", status: "not-started" },
      { id: "at-7", name: "Grafana", icon: "GF", status: "not-started" },
      { id: "at-8", name: "1Password", icon: "1P", status: "granted", requestedDate: "2026-03-17", grantedDate: "2026-03-17" },
    ],
    "nh-3": [
      { id: "at-1", name: "GitHub", icon: "GH", status: "granted", requestedDate: "2026-03-24", grantedDate: "2026-03-24" },
      { id: "at-2", name: "Slack", icon: "SL", status: "granted", requestedDate: "2026-03-24", grantedDate: "2026-03-24" },
      { id: "at-3", name: "Jira", icon: "JR", status: "pending", requestedDate: "2026-03-24" },
      { id: "at-4", name: "AWS Console", icon: "AW", status: "pending", requestedDate: "2026-03-25" },
      { id: "at-5", name: "Datadog", icon: "DD", status: "not-started" },
      { id: "at-6", name: "Terraform Cloud", icon: "TF", status: "not-started" },
      { id: "at-7", name: "PagerDuty", icon: "PD", status: "not-started" },
      { id: "at-8", name: "1Password", icon: "1P", status: "pending", requestedDate: "2026-03-24" },
    ],
  };
  return statuses[hireId] ?? statuses["nh-1"]!;
}

/* ---- Codebase Walkthrough Stops ---- */
export const walkthroughStops: Record<string, WalkthroughStop[]> = {
  Frontend: [
    {
      id: 1,
      path: "src/main.tsx",
      title: "Application Entry Point",
      explanation: "This is where React mounts the app. We use StrictMode for development warnings and createRoot for React 19's concurrent features.",
      whyItMatters: "Understanding the entry point helps you trace how the app bootstraps and where global providers are set up.",
      codeSnippet: `import { StrictMode } from 'react'\nimport { createRoot } from 'react-dom/client'\nimport App from './App'\n\ncreateRoot(document.getElementById('root')!).render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n)`,
    },
    {
      id: 2,
      path: "src/App.tsx",
      title: "Router and Layout Shell",
      explanation: "The App component sets up React Router with lazy-loaded routes. Each page is code-split to keep the initial bundle small.",
      whyItMatters: "All new pages go through this router. When adding a feature, you register its route here first.",
      codeSnippet: `const Dashboard = lazy(() => import('./pages/Dashboard'))\n\n<BrowserRouter>\n  <Suspense fallback={<Loading />}>\n    <Routes>\n      <Route path="/" element={<Landing />} />\n      <Route path="/dashboard" element={<Dashboard />} />\n    </Routes>\n  </Suspense>\n</BrowserRouter>`,
    },
    {
      id: 3,
      path: "src/components/ui/",
      title: "Shared UI Component Library",
      explanation: "Reusable components like buttons, cards, badges, and form elements. Each component has co-located tests and follows our naming convention.",
      whyItMatters: "Always check here before building a new component. Reuse keeps the design system consistent.",
      codeSnippet: "// Example: Badge component\nexport function Badge({ variant, children }) {\n  return (\n    <span className={`badge badge-${variant}`}>\n      {children}\n    </span>\n  )\n}",
    },
    {
      id: 4,
      path: "src/hooks/",
      title: "Custom React Hooks",
      explanation: "Shared hooks for common patterns: data fetching, local storage, debouncing, and intersection observers.",
      whyItMatters: "Hooks encapsulate reusable logic. Check here before duplicating state management patterns across components.",
      codeSnippet: "// useLocalStorage hook\nexport function useLocalStorage<T>(key: string, initial: T) {\n  const [value, setValue] = useState<T>(() => {\n    const stored = localStorage.getItem(key)\n    return stored ? JSON.parse(stored) : initial\n  })\n  // ...\n}",
    },
    {
      id: 5,
      path: "src/lib/api.ts",
      title: "API Client Layer",
      explanation: "Centralized API client with typed request/response helpers, error handling, and automatic auth token injection.",
      whyItMatters: "All backend calls go through this layer. It handles retries, error normalization, and request cancellation.",
      codeSnippet: "export async function api<T>(path: string, opts?: RequestInit): Promise<T> {\n  const res = await fetch(`/api${path}`, {\n    ...opts,\n    headers: {\n      'Content-Type': 'application/json',\n      ...getAuthHeaders(),\n      ...opts?.headers,\n    },\n  })\n  if (!res.ok) throw new ApiError(res)\n  return res.json()\n}",
    },
    {
      id: 6,
      path: "src/index.css",
      title: "Design Tokens and Global Styles",
      explanation: "CSS custom properties define the entire design system: colors, spacing, radii, and shadows. The dark theme is the default.",
      whyItMatters: "Changing a token here updates the entire app. Never hardcode color values in components.",
      codeSnippet: `:root {\n  --color-bg: #0a0a0f;\n  --color-surface: #12121a;\n  --color-primary: #f97316;\n  --color-text: #e4e4e7;\n  --radius-md: 10px;\n}`,
    },
  ],
  Backend: [
    {
      id: 1,
      path: "worker/index.ts",
      title: "Worker Entry Point",
      explanation: "Cloudflare Worker entry. Handles routing, middleware, and binds to D1 and KV namespaces.",
      whyItMatters: "All API requests start here. Understanding the middleware chain is essential for debugging.",
      codeSnippet: `export default {\n  async fetch(req: Request, env: Env) {\n    const url = new URL(req.url)\n    if (url.pathname.startsWith('/api/')) {\n      return handleApiRoute(req, env)\n    }\n    return env.ASSETS.fetch(req)\n  }\n}`,
    },
    {
      id: 2,
      path: "worker/routes/",
      title: "API Route Handlers",
      explanation: "Each route file exports handlers for a resource. Routes follow REST conventions with typed request/response schemas.",
      whyItMatters: "When adding new API endpoints, follow the pattern established here for consistency.",
      codeSnippet: `// worker/routes/hires.ts\nexport async function getHires(req: Request, env: Env) {\n  const results = await env.DB\n    .prepare('SELECT * FROM hires ORDER BY start_date DESC')\n    .all()\n  return Response.json(results)\n}`,
    },
    {
      id: 3,
      path: "worker/durable-objects/",
      title: "Durable Objects for Real-time",
      explanation: "WebSocket-based Durable Objects for real-time features like live collaboration and notifications.",
      whyItMatters: "Durable Objects maintain state across requests. They are the backbone of real-time features.",
      codeSnippet: `export class NotificationRoom implements DurableObject {\n  sessions: Set<WebSocket> = new Set()\n\n  async fetch(req: Request) {\n    const pair = new WebSocketPair()\n    this.sessions.add(pair[1])\n    return new Response(null, { status: 101, webSocket: pair[0] })\n  }\n}`,
    },
    {
      id: 4,
      path: "migrations/",
      title: "Database Migrations",
      explanation: "D1 SQLite migrations using numbered files. Each migration is idempotent and tested.",
      whyItMatters: "Schema changes must go through migrations. Never modify the database directly.",
      codeSnippet: `-- 0001_create_hires.sql\nCREATE TABLE IF NOT EXISTS hires (\n  id TEXT PRIMARY KEY,\n  name TEXT NOT NULL,\n  role TEXT NOT NULL,\n  start_date TEXT NOT NULL,\n  created_at TEXT DEFAULT (datetime('now'))\n);`,
    },
    {
      id: 5,
      path: "wrangler.jsonc",
      title: "Cloudflare Configuration",
      explanation: "Wrangler config defines bindings (D1, KV, DO), environment variables, and deployment settings.",
      whyItMatters: "All infrastructure bindings are declared here. You need this context to understand what resources are available.",
      codeSnippet: `{\n  "name": "onboard-iq-api",\n  "main": "worker/index.ts",\n  "d1_databases": [{\n    "binding": "DB",\n    "database_name": "onboardiq"\n  }]\n}`,
    },
  ],
  Fullstack: [
    {
      id: 1, path: "src/main.tsx", title: "Frontend Entry Point",
      explanation: "React 19 app entry with StrictMode and createRoot.", whyItMatters: "Start here to understand how the UI boots.",
      codeSnippet: `createRoot(document.getElementById('root')!).render(\n  <StrictMode><App /></StrictMode>\n)`,
    },
    {
      id: 2, path: "worker/index.ts", title: "Backend Entry Point",
      explanation: "Cloudflare Worker handles API routing and static asset serving.", whyItMatters: "API calls from the frontend are resolved here.",
      codeSnippet: `export default { async fetch(req, env) { /* routing */ } }`,
    },
    {
      id: 3, path: "src/lib/api.ts", title: "API Client",
      explanation: "Typed fetch wrapper that all frontend data loading uses.", whyItMatters: "The bridge between frontend and backend.",
      codeSnippet: `export async function api<T>(path: string): Promise<T> { ... }`,
    },
    {
      id: 4, path: "worker/routes/", title: "API Routes",
      explanation: "REST handlers organized by resource.", whyItMatters: "Full-stack features require changes in both UI and routes.",
      codeSnippet: `export async function getHires(req, env) { ... }`,
    },
    {
      id: 5, path: "src/components/", title: "Component Library",
      explanation: "Shared UI components with co-located tests.", whyItMatters: "Consistent UI across all features.",
      codeSnippet: `export function Card({ children }) { return <div className="card">{children}</div> }`,
    },
    {
      id: 6, path: "migrations/", title: "Database Schema",
      explanation: "D1 SQLite migrations for all data models.", whyItMatters: "Data shapes drive both API responses and UI rendering.",
      codeSnippet: `CREATE TABLE hires (id TEXT PRIMARY KEY, name TEXT, role TEXT);`,
    },
  ],
  DevOps: [
    {
      id: 1, path: "terraform/", title: "Infrastructure as Code",
      explanation: "Terraform modules defining AWS resources: VPC, EKS, RDS, S3.", whyItMatters: "All infrastructure changes start here.",
      codeSnippet: `module "eks" {\n  source = "./modules/eks"\n  cluster_name = "onboardiq-prod"\n  node_groups = var.node_groups\n}`,
    },
    {
      id: 2, path: ".github/workflows/", title: "CI/CD Pipelines",
      explanation: "GitHub Actions workflows for build, test, deploy, and infrastructure changes.", whyItMatters: "Every code change flows through these pipelines.",
      codeSnippet: `jobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: jdx/mise-action@v3\n      - run: pnpm build`,
    },
    {
      id: 3, path: "kubernetes/", title: "Kubernetes Manifests",
      explanation: "Helm charts and raw manifests for service deployments, ingress, and config.", whyItMatters: "Services run on K8s. Understanding manifests is essential for debugging.",
      codeSnippet: `apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: onboardiq-api\nspec:\n  replicas: 3`,
    },
    {
      id: 4, path: "monitoring/", title: "Observability Configuration",
      explanation: "Datadog dashboards, Grafana panels, and alerting rules as code.", whyItMatters: "Monitoring is how we know things are working. Alerts wake you up at night.",
      codeSnippet: `resource "datadog_monitor" "api_latency" {\n  name = "API p95 latency > 200ms"\n  type = "metric alert"\n  query = "avg:http.latency.p95{service:onboardiq-api} > 200"\n}`,
    },
    {
      id: 5, path: "scripts/", title: "Operational Runbooks",
      explanation: "Scripts for common operations: DB backups, scaling, rollbacks, and incident response.", whyItMatters: "During incidents, these scripts save precious time.",
      codeSnippet: `#!/bin/bash\n# rollback.sh -- Roll back to previous deployment\nkubectl rollout undo deployment/onboardiq-api -n production`,
    },
  ],
};

/* ---- Milestone Phases ---- */
export function getMilestonesForHire(hireId: string): MilestonePhase[] {
  const milestones: Record<string, MilestonePhase[]> = {
    "nh-1": [
      {
        phase: "30-day",
        label: "First 30 Days",
        status: "on-track",
        progress: 65,
        goals: [
          { id: "m1-1", title: "Development environment fully configured", completed: true },
          { id: "m1-2", title: "Codebase walkthrough completed", completed: true },
          { id: "m1-3", title: "First PR merged", completed: false },
          { id: "m1-4", title: "Team introductions complete (meet 10+ people)", completed: true },
          { id: "m1-5", title: "Attend all team ceremonies for 2 weeks", completed: false },
          { id: "m1-6", title: "Complete role-specific knowledge quiz", completed: false },
        ],
      },
      {
        phase: "60-day",
        label: "Days 31-60",
        status: "on-track",
        progress: 0,
        goals: [
          { id: "m2-1", title: "Complete 3 tasks independently", completed: false },
          { id: "m2-2", title: "Participate in 5+ code reviews", completed: false },
          { id: "m2-3", title: "Demonstrate understanding of system architecture", completed: false },
          { id: "m2-4", title: "Present a tech talk or lightning demo", completed: false },
          { id: "m2-5", title: "Contribute to documentation improvements", completed: false },
        ],
      },
      {
        phase: "90-day",
        label: "Days 61-90",
        status: "on-track",
        progress: 0,
        goals: [
          { id: "m3-1", title: "Own a feature end-to-end", completed: false },
          { id: "m3-2", title: "Participate in on-call rotation", completed: false },
          { id: "m3-3", title: "Mentor a newer team member on one topic", completed: false },
          { id: "m3-4", title: "Identify and propose a process improvement", completed: false },
        ],
      },
    ],
    "nh-2": [
      {
        phase: "30-day",
        label: "First 30 Days",
        status: "at-risk",
        progress: 40,
        goals: [
          { id: "m1-1", title: "Development environment fully configured", completed: true },
          { id: "m1-2", title: "Codebase walkthrough completed", completed: false },
          { id: "m1-3", title: "First PR merged", completed: false },
          { id: "m1-4", title: "Team introductions complete", completed: true },
          { id: "m1-5", title: "Review all service documentation", completed: false },
        ],
      },
      {
        phase: "60-day",
        label: "Days 31-60",
        status: "on-track",
        progress: 0,
        goals: [
          { id: "m2-1", title: "Implement 2 API endpoints independently", completed: false },
          { id: "m2-2", title: "Lead a code review session", completed: false },
          { id: "m2-3", title: "Set up monitoring for owned services", completed: false },
          { id: "m2-4", title: "Shadow on-call rotation for 1 week", completed: false },
        ],
      },
      {
        phase: "90-day",
        label: "Days 61-90",
        status: "on-track",
        progress: 0,
        goals: [
          { id: "m3-1", title: "Own a microservice end-to-end", completed: false },
          { id: "m3-2", title: "Join on-call rotation as primary", completed: false },
          { id: "m3-3", title: "Present architecture decision record", completed: false },
        ],
      },
    ],
    "nh-3": [
      {
        phase: "30-day",
        label: "First 30 Days",
        status: "behind",
        progress: 20,
        goals: [
          { id: "m1-1", title: "Dev environment and cloud credentials set up", completed: true },
          { id: "m1-2", title: "Infrastructure walkthrough completed", completed: false },
          { id: "m1-3", title: "First Terraform PR merged", completed: false },
          { id: "m1-4", title: "Understand monitoring stack", completed: false },
          { id: "m1-5", title: "Meet all infrastructure team members", completed: false },
        ],
      },
      {
        phase: "60-day",
        label: "Days 31-60",
        status: "on-track",
        progress: 0,
        goals: [
          { id: "m2-1", title: "Manage a staging environment independently", completed: false },
          { id: "m2-2", title: "Create monitoring dashboard for a service", completed: false },
          { id: "m2-3", title: "Complete security compliance training", completed: false },
          { id: "m2-4", title: "Automate a manual operational task", completed: false },
        ],
      },
      {
        phase: "90-day",
        label: "Days 61-90",
        status: "on-track",
        progress: 0,
        goals: [
          { id: "m3-1", title: "Own a piece of production infrastructure", completed: false },
          { id: "m3-2", title: "Join on-call rotation", completed: false },
          { id: "m3-3", title: "Propose and implement cost optimization", completed: false },
        ],
      },
    ],
  };
  return milestones[hireId] ?? milestones["nh-1"]!;
}

/* ---- Knowledge Check Quizzes ---- */
export const quizzes: Quiz[] = [
  {
    id: "quiz-1",
    title: "Company Tech Stack",
    description: "Test your knowledge of our core technologies and architecture decisions.",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Which frontend framework does OnboardIQ use?",
        options: ["Angular 17", "React 19", "Vue 3", "Svelte 5"],
        correctIndex: 1,
      },
      {
        id: "q2",
        question: "What is the primary database technology?",
        options: ["MongoDB", "MySQL", "D1 (SQLite)", "DynamoDB"],
        correctIndex: 2,
      },
      {
        id: "q3",
        question: "Where are backend services deployed?",
        options: ["AWS Lambda", "Cloudflare Workers", "Google Cloud Run", "Heroku"],
        correctIndex: 1,
      },
      {
        id: "q4",
        question: "What package manager is used for the frontend?",
        options: ["npm", "yarn", "pnpm", "bun"],
        correctIndex: 2,
      },
      {
        id: "q5",
        question: "Which tool manages runtime versions (Node, pnpm)?",
        options: ["nvm", "asdf", "mise", "volta"],
        correctIndex: 2,
      },
    ],
  },
  {
    id: "quiz-2",
    title: "Development Processes",
    description: "Verify understanding of our development workflow and team practices.",
    passingScore: 80,
    questions: [
      {
        id: "q6",
        question: "What is the minimum number of approvals required for a PR?",
        options: ["0", "1", "2", "3"],
        correctIndex: 2,
      },
      {
        id: "q7",
        question: "How often do we run sprint retrospectives?",
        options: ["Weekly", "Every 2 weeks", "Monthly", "Quarterly"],
        correctIndex: 1,
      },
      {
        id: "q8",
        question: "What is our target p95 API response time?",
        options: ["50ms", "100ms", "200ms", "500ms"],
        correctIndex: 2,
      },
      {
        id: "q9",
        question: "Where should new component tests be placed?",
        options: ["tests/ directory", "Next to the source file", "__tests__/ directory", "cypress/"],
        correctIndex: 1,
      },
      {
        id: "q10",
        question: "What branch naming convention do we follow?",
        options: ["feature/JIRA-123-description", "feat-description", "username/description", "No convention"],
        correctIndex: 0,
      },
    ],
  },
  {
    id: "quiz-3",
    title: "Security and Compliance",
    description: "Ensure understanding of security practices and compliance requirements.",
    passingScore: 80,
    questions: [
      {
        id: "q11",
        question: "What authentication method is used for the API?",
        options: ["API keys only", "JWT with refresh tokens", "Basic auth", "OAuth only"],
        correctIndex: 1,
      },
      {
        id: "q12",
        question: "Where should secrets be stored?",
        options: [".env files in git", "Cloudflare KV (encrypted)", "Confluence wiki", "Shared Google Doc"],
        correctIndex: 1,
      },
      {
        id: "q13",
        question: "What is our compliance framework?",
        options: ["HIPAA", "PCI DSS", "SOC 2 Type II", "ISO 27001"],
        correctIndex: 2,
      },
      {
        id: "q14",
        question: "How long is onboarding data retained?",
        options: ["1 year", "2 years", "3 years", "Indefinitely"],
        correctIndex: 2,
      },
      {
        id: "q15",
        question: "What is the SLA violation threshold for access provisioning?",
        options: ["4 hours", "12 hours", "24 hours", "48 hours"],
        correctIndex: 2,
      },
    ],
  },
];

/* ---- Productivity Metrics ---- */
export const productivityMetrics: ProductivityMetric[] = [
  {
    label: "Days to First PR",
    averageDays: 6.3,
    hires: [
      { name: "Alex Rivera", days: 8 },
      { name: "Jordan Taylor", days: 5 },
      { name: "Sam Nguyen", days: 10 },
    ],
  },
  {
    label: "Days to First Deploy",
    averageDays: 14.7,
    hires: [
      { name: "Alex Rivera", days: 14 },
      { name: "Jordan Taylor", days: 11 },
      { name: "Sam Nguyen", days: 19 },
    ],
  },
  {
    label: "Days to First Code Review",
    averageDays: 9.0,
    hires: [
      { name: "Alex Rivera", days: 10 },
      { name: "Jordan Taylor", days: 7 },
      { name: "Sam Nguyen", days: 12 },
    ],
  },
];

/* ---- Helper: get mentor match scores ---- */
export function getMentorMatches(hireId: string): Array<TeamMember & { matchScore: number }> {
  const hire = newHires.find((h) => h.id === hireId);
  if (!hire) return [];

  const scores: Record<string, Record<string, number>> = {
    "nh-1": { "tm-1": 95, "tm-5": 88, "tm-3": 72, "tm-2": 45, "tm-4": 38 },
    "nh-2": { "tm-2": 92, "tm-3": 78, "tm-4": 55, "tm-1": 40, "tm-5": 35 },
    "nh-3": { "tm-4": 96, "tm-2": 62, "tm-3": 48, "tm-1": 30, "tm-5": 28 },
  };

  const hireScores = scores[hireId] ?? {};
  return teamMembers
    .map((tm) => ({ ...tm, matchScore: hireScores[tm.id] ?? 50 }))
    .sort((a, b) => b.matchScore - a.matchScore);
}
