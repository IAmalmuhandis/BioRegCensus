import React from 'react';
import './dataVisualisation.css';

const DataVisualization = ({ data }) => {
  // You can use charting libraries like Chart.js or D3.js for more advanced visualizations
  // Here, we'll just display basic data

  return (
    <div className="data-visualization">
      <h2>Data Visualization</h2>
      <p>Data collected by the data collector:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataVisualization;
