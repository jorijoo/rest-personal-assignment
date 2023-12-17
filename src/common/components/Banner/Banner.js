import React from "react";
import "./Banner.css";

export const Banner = () => {
  return (
    <div className="banner-container">
      <div className="container text-center">
        <h1 className="display-4 my-4 display-md-lg">
          <span className="smaller-text">Auki netissä 24/7</span>
          <br />
          <span className="slogun">Daavidin divari</span>
        </h1>
        <p className="lead lead-md-lg">
        Mitä et täältä löydä, sitä et tarvitse
        </p>
        <p>Tervetuloa</p>
      </div>
    </div>
  );
};

export default Banner;
