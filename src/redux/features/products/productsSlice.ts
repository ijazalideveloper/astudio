import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductsResponse, ProductsFilters } from '../../../types/product';
import { fetchProducts } from '../../../services/productsService';

interface ProductsState {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
  loading: boolean;
  error: string | null;
  clientSearchTerm: string;
  filters: ProductsFilters;
  activeCategory: string;
}

const initialState: ProductsState = {
  products: [],
  total: 0,
  skip: 0,
  limit: 5,
  loading: false,
  error: null,
  clientSearchTerm: '',
  filters: {},
  activeCategory: 'ALL',
};

export const fetchProductsThunk = createAsyncThunk(
  'products/fetchProducts',
  async ({ 
    skip, 
    limit, 
    filters,
    category 
  }: { 
    skip: number; 
    limit: number; 
    filters?: ProductsFilters;
    category?: string;
  }) => {
    const response = await fetchProducts(skip, limit, filters, category);
    return response;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
      state.skip = 0; // Reset to first page when changing limit
    },
    setSkip: (state, action: PayloadAction<number>) => {
      state.skip = action.payload;
    },
    setClientSearchTerm: (state, action: PayloadAction<string>) => {
      state.clientSearchTerm = action.payload;
    },
    setFilters: (state, action: PayloadAction<ProductsFilters>) => {
      state.filters = action.payload;
      state.skip = 0; // Reset to first page when changing filters
    },
    setActiveCategory: (state, action: PayloadAction<string>) => {
      state.activeCategory = action.payload;
      state.skip = 0; // Reset to first page when changing category
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsThunk.fulfilled, (state, action: PayloadAction<ProductsResponse>) => {
        state.loading = false;
        state.products = action.payload.products;
        state.total = action.payload.total;
        state.skip = action.payload.skip;
        state.limit = action.payload.limit;
      })
      .addCase(fetchProductsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products';
      });
  },
});

export const { 
  setLimit, 
  setSkip,
  setClientSearchTerm,
  setFilters,
  setActiveCategory
} = productsSlice.actions;
export default productsSlice.reducer;