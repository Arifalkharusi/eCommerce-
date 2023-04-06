import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data.json";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    items: data,
  },
  reducers: {
    mainData: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { mainData } = dataSlice.actions;

export default dataSlice.reducer;
