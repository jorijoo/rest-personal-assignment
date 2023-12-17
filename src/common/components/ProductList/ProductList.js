import React, { useEffect, useState } from "react";
import "./ProductList.css";
import ProductItem from "../ProductItems/ProductItem";
import { ENV } from "../../constants/public_env";
import axios from "axios";

export const ProductList = () => {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get(`${ENV.BACKEND}/products`)
                const randomized = res.data.sort(() => 0.5 - Math.random())
                const selected = randomized.slice(0,5)
                setProducts(selected)

            } catch (error) {
                console.error("Virhe tuotteen haussa:", error)
            }
        };

        fetchProducts();
    }, []);

    if (!products) {
        return <div>Ladataan...</div>;
    }


    return (
        <div className="container product-list-container mb-5">
            <div className="row">
                {products.map((product, index) => (
                    <div key={index} className="col-md">
                        <ProductItem
                            price={product.price}
                            image={product.imageUrl}
                            description={product.description}
                            id={product.id}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
