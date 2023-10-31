import React, { useState, useEffect } from 'react';
import SensorReading from './sensorReading';

//aka getSensorJsonData
function MyComponent() {
  const [lastEntry, setLastEntry] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        // Assuming data is an array and you want the last entry
        const lastDataEntry = data[data.length - 1];
        setLastEntry(lastDataEntry);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  if (!lastEntry) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Lastest Entry</h2>
      <SensorReading label ="Interior Temp" value={lastEntry.interior_temperature_celsius} unit="°C" color="orange"/>
      <p>Timestamp: {lastEntry.timestamp}</p>
      <p>Interior Temperature: {lastEntry.interior_temperature_celsius}°C</p>
      <p>Exterior Temperature: {lastEntry.exterior_temperature_celsius}°C</p>
      <p>Humidity: {lastEntry.humidity_percentage}%</p>
      <p>Wind Speed: {lastEntry.wind_speed_kmph} km/h</p>
    </div>
  );
}

export default MyComponent;