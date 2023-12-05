import { React } from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./ButtonStyles.css";
import { cartContentSignal } from "../../signals/CartSignals";
import { loginStatusSignal } from "../../signals/LoginStatusSignal";

const CartCard = (params) => {
  const product = params.product;
  const displayImage = product.imageUrl || "/Rectangle17.png";
  const closeIconUrl = "/Group6.png";

  /*
  ----------------------------------
  Function to increase item's quantity in cart
 ----------------------------------
  */
  const increaseQuantity = () => {
    const selectedProduct = cartContentSignal.value.find(prod => prod.id === product.id);

    if (selectedProduct) {
      if (selectedProduct.quantity >= product.unitsStored) {
        alert("Tuotetta ei ole varastossa haluamaasi määrää!");
        return;
      }
      selectedProduct.quantity++;
      cartContentSignal.value = [...cartContentSignal.value];
    }
  }

  /*
  ----------------------------------
  Function to decrease item's quantity in cart
 ----------------------------------
  */
  const decreaseQuantity = () => {
    const selectedProduct = cartContentSignal.value.find(prod => prod.id === product.id);

    if (selectedProduct) {
      selectedProduct.quantity--;

      if (selectedProduct.quantity === 0) {
        removeItem();
        return;
      }

      cartContentSignal.value = [...cartContentSignal.value];
    }
  };

  /*
  ----------------------------------
  Function to remove item from cart
  (If cart will be empty after item removal, clear local storage also. 
  When signal's content is 0, local storage won't be cleared automatically.)
 ----------------------------------
  */
  const removeItem = () => {
    const newContent = cartContentSignal.value.filter(prod => prod.id !== product.id);

    if (newContent.length === 0) {
      cartContentSignal.value = [];
      localStorage.setItem("cart", JSON.stringify([]));
    }
    else {
      cartContentSignal.value = newContent;
    }
  };

  console.log("Kirjautumistila:", loginStatusSignal.value); 
  console.log("Cart-tiedot:", cartContentSignal.value); 

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
            <div>{`Varastossa: ${product.unitsStored} kpl`}</div>
            <div>{`Määrä: ${cartContentSignal.value.find(prod => prod.id === product.id).quantity}`}</div>
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
