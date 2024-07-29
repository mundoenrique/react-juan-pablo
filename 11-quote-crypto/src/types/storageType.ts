import { TCrypto, TPair, TPrice } from './listsType';

export type TCryptoStorage = {
  cryptoCurrencies: TCrypto[];
  priceData: TPrice;
  fetchCryptos: () => Promise<void>;
  fetchData: (pair: TPair) => Promise<void>;
};
