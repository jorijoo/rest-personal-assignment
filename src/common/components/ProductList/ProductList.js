import React from "react";
import "./ProductList.css";

import ProductItem from "../ProductItems/ProductItem";

export const ProductList = () => {
  const products = [
    {
      price: "779.99€",
      image: "https://big.kapsi.fi/products/camera_retro.jpg",
      description: "Canon Retro 1970",
    },
    {
      price: "2989.99€",
      image: "https://big.kapsi.fi/products/camera_scoped.jpg",
      description: "Kodak Scope",
    },

    {
      price: "9.99€",
      image: "https://big.kapsi.fi/products/moustache_rainbow.jpg",
      description: "Viikset 3",
    },

    {
      price: "12.99€",
      image: "https://big.kapsi.fi/products/scale_model_tree_house.jpg",
      description: "Puutalo",
    },

    {
      price: "128.99€",
      image: "https://big.kapsi.fi/products/tattoo_pen_hairy_evil.jpg",
      description: "Parker 3",
    },
  ];

  return (
    <div className="container product-list-container mb-5">
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
