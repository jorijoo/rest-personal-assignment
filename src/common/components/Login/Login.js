import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { updateAuthToken } from "../../signals/AuthTokenSignal";
import { clearAdminData, updateAdminToken } from "../../signals/AdminSignal";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  /**
   * Handle user navigation after successful login.
   */
  function HandleUserNavigation(token) {
    axios
      .get("http://big.kapsi.fi/personal", {
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
      .post("http://big.kapsi.fi/login", { username, pw: password })
      .then((resp) => {
        const token = resp.data.jwtToken;

        if (token) {
          HandleUserNavigation(token)
        }
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="login_template d-flex justify-content-center align-items-center vh-100">
      <div className="form_container p-5 rounded">
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">Sign In</h3>
          <div className="mb-2">
            <label htmlFor="username">Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Enter Username"
              className="form-control"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Password"
              className="form-control"
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
          <p className="text-end mt-2">
            Forgot <a href="#">Password?</a>
            <Link to="/signup" className="ms-2">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
