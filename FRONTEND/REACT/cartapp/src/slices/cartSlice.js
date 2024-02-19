import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cartTotal: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {

      const existingCartItemIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingItem = state.products[existingCartItemIndex];
      let currentProducts = [...state.products];
      if (existingItem) {
        const updatedProduct = {
          ...existingItem,
          amount: existingItem.amount + 1
        }
        currentProducts[existingCartItemIndex] = updatedProduct; 
      } else {
        currentProducts = [...currentProducts, action.payload]
      }

      state.products = currentProducts;

      state.cartTotal = state.cartTotal + action.payload.price;

      console.log(state.products)
      
    },
    removeFromCart: (state, action) => {

    }
  }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

