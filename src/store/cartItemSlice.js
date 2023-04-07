import { createSlice } from "@reduxjs/toolkit";

export const cartItemSlice = createSlice({
  name: "cartItem",
  initialState: {
    cartData: {},
    select: false,
  },
  reducers: {
    cartItem: (state, action) => {
      state.cartData = action.payload;
      state.select = false;
    },
    setSelect: (state, action) => {
      state.select = true;
    },
  },
});

export const { cartItem, setSelect } = cartItemSlice.actions;
export default cartItemSlice.reducer;
