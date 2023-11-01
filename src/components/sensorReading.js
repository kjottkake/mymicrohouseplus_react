// SensorReading.js
import React from 'react';

function SensorReading(props) {
  const { label, value, unit, color, link, border} = props;

  return (
    <a href={`${link}`}>
    <div className={`sensor-reading ${border}`}>
      
      <p className={`sensor-value ${color}`}>
        {value} {unit}
      </p>
      <p className="sensor-label">{label}</p>
    </div>
    </a>
  );
}

export default SensorReading;