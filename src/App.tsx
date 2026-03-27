import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const LandingPage = lazy(() => import("./pages/LandingPage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
