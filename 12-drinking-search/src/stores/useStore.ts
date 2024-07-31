import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { createRecipeSlice } from './recipeSlice';
import { createFavoritesSlice } from './favoritesSlice';
import { createNoticationSlice } from './noticationSlice';

import type { TFavoritesSlice, TNoticationSlice, TRecipesSlice } from '../types';

export const useAppStore = create<TRecipesSlice & TFavoritesSlice & TNoticationSlice>()(
  devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNoticationSlice(...a),
  }))
);
