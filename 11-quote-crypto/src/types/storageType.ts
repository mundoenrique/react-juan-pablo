import { TCrypto, TPair } from './listsType';

export type TCryptoStorage = {
  cryptoCurrencies: TCrypto[];
  fetchCryptos: () => Promise<void>;
  fetchData: (pair: TPair) => Promise<void>;
};
