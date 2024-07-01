import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/products">Products</Link>
        </li>
        <li className="navbar-item">
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
