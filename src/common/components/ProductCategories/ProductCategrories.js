import { React, useState, useEffect } from 'react'
import axios from 'axios'
import "./ProductCategories.css"
import DisplayByCategory from '../DisplayByCategory/DisplayByCategory';

//server link for categories
const categoryURL = "http://big.kapsi.fi/categories";

export default function ProductCategrories() {
    //Categories from the servers /categories
    const [category, setCategory] = useState([]);
    // Save the selected category from the pressed button
    const [selectedCategory, setSelectedCategory] = useState(null);
 

    // get categories from server
    useEffect(() => {
        const getCategory = async () => {
            const result = await axios.get(categoryURL);
            setCategory(result.data);
        }
        getCategory();
    }, [])

    function divideByCategory(category){
        console.log(JSON.stringify(category) + " Habla")
        setSelectedCategory(category);
    }
    

    return (
        <div id="container">
            <div id="button-container">
                {category.map((category) => (
                    <>
                        <button key={category.categoryName} onClick={() => divideByCategory(category)}>
                            {category.categoryName}
                        </button>
                        
                    </>
                ))}
            </div>
            <div id="card-container">
                <DisplayByCategory name={category.name} selectedCategory={selectedCategory}/>
            </div>
        </div>

    );

}