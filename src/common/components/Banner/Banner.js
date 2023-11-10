import React from "react";
import "./Banner.css";

export const Banner = () => {
  return (
    <div className="banner-container py-5">
      <div className="container text-center">
        <h1 className="display-4 my-4 display-md-lg">
          <span className="smaller-text">All kinds of</span>
          <br />
          <span className="slogun">OODITIES</span>
        </h1>
        <p className="lead lead-md-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
          ligula vitae arcu vehicula pellentesque.
        </p>
        <p>Shorter Lorem ipsum text.</p>
      </div>
    </div>
  );
};

export default Banner;
