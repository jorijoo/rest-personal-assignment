import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./common/components/Navbar/Navbar";
import Footer from "./common/components/Footer/Footer";
import RoutesComponent from "./common/routes/RoutesComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  // Tarkistaan onko tuotteita ostoskorissa localStoragesta
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {}, [cartItems]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content-wrapper">
          <RoutesComponent cartItems={cartItems} setCartItems={setCartItems} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
