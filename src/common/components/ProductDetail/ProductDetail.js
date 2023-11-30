import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetail.css";
import { AddToCartBtn } from "../AddToCart/AddToCartBtn";

const ProductDetail = ({ cartItems, setCartItems }) => {
  //Haetaan tuotteen id URL:sta käyttämällä params
  let { id } = useParams();

  //Tilamuuttuja tuotteelle
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://big.kapsi.fi/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Virhe tuotteen haussa:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Ladataan...</div>;
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.imageUrl}
            alt={product.productName}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <div className="product-detail">
            <h1 className="display-4">{product.productName}</h1>
            <p className="lead">{product.productDescription}</p>
            <p className="price h3">€{product.price}</p>

            <AddToCartBtn
              product={product}
              setCartItems={setCartItems}
              cartItems={cartItems}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
