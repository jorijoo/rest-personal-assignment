import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./ButtonStyles.css";

const CartCard = ({
  productName,
  price,
  quantity,
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
  imageUrl,
}) => {
  // Käytetään placeholder-kuvaa, jos imageUrl on null
  const displayImage = imageUrl || "/Rectangle17.png";

  const closeIconUrl = "/Group6.png";

  return (
    <Card className="mb-3 shadow rounded position-relative">
      <img
        src={closeIconUrl}
        alt="Poista"
        className="position-absolute"
        style={{
          top: "-18px",
          right: "-20px",
          cursor: "pointer",
          zIndex: "1000",
        }}
        onClick={removeProduct}
      />
      <Card.Body className="shadow">
        <Row>
          <Col md={3}>
            <img
              src={displayImage}
              alt={productName}
              className="img-fluid rounded"
            />
          </Col>
          <Col md={6}>
            <h5>{productName}</h5>
          </Col>
          <Col md={3}>
            <div>{`Hinta: €${price}`}</div>
            <div>{`Määrä: ${quantity}`}</div>
            <button className="quantity-button" onClick={decreaseQuantity}>
              -
            </button>
            <button className="quantity-button" onClick={increaseQuantity}>
              +
            </button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CartCard;
