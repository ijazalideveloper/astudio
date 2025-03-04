import React from "react";

const Pagination: React.FC = () => {
  return (
    <div className="flex justify-between items-center mt-4">
      <span className="text-sm text-gray-700">Showing 1-10 of 100 items</span>
      <div className="flex space-x-1">
        <button className="px-3 py-1 bg-gray-300 text-gray-700 rounded">
          «
        </button>
        <button className="px-3 py-1 bg-gray-300 text-gray-700 rounded">
          ‹
        </button>
        <button className="px-3 py-1 bg-blue-500 text-white rounded">1</button>
        <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded">
          2
        </button>
        <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded">
          3
        </button>
        <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded">
          4
        </button>
        <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded">
          5
        </button>
        <button className="px-3 py-1 bg-gray-300 text-gray-700 rounded">
          ›
        </button>
        <button className="px-3 py-1 bg-gray-300 text-gray-700 rounded">
          »
        </button>
      </div>
    </div>
  );
};

export default Pagination;
