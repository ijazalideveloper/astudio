import React from "react";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { MAX_PAGE_SIZE } from "@/utils/default";

interface PaginationProps {
  total: number;
  limit: number;
  skip: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  total,
  limit,
  skip,
  onPageChange,
}) => {
  const currentPage = Math.floor(skip / limit) + 1;
  const totalPages = Math.ceil(total / limit);

  const pageNumbers = [];
  const maxPageNumbers = MAX_PAGE_SIZE;

  let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbers / 2));
  let endPage = Math.min(totalPages, startPage + maxPageNumbers - 1);

  if (endPage - startPage + 1 < maxPageNumbers) {
    startPage = Math.max(1, endPage - maxPageNumbers + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex justify-between items-center mt-4">
      <span className="text-sm text-gray-700">
        Showing {skip + 1}-{Math.min(skip + limit, total)} of {total} items
      </span>
      <div className="flex space-x-1">
        <button
          className="px-3 py-1 bg-gray-300 text-gray-700 rounded"
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
        >
          <ChevronDoubleLeftIcon className="h-4 w-4 text-gray-700" />
        </button>
        <button
          className="px-3 py-1 bg-gray-300 text-gray-700 rounded"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeftIcon className="h-4 w-4 text-gray-700" />
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={`px-3 py-1 rounded ${
              currentPage === number
                ? "bg-blue-500 text-white "
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => onPageChange(number)}
          >
            {number}
          </button>
        ))}

        <button
          className="px-3 py-1 bg-gray-300 text-gray-700 rounded"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRightIcon className="h-4 w-4 text-gray-700" />
        </button>
        <button
          className="px-3 py-1 bg-gray-300 text-gray-700 rounded"
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          <ChevronDoubleRightIcon className="h-4 w-4 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
