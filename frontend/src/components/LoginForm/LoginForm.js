import React, { useState } from 'react';
import './loginForm.css';
import { Link,  useNavigate  } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Get user data from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user with the provided email
    const user = users.find((user) => user.email === formData.email);

    // Check if a user with the provided email exists and if the password matches
    if (user && user.password === formData.password) {
      // User is authenticated, you can perform additional actions if needed
      console.log('Authentication successful');
      // Redirect to a dashboard or home page after successful login
      navigate('/dashboard');
    } else {
      // Authentication failed, show an error message
      console.log('Authentication failed. Please check your email and password.');
    }
  };

  return (
    <div className="login-form-container">
      <h2 className="form-title">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="form-label">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <button className="submit-button" type="submit">Login</button>
        <p className="register-link">Don't have an account? <Link to="/register">Register</Link></p>
      </form>
    </div>
  );
};

export default LoginForm;
