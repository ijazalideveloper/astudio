import React from "react";
import Dropdown from "./Dropdown";
import Search from "./SearchBar";

interface FiltersProps {
  pageSizeOptions: number[];
  currentPageSize: number;
  onPageSizeChange: (size: number) => void;
  onClientSearch: (term: string) => void;
  children?: React.ReactNode;
}

const Filters: React.FC<FiltersProps> = ({
  pageSizeOptions,
  currentPageSize,
  onPageSizeChange,
  onClientSearch,
  children,
}) => {
  return (
    <div className="filters-container">
      <div className="flex items-center space-x-2">
        <Dropdown
          id="pageSize"
          label="Page Size"
          options={pageSizeOptions}
          value={currentPageSize}
          onChange={(value) => onPageSizeChange(Number(value))}
        />
        <Search onSearch={onClientSearch} />
      </div>
      {children}
    </div>
  );
};

export default Filters;
