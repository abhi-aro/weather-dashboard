import axios from 'axios';

const API_KEY = 'your_openweather_api_key';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherData = async (city: string) => {
  const response = await axios.get(BASE_URL, {
    params: { q: city, units: 'metric', appid: API_KEY },
  });
  return response.data;
};
