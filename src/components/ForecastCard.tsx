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
    <Card
      variant="outlined"
      sx={{
        borderRadius: 2,
        boxShadow: 3,
        marginBottom: 3,
        backgroundColor: 'background.paper',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: 6, // Increase shadow on hover for a more dynamic look
        },
      }}
    >
      <CardContent>
        {/* Display forecast date and time */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
            textAlign: 'center',
            textTransform: 'uppercase', // Make date stand out with uppercase
            marginBottom: 1,
          }}
        >
          {date}
        </Typography>

        {/* Display weather icon */}
        <Box display="flex" justifyContent="center" mb={2}>
          <CardMedia
            component="img"
            image={iconUrl}
            alt={condition}
            sx={{
              width: 90,
              height: 90,
              objectFit: 'contain',
              borderRadius: '50%', // Rounded icon for a more modern feel
              border: '2px solid #ddd', // Add subtle border around the icon
            }}
          />
        </Box>

        {/* Display temperature details */}
        <Box display="flex" justifyContent="center" mt={1}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              color: 'primary.dark',
              textAlign: 'center',
            }}
          >
            {temp} {tempUnit}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          align="center"
          sx={{ color: 'text.secondary', marginTop: 1 }}
        >
          Feels like: {feelsLike} {tempUnit}
        </Typography>
        <Typography
          variant="body2"
          align="center"
          sx={{ color: 'text.secondary' }}
        >
          Min: {tempMin} {tempUnit} | Max: {tempMax} {tempUnit}
        </Typography>

        {/* Display weather condition */}
        <Typography
          variant="body2"
          align="center"
          sx={{ marginTop: 1, fontWeight: 'bold', color: 'text.primary' }}
        >
          Condition: {condition}
        </Typography>

        {/* Display wind details */}
        <Typography
          variant="body2"
          sx={{
            marginTop: 1,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          Wind: {windSpeed} m/s
          <Box component="span" sx={{ color: 'text.secondary' }}>
            (Gusts: {windGust} m/s)
          </Box>
        </Typography>

        {/* Display cloudiness and humidity */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 1,
            fontSize: '0.875rem',
          }}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Cloudiness: {cloudiness}%
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Humidity: {humidity}%
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
