import React from "react";
import "./Navbar.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="/logoMtaty.png" alt="Logo" width="70" height="70" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/displayProducts" className="nav-link">
                Products
              </NavLink>
            </li>
            <li className="nav-item">{/*Tässä toistaseksi ProducCategories etten muuta mitää muiden tekemää*/}
              <NavLink to="/Productcategories" className="nav-link">
                Product categories
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/link3" className="nav-link">
                Link3
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/link4" className="nav-link">
                Link4
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav navbar-right">
            <li className="nav-item">
              <a href="/cart" className="nav-link">
                <FontAwesomeIcon icon={faCartShopping} />
              </a>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link">
                Login
              </a>
            </li>
          </ul>
          <div className="d-lg-none">
            <SearchBar />
          </div>
        </div>
        <div className="d-none d-lg-flex ml-auto">
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
