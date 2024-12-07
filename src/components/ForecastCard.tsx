import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

type ForecastProps = {
  date: string;
  temp: number;
  condition: string;
  unit: string;
};

export const ForecastCard: React.FC<ForecastProps> = ({ date, temp, condition, unit }) => {
  const tempUnit = unit === 'metric' ? '°C' : '°F';

  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">{date}</Typography>
        <Typography variant="body1">
          Temperature: {temp} {tempUnit}
        </Typography>
        <Typography variant="body2">Condition: {condition}</Typography>
      </CardContent>
    </Card>
  );
};
