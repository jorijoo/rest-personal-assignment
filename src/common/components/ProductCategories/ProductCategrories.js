import { React, useState, useEffect } from 'react'
import axios from 'axios'
import DisplayByCategory from '../DisplayByCategory/DisplayByCategory';


//server link for categories
const categoryURL = "http://big.kapsi.fi/categories";

export default function ProductCategrories() {

    const [category, setCategory] = useState([]);
 

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
                    <button>{category.categoryName}</button>
                    <DisplayByCategory/>
                </>
            ))}

        </div>


    );

}