import { configureStore } from "@reduxjs/toolkit";
import login from "./login";
export default configureStore({
  reducer: {
    login,
  },
});
