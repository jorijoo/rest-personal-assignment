import React, { useEffect, useState } from "react";
import "./ProductList.css";
import { ENV } from "../../constants/public_env";
import axios from "axios";
import ProductCard from "../Products/ProductCard";

export const ProductList = () => {

    const [products, setProducts] = useState([''])

    useEffect(() => {
        axios.get(`${ENV.BACKEND}/products`)
            .then(
                (res) => {
                    setProducts(res.data.sort(() => 0.5 - Math.random()).slice(0, 4))
                })
            .catch((err) => console.error("Virhe tuotteen haussa:", err))
    }, [])

    return (
        <div className="container product-list-container mb-5">
            <div className="row">
                {products.map((product) => (
                    <ProductCard product={product} />
                ))}
            </div>
        </div>
    )
};
