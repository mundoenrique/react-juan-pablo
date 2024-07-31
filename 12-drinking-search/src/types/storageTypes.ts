import { TCategory, TDrink, TDrinks, TRecipe, TSearchFilter } from './listTypes';

export type TRecipesSlice = {
  categories: TCategory;
  drinks: TDrinks;
  selectedRecipe: TRecipe;

  fetchCategories: () => Promise<void>;
  searchRecipes: (filters: TSearchFilter) => Promise<void>;
  selectRecipe: (id: TDrink['idDrink']) => Promise<void>;
};
