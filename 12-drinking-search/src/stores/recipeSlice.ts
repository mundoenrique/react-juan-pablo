import { StateCreator } from 'zustand';
import type { TRecipesSlice } from '../types';
import { getCategories } from '../services';
import { getRecipies } from '../services/recipesService';

export const createRecipeSlice: StateCreator<TRecipesSlice> = (set) => ({
  categories: {
    drinks: [],
  },
  drinks: {
    drinks: [],
  },

  fetchCategories: async () => {
    const categories = await getCategories();

    set({
      categories,
    });
  },
  searchRecipes: async (filters) => {
    const drinks = await getRecipies(filters);

    set({
      drinks,
    });
  },
});
