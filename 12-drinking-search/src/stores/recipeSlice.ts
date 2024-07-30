import { StateCreator } from 'zustand';
import type { TRecipesSlice } from '../types';
import { getCategories } from '../services';

export const createRecipeSlice: StateCreator<TRecipesSlice> = (set) => ({
  categories: {
    drinks: [],
  },

  fetchCategories: async () => {
    const categories = await getCategories();

    set({
      categories,
    });
  },
  searchRecipes: async () => {
    console.log('buscando recetas');
  },
});
