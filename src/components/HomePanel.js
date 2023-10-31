import React from 'react';
import TopNav from './topnavbar';
import SensorReading from './sensorReading';
import Overview from './overView';
import TimeDisplay from './timeDisplay';
import LastRefreshDate from './lastRefreshDate';
import MyComponent from './myComponent';
const HomePanel = () => {
  return (
    <div className='homePanel'>
      <h1><a href='/'>myMicrohouse+</a></h1>
        {/* <TopNav /> */}
        <Overview />
        <SensorReading  label="Battery" value={100} unit="%" color="green" link="/energy"/>
        <SensorReading label="Interior Temperature" value={23} unit="°C" color="orange"/>
        <SensorReading label="Exterior Temperature" value={-2} unit="°C" color="blue" link="/weather"/>
        <SensorReading label="Humidity" value={65} unit="%" color="blue" />
        <SensorReading label="of 100 Liter Tank Left" value={65} unit="Liters" color="blue"/>

        <SensorReading label="test test test" value={"test Value"} units="test units" />
        <LastRefreshDate />
        <MyComponent />
    </div>
  );
};

export default HomePanel;