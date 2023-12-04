import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetail.css";
import { cartContentSignal } from "../../signals/CartSignals";

const ProductDetail = () => {
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

  /*
  ------------------------------
  Function to add selected item in cart
  ------------------------------
  */
  const addToCart = async () => {
    const currentProduct = cartContentSignal.value.find(p => p.id === product.id);

    if (currentProduct) {
      if (currentProduct.quantity >= product.unitsStored) {
        alert(`Tuotetta ostoskorissasi on jo (${currentProduct.quantity}) kpl,varastosaldo ylittyy joten tuotetta ei lisätty ostoskoriin!`);
        return;
      }
      currentProduct.quantity++;
      cartContentSignal.value = [...cartContentSignal.value];
    }
    else {
      cartContentSignal.value = [...cartContentSignal.value, { ...product, quantity: 1 }];
    }

    alert("Tuote '" + product.productName + "' lisätty ostoskoriin");
  };

  /*
  -----------------
   To change stock number color if units stock is low : good
  -----------------
  */
  const styleForStockNumber = {
    color: product.unitsStored < 5 ? 'red' : 'green'
  };

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
            <p className="lead">Varastossa: <b style={styleForStockNumber}>{product.unitsStored} </b> kpl</p>
            <p className="price h3">€{product.price}</p>
            <button className="btn btn-primary btn-lg" onClick={() => addToCart()}>Lisää ostoskoriin</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
