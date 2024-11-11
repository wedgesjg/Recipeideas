import type { Recipe } from './types';

export const fetchRecipesByIngredient = async (ingredient: string): Promise<Recipe[]> => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals || [];
};