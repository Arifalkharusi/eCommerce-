import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
  name: "items",
  initialState: { index: 0, open: false },
  reducers: {
    setItem: (state, action) => {
      state.index = action.payload.index;
      state.open = action.payload.open;
    },
  },
});

export const { setItem } = itemSlice.actions;

export default itemSlice.reducer;
