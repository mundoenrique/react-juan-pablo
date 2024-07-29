import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { currencies } from '../data';
import { useCryptoStore } from '../storage';
import { TPair } from '../types';
import ErrorMessage from './ErrorMessage';

export default function CriptoSearchForm() {
  const cryptoCurrencies = useCryptoStore((state) => state.cryptoCurrencies);
  const fetchData = useCryptoStore((state) => state.fetchData);
  const [pair, setPair] = useState<TPair>({
    currency: '',
    crypto: '',
  });
  const { currency, crypto } = pair;
  const [error, setError] = useState('');

  const changeQuoteForm = (e: ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value,
    });
  };

  const submitQuoteForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(pair).includes('')) {
      setError('Campos invalidos');
      return;
    }
    setError('');
    fetchData(pair);
  };

  return (
    <form className="form" name="quoteForm" id="quoteForm" onSubmit={submitQuoteForm}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select name="currency" id="currency" value={currency} onChange={changeQuoteForm}>
          <option value="" disabled>
            -- Seleccione una moneda
          </option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="crypto">Moneda:</label>
        <select name="crypto" id="crypto" value={crypto} onChange={changeQuoteForm}>
          <option value="" disabled>
            -- Seleccione una criptomoneda
          </option>
          {cryptoCurrencies.map((crypto) => (
            <option key={crypto.CoinInfo.Name} value={crypto.CoinInfo.Name}>
              {crypto.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>
      <input type="submit" value="Cotizar" />
    </form>
  );
}
