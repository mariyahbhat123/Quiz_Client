import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quiz0: {
    multiQuiz0: "",
    multiQuiz1: "",
    multiQuiz2: "",
  },
  quiz1: {
    multiQuiz0: "",
    multiQuiz1: "",
    multiQuiz2: "",
  },
  quiz2: {
    multiQuiz0: "",
    multiQuiz1: "",
    multiQuiz2: "",
  },
  quiz3: {
    multiQuiz0: "",
    multiQuiz1: "",
    multiQuiz2: "",
  },
};

const multipleQuizSlice = createSlice({
  name: "QUIZMULTIPLESTATE",
  initialState,
  reducers: {
    addMultipleQuiz0: (state = initialState.quiz0, action) => {
      state.quiz0.multiQuiz0 = action.payload.q1;
      state.quiz0.multiQuiz1 = action.payload.q2;
      state.quiz0.multiQuiz2 = action.payload.q3;
    },
    addMultipleQuiz1: (state = initialState, action) => {
      state.quiz1.multiQuiz0 = action.payload.q1;
      state.quiz1.multiQuiz1 = action.payload.q2;
      state.quiz1.multiQuiz2 = action.payload.q3;
    },
    addMultipleQuiz2: (state = initialState, action) => {
      state.quiz2.multiQuiz0 = action.payload.q1;
      state.quiz2.multiQuiz1 = action.payload.q2;
      state.quiz2.multiQuiz2 = action.payload.q3;
    },
    addMultipleQuiz3: (state = initialState, action) => {
      state.quiz3.multiQuiz0 = action.payload.q1;
      state.quiz3.multiQuiz1 = action.payload.q2;
      state.quiz3.multiQuiz2 = action.payload.q3;
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

export const {
  addMultipleQuiz0,
  addMultipleQuiz1,
  addMultipleQuiz2,
  addMultipleQuiz3,
  removeQuiz,
} = multipleQuizSlice.actions;
export default multipleQuizSlice.reducer;
