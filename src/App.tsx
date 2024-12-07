import React, { useState, useEffect } from 'react';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { ForecastCard } from './components/ForecastCard';
import { useWeather } from './hooks/useWeather';
import { Container, CircularProgress, Grid, Button, Typography, Box } from '@mui/material';

function App() {
  const { data, forecast, error, fetchWeather } = useWeather();
  const [city, setCity] = useState<string>(''); // city name state
  const [unit, setUnit] = useState<string>('metric'); // temperature unit (metric or imperial)
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = (city: string) => {
    setCity(city);
  };

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === 'metric' ? 'imperial' : 'metric'));
  };

  useEffect(() => {
    if (city) {
      setLoading(true);
      fetchWeather(city, unit).finally(() => setLoading(false)); // Fetch weather when city or unit changes
    }
  }, [city, unit]);

  return (
    <Container maxWidth="md" style={{ paddingTop: '2rem' }}>
      <SearchBar onSearch={handleSearch} />

      <Box display="flex" justifyContent="flex-end" marginTop={2}>
        <Button variant="contained" onClick={toggleUnit}>
          Toggle Unit
        </Button>
      </Box>

      {loading ? (
        <Box display="flex" justifyContent="center" marginTop={2}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          {error && (
            <Box marginTop={2} textAlign="center" color="error.main">
              <Typography variant="h6">{error}</Typography>
            </Box>
          )}

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
            <Box marginTop={4}>
              <Typography variant="h5" align="center" gutterBottom>
                5-Day Forecast
              </Typography>
              <Grid container spacing={2}>
                {forecast.slice(0, 5).map((item: any) => (
                  <Grid item xs={12} sm={6} md={4} key={item.dt}>
                    <ForecastCard
                      date={new Date(item.dt * 1000).toLocaleDateString()}
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
