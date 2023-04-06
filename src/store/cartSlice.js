import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [], edit: false, index: 0 },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
    removeFromCart: (state, action) => {
      state.cartItems.splice(action.payload, 1);
    },
    editItemInCart: (state, action) => {
      state.cartItems[state.index] = action.payload;
    },
    openEdit: (state, action) => {
      !state.edit ? (state.edit = true) : (state.edit = false);
      state.index = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, editItemInCart, openEdit } =
  cartSlice.actions;

export default cartSlice.reducer;
