import React from 'react';
import TopNav from './topnavbar';
import SensorReading from './sensorReading';
const HomePanel = () => {
  return (
    <div>
      <h1>MyMicrohouse+</h1>
        <TopNav />
        <SensorReading  label="Battery" value={100} unit="%"/>
        <SensorReading label="Interior Temperature" value={23} unit="°C" />
        <SensorReading label="Exterior Temperature" value={-2} unit="°C" />
        <SensorReading label="Humidity" value={65} unit="%" />
        <SensorReading label="Water Level" value={65} unit="Liters" />
    </div>
  );
};

export default HomePanel;