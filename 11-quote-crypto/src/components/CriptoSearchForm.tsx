import { currencies } from '../data';

export default function CriptoSearchForm() {
  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select name="currency" id="currency">
          <option value="">-- Seleccione una moneda</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="criptomoneda">Moneda:</label>
        <select name="criptomoneda" id="criptomoneda">
          <option value="">-- Seleccione una criptomoneda</option>
        </select>
      </div>
      <input type="submit" value="Cotizar" />
    </form>
  );
}
