"use client";
import Layout from "@/components/common/Layout/Layout";
import DataTable from "@/components/ui/DataTable";
import Dropdown from "@/components/ui/Dropdown";
import Input from "@/components/ui/Input";
import Pagination from "@/components/ui/Pagination";
import Search from "@/components/ui/SearchBar";
import { PAGE_OPTION_MOCK_DATA } from "@/contants/data";
import useFilters from "@/hooks/useFilters";

export default function Products() {
  const { filters, onFilterChange, onClientSearch } = useFilters({
    title: "",
    brand: "",
    category: "",
    searchTerm: "",
    pageSize: 5,
  });

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-[20px]">Produt Page</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-[15px]">
        <Input
          id="title"
          label="Title"
          value={filters?.title || ""}
          onChange={(value) => onFilterChange("title", value)}
          placeholder="Filter by Title"
        />
        <Input
          id="brand"
          label="Brand"
          value={filters.brand || ""}
          onChange={(value) => onFilterChange("brand", value)}
          placeholder="Filter by Brand"
        />
        <Input
          id="category"
          label="Category"
          value={filters.category || ""}
          onChange={(value) => onFilterChange("category", value)}
          placeholder="Filter by Category"
        />
      </div>
      <div className="flex mb-[20px] justify-between">
        <Dropdown
          id="pageSize"
          label="Page Size"
          options={PAGE_OPTION_MOCK_DATA}
          value={filters.pageSize}
          onChange={(value) => onFilterChange("pageSize", value)}
        />
        <Search onSearch={onClientSearch} />
      </div>
      <DataTable></DataTable>
      <Pagination></Pagination>
    </Layout>
  );
}
