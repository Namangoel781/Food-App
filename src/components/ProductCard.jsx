// src/components/ProductCard.js
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-200">
      <img
        src={product.image_url || "https://via.placeholder.com/150"}
        alt={product.product_name}
        className="w-full h-40 object-cover rounded mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{product.product_name}</h3>
      <p className="text-sm text-gray-600 mb-2">
        Category: {product.categories_tags?.join(", ")}
      </p>
      <p className="text-sm text-gray-600 mb-2 truncate">
        Ingredients: {product.ingredients_text || "N/A"}
      </p>
      <p className="text-sm text-gray-600">
        Nutrition Grade: {product.nutrition_grades || "N/A"}
      </p>
    </div>
  );
};

export default ProductCard;
