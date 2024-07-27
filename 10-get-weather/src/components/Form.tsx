import { countries } from '../data/countries';
import styles from './Form.module.css';

export default function Form() {
  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="city" className="">
          Ciudad:
        </label>
        <input id="city" type="text" name="city" placeholder="Ciudad" className="" />
      </div>
      <div className={styles.field}>
        <label htmlFor="country" className="">
          Ciudad:
        </label>
        <select name="country" id="country">
          <option value="" disabled selected>
            -- Seleccione un país
          </option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <input type="submit" value="Consultar clima" className={styles.submit} />
    </form>
  );
}
