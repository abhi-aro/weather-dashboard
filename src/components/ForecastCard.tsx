import React from 'react';
import { Card, CardContent, Typography, Box, CardMedia } from '@mui/material';

// ForecastCard component to display weather details for a forecasted day
export const ForecastCard: React.FC<{
  date: string;
  temp: number;
  feelsLike: number;
  tempMin: number;
  tempMax: number;
  condition: string;
  icon: string;
  windSpeed: number;
  windGust: number;
  cloudiness: number;
  humidity: number;
  unit: string;
}> = ({
  date,
  temp,
  feelsLike,
  tempMin,
  tempMax,
  condition,
  icon,
  windSpeed,
  windGust,
  cloudiness,
  humidity,
  unit,
}) => {
  // Determine the temperature unit (°C for 'metric' and °F for 'imperial')
  const tempUnit = unit === 'metric' ? '°C' : '°F';

  // Generate the URL for the weather icon based on the icon code
  const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;

  return (
    <Card variant="outlined" sx={{ borderRadius: 2, boxShadow: 2, marginBottom: 2, backgroundColor: 'background.paper' }}>
      <CardContent>
        {/* Display forecast date and time */}
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main', textAlign: 'center' }}>
          {date}
        </Typography>

        {/* Display weather icon */}
        <Box display="flex" justifyContent="center" mt={1}>
          <CardMedia
            component="img"
            image={iconUrl}
            alt={condition}
            sx={{ width: 80, height: 80, objectFit: 'contain' }}
          />
        </Box>

        {/* Display temperature details */}
        <Box display="flex" justifyContent="center" mt={2}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.dark' }}>
            {temp} {tempUnit}
          </Typography>
        </Box>
        <Typography variant="body2" align="center" sx={{ color: 'text.secondary', marginTop: 1 }}>
          Feels like: {feelsLike} {tempUnit}
        </Typography>
        <Typography variant="body2" align="center" sx={{ color: 'text.secondary' }}>
          Min: {tempMin} {tempUnit} | Max: {tempMax} {tempUnit}
        </Typography>

        {/* Display weather condition */}
        <Typography variant="body2" align="center" sx={{ marginTop: 1 }}>
          Condition: {condition}
        </Typography>

        {/* Display wind details */}
        <Typography variant="body2" sx={{ marginTop: 1 }}>
          Wind: {windSpeed} m/s (Gusts: {windGust} m/s)
        </Typography>

        {/* Display cloudiness and humidity */}
        <Typography variant="body2">
          Cloudiness: {cloudiness}% | Humidity: {humidity}%
        </Typography>
      </CardContent>
    </Card>
  );
};
