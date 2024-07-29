import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { TCryptoStorage } from './types';
import { fetchCryptoPrice, getCrypto } from './services';

export const useCryptoStore = create<TCryptoStorage>()(
  devtools((set) => ({
    cryptoCurrencies: [],
    priceData: {
      IMAGEURL: '',
      PRICE: '',
      HIGHDAY: '',
      LOWDAY: '',
      CHANGEPCT24HOUR: '',
      LASTUPDATE: '',
    },

    fetchCryptos: async () => {
      const cryptoCurrencies = await getCrypto();
      set(() => ({
        cryptoCurrencies,
      }));
    },
    fetchData: async (pair) => {
      const priceData = await fetchCryptoPrice(pair);

      set(() => ({
        priceData,
      }));
    },
  }))
);
