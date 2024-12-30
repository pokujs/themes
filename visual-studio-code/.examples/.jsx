import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherDashboard = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = 'your_api_key_here';
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

  useEffect(() => {
    if (location) {
      fetchWeather();
    }
  }, [location]);

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: location,
          appid: API_KEY,
          units: 'metric',
        },
      });
      setWeather(response.data);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-4'>Weather Dashboard</h1>
      <form onSubmit={handleSubmit} className='mb-4'>
        <input
          type='text'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder='Enter city name'
          className='border p-2 mr-2'
        />
        <button type='submit' className='bg-blue-500 text-white p-2 rounded'>
          Get Weather
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p className='text-red-500'>{error}</p>}
      {weather && (
        <div>
          <h2 className='text-2xl mb-2'>
            {weather.name}, {weather.sys.country}
          </h2>
          <p className='text-4xl mb-4'>{Math.round(weather.main.temp)}°C</p>
          <p>{weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherDashboard;
