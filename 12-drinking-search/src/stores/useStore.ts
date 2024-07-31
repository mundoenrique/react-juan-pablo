import { create } from 'zustand';
import { createRecipeSlice } from './recipeSlice';
import type { TFavoritesSlice, TRecipesSlice } from '../types';
import { devtools } from 'zustand/middleware';
import { createFavoritesSlice } from './favoritesSlice';

export const useAppStore = create<TRecipesSlice & TFavoritesSlice>()(
  devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavoritesSlice(...a),
  }))
);
