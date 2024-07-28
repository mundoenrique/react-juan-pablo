import { z } from 'zod';
import { CurrencySchema } from '../schema';

export type TCurrency = z.infer<typeof CurrencySchema>;
