import { string, z } from 'zod';

export const CurrencySchema = z.object({
  code: z.string(),
  name: z.string(),
});

export const CryptoResponseSchema = z.object({
  CoinInfo: z.object({
    FullName: z.string(),
    Name: z.string(),
  }),
});

export const CryptosResponseSchema = z.array(CryptoResponseSchema);

export const PairSchema = z.object({
  currency: z.string(),
  crypto: z.string(),
});

export const PriceSchema = z.object({
  IMAGEURL: string(),
  PRICE: string(),
  HIGHDAY: string(),
  LOWDAY: string(),
  CHANGEPCT24HOUR: string(),
  LASTUPDATE: string(),
});
