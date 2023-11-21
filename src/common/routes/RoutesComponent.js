import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import DisplayProducts from "./DisplayProducts";
import ProductDetail from "../components/ProductDetail/ProductDetail";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/displayProducts" element={<DisplayProducts />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
};

export default RoutesComponent;
