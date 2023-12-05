import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { signal } from "@preact/signals-react";
import { loginStatusSignal } from "../../signals/LoginStatusSignal";



const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [pw, setPw] = useState("");
  const token = signal("");
  const navigate = useNavigate(); 

  // Prevent default form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/login", { username, pw })
      .then((resp) => {
        token.value = resp.data.jwtToken;
        localStorage.setItem("token", resp.data.jwtToken);
        // Update login status and navigate to the dashboard
        loginStatusSignal.value = resp.data.jwtToken ? "Login Successful" : "Login Failed";
        if (resp.data.jwtToken) {
          navigate("/user"); // Use navigate to go to the dashboard route on success
        }
      })
      .catch((error) => {
        console.log(error.message);
        loginStatusSignal.value = "Login Failed";
      });
  };

  return (
    <div className="login_template d-flex justify-content-center align-items-center vh-100">
      <div className="form_container p-5 rounded">
        {loginStatusSignal.value && <p>{loginStatusSignal.value}</p>}
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
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              type="password"
              placeholder="Enter Password"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <input
              type="checkbox"
              className="custom-control custom-checkbox"
              id="check"
            />
            <label htmlFor="check" className="custom-input-label ms-2">
              Remember me
            </label>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
          <p className="text-end mt-2">
            Forgot <a href="">Password?</a>
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
