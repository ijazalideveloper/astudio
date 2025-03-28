import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { User, UsersResponse, UsersFilters } from "../../../types/user";
import { fetchUsers } from "../../../services/usersService";
import { MAX_PAGE_SIZE } from "@/utils/default";

interface UsersState {
  users: User[];
  total: number;
  skip: number;
  limit: number;
  loading: boolean;
  error: string | null;
  clientSearchTerm: string;
  filters: UsersFilters;
}

const initialState: UsersState = {
  users: [],
  total: 0,
  skip: 0,
  limit: MAX_PAGE_SIZE,
  loading: false,
  error: null,
  clientSearchTerm: "",
  filters: {},
};

export const fetchUsersThunk = createAsyncThunk(
  "users/fetchUsers",
  async ({ skip, limit,filters }: { skip: number; limit: number, filters?: UsersFilters }) => {
    const response = await fetchUsers(skip, limit, filters);
    return response;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    resetUsers: (state) => {
      state.users = [];
      state.total = 0;
      state.skip = 0;
      state.limit = MAX_PAGE_SIZE;
      state.loading = false;
      state.error = null;
    },
    setSkip: (state, action: PayloadAction<number>) => {
      state.skip = action.payload;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
      state.skip = 0;
    },
    setClientSearchTerm: (state, action: PayloadAction<string>) => {
      state.clientSearchTerm = action.payload;
    },
    setFilters: (state, action: PayloadAction<UsersFilters>) => {
      state.filters = action.payload;
      state.skip = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchUsersThunk.fulfilled,
        (state, action: PayloadAction<UsersResponse>) => {
          state.loading = false;
          state.users = action.payload.users;
          state.total = action.payload.total;
          state.skip = action.payload.skip;
          state.limit = action.payload.limit;
        }
      )
      .addCase(fetchUsersThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users";
      });
  },
});

export const { resetUsers, setSkip, setLimit, setClientSearchTerm, setFilters } =
  usersSlice.actions;
export default usersSlice.reducer;
