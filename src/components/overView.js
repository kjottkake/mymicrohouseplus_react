// overView.js
import React, { useState } from 'react';
import axios from 'axios'; // Assuming you are using axios for API requests


function Overview(props) {
  const { location, temp, tempHi, tempLo, humidity, precipitation, pressure, wind} = props;

  const [altitude, setAltitude] = useState(null);

  // Define a function to fetch altitude data when the last <p> tag is clicked
  const fetchAltitudeData = async () => {
    try {
      // Make an API request to fetch altitude data
      const response = await axios.get('http://192.168.10.170:3001/altitude');
      
      //praes json response
      const responseData = response.data; 

      // Update the altitude state with the received data
      setAltitude(responseData.altitude);
    } catch (error) {
      console.error('Error fetching altitude data:', error);
    }
  };


  return (
    <div className="overview">
        <div className='overview-topbar'>
            
            <p className="overview-location">
                Mustad Næringspark
            </p>
            <p className="overview-temperature">
                -9°C
            </p>
            <p className="overview-hi">
                HI: -7°C
            </p>
            <p className="overview-lo">
                LO: -11°C
            </p>
            {/* <image></image> */}
        </div>

        <div className='overview-bottombar'>
            <div className='overview-bottombar-item'>
                <p>
                    Humidity
                </p>
                <p className='value'>
                    {humidity}%
                </p>
            </div>
            <div className='overview-bottombar-item'>
                <p>
                    Precipitation
                </p>
                <p className='value'>
                    0%
                </p>
            </div>
            <div className='overview-bottombar-item'>
                <p>
                    Pressure
                </p>
                <p className='value'>
                    {pressure}
                </p>
            </div>
            <div className='overview-bottombar-item'>
                 <p>
                    Wind
                </p>
                <p className='value'>
                    2 m/s
                </p>
                <p onClick={fetchAltitudeData}>{altitude} m MSL</p>
            </div>
        </div>

    </div>
  );
}

export default Overview;