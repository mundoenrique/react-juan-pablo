import { TCategory } from './listTypes';

export type TRecipesSlice = {
  categories: TCategory;

  fetchCategories: () => Promise<void>;
  searchRecipes: () => Promise<void>;
};
