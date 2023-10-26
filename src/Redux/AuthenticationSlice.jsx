// authenticationSlice.js
import { createSlice } from "@reduxjs/toolkit";

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    user: null,
    error: null,
    isLoading: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } =
  authenticationSlice.actions;

export default authenticationSlice.reducer;
