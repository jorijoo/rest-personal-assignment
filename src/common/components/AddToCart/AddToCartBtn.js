import React from "react";
import axios from "axios";

const AddToCartBtn = ({ product, setCartItems, cartItems }) => {
  const addToCart = async () => {
    try {
      // Tarkista tuotteen saatavuus backendistä
      const response = await axios.post("https://big.kapsi.fi/units_stored", {
        productId: product.id,
      });

      if (response.data.units_stored > 0) {
        // Lisää tuote ostoskoriin
        setCartItems((currentItems) => [...currentItems, product]);
      } else {
        // Näytä virheviesti
        alert("Tuote ei ole varastossa");
      }
    } catch (error) {
      console.error("Virhe tarkistettaessa tuotteen saatavuutta", error);
    }
  };

  return <button onClick={addToCart}>Lisää ostoskoriin</button>;
};

export default AddToCartBtn;
