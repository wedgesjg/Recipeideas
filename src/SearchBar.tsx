import React, { useState } from 'react';
import type { SearchBarProps } from './types';

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [ingredient, setIngredient] = useState('');

  const handleSearch = () => {
    onSearch(ingredient);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter an ingredient"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;