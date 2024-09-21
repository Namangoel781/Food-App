// src/pages/ProductDetailPage.js
import React, { useEffect, useState } from "react";
import { getProductByBarcode } from "../api/openFoodFacts";
import { useParams } from "react-router-dom";

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
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={product.image_url || "https://via.placeholder.com/150"}
          alt={product.product_name}
          className="w-full md:w-1/3 h-auto object-cover rounded"
        />
        <div>
          <h1 className="text-2xl font-bold mb-4">{product.product_name}</h1>
          <p className="text-lg mb-2">
            Ingredients: {product.ingredients_text || "N/A"}
          </p>
          <p className="text-lg mb-2">
            Energy: {product.nutriments.energy || "N/A"}
          </p>
          <p className="text-lg mb-2">Fat: {product.nutriments.fat || "N/A"}</p>
          <p className="text-lg mb-2">
            Proteins: {product.nutriments.proteins || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
