//Import react pois aaltosulkeiden sisältä
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Products.css";
import DisplayByCategory from "./DisplayByCategory";

const categoryURL = "http://big.kapsi.fi/categories";

export default function Products() {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const getCategory = async () => {
      try {
        const result = await axios.get(categoryURL);
        setCategory(result.data);
      } catch (e) {
        console.log(e);
      }
    };
    getCategory();
  }, []);

    function divideByCategory(category) {
    setSelectedCategory(category);
  }

  return (
    <div id="container">
      <div id="button-container">
        <button  
            className="border border-dark border-1 rounded local-button-all" 
            onClick={() => setSelectedCategory(null)}>
                <div className='local-button-all'>Kaikki</div>
        </button>
        {category.map((category) => (
          //Tähän key atribuutti, oli ennen buttonissa
          <React.Fragment key={category.categoryName}>
            <button  className="border border-dark border-1 rounded" onClick={() => divideByCategory(category)}>
              <img className = 'productCard-image card-img-top'
                src={category.categoryName+".png"}
                alt={category.productName}
              />
              <div>{category.categoryName}</div>
            </button>
          </React.Fragment>
        ))}
      </div>
      <div id="card-container">
        {/* Tämä varmistaa, että oikea propsi lähtee displayByCategory komponentille. Ilman conditional
            renderingiä tulee runtime error */}
        <DisplayByCategory
          name={selectedCategory?.categoryName}
          selectedCategory={selectedCategory}
        />
      </div>
    </div>
  );
}
