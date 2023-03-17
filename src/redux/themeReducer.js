import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    currentTheme: "light",
  },
  reducers: {
    setTheme: (state,payload) => {
      state.currentTheme = payload;
    },
  },
});

export const { setTheme} =
  themeSlice.actions;
export default themeSlice.reducer;
