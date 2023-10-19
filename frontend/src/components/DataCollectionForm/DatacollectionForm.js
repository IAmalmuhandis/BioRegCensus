import React, { useState } from 'react';
import './dataCollectionForm.css';

const DataCollectionForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    address: '',
    // Add more fields as needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="data-collection-form">
      <h2>Data Collection Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <input type="text" name="gender" value={formData.gender} onChange={handleInputChange} />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleInputChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DataCollectionForm;
