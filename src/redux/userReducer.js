import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
    logOut: (state) => {
      state.currentUser = null;
    },
  },
});

export const { setUser, logOut } = userSlice.actions;
export default userSlice.reducer;
