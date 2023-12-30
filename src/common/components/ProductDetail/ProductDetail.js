import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetail.css";
import { cartContentSignal } from "../../signals/CartSignals";
import { ENV } from '../../constants/public_env'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ProductDetail = () => {
    //Haetaan tuotteen id URL:sta käyttämällä params
    let { id } = useParams();

    //Tilamuuttuja tuotteelle
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${ENV.BACKEND}/products/${id}`);
                setProduct(response.data);

            } catch (error) {
                console.error("Virhe tuotteen haussa:", error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Ladataan...</div>;
    }

    /*
    ------------------------------
    Function to add selected item in cart
    ------------------------------
    */
    const addToCart = async () => {
        const currentProduct = cartContentSignal.value.find(p => p.id === product.id);

        if (currentProduct) {
            if (currentProduct.quantity >= product.unitsStored) {
                alert(`Tuotetta ostoskorissasi on jo (${currentProduct.quantity}) kpl,varastosaldo ylittyy joten tuotetta ei lisätty ostoskoriin!`);
                return;
            }
            currentProduct.quantity++;
            cartContentSignal.value = [...cartContentSignal.value];
        }
        else {
            cartContentSignal.value = [...cartContentSignal.value, { ...product, quantity: 1 }];
        }

        alert("Tuote '" + product.productName + "' lisätty ostoskoriin");
    };

    /**
     * ----------------------------
     * Report product reputation
     * ----------------------------
     */
    const CheckRep = () => {
        const repCount = +product.positiveReputation + +product.negativeReputation

        const reputation = (repCount > 4)
            ? `${Math.round(product.positiveReputation / repCount * 100)} %`
            : 'Ei tarpeeksi arvosteluita'

        return (
            <>
                <p className="lead my-2">
                    Asiakkaiden tyytyväisyys tuotteeseen: {reputation}
                </p>
            </>
        )
    }

    /**
     * ----------------------------
     * Customer reviews
     * ---------------------------- 
     */

    /**
     * -----------------------------
     * Handle reputation input
     * -----------------------------
     */
    const Reputation = () => {

        const submitVote = (e, rep) => {
            e.preventDefault()

            console.log(id, rep)

            axios.post(`${ENV.BACKEND}/reputation`, { id: id, reputation: rep })
            .catch(err => console.log(err))
        }

        return (
            <>
                <CheckRep />
                <h1>Anna palautetta tuoteesta</h1>
                <Form>
                    <Form.Group className="mb-3" id="reputation">
                        <Button
                            className="me-2"
                            variant="success"
                            id="submitButton"
                            type="submit"
                            onClick={(e) => submitVote(e, 1)}>
                            +
                        </Button>
                        <Button
                            variant="danger"
                            id="submitButton"
                            type="submit"
                            onClick={(e) => submitVote(e, 0)}>
                            -
                        </Button>
                    </Form.Group>
                </Form>
            </>
        )
    }

    /*
    -----------------
     To change stock number color if units stock is low : good
    -----------------
    */
    const styleForStockNumber = {
        color: product.unitsStored < 5 ? 'red' : 'green'
    };

    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={product.imageUrl}
                        alt={product.productName}
                        className="img-fluid"
                    />
                </div>
                <div className="col-md-6">
                    <div className="product-detail">
                        <h1 className="display-4">{product.productName}</h1>
                        <p className="lead">{product.productDescription}</p>
                        <p className="lead">Varastossa: <b style={styleForStockNumber}>{product.unitsStored} </b> kpl</p>
                        <p className="price h3">€{product.price}</p>
                        <button className="btn btn-primary btn-lg"
                            onClick={() => addToCart()}
                            disabled={product.unitsStored === 0}>
                            Lisää ostoskoriin
                        </button>
                        {product.unitsStored === 0 && <p className="text-danger">Tuote on loppu varastosta</p>}
                        {/* Feedback area */}
                        <Reputation />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
