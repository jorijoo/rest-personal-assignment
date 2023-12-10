import { Card, Row, Col } from "react-bootstrap";

export default function CheckoutItemCard(params) {
    const product = params.product;

    return (
        <Card className="mb-3 shadow rounded position-relative">
            <Row>
                <Col md={6}>
                    <h4>{product.productName}</h4>
                </Col>
                <Col md={8}>
                    <div>{`${product.quantity} KPL (€${product.price}/kpl) Yhteensä: €${(product.price * product.quantity).toFixed(2)} `}</div>
                </Col>
            </Row>
        </Card>
    )
};
