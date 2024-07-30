import axios from 'axios';
import { CategoriesAPISchema } from '../schemas';

export async function getCategories() {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
  const { data: responseAPI } = await axios(url);
  const { success, data } = CategoriesAPISchema.safeParse(responseAPI);

  if (success) {
    return data;
  }
}

export async function getRecipies() {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
  const { data: responseAPI } = await axios(url);
  const { success, data } = CategoriesAPISchema.safeParse(responseAPI);

  if (success) {
    return data;
  }
}
