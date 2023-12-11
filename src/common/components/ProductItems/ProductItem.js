import React from "react";
import "./ProductItem.css";
import { Link } from 'react-router-dom'
const ProductItem = ({ price, image, description, id }) => {
  return (
    <div className="product-item">
      <img src={image} alt="Product" className="product-image" />
      <div className="product-info">
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
        <Link to={`/product/${id}`}>Osta täältä</Link>            
      </div>
    </div>
  );
};

export default ProductItem;
