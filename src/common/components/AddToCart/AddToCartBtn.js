import React from "react";
import axios from "axios";

export const AddToCartBtn = ({ product, setCartItems, cartItems }) => {
  const addToCart = async () => {
    try {
      // Tarkista tuotteen saatavuus paikallisesta backendistä
      const response = await axios.post("https://big.kapsi.fi/units_stored", {
        productId: product.id,
      });

      if (response.data.units_stored > 0) {
        // Tarkista löytyykö tuote korista
        const existingProduct = cartItems.find(
          (cartItem) => cartItem.id === product.id
        );

        let updatedCartItems;
        if (existingProduct) {
          // Jos löytyy koristas niin päivitä tuotteen määrä
          updatedCartItems = cartItems.map((cartItem) =>
            cartItem.id === product.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          );
        } else {
          // jos ei löydy niin päivitä ostoskori uudella tuotteella
          updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
        }

        // Päivitä ostoskorin tila
        setCartItems(updatedCartItems);

        // Tallenna päivitetty ostoskori localStorageen
        localStorage.setItem("cart", JSON.stringify(updatedCartItems));
        alert("Tuote lisätty ostoskoriin");
      } else {
        alert("Tuote ei ole varastossa");
      }
    } catch (error) {
      console.error("Virhe tarkistettaessa tuotteen saatavuutta", error);
    }
  };

  return (
    <button className="btn btn-primary btn-lg" onClick={addToCart}>
      Lisää ostoskoriin
    </button>
  );
};
