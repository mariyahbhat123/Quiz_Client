import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};

const countAnsSlice = createSlice({
  name: "COUNT_ANSWERS",
  initialState,
  reducers: {
    countAns: (state, action) => {
      console.log(action.payload);
      state.count += action.payload;
    },
    decreaseCount: (state, action) => {
      state.count -= action.payload;
    },
    resetCount: (state) => {
      return { count: 0 };
    },
  },
});

export const { countAns, decreaseCount, resetCount } = countAnsSlice.actions;
export default countAnsSlice.reducer;
