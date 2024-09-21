// src/pages/ProductDetailPage.js
import React, { useEffect, useState } from "react";
import { getProductByBarcode } from "../api/openFoodFacts";
import { useParams } from "react-router-dom"; // Assuming you're using react-router

const ProductDetailPage = () => {
  const { barcode } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductByBarcode(barcode);
      setProduct(data.product);
    };
    fetchProduct();
  }, [barcode]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <img
        src={product.image_url || "https://via.placeholder.com/150"}
        alt={product.product_name}
        className="w-full h-60 object-cover mb-4"
      />
      <h1 className="text-2xl font-bold mb-4">{product.product_name}</h1>
      <p>Ingredients: {product.ingredients_text || "N/A"}</p>
      <p>Energy: {product.nutriments.energy || "N/A"}</p>
      <p>Fat: {product.nutriments.fat || "N/A"}</p>
      <p>Proteins: {product.nutriments.proteins || "N/A"}</p>
      {/* Add other nutritional details */}
    </div>
  );
};

export default ProductDetailPage;
