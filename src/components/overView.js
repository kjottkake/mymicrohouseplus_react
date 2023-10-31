// overView.js
import React from 'react';

function Overview(props) {
  const { location, temp, tempHi, tempLo, humidity, precipitation, pressure, wind} = props;

  return (
    <div className="overview">
        <div className='overview-topbar'>
            <p className="overview-location">
                Livegen, Bø i Telemark
            </p>
            <p className="overview-temperature">
                23°C
            </p>
            <p className="overview-hi">
                HI: -1°C
            </p>
            <p className="overview-lo">
                LO: -7°C
            </p>
            {/* <image></image> */}
        </div>

        <div className='overview-bottombar'>
            <div className='overview-bottombar-item'>
                <p>
                    Humidity
                </p>
                <p className='value'>
                    30%
                </p>
            </div>
            <div className='overview-bottombar-item'>
                <p>
                    Precipitation
                </p>
                <p className='value'>
                    30%
                </p>
            </div>
            <div className='overview-bottombar-item'>
                <p>
                    Pressure
                </p>
                <p className='value'>
                    30%
                </p>
            </div>
            <div className='overview-bottombar-item'>
                 <p>
                    Wind
                </p>
                <p className='value'>
                    20 m/s NW 
                </p>
            </div>
        </div>

    </div>
  );
}

export default Overview;