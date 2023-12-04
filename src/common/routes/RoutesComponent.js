import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import Cart from "./Cart";
import Faq from "../components/FAQ/Faq";
import Contacts from "../components/Contacts/Contacts";
import Products from "../components/Products/Products";
import Login from "../components/Login/Login";
import Signup from "../components/Login/Signup";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default RoutesComponent;
