// src/App.js
import React, { useState } from 'react';
import { fetchRecipesByIngredient } from './api';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (ingredient) => {
    const fetchedRecipes = await fetchRecipesByIngredient(ingredient);
    setRecipes(fetchedRecipes);
  };

  return (
    <div className="container">
      <h1>Recipe Finder</h1>
      <SearchBar onSearch={handleSearch} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
