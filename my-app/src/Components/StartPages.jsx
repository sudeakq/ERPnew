import React, { useState } from 'react';
/* import axios from './Services/axios.js'; */ // Corrected import path
import axios from 'axios';
import startPageImage from '../images/UserStartPage.png';
import erasmusTitleImage from '../images/extramus_title_image.png';
import { StartPagesContainer } from './StartPages.style.js';
import { useNavigate } from 'react-router-dom';

const StartPages = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/admins/login', { email, password });
      console.log('Response:', response);
      if (response.data.success) {
        alert('Login successful');
        navigate("/dashboard");
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <StartPagesContainer>
    <div className="login-container">
      <div className="login-left">
        <img src={startPageImage} alt="Chart" className="chart-image" />
      </div>
      <div className="login-right">
        <form className="login-form" onSubmit={handleLogin}>
          <div className="image-title-container">
            <img src={erasmusTitleImage} alt="" />
            <h1 className="login-title poppins-extrabold ">HR Platform</h1>
          </div>
          {error && <p className="error">{error}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-input poppins-extrabold"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input poppins-extrabold"
          />
          <div className="login-options">
            <a href="/forgot-password" className="forgot-password poppins-extrabold">Forgot password?</a>
            <label className="remember-me poppins-extrabold ">
            <p>Remember me</p> <input type="checkbox" /> 
            </label>
          </div>
          <button type="submit" className="login-button poppins-bold">Log In</button>
        </form>
        <div className="register-link-container">
          <p className='register-text poppins-extrabold ' >Don't have an account ?</p>
          <a className='register-link poppins-extrabold ' href="/">Sign Up</a>
        </div>
      </div>
    </div>
    </StartPagesContainer>
  );
};

export default StartPages;
