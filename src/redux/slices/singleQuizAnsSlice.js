import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  quiz0: "",
  quiz1: "",
  quiz2: "",
  quiz3: "",
};

const singleQuizAnsSlice = createSlice({
  name: "QUIZSTATE",
  initialState,
  reducers: {
    addQuiz0: (state = initialState, action) => {
      state.quiz0 = action.payload;
    },
    addQuiz1: (state = initialState, action) => {
      state.quiz1 = action.payload;
    },
    addQuiz2: (state = initialState, action) => {
      state.quiz2 = action.payload;
    },
    addQuiz3: (state = initialState, action) => {
      state.quiz3 = action.payload;
    },
    removeQuiz: (state = initialState) => {
      return (
        (state.quiz0 = ""),
        (state.quiz1 = ""),
        (state.quiz2 = ""),
        (state.quiz3 = "")
      );
    },
  },
});

export const { addQuiz0, addQuiz1, addQuiz2, addQuiz3, removeQuiz } =
  singleQuizAnsSlice.actions;
export default singleQuizAnsSlice.reducer;
