import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { useState } from 'react';

import './home.css'; // Import your CSS file
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <Header user={user} onLogout={handleLogout} />
      <div className="hero-section">
        <h1 className="hero-title">Welcome to the Biometric Census System</h1>
        <p className="hero-description">
          Streamline the census process with our efficient and secure system.
        </p>
        <div className="cta-buttons">
          <Link to="/register">
            <button className="cta-button">Register</button>
          </Link>
          <Link to="/login">
            <button className="cta-button">Login</button>
          </Link>
        </div>
      </div>
      <div className="features-section">
        <h2 className="features-title">Key Features</h2>
        <div className="feature">
          <div className="feature-icon">
            <i className="feature-icon-content fas fa-user-check"></i>
          </div>
          <div className="feature-text">
            <h3>Accurate Data Collection</h3>
            <p>Collect and store demographic and biometric data with precision.</p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <i className="feature-icon-content fas fa-chart-line"></i>
          </div>
          <div className="feature-text">
            <h3>Advanced Data Analysis</h3>
            <p>Generate insightful reports and track population trends.</p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <i className="feature-icon-content fas fa-lock"></i>
          </div>
          <div className="feature-text">
            <h3>Data Security</h3>
            <p>Ensure data privacy and security with our robust system.</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
