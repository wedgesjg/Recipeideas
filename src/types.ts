export interface Recipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface SearchBarProps {
  onSearch: (ingredient: string) => void;
}

export interface RecipeListProps {
  recipes: Recipe[];
}