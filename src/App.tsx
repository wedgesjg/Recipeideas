import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { fetchRecipesByIngredient } from './api';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import type { Recipe } from './types';

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (ingredient: string) => {
    try {
      setLoading(true);
      setError(null);
      const fetchedRecipes = await fetchRecipesByIngredient(ingredient);
      setRecipes(fetchedRecipes);
    } catch (err) {
      setError('Failed to fetch recipes. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Search className="w-12 h-12 mx-auto mb-4 text-blue-600" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Recipe Finder</h1>
          <p className="text-lg text-gray-600">Discover delicious recipes based on your ingredients</p>
        </div>
        
        <SearchBar onSearch={handleSearch} />
        
        {error && (
          <div className="text-red-600 text-center mb-8">{error}</div>
        )}
        
        {loading ? (
          <div className="text-center text-gray-600">Loading recipes...</div>
        ) : (
          <RecipeList recipes={recipes} />
        )}
      </div>
    </div>
  );
};

export default App;