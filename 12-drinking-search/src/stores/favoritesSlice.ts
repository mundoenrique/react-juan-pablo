import { StateCreator } from 'zustand';
import { TFavoritesSlice } from '../types';

export const createFavoritesSlice: StateCreator<TFavoritesSlice> = () => ({
  favorites: [],
});
