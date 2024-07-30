import { StateCreator } from 'zustand';
import { TRecipesSlice } from '../types/storageTypes';

export const createRecipeSlice: StateCreator<TRecipesSlice> = () => ({
  categories: [],
});
