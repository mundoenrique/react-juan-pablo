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

export const RecipeAPISchema = z.object({
  idDrink: z.string(),
  strDrink: z.string(),
  strDrinkThumb: z.string(),
  strInstructions: z.string(),
  strIngredient1: z.string().nullable(),
  strIngredient2: z.string().nullable(),
  strIngredient3: z.string().nullable(),
  strIngredient4: z.string().nullable(),
  strIngredient5: z.string().nullable(),
  strIngredient6: z.string().nullable(),
  strIngredient7: z.string().nullable(),
  strIngredient8: z.string().nullable(),
  strIngredient9: z.string().nullable(),
  strMeasure1: z.string().nullable(),
  strMeasure2: z.string().nullable(),
  strMeasure3: z.string().nullable(),
  strMeasure4: z.string().nullable(),
  strMeasure5: z.string().nullable(),
  strMeasure6: z.string().nullable(),
  strMeasure7: z.string().nullable(),
  strMeasure8: z.string().nullable(),
  strMeasure9: z.string().nullable(),
});

export const NoticationSchema = z.object({
  text: z.string(),
  error: z.boolean(),
  show: z.boolean(),
});
