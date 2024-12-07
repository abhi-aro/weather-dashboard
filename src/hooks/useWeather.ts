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

  // Function to fetch current weather and forecast data for a city
  const fetchWeather = async (city: string, unit: string = 'metric') => {
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

      // Update the state with the fetched forecast data
      setForecast(forecastResponse.data.list);
    } catch (err) {
      // Handle error and update the state
      console.error(err);
      setError('Failed to fetch weather data');
      setData(null);
      setForecast(null);
    }
  };

  // Return the weather data, forecast, error message, and fetchWeather function
  return { data, forecast, error, fetchWeather };
};
