import React, { useState } from 'react';
import './dataCollector.css';
// import UserProfile from '../../components/UserProfile/UserProfile';
// import DataCollectionForm from '../../components/DataCollectionForm/DatacollectionForm';
// import DataVisualization from '../../components/DataVisualisation/DataVisualisation';

const DataCollectorDashboard = ({ user }) => {
  const [collectedData, setCollectedData] = useState([]);

  const handleDataCollection = (data) => {
    // Add the collected data to the state or send it to the backend
    setCollectedData([...collectedData, data]);
  };

  return (
    <div className="data-collector-dashboard">
      <h1>Data Collector Dashboard</h1>
    
    </div>
  );
};

export default DataCollectorDashboard;