// SensorReading.js
import React from 'react';

function SensorReading(props) {
  const { label, value, unit } = props;

  return (
    <div className="sensor-reading">
      <h2 className="sensor-label">{label}</h2>
      <p className="sensor-value">
        {value} {unit}
      </p>
    </div>
  );
}

export default SensorReading;