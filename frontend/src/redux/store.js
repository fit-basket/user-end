import { configureStore } from "@reduxjs/toolkit";
import userReducer, { checkAuth } from "./user/userSlice";

export const store = configureStore({
  reducer: { user: userReducer },
});

store.dispatch(checkAuth()); // Dispatch the checkAuth action immediately after creating the store
