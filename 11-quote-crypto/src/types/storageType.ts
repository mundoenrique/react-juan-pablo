import { TCrypto } from './listsType';

export type TCryptoStorage = {
  cryptoCurrencies: TCrypto[];
  fetchCryptos: () => Promise<void>;
};
