import { z } from 'zod';
import { CategoriesAPISchema } from '../schemas/recipesSchema';

export type Tcategory = z.infer<typeof CategoriesAPISchema>;
