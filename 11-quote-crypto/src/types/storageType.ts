import { TCrypto, TPair, TPrice } from './listsType';

export type TCryptoStorage = {
  cryptoCurrencies: TCrypto[];
  priceData: TPrice;
  loading: boolean;
  fetchCryptos: () => Promise<void>;
  fetchData: (pair: TPair) => Promise<void>;
};
