import React, { useState, useEffect } from 'react';
import './userProfile.css';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ name: '', email: '', contactNumber: '', address: '' });

  useEffect(() => {
    // Retrieve user data from local storage on component mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setEditedUser(JSON.parse(storedUser));
    }
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Save the edited user information to local storage
    localStorage.setItem('user', JSON.stringify(editedUser));
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Cancel the editing and reset to the original user information
    setIsEditing(false);
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setEditedUser(JSON.parse(storedUser));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="user-info">
        <p>
          <strong>Name:</strong> {isEditing ? (
            <input
              type="text"
              name="name"
              value={editedUser.name}
              onChange={handleInputChange}
            />
          ) : (
            editedUser.name
          )}
        </p>
        <p>
          <strong>Email:</strong> {isEditing ? (
            <input
              type="email"
              name="email"
              value={editedUser.email}
              onChange={handleInputChange}
            />
          ) : (
            editedUser.email
          )}
        </p>
        <p>
          <strong>Role:</strong> Data Collector
        </p>
        <p>
          <strong>Contact Number:</strong> {isEditing ? (
            <input
              type="text"
              name="contactNumber"
              value={editedUser.contactNumber}
              onChange={handleInputChange}
            />
          ) : (
            editedUser.contactNumber || 'N/A'
          )}
        </p>
        <p>
          <strong>Address:</strong> {isEditing ? (
            <input
              type="text"
              name="address"
              value={editedUser.address}
              onChange={handleInputChange}
            />
          ) : (
            editedUser.address || 'N/A'
          )}
        </p>
        {isEditing ? (
          <div className="edit-buttons">
            <button className="save-button" onClick={handleSave}>
              Save
            </button>
            <button className="cancel-button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        ) : (
          <button className="edit-button" onClick={handleEdit}>
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
