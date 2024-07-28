import axios from 'axios';
import { create } from 'zustand';
import { CryptoCurrenciesResponseSchema } from './schema';
import { TCryptoStorage } from './types';

async function getCrypto() {
  const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`;
  const {
    data: { Data },
  } = await axios(url);

  const { success, data } = CryptoCurrenciesResponseSchema.safeParse(Data);

  if (success) {
    return data;
  }
}

export const useCryptoStore = create<TCryptoStorage>((set) => ({
  cryptoCurrencies: [],

  fetchCryptos: async () => {
    const cryptoCurrencies = await getCrypto();
    set(() => ({
      cryptoCurrencies,
    }));
  },
}));
