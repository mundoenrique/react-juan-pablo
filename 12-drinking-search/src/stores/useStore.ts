import { create } from 'zustand';
import { createRecipeSlice } from './recipeSlice';
import type { TRecipesSlice } from '../types';
import { devtools } from 'zustand/middleware';

export const useAppStore = create<TRecipesSlice>()(
  devtools((...a) => ({
    ...createRecipeSlice(...a),
  }))
);
