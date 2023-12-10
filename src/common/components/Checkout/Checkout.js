import { useEffect } from "react"
import { jwtDecode } from "jwt-decode";
import { cartContentSignal } from "../../signals/CartSignals";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import CheckoutItemCard from "./CheckoutItemCard";
import { authTokenSignal } from "../../signals/AuthTokenSignal";

const productsURL = "http://big.kapsi.fi/products";

export default function Checkout() {

    const navigate = useNavigate();

    useEffect(() => {

        /* 
        -------------------------
        Check the stock amount:
            1) All good, continue
            2) Mismatch: -update cart content to match stock content. 
        -------------------------
        */
        const fetchData = async () => {
            try {

                const response = await axios.get(productsURL);
                const stockProducts = response.data;

                for (const cartProduct of cartContentSignal.value) {
                    const stockProduct = stockProducts.find(prod => prod.id === cartProduct.id)

                    if (stockProduct) {
                        if (cartProduct.quantity > stockProduct.unitsStored) {
                            cartProduct.quantity = stockProduct.unitsStored;
                        }
                    }
                }

                cartContentSignal.value = [...cartContentSignal.value]

            } catch (error) {
                console.log(error.message);
            }
        };

        fetchData()

    }, []);

    
    //  * Send POST request to place order, uncomment when backend api supports order
    //  * NEEDS customerId handling also, current id is only manually created for testing purposes only.
    

    // ...
    
    const postOrder = async () => {
        // Käytä tokenia globaalista signaalista
        const token = authTokenSignal.value;
        if (!token) {
          console.log("Ei tokenia");
          return;
        }
    
        try {
            // Dekoodaa token
            const decoded = jwtDecode(token);
            const customerId = decoded.userId;
    
            const body = { customerId: customerId, products: cartContentSignal.value };
    
            // Lähetä tilaus backendille sisällyttäen token Authorization-headeriin
            const response = await axios.post("http://big.kapsi.fi/order", body, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
    
            // Jos tilaus onnistuu, tyhjennä ostoskori jne.
            cartContentSignal.value = [];
            localStorage.setItem("cart", JSON.stringify([]));
            alert("Tilaus lähti!");
            navigate("/");
        } catch (error) {
            if (error.response) {
                // Virhe HTTP-pyynnössä
                console.error("Virhe lähettäessä tilausta:", error.response);
            } else if (error instanceof jwtDecode.InvalidTokenError) {
                // Virhe tokenin dekoodauksessa
                console.error("Virheellinen token:", error.message);
            } else {
                // Muu yleinen virhe
                console.error("Yleinen virhe:", error.message);
            }
        }
    };
    
    
    
  
    
    const backImageUrl = "/Group7.png";

    // Calculate the total price of the products
    const subtotal = cartContentSignal.value.reduce((total, product) => {
        return total + parseFloat(product.price) * product.quantity;
    }, 0);

    // Fixed delivery fee for demonstration purposes
    const deliveryFee = 5.0;

    // Calculate the total amount
    const total = subtotal + deliveryFee;

    const submitOrder = (e) => {
        e.preventDefault();

        
        //  * Uncomment below when backend supports order API, user id handling is also needed
         postOrder();
         

        cartContentSignal.value = []
        localStorage.setItem("cart", JSON.stringify([]));
        alert("Tilaus lähti!");
        navigate("/")
    }

    return (
        <Container className="mt-5">
            <Row className="align-items-center mb-5">
                <Col xs={12} md={1}>
                    <NavLink to="/cart" className="nav-link">
                        <img src={backImageUrl} alt="Back" className="img-fluid" />
                    </NavLink>
                </Col>
                <Col xs={12} md={11}>
                    <h1 className="text-md-center mt-3">KASSA</h1>
                </Col>
            </Row>
            <Row>
                <Col md={8}>
                    {cartContentSignal.value.map((product) => (
                        <CheckoutItemCard key={product.id} product={product} />
                    ))}
                </Col>
                <Col md={4}>
                    <Card className="shadow mb-5">
                        <Card.Body>
                            <Card.Title>Tilaus:</Card.Title>
                            <hr />
                            <div>
                                Yhteensä (sis. toimituskulut {deliveryFee}€): <span className="fw-bold"> €{total.toFixed(2)}</span>
                            </div>
                            <hr />
                            <Button variant="primary" onClick={(event) => submitOrder(event)}>MAKSA</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};