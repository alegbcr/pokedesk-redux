import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.playload;
    },
  },
});

export const { setLoading } = uiSlice.actions;

export default uiSlice.reducer;
