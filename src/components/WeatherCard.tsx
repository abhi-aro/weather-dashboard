import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';

type WeatherProps = {
  city: string; // City name to display in the weather card
  temp: number; // Current temperature
  feelsLike: number; // "Feels like" temperature
  tempMin: number; // Minimum temperature
  tempMax: number; // Maximum temperature
  condition: string; // Weather condition (e.g., "Clear", "Cloudy")
  humidity: number; // Humidity percentage
  windSpeed: number; // Wind speed in meters per second
  visibility: number; // Visibility in meters
  cloudiness: number; // Cloudiness percentage
  icon: string; // Weather icon code from OpenWeather API
  unit: string; // Unit for temperature (either 'metric' or 'imperial')
};

export const WeatherCard: React.FC<WeatherProps> = ({
  city,
  temp,
  feelsLike,
  tempMin,
  tempMax,
  condition,
  humidity,
  windSpeed,
  visibility,
  cloudiness,
  icon,
  unit,
}) => {
  // Generate the URL for the weather icon based on the icon code from OpenWeather API
  const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;

  // Determine the temperature unit (°C for 'metric' and °F for 'imperial')
  const tempUnit = unit === 'metric' ? '°C' : '°F';

  return (
    <Card
      variant="outlined"
      sx={{
        boxShadow: 4,
        borderRadius: 3,
        marginBottom: 4,
        padding: 3,
        backgroundColor: '#f5f5f5',
        border: '1px solid #e0e0e0',
        maxWidth: 380,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        margin: 'auto',
        transition: 'all 0.3s ease-in-out', // Smooth hover transition
        '&:hover': {
          boxShadow: 10, // Increase shadow on hover for a floating effect
          transform: 'scale(1.02)', // Slight scaling effect for hover
        },
      }}
    >
      <CardContent>
        {/* Display city name */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            color: '#333',
            marginBottom: 2,
            fontSize: '1.4rem',
          }}
        >
          {city}
        </Typography>

        {/* Display weather icon */}
        <Box display="flex" justifyContent="center" sx={{ marginBottom: 2 }}>
          <CardMedia
            component="img"
            image={iconUrl}
            alt={condition}
            sx={{
              width: 80,
              height: 80,
              objectFit: 'contain',
              marginBottom: 1,
            }}
          />
        </Box>

        {/* Display temperature */}
        <Typography
          variant="h6"
          sx={{
            fontSize: '2.2rem',
            fontWeight: 'bold',
            color: '#0288d1',
            marginBottom: 1,
          }}
        >
          {temp} {tempUnit}
        </Typography>

        {/* Display weather condition */}
        <Typography
          variant="body1"
          sx={{
            color: '#757575',
            fontSize: '1rem',
            fontStyle: 'italic',
            marginBottom: 2,
          }}
        >
          {condition}
        </Typography>

        {/* Display additional weather details */}
        <Box sx={{ width: '100%' }}>
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            <strong>Feels Like:</strong> {feelsLike} {tempUnit}
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            <strong>Min Temp:</strong> {tempMin} {tempUnit}
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            <strong>Max Temp:</strong> {tempMax} {tempUnit}
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            <strong>Humidity:</strong> {humidity}%
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            <strong>Wind Speed:</strong> {windSpeed} m/s
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            <strong>Visibility:</strong> {visibility / 1000} km
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            <strong>Cloudiness:</strong> {cloudiness}%
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
