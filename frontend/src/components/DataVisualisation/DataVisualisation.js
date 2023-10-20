import React, { useState, useRef, useEffect } from 'react';
import './dataVisualisation.css';
import Chart from 'chart.js/auto'; // Import Chart from 'chart.js/auto'

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

  let chartInstance = null;

  const chartRef = useRef(null);

  useEffect(() => {
    // Create the chart
    if (chartRef.current) {
      chartInstance = new Chart(chartRef.current, {
        type: 'bar',
        data: chartData,
      });
    }
  }, [chartData]);

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
    </div>
  );
};

export default DataAnalytics;
