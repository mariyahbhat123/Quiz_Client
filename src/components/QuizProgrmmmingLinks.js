import React from "react";
import { Link } from "react-router-dom";
import QuizCardHor from "./QuizCardHor";

export default function QuizProgrmmmingLinks() {
  return (
    <div>
      <QuizCardHor
        quizName="HTML"
        image={
          "https://www.cnet.com/a/img/resize/b9b09bd80b3129a6a5da79d9bd17487b977c9677/hub/2014/10/27/40194e6e-2544-419e-a340-f7c17b2e83c5/html5-wow-image-w3c.jpg?auto=webp&width=768"
        }
        text={
          "Welcome to the HTML Quiz! This quiz is designed to test your knowledge of HTML, the foundational language of the web. Whether you are a beginner just starting to learn about web development or someone looking to refresh your skills, this quiz will help you gauge your understanding of HTML."
        }
        width="80%"
        height="100%"
        langName="HTML"
      />

      <QuizCardHor
        quizName="JAVASCRIPT"
        image={"https://miro.medium.com/v2/resize:fit:1400/0*MFc4K8mR4_YdinyG"}
        text={
          "Welcome to the JavaScript Quiz! This quiz is designed to test your knowledge and understanding of JavaScript, the versatile and powerful programming language used to create dynamic and interactive web pages. Whether you're a beginner learning the basics or an experienced developer brushing up on your skills, this quiz will help you evaluate your proficiency in JavaScript."
        }
        width="80%"
        height="100%"
        langName="JAVASCRIPT"
      />

      <QuizCardHor
        quizName="REACT"
        image={
          "https://miro.medium.com/v2/resize:fit:522/0*Hdm7hBTZ-hKlbtlV.png"
        }
        text={
          "Welcome to the React Quiz! This quiz is designed to test your knowledge and understanding of React, the popular JavaScript library for building user interfaces. Whether you're new to React or looking to sharpen your skills, this quiz will help you evaluate your proficiency and deepen your understanding of React concepts."
        }
        width="80%"
        height="100%"
        langName="REACT"
      />

      <QuizCardHor
        quizName="CSS"
        image={
          "https://miro.medium.com/v2/resize:fit:1100/1*f2i47G95nVCx71KzM1iXlg.png"
        }
        text={
          "Welcome to the CSS Quiz! This quiz is designed to test your knowledge and understanding of CSS (Cascading Style Sheets), the language used to style and layout web pages. Whether you're a beginner learning the basics or an experienced developer looking to refresh your skills, this quiz will help you evaluate your proficiency in CSS."
        }
        width="80%"
        height="100%"
        langName="CSS"
      />
    </div>
  );
}
