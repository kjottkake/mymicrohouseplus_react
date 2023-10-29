// SensorReading.js
import React from 'react';

function SensorReading(props) {
  const { label, value, unit, color } = props;

  return (
    <div className="sensor-reading">
      
      <p className={`sensor-value ${color}`}>
        {value} {unit}
      </p>
      <p className="sensor-label">{label}</p>
    </div>
  );
}

export default SensorReading;