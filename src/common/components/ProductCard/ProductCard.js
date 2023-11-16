import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="productCard col-sm-12 col-md-6 col-lg-4 col-xl-3">
      <Link to={`/product/${product.id}`} className="text-decoration-none">
        <div className="productCard-card mb-5 p-2 border border-dark border-1 rounded">
          <img
            src={product.image}
            alt={product.name}
            className="productCard-image card-img-top"
          />
          <div className="productCard-body card-body d-flex flex-column">
            <h5 className="productCard-title card-title mb-1 text-dark product-title">
              {product.name}
            </h5>
            <p className="productCard-text card-text text-dark product-title">
              {product.description}
            </p>
            <p className="productCard-price card-text fw-bold text-dark">
              €{product.price}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
