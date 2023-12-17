import React, { useEffect, useState } from "react";
import "./ProductList.css";
import { ENV } from "../../constants/public_env";
import axios from "axios";
import ProductCard from "../Products/ProductCard";

export const ProductList = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`${ENV.BACKEND}/products`)
            .then(
                (res) => {
                    const randomized = res.data.sort(() => 0.5 - Math.random())
                    const selected = randomized.slice(0, 4)
                    setProducts(selected)
                })
            .catch((err) => console.error("Virhe tuotteen haussa:", err))}, []);

if (!products) {
    return <div>Ladataan...</div>;
} else {
    return (
        <div className="container product-list-container mb-5">
            <div className="row">
                {products.map((product) => (
                    <ProductCard product={product} />
                ))}
            </div>
        </div>
    )
}
};
