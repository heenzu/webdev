import React, { useState } from "react";
import axios from "axios";
import './Loginpage.css';  // Assuming you're still using a similar style from the earlier example

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Posting to authentication API
      const res = await axios.post("http://localhost:1337/api/auth/local", {
        identifier: email,
        password: password,
      });

      // Save token to localStorage and redirect
      localStorage.setItem('token', res.data.jwt);
      window.location.href = "/";
    } catch (err) {
      setError("Invalid credentials"); // Set error message if authentication fails
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">LOGIN TO <span className="brand">ECOMMER</span></h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
          {error && <p className="error-text">{error}</p>}
        </form>
        <p className="signup-text">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
