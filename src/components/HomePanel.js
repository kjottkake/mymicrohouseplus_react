import React from 'react';
import TopNav from './topnavbar';
import SensorReading from './sensorReading';
const HomePanel = () => {
  return (
    <div className='homePanel'>
      <h1>MyMicrohouse+</h1>
        {/* <TopNav /> */}
        <SensorReading  label="Battery" value={100} unit="%" color="green"/>
        <SensorReading label="Interior Temperature" value={23} unit="°C" color="orange"/>
        <SensorReading label="Exterior Temperature" value={-2} unit="°C" color="blue"/>
        <SensorReading label="Humidity" value={65} unit="%" color="blue" />
        <SensorReading label="of 100 Liter Tank Left" value={65} unit="Liters" color="blue"/>

        <SensorReading label="test test test" value={"test Value"} units="test units" />



    </div>
  );
};

export default HomePanel;