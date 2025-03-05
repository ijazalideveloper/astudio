import axios from "axios";
import { UsersResponse, UsersFilters } from "../types/user";
import { MAX_PAGE_SIZE } from "@/utils/default";

const API_URL = "https://dummyjson.com/users";

export const fetchUsers = async (
  skip: number = 0,
  limit: number = MAX_PAGE_SIZE,
  filters?: UsersFilters
): Promise<UsersResponse> => {
  let url = `${API_URL}?limit=${limit}&skip=${skip}`;

  if (filters) {
    // DummyJSON only allows one filter at a time
    if (filters.firstName) {
      url = `${API_URL}/search?q=${filters.firstName}&limit=${limit}&skip=${skip}`;
    } else if (filters.lastName) {
      url = `${API_URL}/search?q=${filters.lastName}&limit=${limit}&skip=${skip}`;
    } else if (filters.age) {
      url = `${API_URL}/search?q=${filters.age}&limit=${limit}&skip=${skip}`;
    } else if (filters.gender) {
      url = `${API_URL}/filter?key=gender&value=${filters.gender}&limit=${limit}&skip=${skip}`;
    }
  }

  const response = await axios.get(url);
  return response.data;
};
