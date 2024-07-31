import { StateCreator } from 'zustand';
import { TFavoritesSlice, TNoticationSlice, TRecipe, TRecipesSlice } from '../types';
import { createRecipeSlice } from './recipeSlice';
import { createNoticationSlice } from './noticationSlice';

export const createFavoritesSlice: StateCreator<
  TFavoritesSlice & TRecipesSlice & TNoticationSlice,
  [],
  [],
  TFavoritesSlice
> = (set, get, api) => ({
  favorites: [],

  handleClickFavorite: (recipe) => {
    const PrevFavorites = get().favorites;
    let favorites = [] as TRecipe[];

    if (get().favoriteExists(recipe.idDrink)) {
      favorites = PrevFavorites.filter((favorite) => favorite.idDrink !== recipe.idDrink);
      createNoticationSlice(set, get, api).showNotification({ text: 'Se eliminó de favoritos', error: false });
    } else {
      favorites = [recipe, ...PrevFavorites];
      createNoticationSlice(set, get, api).showNotification({ text: 'Se agregó a favoritos', error: false });
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
