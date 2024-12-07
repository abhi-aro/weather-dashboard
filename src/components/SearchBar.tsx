import React, { useState } from 'react';

type SearchBarProps = {
  onSearch: (city: string) => void;
};

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city) {
      onSearch(city);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button type="submit">Search</button>
    </form>
  );
};
