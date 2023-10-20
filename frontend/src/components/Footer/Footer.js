import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
        <img className="logo" src="census-logo.png" alt="Logo" />
        </div>
        <div className="footer-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/data-collection">Data Collection</Link></li>
            <li><Link to="/user-profile">Profile</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-social">
        <Link to="#" className="social-link">Facebook</Link>
        <Link to="#" className="social-link">Twitter</Link>
        <Link to="#" className="social-link">LinkedIn</Link>
      </div>
    </footer>
  );
};

export default Footer;
