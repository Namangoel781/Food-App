// src/components/SortOptions.js
import React from "react";

const SortOptions = ({ onSort }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-6">
      <button
        onClick={() => onSort("name-asc")}
        className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
      >
        Sort by Name (A-Z)
      </button>
      <button
        onClick={() => onSort("name-desc")}
        className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
      >
        Sort by Name (Z-A)
      </button>
    </div>
  );
};

export default SortOptions;
