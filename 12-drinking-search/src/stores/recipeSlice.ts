import { StateCreator } from 'zustand';
import type { TRecipe, TRecipesSlice } from '../types';
import { getCategories, getRecipeById, getRecipies } from '../services';

export const createRecipeSlice: StateCreator<TRecipesSlice> = (set) => ({
  categories: {
    drinks: [],
  },
  drinks: {
    drinks: [],
  },
  selectedRecipe: {} as TRecipe,

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
  selectRecipe: async (id) => {
    const selectedRecipe = await getRecipeById(id);

    set({
      selectedRecipe,
    });
  },
});
