import { TCryptoCurrency } from './listsType';

export type TCryptoStorage = {
  cryptoCurrencies: TCryptoCurrency[];
  fetchCryptos: () => Promise<void>;
};
