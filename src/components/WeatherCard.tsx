import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

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
    <Card variant="outlined" sx={{ marginBottom: 4 }}>
      <CardContent>
        <Typography variant="h5">{city}</Typography>
        <img src={iconUrl} alt={condition} />
        <Typography variant="body1">
          Temperature: {temp} {tempUnit}
        </Typography>
        <Typography variant="body1">Condition: {condition}</Typography>
        <Typography variant="body2">Humidity: {humidity}%</Typography>
        <Typography variant="body2">Wind Speed: {windSpeed} m/s</Typography>
      </CardContent>
    </Card>
  );
};
