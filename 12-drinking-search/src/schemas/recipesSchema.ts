import { z } from 'zod';

export const CategoriesAPISchema = z.object({
  drinks: z.array(
    z.object({
      strCategory: z.string(),
    })
  ),
});

export const SearchFilterSchema = z.object({
  ingredient: z.string(),
  category: z.string(),
});

export const RecipesAPISchema = z.object({
  drinks: z.array(
    z.object({
      strDrink: z.string(),
      strDrinkThumb: z.string(),
      idDrink: z.string(),
    })
  ),
});

export const DrinkAPISchema = z.object({
  strDrink: z.string(),
  strDrinkThumb: z.string(),
  idDrink: z.string(),
});

export const DrinksAPISchema = z.object({
  drinks: z.array(DrinkAPISchema),
});
