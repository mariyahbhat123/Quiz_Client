import { configureStore } from "@reduxjs/toolkit";
import singleQuizAnsSlice from "../slices/singleQuizAnsSlice";
import quizAnswersSlice from "../slices/quizAnswersSlice";
import counterSlice from "../slices/counterSlice";
import countAnsSlice from "../slices/countAnsSlice";
import multipleQuizSlice from "../slices/multipleQuizSlice";

export const store = configureStore({
  reducer: {
    singleQuiz: singleQuizAnsSlice,
    quizAnswers: quizAnswersSlice,
    answerCounter: counterSlice,
    countAnswer: countAnsSlice,
    multipleQuiz: multipleQuizSlice,
  },
});
