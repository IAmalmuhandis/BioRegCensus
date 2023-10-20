import React, { useState } from 'react';
import './dataCollectionForm.css';

const DataCollectionForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    address: '',
    useBiometricScanner: false,
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? !prevData[name] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Input validation
    if (!formData.name || !formData.age || !formData.gender || !formData.address) {
      setErrorMessage('Please fill out all fields');
      setSuccessMessage('');
    } else {
      // Save the data to local storage
      if (saveToLocalStorage(formData)) {
        // Data saved successfully, set success message
        setSuccessMessage('Data saved successfully!');
        setErrorMessage('');
        // Clear the form
        setFormData({
          name: '',
          age: '',
          gender: '',
          address: '',
          useBiometricScanner: false,
        });
        // Clear the success message after a few seconds
        setTimeout(() => {
          setSuccessMessage('');
        }, 5000);
      }
    }
  };

  // Function to save data to local storage
  const saveToLocalStorage = (data) => {
    try {
      const existingData = JSON.parse(localStorage.getItem('collectedData')) || [];
      existingData.push(data);
      localStorage.setItem('collectedData', JSON.stringify(existingData));
      return true;
    } catch (error) {
      console.error('Error saving data to local storage:', error);
      return false;
    }
  };

  const handleFingerprintScan = () => {
    console.log('scanner working...');
  };

  return (
    <div className="data-collection-form">
      <h2>Data Collection Form</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="biometricScanner">Biometric Scanner:</label>
          <div className="biometric-scanner">
            <button className="scanner-btn" type="button" onClick={handleFingerprintScan}>
              Scan
            </button>
          </div>
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DataCollectionForm;
