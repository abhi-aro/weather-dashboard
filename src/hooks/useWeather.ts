import { useState } from 'react';
import axios from 'axios';
import { WeatherData, ForecastData } from '../types/weather';

const API_KEY = '5796abbde9106b7da4febfae8c44c232'; // Replace with your OpenWeather API key
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';
const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export const useWeather = () => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (city: string, unit: string = 'metric') => {
    try {
      const currentResponse = await axios.get(WEATHER_URL, {
        params: { q: city, units: unit, appid: API_KEY },
      });

      setData(currentResponse.data);
      setError(null);

      const forecastResponse = await axios.get(FORECAST_URL, {
        params: { q: city, units: unit, appid: API_KEY },
      });

      setForecast(forecastResponse.data.list);
    } catch (err) {
      console.error(err)
      setError('Failed to fetch weather data');
      setData(null);
      setForecast(null);
    }
  };

  return { data, forecast, error, fetchWeather };
};
