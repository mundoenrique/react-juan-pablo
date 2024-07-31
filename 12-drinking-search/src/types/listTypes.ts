import { z } from 'zod';
import { CategoriesAPISchema, DrinkAPISchema, DrinksAPISchema, RecipeAPISchema, SearchFilterSchema } from '../schemas';

export type TCategory = z.infer<typeof CategoriesAPISchema>;
export type TSearchFilter = z.infer<typeof SearchFilterSchema>;
export type TDrinks = z.infer<typeof DrinksAPISchema>;
export type TDrink = z.infer<typeof DrinkAPISchema>;
export type TRecipe = z.infer<typeof RecipeAPISchema>;
