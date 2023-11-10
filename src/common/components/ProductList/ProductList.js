import React from "react";
import "./ProductList.css";

import ProductItem from "../ProductItems/ProductItem";

export const ProductList = () => {
  const products = [
    {
      price: "59.99€",
      image: "/exampleNikes.jpg",
      description: "Nike Shoes",
    },
    {
      price: "59.99€",
      image: "/exampleNikes.jpg",
      description: "Nike Shoes",
    },

    {
      price: "59.99€",
      image: "/exampleNikes.jpg",
      description: "Nike Shoes",
    },

    {
      price: "59.99€",
      image: "/exampleNikes.jpg",
      description: "Nike Shoes",
    },

    {
      price: "59.99€",
      image: "/exampleNikes.jpg",
      description: "Nike Shoes",
    },
  ];

  return (
    <div className="container product-list-container">
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-md">
            <ProductItem
              price={product.price}
              image={product.image}
              description={product.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
