import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ans1: "",
  ans2: "",
  ans3: "",
  ans4: "",
  ans5: "",
};

const quizAnswerSlice = createSlice({
  name: "ANSWERS",
  initialState,
  reducers: {
    addAns1: (state, action) => {
      state.ans1 = action.payload;
    },
    addAns2: (state, action) => {
      state.ans2 = action.payload;
    },
    addAns3: (state, action) => {
      state.ans3 = action.payload;
    },
    addAns4: (state, action) => {
      state.ans4 = action.payload;
    },

    removeAnswers: (state) => {
      state = [];
    },
  },
});

export const { addAns1, addAns2, addAns3, addAns4, removeAnswers } =
  quizAnswerSlice.actions;
export default quizAnswerSlice.reducer;
