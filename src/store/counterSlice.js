import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    add: (state) => {
      state.value += 1;
    },
    cut: (state) => {
      state.value -= 1;
    },
    all: (state, action) => {
      state.value += action.payload;
    },
  },
});
export const { add, cut, all } = counterSlice.actions;
export default counterSlice.reducer;
