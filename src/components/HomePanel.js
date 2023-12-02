import React from 'react';
import TopNav from './topnavbar';
import SensorReading from './sensorReading';
import Overview from './overView';
import TimeDisplay from './timeDisplay';
import LastRefreshDate from './lastRefreshDate';
import MyComponent from './myComponent';

import { useState, useEffect } from 'react';

const HomePanel = () => {
  const [sensorData, setSensorData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/weather')  // Replace with your server URL
        .then(response => response.json())
        .then(data => {
            setSensorData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}, []);

if (!sensorData) {
  return <div>Loading...</div>;
}

// const lastEntry = sensorData[sensorData.length - 1]; // Get the last entry

// Adjusting for the nested structure
const lastEntry = sensorData.sensor_data[sensorData.sensor_data.length - 1];
  return (
    <div className='homePanel'>
      <h1><a href='/'>myMicrohouse+</a></h1>
        {/* <TopNav /> */}
        <Overview />
        <SensorReading  label="Battery Levels" value={100} unit="%" color="green" link="/energy" border="green"/>
        <SensorReading  label="Solar Levels" value={6} unit="W" color="green" link="/energy"/>
        <SensorReading label="Interior Temperature" value={lastEntry.temperature_celsius} unit="°C" color="orange"/>
        <SensorReading label="Exterior Temperature" value={-2} unit="°C" color="blue" link="/weather"/>
        <SensorReading label="Humidity" value={lastEntry.humidity_percentage} unit="%" color="blue" />
        <SensorReading label="of 100 Liter Tank Left" value={65} unit="Liters" color="blue"/>

        <SensorReading label="test test test" value={"test Value"} units="test units" />
        <LastRefreshDate />
        <MyComponent />
    </div>
  );
};

export default HomePanel;