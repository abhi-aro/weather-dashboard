import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';

type WeatherProps = {
  city: string;
  temp: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  icon: string;
  unit: string;
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
  const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;
  const tempUnit = unit === 'metric' ? '°C' : '°F';

  return (
    <Card variant="outlined" sx={{ marginBottom: 4, boxShadow: 3, borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {city}
        </Typography>
        <Box display="flex" justifyContent="center">
          <CardMedia
            component="img"
            image={iconUrl}
            alt={condition}
            sx={{ width: 80, height: 80, objectFit: 'contain' }}
          />
        </Box>
        <Typography variant="h6" align="center" sx={{ marginTop: 2 }}>
          {temp} {tempUnit}
        </Typography>
        <Typography variant="body1" align="center">
          Condition: {condition}
        </Typography>
        <Typography variant="body2">Humidity: {humidity}%</Typography>
        <Typography variant="body2">Wind Speed: {windSpeed} m/s</Typography>
      </CardContent>
    </Card>
  );
};
