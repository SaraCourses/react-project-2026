import type { ProductType } from '../types/product.types';
import axios from './axios';

const url = 'products';

export const getProducts = async () => {
  const response = await axios.get(url);
  const data = response.data;
  return data;
};

export const addProducts = async (product: Omit<ProductType, 'id'>) => {
  const response = await axios.post(url, product);
  const data = response.data;
  return data;
};
