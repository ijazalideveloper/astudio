"use client";
import Layout from "@/components/common/Layout/Layout";
import DataTable from "@/components/ui/DataTable";
import Dropdown from "@/components/ui/Dropdown";
import Input from "@/components/ui/Input";
import Pagination from "@/components/ui/Pagination";
import Search from "@/components/ui/SearchBar";
import { PAGE_OPTION_MOCK_DATA, USER_TABLE_COLUMNS } from "@/contants/data";
import useFilters from "@/hooks/useFilters";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import {
  fetchUsersThunk,
  setSkip,
  setLimit,
  setClientSearchTerm,
  setFilters,
} from "@/redux/features/users/usersSlice";
import usePagination from "@/hooks/usePagination";
import { MAX_PAGE_SIZE } from "@/utils/default";
import Filters from "@/components/ui/Filters";
import UsersFilters from "@/components/users/UsersFilters";

export default function Users() {
  const dispatch = useAppDispatch();
  const { users, loading, clientSearchTerm, filters } = useAppSelector(
    (state) => state.users
  );

  const { total, limit, skip, handlePageChange } = usePagination("users");

  useEffect(() => {
    dispatch(fetchUsersThunk({ skip, limit, filters }));
  }, [dispatch, skip, limit, filters]);

  const handleLimitChange = (newLimit: number) => {
    dispatch(setLimit(newLimit));
  };

  const handleClientSearch = (term: string) => {
    dispatch(setClientSearchTerm(term));
  };

  const handleFilterChange = (newFilters: typeof filters) => {
    dispatch(setFilters(newFilters));
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-[20px]">User Page</h1>
      <Filters
        pageSizeOptions={PAGE_OPTION_MOCK_DATA}
        currentPageSize={limit}
        onPageSizeChange={handleLimitChange}
        onClientSearch={handleClientSearch}
      >
        <UsersFilters
          onFilterChange={handleFilterChange}
          currentFilters={filters}
        />
      </Filters>
      <DataTable
        columns={USER_TABLE_COLUMNS}
        data={users}
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
