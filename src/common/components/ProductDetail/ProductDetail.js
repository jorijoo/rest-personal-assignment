import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Tähän backendistä haku aikanaan
    const exampleProduct = {
      id: id,
      name: "Esimerkkituote",
      description: "Esimerkkituotteen kuvaus.",
      price: "123.45",
      image: "/exampleNikes.jpg",
    };
    setProduct(exampleProduct);
  }, [id]);

  if (!product) {
    return <div>Ladataan...</div>;
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <div className="product-detail">
            <h1 className="display-4">{product.name}</h1>
            <p className="lead">{product.description}</p>
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
