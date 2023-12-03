import React, { useState, useEffect } from "react";
import Overview from "./overView";
import axios from "axios";

function WeatherInfo() {
  const [weatherData, setWeatherData] = useState(null);
  const [latitude, setLatitude] = useState("60.78925");
  const [longitude, setLongitude] = useState("10.67254");

  const API_URL = 'https://api.open-meteo.com/v1/forecast';

  const getWeather = async () => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          latitude: latitude,
          longitude: longitude,
          current: 'temperature_2m',
          daily: 'temperature_2m_max, temperature_2m_min',
          daily_days: 7,
        },
      });
      const { current, daily } = response.data;

      setWeatherData({
        current: {
          temperature: current.temperature_2m,
        },
        daily: {
          maxTemperature: daily.temperature_2m_max,
          minTemperature: daily.temperature_2m_min,
        },
      });
    } catch (error) {
      console.error('Error fetching weather data', error);
    }
  };

  useEffect(() => {
    if (latitude && longitude) {
      getWeather();
    }
  }, [latitude, longitude]);

  return (
    <div className="weather-info">
      <Overview
        maxTemperature={weatherData?.daily.maxTemperature}
        minTemperature={weatherData?.daily.minTemperature}
        temperature={weatherData?.current.temperature}
      />
    </div>
  );
}

export default WeatherInfo;



