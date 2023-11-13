import React from "react";
import { Banner } from "../components/Banner/Banner";
import { ProductList } from "../components/ProductList/ProductList";
import { Footer } from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <ProductList />
      <Footer />
    </div>
  )
}

export default Home
