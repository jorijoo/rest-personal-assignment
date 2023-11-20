import React from "react";
import { Card } from "react-bootstrap";

const OrderSummary = ({ products }) => {
  // Lasketaan tuotteiden kokonaishinta
  const subtotal = products.reduce((total, product) => {
    return total + parseFloat(product.price);
  }, 0);

  // Toimituskulu, joka tässä tapauksessa demo mielessä kiinteä
  const deliveryFee = 5.0;

  // Laskee kokonaissumman
  const total = subtotal + deliveryFee;

  return (
    <Card className="shadow">
      <Card.Body>
        <Card.Title>Order Summary</Card.Title>
        <hr />
        <div className="mb-3">
          Order: <span className="fw-bold"> €{subtotal.toFixed(2)}</span>
        </div>
        <div className="mb-3">
          Delivery Fee:
          <span className="fw-bold"> €{deliveryFee.toFixed(2)}</span>
        </div>
        <div>
          Total: <span className="fw-bold"> €{total.toFixed(2)}</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default OrderSummary;
