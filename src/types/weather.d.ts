export interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: [
    {
      description: string;
      icon: string;
    }
  ];
  wind: {
    speed: number;
  };
}

export interface ForecastData {
  dt: number;
  main: {
    temp: number;
  };
  weather: [
    {
      description: string;
    }
  ];
}
