import { z } from 'zod';
import { CategoriesAPISchema } from '../schemas';

export type TCategory = z.infer<typeof CategoriesAPISchema>;
