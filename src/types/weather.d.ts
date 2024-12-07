// Interface representing the structure of the current weather data
export interface WeatherData {
  name: string; // Name of the city
  main: {
    temp: number; // Current temperature
    humidity: number; // Current humidity percentage
  };
  weather: [
    {
      description: string; // Weather condition description (e.g., "clear sky")
      icon: string; // Icon code for the weather condition (used to display weather icon)
    }
  ];
  wind: {
    speed: number; // Wind speed in meters per second
  };
}

// Interface representing the structure of the forecast data
export interface ForecastData {
  dt: number; // Timestamp of the forecast data
  main: {
    temp: number; // Forecasted temperature
  };
  weather: [
    {
      description: string; // Weather condition description for the forecast
    }
  ];
}
