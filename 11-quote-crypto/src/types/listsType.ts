import { z } from 'zod';
import { CryptoResponseSchema, CurrencySchema, PairSchema } from '../schema';

export type TCurrency = z.infer<typeof CurrencySchema>;
export type TCrypto = z.infer<typeof CryptoResponseSchema>;
export type TPair = z.infer<typeof PairSchema>;
