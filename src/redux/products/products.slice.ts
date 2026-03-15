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
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
