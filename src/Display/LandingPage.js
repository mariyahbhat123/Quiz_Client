import React from "react";
import QuizNavbar from "../components/QuizNavbar";
import QuizFooter from "../components/QuizFooter";
import QuizProgrmmmingLinks from "../components/QuizProgrmmmingLinks";
import "../styles/LandingPage.css";

export default function LandingPage() {
  //validation front end back end
  //question and answers from backend
  //single selection multiple selection type

  return (
    <div>
      <nav>
        <QuizNavbar />
      </nav>
      <body>
        <QuizProgrmmmingLinks />
      </body>

      <div className="footerQuiz mt-4">
        <QuizFooter />
      </div>
    </div>
  );
}
