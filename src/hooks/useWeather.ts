import { useState } from 'react';
import axios from 'axios';
import { WeatherData, ForecastData } from '../types/weather';

const API_KEY = '5796abbde9106b7da4febfae8c44c232'; // Replace with your OpenWeather API key
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';
const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export const useWeather = () => {
  // State for storing current weather data
  const [data, setData] = useState<WeatherData | null>(null);
  
  // State for storing weather forecast data (5-day forecast)
  const [forecast, setForecast] = useState<ForecastData[] | null>(null);
  
  // State for storing error message
  const [error, setError] = useState<string | null>(null);

  // Fetch weather data by city name
  const fetchWeatherByCity = async (city: string, unit: string = 'metric') => {
    try {
      // Fetch current weather data
      const currentResponse = await axios.get(WEATHER_URL, {
        params: { q: city, units: unit, appid: API_KEY },
      });

      // Update the state with the fetched current weather data
      setData(currentResponse.data);
      setError(null);

      // Fetch 5-day weather forecast data
      const forecastResponse = await axios.get(FORECAST_URL, {
        params: { q: city, units: unit, appid: API_KEY },
      });

      setForecast(forecastResponse.data.list);
    } catch (err) {
      setError('Failed to fetch weather data for city');
      setData(null);
      setForecast(null);
    }
  };

  // Fetch weather data by geolocation (latitude and longitude)
  const fetchWeatherByLocation = async (lat: number, lon: number, unit: string = 'metric') => {
    try {
      const currentResponse = await axios.get(WEATHER_URL, {
        params: { lat, lon, units: unit, appid: API_KEY },
      });

      setData(currentResponse.data);
      setError(null);

      const forecastResponse = await axios.get(FORECAST_URL, {
        params: { lat, lon, units: unit, appid: API_KEY },
      });

      setForecast(forecastResponse.data.list);
    } catch (err) {
      setError('Failed to fetch weather data for location');
      setData(null);
      setForecast(null);
    }
  };

  return {
    data,
    forecast,
    error,
    fetchWeatherByCity,
    fetchWeatherByLocation,
  };
};
