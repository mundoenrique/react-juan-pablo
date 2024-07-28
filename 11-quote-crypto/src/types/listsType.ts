import { z } from 'zod';
import { CryptoCurrencyResponseSchema, CurrencySchema } from '../schema';

export type TCurrency = z.infer<typeof CurrencySchema>;
export type TCryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>;
