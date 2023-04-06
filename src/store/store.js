import { configureStore } from "@reduxjs/toolkit";
import selectItem from "./selectItem";
import filterSlice from "./filterSlice";
import dataSlice from "./dataSlice";

export const store = configureStore({
  reducer: { selectItem, filterSlice, dataSlice },
});
