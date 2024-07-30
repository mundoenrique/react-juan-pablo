import { create } from 'zustand';
import { createRecipeSlice } from './recipeSlice';
import type { TRecipesSlice } from '../types';

export const useAppStore = create<TRecipesSlice>((...a) => ({
  ...createRecipeSlice(...a),
}));
