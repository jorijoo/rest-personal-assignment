import React from "react";
import "./ProductItem.css";
import { Link } from 'react-router-dom'
const ProductItem = ({ price, image, description, link }) => {
  return (
    <div className="product-item">
      <img src={image} alt="Product" className="product-image" />
      <div className="product-info">
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
        <button> <Link to="../products">Osta täältä</Link></button>
      </div>
    </div>
  );
};

export default ProductItem;
