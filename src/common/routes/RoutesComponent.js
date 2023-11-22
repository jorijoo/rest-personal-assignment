import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import DisplayProducts from "./DisplayProducts";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import DisplayCategories from "./DisplayCategories";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/displayProducts" element={<DisplayProducts />} />
      <Route path="/Productcategories" element={<DisplayCategories />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
};

export default RoutesComponent;
