import React from "react";
import "./ProductItem.css";

const ProductItem = ({ price, image, description }) => {
  return (
    <div className="product-item">
      <img src={image} alt="Product" className="product-image" />
      <div className="product-info">
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
        <button>Add to basket</button>
      </div>
    </div>
  );
};

export default ProductItem;
