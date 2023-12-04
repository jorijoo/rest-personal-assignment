import { React, useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./ButtonStyles.css";
import { cartContentSignal } from "../../signals/CartSignals";

const CartCard = (params) => {

  const [quantity, setQuantity] = useState(0)
  const product = params.product;

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const currentProductInCart = cartItems.find((item) => item.id === product.id);

    if (currentProductInCart) {
      setQuantity(currentProductInCart.quantity)
    }

  }, []);

  const displayImage = product.imageUrl || "/Rectangle17.png";
  const closeIconUrl = "/Group6.png";

  /*
  ----------------------------------
  Function to increase item's quantity in cart
 ----------------------------------
  */
  const increaseQuantity = () => {
    const selectedProduct = cartContentSignal.value.find(prod => prod.id === product.id)

    if (selectedProduct) {
      selectedProduct.quantity++;
      setQuantity(selectedProduct.quantity)
      cartContentSignal.value = [...cartContentSignal.value]
    }
  }

  /*
  ----------------------------------
  Function to decrease item's quantity in cart
 ----------------------------------
  */
  const decreaseQuantity = () => {
    const selectedProduct = cartContentSignal.value.find(prod => prod.id === product.id)

    if (selectedProduct) {
      selectedProduct.quantity--;

      if (selectedProduct.quantity == 0) {
        removeItem()
        return
      }

      setQuantity(selectedProduct.quantity)
      cartContentSignal.value = [...cartContentSignal.value]
    }
  }

  /*
  ----------------------------------
  Function to remove item from cart
  (If cart will be empty after item removal, clear local storage also. 
  When signal's content is 0, local storage won't be cleared automatically.)
 ----------------------------------
  */
  const removeItem = () => {
    const newContent = cartContentSignal.value.filter(prod => prod.id !== product.id)

    if (newContent.length == 0) {
      cartContentSignal.value = []
      localStorage.setItem("cart", JSON.stringify([]));
    }
    else {
      cartContentSignal.value = newContent
    }
  }

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
        onClick={() => removeItem()}
      />
      <Card.Body className="shadow">
        <Row>
          <Col md={3}>
            <img
              src={displayImage}
              alt={product.productName}
              className="img-fluid rounded"
            />
          </Col>
          <Col md={6}>
            <h5>{product.productName}</h5>
          </Col>
          <Col md={3}>
            <div>{`Hinta: €${product.price}`}</div>
            <div>{`Määrä: ${quantity}`}</div>
            <button className="quantity-button" onClick={() => decreaseQuantity()}>
              -
            </button>
            <button className="quantity-button" onClick={() => increaseQuantity()}>
              +
            </button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CartCard;
