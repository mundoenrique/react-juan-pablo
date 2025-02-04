import { TCategory, TDrink, TDrinks, TNotication, TRecipe, TSearchFilter } from './listTypes';

export type TRecipesSlice = {
  categories: TCategory;
  drinks: TDrinks;
  selectedRecipe: TRecipe;
  modal: boolean;

  fetchCategories: () => Promise<void>;
  searchRecipes: (filters: TSearchFilter) => Promise<void>;
  selectRecipe: (id: TDrink['idDrink']) => Promise<void>;
  closeModal: () => void;
};

export type TFavoritesSlice = {
  favorites: TRecipe[];

  handleClickFavorite: (recipe: TRecipe) => void;
  favoriteExists: (id: TRecipe['idDrink']) => boolean;
  loadFromStorage: () => void;
};

export type TNoticationSlice = {
  notification: TNotication;

  showNotification: (payload: Pick<TNotication, 'text' | 'error'>) => void;
  hideNotification: () => void;
};
