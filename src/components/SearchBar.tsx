import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      {/* Input field for the city name */}
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)} // Update the city state on input change
        placeholder="Enter city"
      />
      <button type="submit">Search</button>
    </form>
  );
};
