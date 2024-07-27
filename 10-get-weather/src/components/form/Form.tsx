import { ChangeEvent, FormEvent, useState } from 'react';
import { countries } from '../../data/countries';
import styles from './Form.module.css';
import Alert from './Alert/Alert';
import type { TsearchType } from '../../types';

export default function Form() {
  const [search, setSearch] = useState<TsearchType>({
    city: '',
    country: '',
  });

  const [alert, setAlert] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(search).includes('')) {
      setAlert('Todos los campos son obligatorios');
      return;
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {alert && <Alert>{alert}</Alert>}
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
