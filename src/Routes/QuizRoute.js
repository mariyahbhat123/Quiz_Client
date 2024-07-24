import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../Display/LandingPage";
import QuizSingleChoice from "../components/QuizSingleChoice";
import QuizMultipleChoice from "../components/QuizMultipleChoice";
import QuizCountResult from "../components/QuizCountResult";

export default function QuizRoute() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Single" element={<QuizSingleChoice />} />
          <Route path="/Multiple" element={<QuizMultipleChoice />} />
          <Route path="/CountResult" element={<QuizCountResult />} />
        </Routes>
      </Router>
    </div>
  );
}
