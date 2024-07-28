export default function CriptoSearchForm() {
  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select name="currency" id="currency" value="">
          <option value="" disabled>
            -- Seleccione una moneda
          </option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="criptomoneda">Moneda:</label>
        <select name="criptomoneda" id="criptomoneda" value="">
          <option value="" disabled>
            -- Seleccione una criptomoneda
          </option>
        </select>
      </div>
      <input type="submit" value="Cotizar" />
    </form>
  );
}
