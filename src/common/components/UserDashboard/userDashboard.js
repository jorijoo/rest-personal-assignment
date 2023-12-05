import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginStatusSignal } from "../../signals/LoginStatusSignal";

const UserDashboard = () => {
  const navigate = useNavigate();

  // Check login status using loginStatusSignal
  const isLoggedIn = loginStatusSignal.value === "Login Successful";

  // Log out
  const handleLogout = () => {
    try {
      // Remove token from localStorage (you can keep this part)
      localStorage.removeItem("token");

      // Update loginStatusSignal
      loginStatusSignal.value = "Login Failed";

      // Navigate back to the home page using the navigate hook
      navigate("/");
      
      // Log or display a message to the user
      console.log('You have been logged out.');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  console.log("UserDashboard - Login status:", isLoggedIn);

  return (
    <div>
      <h1>User Dashboard</h1>
      {isLoggedIn ? (
        <div>
          <p>You are logged in.</p>
          <button onClick={handleLogout}>Log out</button>
        </div>
      ) : (
        <div>
          <p>You are not logged in.</p>
          <Link to="/login">Log in</Link>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;