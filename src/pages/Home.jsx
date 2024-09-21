// src/pages/Home.js
import React, { useEffect, useState } from "react";
import {
  getProductsByCategory,
  searchProductsByName,
} from "../api/openFoodFacts";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import SortOptions from "../components/SortOptions";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("snacks");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProductsByCategory(category);
      setProducts(data.products || []);
    };
    fetchProducts();
  }, [category]);

  const handleSearch = async (query) => {
    const data = await searchProductsByName(query);
    setProducts(data.products || []);
  };

  const handleSort = (option) => {
    let sortedProducts = [...products];
    if (option === "name-asc") {
      sortedProducts.sort((a, b) =>
        a.product_name.localeCompare(b.product_name)
      );
    } else if (option === "name-desc") {
      sortedProducts.sort((a, b) =>
        b.product_name.localeCompare(a.product_name)
      );
    }
    setProducts(sortedProducts);
    setSortOption(option);
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={handleSearch} />
      <CategoryFilter
        onSelectCategory={(selectedCategory) => setCategory(selectedCategory)}
      />
      <SortOptions onSort={handleSort} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.code} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
