import axios from './axios';

const url = 'products';

export const getProducts = async () => {
  const response = await axios.get(url);
  const data = response.data;
  return data;
};
