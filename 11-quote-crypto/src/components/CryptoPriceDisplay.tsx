import { useMemo } from 'react';
import { useCryptoStore } from '../storage';
import Spinner from './Spinner';

export default function CryptoPriceDisplay() {
  const priceData = useCryptoStore((state) => state.priceData);
  const loading = useCryptoStore((state) => state.loading);
  const hasData = useMemo(() => !Object.values(priceData).includes(''), [priceData]);
  return (
    <div className="result-wrapper">
      {loading ? (
        <Spinner />
      ) : (
        hasData && (
          <>
            <h2>Cotización</h2>
            <div className="result">
              <img src={`https://cryptocompare.com/${priceData.IMAGEURL}`} alt="Imagen Cryptomoneda" />
              <div>
                <p>
                  El precio es de: <span>{priceData.PRICE}</span>
                </p>
                <p>
                  Precio más alto del día: <span>{priceData.HIGHDAY}</span>
                </p>
                <p>
                  Precio más bajo del día: <span>{priceData.LOWDAY}</span>
                </p>
                <p>
                  Variación últimas 24 horas: <span>{priceData.CHANGEPCT24HOUR}</span>
                </p>
                <p>
                  Última actualización: <span>{priceData.LASTUPDATE}</span>
                </p>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
}
