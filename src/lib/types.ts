/* OnboardIQ -- Shared types */

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  team: string;
  skills: string[];
  avatarColor: string;
  availabilityHoursPerWeek: number;
  maxMentees: number;
  currentMentees: number;
  timezone: string;
}

export interface NewHire {
  id: string;
  name: string;
  role: "Frontend" | "Backend" | "Fullstack" | "DevOps";
  seniority: "Junior" | "Mid" | "Senior";
  team: string;
  startDate: string;
  avatarColor: string;
  mentorId: string;
}

export interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  category: string;
  completed: boolean;
  dueDay: number; // relative to start date
}

export interface ChecklistTemplate {
  role: NewHire["role"];
  items: ChecklistItem[];
}

export interface AccessTool {
  id: string;
  name: string;
  icon: string;
  status: "granted" | "pending" | "not-started";
  requestedDate?: string;
  grantedDate?: string;
}

export interface WalkthroughStop {
  id: number;
  path: string;
  title: string;
  explanation: string;
  whyItMatters: string;
  codeSnippet: string;
}

export interface MilestoneGoal {
  id: string;
  title: string;
  completed: boolean;
}

export interface MilestonePhase {
  phase: "30-day" | "60-day" | "90-day";
  label: string;
  status: "on-track" | "at-risk" | "behind";
  progress: number;
  goals: MilestoneGoal[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
  passingScore: number; // percentage
}

export interface ProductivityMetric {
  label: string;
  hires: { name: string; days: number }[];
  averageDays: number;
}
