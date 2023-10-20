import React from 'react';
import Sidebar from '../../components/SideBar/SideBar';
import './dataCollector.css';
import DashboardOverview from '../../components/Dashboard/Dashboard';
import UserProfile from '../../components/UserProfile/UserProfile';
import DataCollectionForm from '../../components/DataCollectionForm/DatacollectionForm';
import DataVisualisation from '../../components/DataVisualisation/DataVisualisation';


const DataCollector = ({user}) => {
  const totalPeople = 500; // Replace with actual data
  const otherData = [150, 250, 300, 100, 200]; // Replace with actual data
  return (
    <>
      <Sidebar />
      <div className="dashboard-content">
        {/* <h1>Data Collector Dashboard</h1> */}
        {user.toRender === "profile" ? <UserProfile user={user} /> : user.toRender === "data-Collection" ? <DataCollectionForm/> : 
         user.toRender === "data-visualisation" ? <DataVisualisation/> : <DashboardOverview totalPeople={totalPeople} otherData={otherData}  />}
        
      </div>
    </>
  );
};

export default DataCollector;
