export type WeatherData = {
  name: string; // City name
  main: {
    temp: number; // Current temperature
    feels_like: number; // Feels like temperature
    temp_min: number; // Minimum temperature
    temp_max: number; // Maximum temperature
    humidity: number; // Humidity percentage
  };
  weather: {
    description: string; // Weather condition description (e.g., "Clear", "Cloudy")
    icon: string; // Icon code from OpenWeather API
  }[];
  wind: {
    speed: number; // Wind speed in meters per second
  };
  visibility: number; // Visibility in meters
  clouds: {
    all: number; // Cloudiness percentage
  };
};

export type ForecastData = {
  dt: number; // Date in Unix timestamp
  main: {
    temp: number; // Temperature at the given time
    feels_like: number; // Feels like temperature
    temp_min: number; // Minimum temperature
    temp_max: number; // Maximum temperature
    humidity: number; // Humidity percentage
  };
  weather: {
    description: string; // Weather condition description (e.g., "Clear", "Cloudy")
    icon: string; // Icon code from OpenWeather API
  }[];
  wind: {
    speed: number; // Wind speed in meters per second
    gust: number; // Wind gust speed in meters per second
  };
  clouds: {
    all: number; // Cloudiness percentage
  };
};

export type ForecastResponse = {
  list: ForecastData[]; // Array of forecast data for 5 days with 3-hour intervals
};

export type WeatherApiResponse = {
  current: WeatherData; // Current weather data
  forecast: ForecastResponse; // Forecast data for 5 days with 3-hour intervals
};
