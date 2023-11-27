import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
// server link for products
const productsURL = "https://big.kapsi.fi/products";

const DisplayByCategory = ({ selectedCategory }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {//Modified to await async
      try {
        const response = await axios.get(productsURL);
        const data = response.data;

        // Filter products based on selected category
        const filteredProducts = selectedCategory
          ? data.filter((product) => product.category === selectedCategory.categoryName)
          : data;

        setProducts(filteredProducts);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [selectedCategory]);

  // Check if products have any items in it, if not show category and text to tell
  // that there are no items in category. 
  if (products.length >= 0) {
    return (
      <div className="container p-4">
        <div className="row">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

    );
  } else {
    try {
      return (
        <div className="container p-4">
          <div className="row">
            <h1>{`${selectedCategory.categoryName} ei sisällä tällä hetkellä tuotteita.`}</h1>
          </div>
        </div>
      );
    } catch (e) {
      console.log(e);
    }
  }
}

export default DisplayByCategory;