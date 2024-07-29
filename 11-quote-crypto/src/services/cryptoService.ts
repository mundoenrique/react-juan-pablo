import axios from 'axios';
import { CryptosResponseSchema, PriceSchema } from '../schema';
import type { TPair } from '../types';

export async function getCrypto() {
  const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`;
  const {
    data: { Data },
  } = await axios(url);

  const { success, data } = CryptosResponseSchema.safeParse(Data);

  if (success) {
    return data;
  }
}

export async function fetchCryptoPrice(pair: TPair) {
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.crypto}&tsyms=USD,${pair.currency}`;
  const {
    data: { DISPLAY },
  } = await axios(url);

  const { success, data } = PriceSchema.safeParse(DISPLAY[pair.crypto][pair.currency]);

  if (success) {
    return data;
  }
}
