import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ui/ErrorBoundary";
import "./App.css";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const DashboardLayout = lazy(() => import("./components/DashboardLayout"));
const DashboardOverview = lazy(() => import("./pages/DashboardOverview"));
const ChecklistPage = lazy(() => import("./pages/ChecklistPage"));
const WalkthroughPage = lazy(() => import("./pages/WalkthroughPage"));
const AccessPage = lazy(() => import("./pages/AccessPage"));
const MentorPage = lazy(() => import("./pages/MentorPage"));
const MilestonePage = lazy(() => import("./pages/MilestonePage"));
const QuizPage = lazy(() => import("./pages/QuizPage"));
const ProductivityPage = lazy(() => import("./pages/ProductivityPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardOverview />} />
              <Route path="checklists" element={<ChecklistPage />} />
              <Route path="walkthrough" element={<WalkthroughPage />} />
              <Route path="access" element={<AccessPage />} />
              <Route path="mentors" element={<MentorPage />} />
              <Route path="milestones" element={<MilestonePage />} />
              <Route path="quizzes" element={<QuizPage />} />
              <Route path="productivity" element={<ProductivityPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
