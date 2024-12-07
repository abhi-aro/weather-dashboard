import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

// ForecastCard component to display weather details for a forecasted day
export const ForecastCard: React.FC<{
  date: string;
  temp: number;
  condition: string;
  unit: string;
}> = ({ date, temp, condition, unit }) => {
  // Determine the temperature unit (°C for 'metric' and °F for 'imperial')
  const tempUnit = unit === 'metric' ? '°C' : '°F';

  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardContent>
        {/* Display forecast date */}
        <Typography variant="h6">{date}</Typography>
        
        {/* Display forecast temperature */}
        <Typography variant="body1">
          Temperature: {temp} {tempUnit}
        </Typography>
        
        {/* Display weather condition */}
        <Typography variant="body2">Condition: {condition}</Typography>
      </CardContent>
    </Card>
  );
};
