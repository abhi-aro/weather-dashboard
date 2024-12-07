import React from 'react';
import { Box, Fab } from '@mui/material';
import { TbTemperatureFahrenheit, TbTemperatureCelsius } from 'react-icons/tb';

type UnitToggleButtonProps = {
  unit: string;
  toggleUnit: () => void;
};

export const UnitToggleButton: React.FC<UnitToggleButtonProps> = ({
  unit,
  toggleUnit,
}) => {
  return (
    <Box
      position="fixed"
      bottom={16}
      right={16}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Fab
        color="primary"
        onClick={toggleUnit}
        sx={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          boxShadow: 3,
        }}
      >
        {unit === 'metric' ? (
          <TbTemperatureCelsius size={24} color="white" />
        ) : (
          <TbTemperatureFahrenheit size={24} color="white" />
        )}
      </Fab>
    </Box>
  );
};
