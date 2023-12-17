import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { updateAuthToken } from "../../signals/AuthTokenSignal";
import { LOCALIZATION } from "../../constants/fi";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://big.kapsi.fi/login", { username, pw: password })
      .then((resp) => {
        updateAuthToken(resp.data.jwtToken);
        if (resp.data.jwtToken) {
          sessionStorage.setItem("token", resp.data.jwtToken);
          // Kirjautuminen onnistui, ohjaa käyttäjä sivulle user dashboard
          navigate("/user");
        }
      })
      .catch((error) => {
        console.error(error.message);
        setErrorMessage(LOCALIZATION.ERROR_LOGIN)

      });
  };

  return (
    <div className="login_template d-flex justify-content-center align-items-center vh-100">
      <div className="form_container p-5 rounded">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">{LOCALIZATION.LOGIN}</h3>
          {errorMessage && (
            <div className="alert alert-danger">{errorMessage}</div>
          )}
          <div className="mb-2">
            <label htmlFor="username">{LOCALIZATION.USERNAME}</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder={LOCALIZATION.USERNAME_PLACEHOLDER}
              className="form-control"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">{LOCALIZATION.PASSWORD}</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder={LOCALIZATION.PASSWORD_PLACEHOLDER}
              className="form-control"
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              {LOCALIZATION.LOGIN}
            </button>
          </div>
          <p className="text-end mt-2">
            {LOCALIZATION.FORGOT} <a href="#">{LOCALIZATION.PASSWORD}?</a>
            <Link to="/signup" className="ms-2">
              {LOCALIZATION.REGISTER}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
