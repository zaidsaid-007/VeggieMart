import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './App.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <div className="home-page">
      <h1>Products</h1>
      <ul className="product-list">
        <li className="product-item" onClick={handleLoginClick}>
          Product 1
        </li>
        <li className="product-item" onClick={handleLoginClick}>
          Product 2
        </li>
        <li className="product-item" onClick={handleLoginClick}>
          Product 3
        </li>
      </ul>
      <div>
        <button onClick={handleLoginClick}>Login</button>
        <button onClick={handleSignupClick}>Sign Up</button>
      </div>
    </div>
  );
};

export default HomePage;
