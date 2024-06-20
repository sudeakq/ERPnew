import React, { useState } from 'react';
import axios from 'axios';
import './StartPages.css';
import chartImage from '../images/leftimage_page-0001.jpg';

const StartPages = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login', { email, password });
      if (response.data.success) {
        alert('Login successful');
        // Handle successful login (e.g., redirect to dashboard)
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={chartImage} alt="Chart" className="chart-image" />
      </div>
      <div className="login-right">
        <form className="login-form" onSubmit={handleLogin}>
          <h1 className="login-title">EXTRAMUS HR Platform</h1>
          {error && <p className="error">{error}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />
          <div className="login-options">
            <a href="/forgot-password" className="forgot-password">Forgot password?</a>
            <label className="remember-me">
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <button type="submit" className="login-button">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default StartPages;
