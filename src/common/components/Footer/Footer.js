import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-container text-dark pt-3 pb-3">
      <div className="container pt-2">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <h4>Tietoa Daavidin divarista</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="footer-link">
                  Lorem ipsum dolor
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Sit amet
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Consectetur
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <h4>Asiakaspalvelu</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="footer-link">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Toimitukset
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Palautukset
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <h4>Seuraa meitä</h4>
            <div className="footer-social-links">
              <a href="#" className="footer-social-icon me-2">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="footer-social-icon me-2">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="footer-social-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
        <div className="row copyright-container">
          <div className="col-12 text-center mt-3">
            <p className="text-muted">
              &copy; {year} Daavidin divari. Kaikki oikeudet pidätetään.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
