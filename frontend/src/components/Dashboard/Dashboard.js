import React, { useEffect, useRef } from 'react';
import './dashboard.css';
import Chart from 'chart.js/auto';

const DashboardOverview = ({ totalPeople, otherData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Chart.js configuration
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May'], // Replace with the months you want to display
        datasets: [
          {
            label: 'Collected Data',
            data: otherData,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      };
      

    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    // Create the chart
    const chart = new Chart(chartRef.current, {
      type: 'bar', // Use 'bar' for a bar chart
      data: data,
      options: options,
    });

    // Cleanup when the component unmounts
    return () => {
      chart.destroy();
    };
  }, [otherData]);

  return (
    <div className="dashboard-overview">
      <h2>Dashboard Overview</h2>
      <div className="overview-content">
      <div className="overview-card">
         <h3 className="overview-title">Citizens Registered</h3>
         <p className="overview-number">{totalPeople}</p>
      </div>
        <div className="overview-chart">
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
