import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartCard from "../components/Cart/CartCard";
import OrderSummary from "../components/Cart/OrderSummary";

const Cart = () => {
  const backImageUrl = "/Group 7.png";

  // Dummy data
  const [productsInCart, setProductsInCart] = useState([
    {
      id: 1,
      productName: "Macbook Pro 13",
      price: "1200.00",
      imageUrl: null,
      category: "Computers",
      quantity: 1,
    },
    {
      id: 2,
      productName: "iPhone 13",
      price: "700.00",
      imageUrl: null,
      category: "Phones",
      quantity: 1,
    },
    {
      id: 3,
      productName: "Umbro football",
      price: "25.00",
      imageUrl: null,
      category: "Sports",
      quantity: 1,
    },
    {
      id: 4,
      productName: "Fender Stratocaster",
      price: "1550.00",
      imageUrl: null,
      category: "Music",
      quantity: 1,
    },
    {
      id: 5,
      productName: "Gipson Les Paul",
      price: "2100.00",
      imageUrl: null,
      category: "Music",
      quantity: 1,
    },
    {
      id: 6,
      productName: "Google Pixel",
      price: "780.00",
      imageUrl: null,
      category: "Phones",
      quantity: 1,
    },
  ]);

  const removeProduct = (productId) => {
    setProductsInCart((currentProducts) =>
      currentProducts.filter((product) => product.id !== productId)
    );
  };

  const increaseQuantity = (productId) => {
    setProductsInCart((currentProducts) =>
      currentProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setProductsInCart((currentProducts) =>
      currentProducts.map((product) =>
        product.id === productId && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
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
          {productsInCart.map((product) => (
            <CartCard
              key={product.id}
              productName={product.productName}
              price={product.price}
              quantity={product.quantity}
              increaseQuantity={() => increaseQuantity(product.id)}
              decreaseQuantity={() => decreaseQuantity(product.id)}
              removeProduct={() => removeProduct(product.id)}
            />
          ))}
        </Col>
        <Col md={4}>
          <OrderSummary products={productsInCart} />
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
