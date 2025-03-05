import axios from 'axios';
import { UsersResponse } from '../types/user';

const API_URL = 'https://dummyjson.com/users';

export const fetchUsers = async (
  skip: number = 0,
  limit: number = 5,
): Promise<UsersResponse> => {
  let url = `${API_URL}?limit=${limit}&skip=${skip}`;
  
  const response = await axios.get(url);
  return response.data;
};