import { StateCreator } from 'zustand';
import { TFavoritesSlice, TRecipe, TRecipesSlice } from '../types';
import { createRecipeSlice } from './recipeSlice';

export const createFavoritesSlice: StateCreator<TFavoritesSlice & TRecipesSlice, [], [], TFavoritesSlice> = (
  set,
  get,
  api
) => ({
  favorites: [],

  handleClickFavorite: (recipe) => {
    const PrevFavorites = get().favorites;
    let favorites = [] as TRecipe[];

    if (get().favoriteExists(recipe.idDrink)) {
      favorites = PrevFavorites.filter((favorite) => favorite.idDrink !== recipe.idDrink);
    } else {
      favorites = [recipe, ...PrevFavorites];
    }

    set({
      favorites,
    });

    createRecipeSlice(set, get, api).closeModal();
    localStorage.setItem('favorites', JSON.stringify(favorites));
  },

  favoriteExists: (id) => {
    const isFavorite = get().favorites.some((favorite) => favorite.idDrink === id);

    return isFavorite;
  },
  loadFromStorage: () => {
    const storageFavorites = localStorage.getItem('favorites');

    if (storageFavorites) {
      set({
        favorites: JSON.parse(storageFavorites),
      });
    }
  },
});
