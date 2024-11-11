import React, { useState, KeyboardEvent } from 'react';
import { Search } from 'lucide-react';
import type { SearchBarProps } from '../types';

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [ingredient, setIngredient] = useState('');

  const handleSearch = () => {
    if (ingredient.trim()) {
      onSearch(ingredient.trim());
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="max-w-2xl mx-auto mb-12">
      <div className="flex shadow-sm rounded-lg overflow-hidden">
        <input
          type="text"
          placeholder="Enter an ingredient (e.g., chicken, tomato, rice)"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 px-6 py-4 text-gray-700 focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="px-6 py-4 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center"
        >
          <Search className="w-5 h-5 mr-2" />
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;