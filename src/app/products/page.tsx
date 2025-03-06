"use client";
import Layout from "@/components/common/Layout/Layout";
import DataTable from "@/components/ui/DataTable";
import Dropdown from "@/components/ui/Dropdown";
import Input from "@/components/ui/Input";
import Pagination from "@/components/ui/Pagination";
import Search from "@/components/ui/SearchBar";
import { PAGE_OPTION_MOCK_DATA, PRODUCT_TABLE_COLUMNS, USER_TABLE_COLUMNS } from "@/contants/data";
import useFilters from "@/hooks/useFilters";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import {
  fetchProductsThunk,
  setSkip,
  setLimit,
  setClientSearchTerm,
} from "@/redux/features/products/productsSlice";
import usePagination from "@/hooks/usePagination";
import { MAX_PAGE_SIZE } from "@/utils/default";
import Filters from "@/components/ui/Filters";
import UsersFilters from "@/components/users/UsersFilters";

export default function ProductsPage() {
  const dispatch = useAppDispatch();
  const { products, loading, clientSearchTerm } = useAppSelector(
    (state) => state.products
  );

  const { total, limit, skip, handlePageChange } = usePagination();

  useEffect(() => {
    dispatch(fetchProductsThunk({ skip, limit }));
  }, [dispatch, skip, limit]);

  const handleLimitChange = (newLimit: number) => {
    dispatch(setLimit(newLimit));
  };

  const handleClientSearch = (term: string) => {
    dispatch(setClientSearchTerm(term));
  };

  // const handleFilterChange = (newFilters: typeof) => {
  //   dispatch(setFilters(newFilters));
  // };
console.log("products", products)
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-[20px]">Product Page</h1>
      <Filters
        pageSizeOptions={PAGE_OPTION_MOCK_DATA}
        currentPageSize={limit}
        onPageSizeChange={handleLimitChange}
        onClientSearch={handleClientSearch}
      >
        {/* <UsersFilters
          onFilterChange={handleFilterChange}
          currentFilters={filters}
        /> */}
      </Filters>
      <DataTable
        columns={PRODUCT_TABLE_COLUMNS}
        data={products}
        isLoading={loading}
        clientSearchTerm={clientSearchTerm}
      />
      <Pagination
        total={total}
        limit={limit}
        skip={skip}
        onPageChange={handlePageChange}
      />
    </Layout>
  );
}
