import React from 'react';
import type { RecipeListProps } from '../types';

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  if (recipes.length === 0) {
    return (
      <div className="text-center text-gray-600">
        No recipes found. Try searching with a different ingredient!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {recipes.map((recipe) => (
        <div
          key={recipe.idMeal}
          className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative pb-[60%]">
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
              {recipe.strMeal}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;