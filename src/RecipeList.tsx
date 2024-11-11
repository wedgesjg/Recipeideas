import React from 'react';
import type { RecipeListProps } from './types';

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.idMeal} className="recipe-card">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h3>{recipe.strMeal}</h3>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;