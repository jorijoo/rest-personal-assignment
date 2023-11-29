import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
// server link for products
const productsURL = "https://big.kapsi.fi/products";

const DisplayByCategory = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(productsURL)
      .then((res) => {
        // Filter products based on selected category
        const filteredProducts = selectedCategory
          ? res.data.filter(
              (product) => product.category === selectedCategory.categoryName
            )
          : res.data;
        setProducts(filteredProducts);
      })
      .catch((err) => console.log(err.message));
  }, [selectedCategory]);

  return (
    <div className="container p-4">
      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default DisplayByCategory;
