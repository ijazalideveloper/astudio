import axios from 'axios';
import { ProductsResponse } from '../types/product';
import { MAX_PAGE_SIZE } from '@/utils/default';

const API_URL = 'https://dummyjson.com/products';

export const fetchProducts = async (
  skip: number = 0,
  limit: number = MAX_PAGE_SIZE,
): Promise<ProductsResponse> => {
  let url = `${API_URL}?limit=${limit}&skip=${skip}`;
  
  const response = await axios.get(url);
  console.log("response", response)
  return response.data;
};