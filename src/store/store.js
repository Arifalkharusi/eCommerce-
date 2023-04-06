import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import filterSlice from "./filterSlice";
import dataSlice from "./dataSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: { itemSlice, filterSlice, dataSlice, cartSlice },
});
