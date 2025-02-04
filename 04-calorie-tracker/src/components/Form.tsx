import uuid4 from 'uuid4';
import { useEffect, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

import { categories, initActivityForm, submitText } from '../data';
import type { Tactivity, TformProps } from '../types';

export default function Form({ dispatch, state }: TformProps) {
  const [activityForm, setActivityForm] = useState<Tactivity>(initActivityForm);
  const { activity, calories, category } = activityForm;

  useEffect(() => {
    if (state.activeId) {
      const selectedActivity = state.activities.filter((stateActivity) => stateActivity.id === state.activeId)[0];
      setActivityForm(selectedActivity);
    }
  }, [state.activeId, state.activities]);

  const handleChangeActivity = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
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

  const handleSubmitActivity = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'save-activity', payload: { newActivity: { ...activityForm, id: uuid4() } } });
    setActivityForm(initActivityForm);
  };

  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg" onSubmit={handleSubmitActivity}>
      <div className="grid grid-cols-1 gap-3">
        <label className="font-bold" htmlFor="category">
          Categoría:
        </label>
        <select
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          id="category"
          value={category}
          onChange={handleChangeActivity}
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
          onChange={handleChangeActivity}
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
          placeholder="Calorias. Ej. 300 o 500"
          value={calories}
          onChange={handleChangeActivity}
        />
      </div>
      <input
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-45"
        type="submit"
        value={submitText[category]}
        disabled={!validActivityForm()}
      />
    </form>
  );
}
