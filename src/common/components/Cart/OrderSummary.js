import React from "react";
import { NavLink } from "react-router-dom";

import Card from "react-bootstrap/Card";

const OrderSummary = ({ products }) => {
  // Calculate the total price of the products
  const subtotal = products.reduce((total, product) => {
    return total + parseFloat(product.price) * product.quantity;
  }, 0);

  // Fixed delivery fee for demonstration purposes
  const deliveryFee = 5.0;

  // Calculate the total amount
  const total = subtotal + deliveryFee;

  return (
    <Card className="shadow mb-5">
      <Card.Body>
        <Card.Title>Tilauksen yhteenveto</Card.Title>
        <hr />
        <div className="mb-3">
          Tilaus: <span className="fw-bold"> €{subtotal.toFixed(2)}</span>
        </div>
        <div className="mb-3">
          Toimituskulut:
          <span className="fw-bold"> €{deliveryFee.toFixed(2)}</span>
        </div>
        <div>
          Yhteensä: <span className="fw-bold"> €{total.toFixed(2)}</span>
        </div>
        <hr />
        <NavLink to="/checkout" className="btn btn-primary btn-lg">
          Jatka kassalle
        </NavLink>
      </Card.Body>
    </Card>
  );
};

export default OrderSummary;
