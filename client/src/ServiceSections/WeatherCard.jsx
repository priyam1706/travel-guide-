import React, { useState } from 'react';

const WeatherCard = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchWeatherData = async () => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const apiKey = '4b6aead5b0a37724cdfdcfe685bdbef2'; 
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        throw new Error('City not found or network error');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setErrorMessage('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!city) {
      setErrorMessage('Please enter a city name');
      return;
    }
    fetchWeatherData();
  };

  return (
    <div className="flex justify-center items-center h-full min-h-screen mb-20">
      <div className="p-4 rounded-lg bg-white shadow-md">
        <h2 className="text-lg font-semibold mb-4">Check Weather</h2>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="border border-gray-300 rounded-md px-3 py-2 mr-2 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
            disabled={!city || loading}
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>
        {weatherData && (
          <div className="mt-4">
            <h3 className="text-xl font-semibold">{weatherData.name}, {weatherData.sys.country}</h3>
            <p className="text-gray-600">Temperature: {weatherData.main.temp} °C</p>
            <p className="text-gray-600">Description: {weatherData.weather[0].description}</p>
          </div>
        )}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default WeatherCard;
