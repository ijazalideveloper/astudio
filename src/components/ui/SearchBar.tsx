import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Input from "./Input";

interface SearchProps {
  onSearch: (term: string) => void;
  placeholder?: string;
}

const Search: React.FC<SearchProps> = ({
  onSearch,
  placeholder = "Search...",
}) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="flex items-center space-x-2">
      {showSearch && (
        <Input
          id="search"
          label=""
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder={placeholder}
        />
      )}
      <button
          className="p-2 rounded-full bg-custom-grey hover:bg-opacity-80"
          onClick={() => setShowSearch(!showSearch)}
        >
        <MagnifyingGlassIcon className="h-5 w-5 text-custom-black" />
      </button>
    </div>
  );
};

export default Search;
