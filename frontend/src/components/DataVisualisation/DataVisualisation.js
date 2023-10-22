import React, { useState, useRef, useEffect } from 'react';
import './dataVisualisation.css';
import Chart from 'chart.js/auto';

const dummyData = [
  { month: 'Jan', progress: 80 },
  { month: 'Feb', progress: 60 },
  { month: 'Mar', progress: 40 },
  { month: 'Apr', progress: 75 },
  { month: 'May', progress: 90 },
  { month: 'Jun', progress: 65 },
  { month: 'Jul', progress: 50 },
  { month: 'Aug', progress: 75 },
  { month: 'Sep', progress: 85 },
  { month: 'Oct', progress: 45 },
  { month: 'Nov', progress: 60 },
  { month: 'Dec', progress: 70 },
];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const DataAnalytics = () => {
  const [year, setYear] = useState(2023);
  const [tableData, setTableData] = useState(JSON.parse(localStorage.getItem('collectedData')) || []);

  const chartData = {
    labels: months,
    datasets: [
      {
        label: 'Monthly Progress',
        data: dummyData.map((data) => data.progress),
        backgroundColor: 'rgba(0, 121, 107, 0.6)',
        borderWidth: 1,
      },
    ],
  };

  const chartRef = useRef(null);

  useEffect(() => {
    // Create the chart
    if (chartRef.current) {
      const chartInstance = new Chart(chartRef.current, {
        type: 'bar',
        data: chartData,
      });

      return () => {
        // Cleanup by destroying the chart
        chartInstance.destroy();
      };
    }
  }, [chartData]);

  // Function to delete an entry from the list
  const handleDeleteEntry = (index) => {
    const updatedTableData = [...tableData];
    updatedTableData.splice(index, 1);
    setTableData(updatedTableData);
    localStorage.setItem('collectedData', JSON.stringify(updatedTableData));
  };

  return (
    <div className="data-analytics">
      <h2>Data Analytics for {year}</h2>
      <div className="progress-bars">
        {dummyData.map((data, index) => (
          <div key={index} className="progress-bar">
            <div className="bar">
              <div className="progress" style={{ width: `${data.progress}%` }}></div>
            </div>
            <p>{data.month}</p>
          </div>
        ))}
      </div>
      <div className="chart-container">
        <canvas ref={chartRef}></canvas>
      </div>
      <div className="citizen-table">
        <h3>Citizen Data</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((citizen, index) => (
              <tr key={index}>
                <td>{citizen.name}</td>
                <td>{citizen.age}</td>
                <td>{citizen.address}</td>
                <td>{citizen.phone}</td>
                <td>
                  <button
                    onClick={() => handleDeleteEntry(index)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataAnalytics;
