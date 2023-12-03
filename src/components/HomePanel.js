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
  const [batteryPercentage, setBatteryPercentage] = useState(null);

  useEffect(() => {
    fetch('http://192.168.10.170:3001/weather')  // Replace with your server URL
        .then(response => response.json())
        .then(data => {
            setSensorData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}, []);

useEffect(() => {
  // Make a GET request to your Express API
  fetch('http://localhost:3001/battery')
    .then((response) => response.json())
    .then((data) => {
      // Update the state with the battery percentage
      setBatteryPercentage(data.remainingPercentage);
    })
    .catch((error) => {
      console.error('Error fetching battery percentage:', error);
    });
}, []); // The empty dependency array ensures this effect runs once

if (!sensorData) {
  return <div>Loading...</div>;
}

// const lastEntry = sensorData[sensorData.length - 1]; // Get the last entry
const lastEntry = sensorData

// Adjusting for the nested structure
// const lastEntry = sensorData.sensor_data[sensorData.sensor_data.length - 1];
  return (
    <div className='homePanel'>
      <h1><a href='/'>myMicrohouse+</a></h1>
        {/* <TopNav /> */}
        <Overview humidity={lastEntry.humidity_percentage} pressure={lastEntry.pressure_hpa}/>
        <SensorReading  label="Battery Levels" value={batteryPercentage} unit="%" color="green" link="/energy" border="green"/>
        <SensorReading  label="Solar Levels" value={1} unit="W" color="green" link="/energy"/>
        <SensorReading label="Interior Temperature" value={lastEntry.temperature_celsius - 12} unit="°C" color="orange" link="#"/>
        <SensorReading label="Exterior Temperature" value={-9} unit="°C" color="blue" link="/weather"/>
        <SensorReading label="Humidity" value={lastEntry.humidity_percentage} unit="%" color="blue" link="#"/>
        <SensorReading label="of 100 Liter Tank Left" value={65} unit="Liters" color="blue" link="#"/>

        {/* <SensorReading label="test test test" value={"test Value"} units="test units" /> */}
        <LastRefreshDate />
        {/* <MyComponent /> */}
    </div>
  );
};

export default HomePanel;