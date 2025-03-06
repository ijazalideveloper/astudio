import React, { useState, useEffect } from "react";
import { ProductsFilters as ProductsFiltersType } from "../../types/product";
import Input from "../ui/Input";

interface ProductsFiltersProps {
  onFilterChange: (filters: ProductsFiltersType) => void;
  currentFilters: ProductsFiltersType;
}

const ProductsFilters: React.FC<ProductsFiltersProps> = ({
  onFilterChange,
  currentFilters,
}) => {
  const [title, setTitle] = useState(currentFilters.title || "");
  const [brand, setBrand] = useState(currentFilters.brand || "");
  const [category, setCategory] = useState(currentFilters.category || "");

  // Reset other fields when one is filled
  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (value) {
      setBrand("");
      setCategory("");
    }
    updateFilters({ title: value, brand: "", category: "" });
  };

  const handleBrandChange = (value: string) => {
    setBrand(value);
    if (value) {
      setTitle("");
      setCategory("");
    }
    updateFilters({ title: "", brand: value, category: "" });
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    if (value) {
      setTitle("");
      setBrand("");
    }
    updateFilters({ title: "", brand: "", category: value });
  };

  const updateFilters = (filters: ProductsFiltersType) => {
    onFilterChange(filters);
  };

  useEffect(() => {
    setTitle(currentFilters.title || "");
    setBrand(currentFilters.brand || "");
    setCategory(currentFilters.category || "");
  }, [currentFilters]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-[15px]">
      <Input
        id="title"
        label="Title"
        value={title}
        onChange={(value) => handleTitleChange(value)}
        placeholder="Filter by title"
      />
      <Input
        id="brand"
        label="Brand"
        value={brand}
        onChange={(value) => handleBrandChange(value)}
        placeholder="Filter by Brand"
      />
      <Input
        id="category"
        label="Category"
        value={category}
        onChange={(value) => handleCategoryChange(value)}
        placeholder="Filter by category"
      />
    </div>
  );
};

export default ProductsFilters;
