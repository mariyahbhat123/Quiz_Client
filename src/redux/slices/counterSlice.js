import { createSlice } from "@reduxjs/toolkit";

const countState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "COUNTER",
  initialState: countState,
  reducers: {
    addCounter: (state = countState.count) => {
      state.count += 1;
    },
    eraseCounter: (state) => {
      state.count = 0;
    },
  },
});

export const { addCounter, eraseCounter } = counterSlice.actions;
export default counterSlice.reducer;
