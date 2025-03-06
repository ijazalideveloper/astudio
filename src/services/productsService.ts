import axios from "axios";
import { ProductsResponse, ProductsFilters } from "../types/product";
import { MAX_PAGE_SIZE } from "@/utils/default";

const API_URL = "https://dummyjson.com/products";

export const fetchProducts = async (
  skip: number = 0,
  limit: number = MAX_PAGE_SIZE,
  filters?: ProductsFilters,
  category?: string
): Promise<ProductsResponse> => {
  let url = `${API_URL}?limit=${limit}&skip=${skip}`;

  // If category is specified (like 'laptops')
  if (category && category !== "ALL") {
    url = `${API_URL}/category/${category}?limit=${limit}&skip=${skip}`;
  }

  if (filters) {
    // DummyJSON only allows one filter at a time
    if (filters.title) {
      url = `${API_URL}/search?q=${filters.title}&limit=${limit}&skip=${skip}`;
      if (category && category !== "ALL") {
        url = `${API_URL}/search?q=${filters.title}&limit=${limit}&skip=${skip}`;
      }
    } else if (filters.brand) {
      url = `${API_URL}/search?q=${filters.brand}&limit=${limit}&skip=${skip}`;
    }
  }

  const response = await axios.get(url);
  return response.data;
};
