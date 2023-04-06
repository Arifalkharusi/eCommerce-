import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [] },
  reducers: {
    addToCart: (state, action) => {
      state.index = action.payload.index;
      state.boolean = action.payload.boolean;
    },
    removeFromCart: (state, action) => {
      state.index = action.payload.index;
      state.boolean = action.payload.boolean;
    },
    editItemInCart: (state, action) => {
      state.index = action.payload.index;
      state.boolean = action.payload.boolean;
    },
  },
});

export const { setItem } = cartSlice.actions;

export default cartSlice.reducer;
