import React, { useState, useEffect } from 'react';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { ForecastCard } from './components/ForecastCard';
import { useWeather } from './hooks/useWeather';
import { Container, CircularProgress, Grid, Button, Typography, Box } from '@mui/material';

function App() {
  // State to store the city name, temperature unit, and loading status
  const { data, forecast, error, fetchWeather } = useWeather();
  const [city, setCity] = useState<string>(''); // city name state
  const [unit, setUnit] = useState<string>('metric'); // temperature unit (metric or imperial)
  const [loading, setLoading] = useState<boolean>(false); // loading state

  // Function to handle city search
  const handleSearch = (city: string) => {
    setCity(city); // Update the city state on search
  };

  // Function to toggle temperature unit between metric (°C) and imperial (°F)
  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === 'metric' ? 'imperial' : 'metric'));
  };

  // Effect hook to fetch weather data when city or unit changes
  useEffect(() => {
    if (city) {
      setLoading(true); // Set loading state to true before fetching
      fetchWeather(city, unit).finally(() => setLoading(false)); // Fetch weather data
    }
  }, [city, unit]); // Dependency on city and unit to re-fetch data when they change

  return (
    <Container maxWidth="md" style={{ paddingTop: '2rem' }}>
      {/* Search Bar component for city input */}
      <SearchBar onSearch={handleSearch} />

      {/* Button to toggle between metric and imperial units */}
      <Box display="flex" justifyContent="flex-end" marginTop={2}>
        <Button variant="contained" onClick={toggleUnit}>
          Toggle Unit
        </Button>
      </Box>

      {/* Loading spinner while fetching data */}
      {loading ? (
        <Box display="flex" justifyContent="center" marginTop={2}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          {/* Display error message if there's an issue fetching weather data */}
          {error && (
            <Box marginTop={2} textAlign="center" color="error.main">
              <Typography variant="h6">{error}</Typography>
            </Box>
          )}

          {/* Display weather card with current weather data */}
          {data && (
            <WeatherCard
              city={data.name}
              temp={data.main.temp}
              condition={data.weather[0].description}
              humidity={data.main.humidity}
              windSpeed={data.wind.speed}
              icon={data.weather[0].icon}
              unit={unit}
            />
          )}

          {/* Display 5-day forecast cards */}
          {forecast && (
            <Box marginTop={4}>
              <Typography variant="h5" align="center" gutterBottom>
                5-Day Forecast
              </Typography>
              <Grid container spacing={2}>
                {forecast.slice(0, 5).map((item: any) => (
                  <Grid item xs={12} sm={6} md={4} key={item.dt}>
                    <ForecastCard
                      date={new Date(item.dt * 1000).toLocaleDateString()} // Convert Unix timestamp to date string
                      temp={item.main.temp}
                      condition={item.weather[0].description}
                      unit={unit}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </>
      )}
    </Container>
  );
}

export default App;
