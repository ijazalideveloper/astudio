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
} from "@/redux/features/users/usersSlice";
import usePagination from "@/hooks/usePagination";
import { MAX_PAGE_SIZE } from "@/utils/default";
import Filters from "@/components/ui/Filters";

export default function Users() {
  const dispatch = useAppDispatch();
  const { users, loading, clientSearchTerm } = useAppSelector(
    (state) => state.users
  );

  const { total, limit, skip, handlePageChange } = usePagination();

  useEffect(() => {
    dispatch(fetchUsersThunk({ skip, limit }));
  }, [dispatch, skip, limit]);

  const { filters, onFilterChange, onClientSearch } = useFilters({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    searchTerm: "",
    pageSize: MAX_PAGE_SIZE,
  });

  const handleLimitChange = (newLimit: number) => {
    dispatch(setLimit(newLimit));
  };

  const handleClientSearch = (term: string) => {
    dispatch(setClientSearchTerm(term));
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-[20px]">User Page</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-[15px]">
        <Input
          id="firstName"
          label="First Name"
          value={filters.firstName || ""}
          onChange={(value) => onFilterChange("firstName", value)}
          placeholder="Filter by First Name"
        />
        <Input
          id="lastName"
          label="Last Name"
          value={filters.lastName || ""}
          onChange={(value) => onFilterChange("lastName", value)}
          placeholder="Filter by Last Name"
        />
        <Input
          id="age"
          label="Age"
          value={filters.age || ""}
          onChange={(value) => onFilterChange("age", value)}
          placeholder="Filter by Age"
        />
        <Input
          id="gender"
          label="Gender"
          value={filters.gender || ""}
          onChange={(value) => onFilterChange("gender", value)}
          placeholder="Filter by Gender"
        />
      </div>
      <Filters
        pageSizeOptions={PAGE_OPTION_MOCK_DATA}
        currentPageSize={limit}
        onPageSizeChange={handleLimitChange}
        onClientSearch={handleClientSearch}
      >
        Page Specific Components
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
