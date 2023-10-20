import React from 'react';
import { Link } from 'react-router-dom';

import './header.css'; // Import your CSS file

const Header = ({ user, onLogout }) => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo-box">
          <Link to="/"><img className="logo"   src="census-logo.png" alt="Logo" /></Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/data-collection">Data Collection</Link></li>
          {user ? (
            <>
              <li><Link to="/profile">Profile</Link></li>
              <li><button onClick={onLogout}>Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
