import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./common/components/Navbar/Navbar";
import Footer from "./common/components/Footer/Footer";
import RoutesComponent from "./common/routes/RoutesComponent";
import { cartContentSignal } from "./common/signals/CartSignals"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    if (cartItems) {
      cartContentSignal.value = cartItems;
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <div className="content-wrapper">
          <Navbar />
          <RoutesComponent />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
