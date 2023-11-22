import { React, useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from "../ProductCard/ProductCard";
import "./ProductCategories.css"

//server link for categories
const categoryURL = "http://big.kapsi.fi/categories";

export default function ProductCategrories() {
    //Categories from the servers /categories
    const [category, setCategory] = useState([]);
    //Save category that is in the pressed button
    const [selectedButton, setSelectedButton] = useState(null);
 

    // get categories from server
    useEffect(() => {
        const getCategory = async () => {
            const result = await axios.get(categoryURL);
            setCategory(result.data);
        }
        getCategory();
    }, [])

    

    return (
        <div>{/*Odota ja ihmettele*/}
            {category.map((category) => (
                <>
                    <button onClick={() => setSelectedButton(category.categoryName)}>{category.categoryName}</button>
                </>
            ))}

        </div>

    );

}