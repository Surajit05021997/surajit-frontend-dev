import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    theme: 'light-mode',
  },
  reducers: {
    updateTheme: (state, action) => {
      state.theme = action.payload;
    },
  }
});

export const { updateTheme } = settingsSlice.actions;
export default settingsSlice.reducer;
