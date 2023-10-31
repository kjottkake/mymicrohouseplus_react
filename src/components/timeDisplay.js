import React, { useState, useEffect } from 'react';

function TimeDisplay() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update the time every 1 second (1000 milliseconds)

    return () => {
      clearInterval(intervalId); // Clean up the interval when the component unmounts
    };
  }, []);

  return (
    <div>
      <p>Last Updated: {currentTime.toLocaleTimeString()}</p>
    </div>
  );
}

export default TimeDisplay;