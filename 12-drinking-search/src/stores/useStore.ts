import { create } from 'zustand';
import { createRecipeSlice } from './recipeSlice';
import { TRecipesSlice } from '../types/storageTypes';

export const useAppStore = create<TRecipesSlice>((...a) => ({
  ...createRecipeSlice(...a),
}));
