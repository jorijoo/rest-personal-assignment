import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import CartCard from "../components/Cart/CartCard";
import OrderSummary from "../components/Cart/OrderSummary";
import { cartContentSignal } from "../signals/CartSignals";

const Cart = () => {
  const backImageUrl = "/Group7.png";

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
          {cartContentSignal.value.map((product) => (
            <CartCard
              key={product.id}
              product={product}
            />
          ))}
        </Col>
        <Col md={4}>
          <OrderSummary products={cartContentSignal.value} />
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
