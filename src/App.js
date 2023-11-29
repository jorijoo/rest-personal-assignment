import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./common/components/Navbar/Navbar";
import Footer from "./common/components/Footer/Footer";
import RoutesComponent from "./common/routes/RoutesComponent";

function App() {
  // Tarkistaan onko tuotteita ostoskorissa localStoragesta
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <RoutesComponent cartItems={cartItems} setCartItems={setCartItems} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
