import { StateCreator } from 'zustand';
import { TFavoritesSlice, TRecipe } from '../types';

export const createFavoritesSlice: StateCreator<TFavoritesSlice> = (set, get) => ({
  favorites: [],

  handleClickFavorite: (recipe) => {
    const PrevFavorites = get().favorites;
    let favorites = [] as TRecipe[];

    if (PrevFavorites.some((favorite) => favorite.idDrink === recipe.idDrink)) {
      favorites = PrevFavorites.filter((favorite) => favorite.idDrink !== recipe.idDrink);
    } else {
      favorites = [recipe, ...PrevFavorites];
    }

    set({
      favorites,
    });
  },
});
