export interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName?: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  bloodGroup?: string;
  height?: number;
  weight?: number;
  birthDate: string;
  eyeColor?: string;
}

export interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

export interface UsersFilters {
  firstName?: string;
  lastName?: string;
  age?: string;
  gender?: string;
}
