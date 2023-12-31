import React, { useState, useEffect } from 'react';
import SensorReading from './sensorReading';


// Function to determine the color based on totalProduction
const assignColor = (n) => {
  if (n<= 2) {
    return 'red';
  } else if (n > 2) {
    return 'green';
  } else {
    return 'orange'; // You can choose another color for values between 0 and 2
  }
};

const EnergyPanel = () => {

  //animation effect
const [count, setCount] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    if (count < 100) {
      setCount(count + 1);
    } else {
      clearInterval(interval); // Stop the counting animation when it reaches 100
    }
  }, 25); // You can adjust the interval duration for the counting speed

  return () => {
    clearInterval(interval); // Cleanup the interval on component unmount
  };
}, [count]);



  const solarProduction = 6; // Replace with your actual solar production value
  const turbineProduction = 4; // Replace with your actual turbine production value
  const totalProduction = solarProduction + turbineProduction;
  const totalUsage = 4;
  const balance = totalProduction - totalUsage;

  return (
    <div>
      <h1>Energy Use Overview</h1>
      <SensorReading  label="Battery Levels" value={count} unit="%" color="green" link="/energy" border="green"/>
      <SensorReading label="Solar Production" value={solarProduction} unit="W" color={assignColor(solarProduction)} />
      <SensorReading label="Turbine Production" value={turbineProduction} unit="W" color={assignColor(turbineProduction)} />
      <SensorReading label="Total Production" value={totalProduction} unit="W" color="orange"/>
      <SensorReading label="Usage" value={4} unit="W" color="red" />
      <SensorReading label="Balance" value={balance} unit="W" color={assignColor(balance)} />
    </div>
  );
};

export default EnergyPanel;