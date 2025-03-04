import { useState } from "react";

interface Filters {
  [key: string]: string | number;
}

const useFilters = <T extends Filters>(initialFilters: T) => {
  const [filters, setFilters] = useState<T>({
    ...initialFilters,
  });

  const onFilterChange = (key: keyof T, value: string | number) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  };

  const onClientSearch = (term: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      searchTerm: term,
    }));
  };

  return { filters, onFilterChange, onClientSearch };
};

export default useFilters;
