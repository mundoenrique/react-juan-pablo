import { ChangeEvent, useState } from 'react';
import { countries } from '../../data/countries';
import styles from './Form.module.css';
import type { TsearchType } from '../../types';

export default function Form() {
  const [search, setSearch] = useState<TsearchType>({
    city: '',
    country: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="city">Ciudad:</label>
        <input id="city" type="text" name="city" placeholder="Ciudad" value={search.city} onChange={handleChange} />
      </div>
      <div className={styles.field}>
        <label htmlFor="country">Ciudad:</label>
        <select name="country" id="country" value={search.country} onChange={handleChange}>
          <option value="" disabled>
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
