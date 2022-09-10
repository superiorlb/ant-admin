import { createSlice } from "@reduxjs/toolkit";
export const login = createSlice({
  name: "login",
  initialState: {
    token: "",
  },
  reducers: {
    handleSetToken: (state, { payload }) => {
      state.token = payload;
    },
    handleRemoveToken: (state) => {
      state.token = "";
    },
  },
});
export const { handleSetToken, handleRemoveToken } = login.actions;
export default login.reducer;
