import { type ChangeEvent, useState } from 'react';
import { categories } from '../data';
import type { Tactivity } from '../types';

export default function Form() {
  const [activityForm, setActivityForm] = useState<Tactivity>({
    activity: '',
    calories: 0,
    category: 0,
  });
  const { activity, calories, category } = activityForm;

  const handleActivityForm = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const isNumberField = ['calories', 'category'].includes(e.target.id);
    const value = isNumberField ? +e.target.value : e.target.value;

    setActivityForm({
      ...activityForm,
      [e.target.id]: value,
    });
  };

  const validActivityForm = () => {
    return activity.trim() !== '' && calories > 0 && category > 0;
  };

  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
      <div className="grid grid-cols-1 gap-3">
        <label className="font-bold" htmlFor="category">
          Categorias:
        </label>
        <select
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          id="category"
          value={category}
          onChange={handleActivityForm}
        >
          <option value={0} disabled>
            Selecciona una opción
          </option>
          {categories.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label className="font-bold" htmlFor="activity">
          Actividad:
        </label>
        <input
          className="border border-slate-300 p-2 rounded-lg"
          type="text"
          id="activity"
          placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
          autoComplete="off"
          value={activity}
          onChange={handleActivityForm}
        />
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label className="font-bold" htmlFor="calories">
          Calorias:
        </label>
        <input
          className="border border-slate-300 p-2 rounded-lg"
          type="number"
          id="calories"
          placeholder="Calorias Ej. 300 o 500"
          value={calories}
          onChange={handleActivityForm}
        />
      </div>
      <input
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 uppercase text-white cursor-pointer disabled:opacity-10"
        type="submit"
        value="Guardar Comida o Guardar Ejercicio"
        disabled={!validActivityForm()}
      />
    </form>
  );
}
