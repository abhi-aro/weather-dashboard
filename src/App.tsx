import React, { useState, useEffect } from 'react';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { ForecastCard } from './components/ForecastCard';
import { useWeather } from './hooks/useWeather';

function App() {
  const { data, forecast, error, fetchWeather } = useWeather();
  const [city, setCity] = useState<string>(''); // city name state
  const [unit, setUnit] = useState<string>('metric'); // temperature unit (metric or imperial)

  const handleSearch = (city: string) => {
    setCity(city);
  };

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === 'metric' ? 'imperial' : 'metric'));
  };

  useEffect(() => {
    if (city) {
      fetchWeather(city, unit); // Fetch weather when city or unit changes
    }
  }, [city, unit]); // Dependency array to run only when city or unit changes

  return (
    <div style={{ padding: '16px', maxWidth: '600px', margin: 'auto' }}>
      <SearchBar onSearch={handleSearch} />
      
      <div style={{ marginTop: '16px' }}>
        <button onClick={toggleUnit}>Toggle Unit</button>
      </div>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      {data && (
        <>
          <WeatherCard
            city={data.name}
            temp={data.main.temp}
            condition={data.weather[0].description}
            humidity={data.main.humidity}
            windSpeed={data.wind.speed}
            icon={data.weather[0].icon}
            unit={unit}
          />
        </>
      )}

      {forecast && (
        <div>
          <h2>5-Day Forecast</h2>
          {forecast.slice(0, 5).map((item: any) => (
            <ForecastCard
              key={item.dt}
              date={new Date(item.dt * 1000).toLocaleDateString()}
              temp={item.main.temp}
              condition={item.weather[0].description}
              unit={unit}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
