import React from "react";
import QuizNavbar from "../components/QuizNavbar";
import QuizFooter from "../components/QuizFooter";
import QuizProgrmmmingLinks from "../components/QuizProgrmmmingLinks";

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
      <footer className="mt-4">
        <QuizFooter />
      </footer>
    </div>
  );
}
