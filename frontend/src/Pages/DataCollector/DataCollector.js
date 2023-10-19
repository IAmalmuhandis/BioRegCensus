import React, { useState } from 'react';
import './DataCollectorDashboard.css';
import UserProfile from './UserProfile';
import DataCollectionForm from './DataCollectionForm';
import DataVisualization from './DataVisualization';

const DataCollectorDashboard = ({ user }) => {
  const [collectedData, setCollectedData] = useState([]);

  const handleDataCollection = (data) => {
    // Add the collected data to the state or send it to the backend
    setCollectedData([...collectedData, data]);
  };

  return (
    <div className="data-collector-dashboard">
      <h1>Data Collector Dashboard</h1>
      <div className="dashboard-container">
        <div className="dashboard-section">
          <UserProfile user={user} />
        </div>
        <div className="dashboard-section">
          <DataCollectionForm onSubmit={handleDataCollection} />
        </div>
        <div className="dashboard-section">
          <DataVisualization data={collectedData} />
        </div>
      </div>
    </div>
  );
};

export default DataCollectorDashboard;
