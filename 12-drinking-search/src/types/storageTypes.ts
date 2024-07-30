import { TCategory, TDrinks, TSearchFilter } from './listTypes';

export type TRecipesSlice = {
  categories: TCategory;
  drinks: TDrinks;

  fetchCategories: () => Promise<void>;
  searchRecipes: (filters: TSearchFilter) => Promise<void>;
};
