import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

type SearchBarProps = {
  onSearch: (city: string) => void; // Callback function to handle the city search
};

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState<string>(''); // State to store the city name

  // Handle the form submission, triggering the search
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city) {
      onSearch(city); // Call the onSearch function passed as a prop with the city
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 2,
        width: '100%',
      }}
    >
      {/* Input field for the city name */}
      <TextField
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)} // Update the city state on input change
        placeholder="Enter city"
        fullWidth
        sx={{
          maxWidth: 500, // Increase max width for a more spacious input
          borderRadius: 2, // Rounded corners
          backgroundColor: '#fff',
          boxShadow: 2, // Subtle shadow for modern look
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
          },
          '& .MuiInputBase-root:focus': {
            boxShadow: '0 0 5px 2px rgba(0, 123, 255, 0.6)', // Focus state for better visual feedback
          },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          marginLeft: 2,
          borderRadius: 2, // Rounded corners for the button
          height: '100%',
          padding: '10px 20px',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: 'primary.dark', // Hover effect for button
          },
        }}
      >
        Search
      </Button>
    </Box>
  );
};
