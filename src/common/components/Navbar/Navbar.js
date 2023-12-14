import React, { useState } from "react";
import "./Navbar.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { cartContentSignal } from "../../signals/CartSignals";
import { useSignalEffect } from "@preact/signals-react";
import { authTokenSignal } from "../../signals/AuthTokenSignal";

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [cartItemAmount, setCartItemAmount] = useState(0);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const closeNavbar = () => setIsNavCollapsed(true);

  // Päivitä ostoskorin tuotteiden määrä
  useSignalEffect(() => {
    const products = cartContentSignal.value;
    let sum = 0;

    for (var item of products) {
      sum += item.quantity;
    }

    setCartItemAmount(sum);
  });

  // Tarkista onko käyttäjä kirjautunut sisään
  const isUserLoggedIn = authTokenSignal.value !== "";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src="/logoMtaty.png" alt="Logo" width="70" height="70" />
        </NavLink>

        <div className="search-bar">
          <SearchBar />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse}
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${!isNavCollapsed ? "show" : ""}`} id="navbarResponsive">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" onClick={closeNavbar}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className="nav-link" onClick={closeNavbar}>
                Products
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav navbar-right">
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link">
                <FontAwesomeIcon icon={faCartShopping} /><b className="cart-amount-number">  ( {cartItemAmount} )</b>
              </NavLink>
            </li>
            <li className="nav-item">
              {isUserLoggedIn ? (
                <NavLink to="/user" className="nav-link" onClick={closeNavbar}>
                  Oma profiili
                </NavLink>
              ) : (
                <NavLink to="/login" className="nav-link">
                  Kirjaudu sisään
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
