import { StateCreator } from 'zustand';
import type { TFavoritesSlice, TRecipe, TRecipesSlice } from '../types';
import { getCategories, getRecipeById, getRecipies } from '../services';

export const createRecipeSlice: StateCreator<TRecipesSlice & TFavoritesSlice, [], [], TRecipesSlice> = (set) => ({
  categories: {
    drinks: [],
  },
  drinks: {
    drinks: [],
  },
  selectedRecipe: {} as TRecipe,
  modal: false,

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
      modal: true,
    });
  },
  closeModal: () => {
    set({
      modal: false,
      selectedRecipe: {} as TRecipe,
    });
  },
});
