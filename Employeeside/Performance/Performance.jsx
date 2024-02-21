import React, { useEffect, useState } from 'react'
import Topbare from '../Topbare'

const Performance = (props) => {
  const [performanceData, setPerformanceData] = useState(null);

  useEffect(() => {
    fetchPerformanceData();
  }, []);

  const fetchPerformanceData = async () => {
    try {
      const response = await fetch('/employee/employeeId/performance'); // Replace employeeId with the actual ID
      const data = await response.json();
      setPerformanceData(data);
    } catch (error) {
      console.error('Error fetching performance data:', error);
    }
  };

  return (
    <div>
      <div><Topbare xxx={props.checkLogout}/></div>

      <div className="performance-page">
      <h1>Employee Performance</h1>
      {performanceData ? (
        <div>
          {/* Render performance data here */}
          {/* Example: */}
          <p>Employee ID: {performanceData.employeeId}</p>
          <p>Performance Score: {performanceData.performanceData.score}</p>
          {/* Add more performance metrics as needed */}
        </div>
      ) : (
        <p>Loading performance data...</p>
      )}
    </div>
    </div>
  )
}

export default Performance
