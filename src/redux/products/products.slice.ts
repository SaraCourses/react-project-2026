import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { ProductType } from '../../types/product.types';

export interface ProductsState {
  products: ProductType[] | null;
}

const initialState: ProductsState = {
  products: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
    },
    addProduct: (state, action: PayloadAction<ProductType>) => {
      if (!state.products) {
        state.products = [];
      }
      state.products.push(action.payload);
    },
  },
});

export const { setProducts, addProduct } = productsSlice.actions;

export default productsSlice.reducer;
