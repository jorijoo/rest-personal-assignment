import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartCard from "../components/Cart/CartCard";
import OrderSummary from "../components/Cart/OrderSummary";

const Cart = ({ cartItems, setCartItems }) => {
  const backImageUrl = "/Group7.png";

  const removeProduct = (productId) => {
    setCartItems((currentProducts) =>
      currentProducts.filter((product) => product.id !== productId)
    );

    // Nouda nykyinen ostoskori Local Storagesta
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Poista tuote ostoskorista Local Storagessa
    const updatedCart = currentCart.filter(
      (product) => product.id !== productId
    );

    // Päivitä Local Storage uudella ostoskorilla
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQuantity = (productId) => {
    setCartItems((currentProducts) =>
      currentProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );

    // Nouda nykyinen ostoskori Local Storagesta
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Etsi lisättävä tuote
    const productToAdd = currentCart.find(
      (product) => product.id === productId
    );

    if (productToAdd) {
      // Päivitä tuotteen määrää
      productToAdd.quantity += 1;
    }

    // Päivitä Local Storage kaikilla tuotteilla
    localStorage.setItem("cart", JSON.stringify(currentCart));
  };

  const decreaseQuantity = (productId) => {
    setCartItems((currentProducts) =>
      currentProducts.map((product) =>
        product.id === productId && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );

    // Nouda nykyinen ostoskori Local Storagesta
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Etsi vähennettävä tuote
    const productToDecrease = currentCart.find(
      (product) => product.id === productId
    );

    if (productToDecrease && productToDecrease.quantity > 1) {
      // Vähennä tuotteen määrää
      productToDecrease.quantity -= 1;
    } else {
      // Poista tuote ostoskorista, jos määrä on 1
      const updatedCart = currentCart.filter(
        (product) => product.id !== productId
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  return (
    <Container className="mt-5">
      <Row className="align-items-center mb-5">
        <Col xs={12} md={1}>
          <NavLink to="/" className="nav-link">
            <img src={backImageUrl} alt="Back" className="img-fluid" />
          </NavLink>
        </Col>
        <Col xs={12} md={11}>
          <h1 className="text-md-center mt-3">Ostoskori</h1>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          {cartItems.map((product) => (
            <CartCard
              key={product.id}
              productName={product.productName}
              price={product.price}
              quantity={product.quantity}
              increaseQuantity={() => increaseQuantity(product.id)}
              decreaseQuantity={() => decreaseQuantity(product.id)}
              removeProduct={() => removeProduct(product.id)}
              imageUrl={product.imageUrl}
            />
          ))}
        </Col>
        <Col md={4}>
          <OrderSummary products={cartItems} />
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
