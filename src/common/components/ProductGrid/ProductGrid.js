import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
const ProductGrid = () => {
  // Esimerkkidataa tuotteista
  const [products] = useState([
    {
      id: 1,
      name: "Nike Air Max",
      description: "Mukavat juoksukengät.",
      price: "129.99",
      image: "/exampleNikes.jpg",
    },
    {
      id: 2,
      name: "Adidas Ultra Boost",
      description: "Kestävät lenkkikengät.",
      price: "159.99",
      image: "/exampleNikes.jpg",
    },
    {
      id: 3,
      name: "Puma Runner",
      description: "Kevyet kengät.",
      price: "89.99",
      image: "/exampleNikes.jpg",
    },
    {
      id: 4,
      name: "Reebok Classic",
      description: "Klassiset retrotyyliset lenkkarit.",
      price: "75.99",
      image: "/exampleNikes.jpg",
    },
    {
      id: 5,
      name: "New Balance 990v5",
      description: "Ylelliset kävelykengät korkeatasoiseen mukavuuteen.",
      price: "199.99",
      image: "/exampleNikes.jpg",
    },
    {
      id: 6,
      name: "Asics Gel-Kayano",
      description: "Tuettu ja mukava pitkän matkan juoksukengät.",
      price: "149.99",
      image: "/exampleNikes.jpg",
    },
    {
      id: 7,
      name: "Under Armour HOVR",
      description: "Teknologisesti edistyneet juoksukengät jokaiselle.",
      price: "119.99",
      image: "/exampleNikes.jpg",
    },
  ]);

  return (
    <div className="container p-4">
      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
