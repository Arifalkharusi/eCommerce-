import { createSlice } from "@reduxjs/toolkit";

export const selectItem = createSlice({
  name: "selectItem",
  initialState: { index: 0, boolean: false },
  reducers: {
    setItem: (state, action) => {
      state.index = action.payload.index;
      state.boolean = action.payload.boolean;
    },
  },
});

export const { setItem } = selectItem.actions;

export default selectItem.reducer;
