import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetail.css";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://big.kapsi.fi/api/products/${id}`
        );
        console.log("Tuote ladattu:", response.data); // Lisää tämä rivi
        setProduct(response.data);
      } catch (error) {
        console.error("Virhe tuotteen haussa:", error);
        // Voit myös lisätä tilamuuttujan virheen näyttämistä varten
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
            <button className="btn btn-primary btn-lg">
              Lisää ostoskoriin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
