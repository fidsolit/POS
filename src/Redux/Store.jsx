import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import AuthenticationSlice from "./AuthenticationSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // username: UsernameSlice,
    authent: AuthenticationSlice,
  },
});
