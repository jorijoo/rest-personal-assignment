import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const CartCard = ({
  productName,
  price,
  imageUrl,
  category,
  removeProduct,
}) => {
  // Käytetään placeholder-kuvaa, jos imageUrl on null
  const displayImage = imageUrl || "placeholder-kuvan url";

  const closeIconUrl = "/Group 6.png";

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
            {/* Tuotekuva */}
            <img
              src={displayImage}
              alt={productName}
              className="img-fluid rounded"
            />
          </Col>
          <Col md={6}>
            <h5>{productName}</h5>
            <p>{category}</p>
          </Col>
          <Col md={3}>
            <div>{`Hinta: €${price}`}</div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CartCard;
