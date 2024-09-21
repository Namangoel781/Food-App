// src/components/CategoryFilter.js
import React from "react";

const CategoryFilter = ({ onSelectCategory }) => {
  const categories = ["snacks", "beverages", "dairy", "meats"];

  return (
    <div className="flex justify-center mb-6">
      <select
        onChange={(e) => onSelectCategory(e.target.value)}
        className="w-full sm:w-64 p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring focus:ring-blue-300"
      >
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
