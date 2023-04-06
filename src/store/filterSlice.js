import { createSlice } from "@reduxjs/toolkit";

export const filterSclice = createSlice({
  name: "filter",
  initialState: [],
  reducers: {
    addFilter: (state, action) => {
      state.push(action.payload);
    },
    removeFilter: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { addFilter, removeFilter } = filterSclice.actions;

export default filterSclice.reducer;
