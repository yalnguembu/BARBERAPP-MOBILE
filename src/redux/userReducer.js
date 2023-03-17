import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFecthing: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFecthing = true;
    },
    loginSuccess: (state, action) => {
      state.isFecthing = false;
      state.currentUser = action.payload;
    },
    loginFail: (state) => {
      state.isFecthing = false;
      state.error = true;
    },
    logOut: (state) => {
      state.currentUser = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFail, logOut } =
  userSlice.actions;
export default userSlice.reducer;
