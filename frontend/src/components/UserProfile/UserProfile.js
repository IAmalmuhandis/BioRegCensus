import React from 'react';
import './userProfile.css';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="user-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        {/* Add more user information as needed */}
      </div>
    </div>
  );
};

export default UserProfile;
