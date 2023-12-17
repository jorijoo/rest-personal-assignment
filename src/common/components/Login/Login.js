import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { updateAuthToken } from "../../signals/AuthTokenSignal";
import { LOCALIZATION } from "../../constants/fi";
import { clearAdminData, updateAdminToken } from "../../signals/AdminSignal";
import { ENV } from '../../constants/public_env'


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  /**
   * Handle user navigation after successful login.
   */
  function HandleUserNavigation(token) {
    axios
      .get(`${ENV.BACKEND}/personal`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((resp) => {

        // Check for admin permissions
        if (resp.data.user_permissions === 5) {
          // reset admin data
          clearAdminData();

          const adminData = {
            userName: resp.data.username,
            adminLoggedIn: true
          }

          updateAdminToken(adminData)
          navigate("/admin")
        }
        // Customer handling
        else {
          updateAuthToken(token);
          sessionStorage.setItem("token", token);
          navigate("/user");
        }
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${ENV.BACKEND}/login`, { username, pw: password })
      .then((resp) => {
        const token = resp.data.jwtToken;

        if (token) {
          HandleUserNavigation(token)
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
              placeholder={`${LOCALIZATION.PLACE} ${LOCALIZATION.USERNAME.toLowerCase()}`}
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
              placeholder={`${LOCALIZATION.PLACE} ${LOCALIZATION.PASSWORD.toLowerCase()}`}
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
