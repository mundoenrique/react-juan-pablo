import axios from 'axios';
import { CategoriesAPISchema, DrinksAPISchema, RecipeAPISchema } from '../schemas';
import { TDrink, TSearchFilter } from '../types';

export async function getCategories() {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
  const { data: responseAPI } = await axios(url);
  const { success, data } = CategoriesAPISchema.safeParse(responseAPI);

  if (success) {
    return data;
  }
}

export async function getRecipies(filters: TSearchFilter) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`;
  const { data: responseAPI } = await axios(url);
  const { success, data } = DrinksAPISchema.safeParse(responseAPI);

  if (success) {
    return data;
  }
}

export async function getRecipeById(id: TDrink['idDrink']) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const { data: responseAPI } = await axios(url);

  const { success, data } = RecipeAPISchema.safeParse(responseAPI.drinks[0]);

  if (success) {
    return data;
  }
}
