import { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import { useBudget } from '../hooks/useBudget';

export default function BudgetForm() {
  const [budget, setBudget] = useState(0);
  const { dispatch } = useBudget();

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.valueAsNumber);
  };

  const isValidForm = useMemo(() => {
    return isNaN(budget) || budget <= 0;
  }, [budget]);

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({ type: 'add-budget', payload: { budget } });
  };

  return (
    <>
      <form className="space-y-5" onSubmit={handleSubmitForm}>
        <div className="flex flex-col space-y-5">
          <label htmlFor="budget" className="text-4xl text-blue-600 font-bold text-center">
            Definir Presupuesto
          </label>
          <input
            id="budget"
            type="number"
            className="w-full bg-white border border-gray-200 p-2"
            placeholder="Define tu presupuesto"
            name="budget"
            min={0}
            value={budget}
            onChange={handleChangeInput}
          />
        </div>
        <input
          type="submit"
          value="Definir presupuesto"
          className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-black uppercase disabled:opacity-40"
          disabled={isValidForm}
        />
      </form>
    </>
  );
}
