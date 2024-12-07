import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';

type WeatherProps = {
  city: string;      // City name to display in the weather card
  temp: number;      // Current temperature
  condition: string; // Weather condition (e.g., "Clear", "Cloudy")
  humidity: number;  // Humidity percentage
  windSpeed: number; // Wind speed in meters per second
  icon: string;      // Weather icon code from OpenWeather API
  unit: string;      // Unit for temperature (either 'metric' or 'imperial')
};

export const WeatherCard: React.FC<WeatherProps> = ({
  city,
  temp,
  condition,
  humidity,
  windSpeed,
  icon,
  unit,
}) => {
  // Generate the URL for the weather icon based on the icon code from OpenWeather API
  const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;

  // Determine the temperature unit (°C for 'metric' and °F for 'imperial')
  const tempUnit = unit === 'metric' ? '°C' : '°F';

  return (
    <Card variant="outlined" sx={{ marginBottom: 4, boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        {/* Display city name */}
        <Typography variant="h5" gutterBottom>
          {city}
        </Typography>
        
        {/* Display weather icon */}
        <Box display="flex" justifyContent="center">
          <CardMedia
            component="img"
            image={iconUrl}  // Use the icon URL generated above
            alt={condition}
            sx={{ width: 80, height: 80, objectFit: 'contain' }}
          />
        </Box>
        
        {/* Display temperature */}
        <Typography variant="h6" align="center" sx={{ marginTop: 2 }}>
          {temp} {tempUnit}
        </Typography>
        
        {/* Display weather condition */}
        <Typography variant="body1" align="center">
          Condition: {condition}
        </Typography>
        
        {/* Display humidity */}
        <Typography variant="body2">Humidity: {humidity}%</Typography>
        
        {/* Display wind speed */}
        <Typography variant="body2">Wind Speed: {windSpeed} m/s</Typography>
      </CardContent>
    </Card>
  );
};
