// routes/index.js
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import DisplayProducts from "./DisplayProducts";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/displayProducts" element={<DisplayProducts />} />
    </Routes>
  );
};

export default RoutesComponent;
