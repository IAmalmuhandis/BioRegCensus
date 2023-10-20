import React, { useState } from 'react';
import './registerForm.css';
import { Link, useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Get the existing users from local storage or initialize an empty array
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  
    // Create a new user object with the registration data
    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };
  
    // Add the new user to the array of existing users
    existingUsers.push(newUser);
  
    // Save the updated user data to local storage
    localStorage.setItem('users', JSON.stringify(existingUsers));
  
    // Optionally, you can clear the form after registration
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    navigate('/login');
  
    // Show a success message after successful registration
    setSuccessMessage('Registration successful! You can now log in.');
  };

  return (
    <div className="register-form-container">
      <h2 className="form-title">Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
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
        <div className="form-group">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <button className="submit-button" type="submit">Register</button>
        {successMessage && <p className="success-message">{successMessage}</p>}
        <p className="login-link">Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
};

export default RegisterForm;
