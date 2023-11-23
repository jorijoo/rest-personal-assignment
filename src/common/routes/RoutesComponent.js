import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import DisplayProducts from "./DisplayProducts";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import DisplayCategories from "./DisplayCategories";
import Cart from "./Cart";
import Faq from "../components/FAQ/Faq";
import Contacts from "../components/Contacts/Contacts";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/displayProducts" element={<DisplayProducts />} />
      <Route path="/Productcategories" element={<DisplayCategories />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
};

export default RoutesComponent;
