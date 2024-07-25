import { ChangeEvent, FormEvent, useState } from 'react';
import DatePicker from 'react-date-picker';

import { TdraftExpense, Tvalue } from '../types';
import { categories } from '../data';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import ErrorMessage from './ErrorMessage';

export default function ExpenseForm() {
  const [expense, setExpense] = useState<TdraftExpense>({
    expenseAmount: 0,
    expenseName: '',
    expenseCategory: '',
    expenseDate: new Date(),
  });
  const [error, setError] = useState('');

  const handleChangeForm = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const isAmountField = ['expenseAmount'].includes(name);
    setExpense({
      ...expense,
      [name]: isAmountField ? +value : value,
    });
  };

  const handleChangeDate = (value: Tvalue) => {
    setExpense({ ...expense, expenseDate: value });
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(expense).includes('')) {
      setError('Todos los campos son necesarios');
    }

    console.log('Todo bien');
  };

  return (
    <>
      <form className="space-y-5" onSubmit={handleSubmitForm}>
        <legend className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2">
          Nuevo gasto
        </legend>
        {error && <ErrorMessage>{error} </ErrorMessage>}
        <div className="flex flex-col gap-2">
          <label htmlFor="expenseName" className="text-xl">
            Nombre del gasto:
          </label>
          <input
            type="text"
            id="expenseName"
            placeholder="Añade el nombre del gasto"
            className="bg-slate-100 p-2"
            name="expenseName"
            value={expense.expenseName}
            onChange={handleChangeForm}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="expenseAmount" className="text-xl">
            Cantidad:
          </label>
          <input
            type="number"
            id="expenseAmount"
            placeholder="Añade la cantidad del gasto ej. 300"
            className="bg-slate-100 p-2"
            name="expenseAmount"
            min={0}
            value={expense.expenseAmount}
            onChange={handleChangeForm}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="expenseCategory" className="text-xl">
            Cantidad:
          </label>
          <select
            id="expenseCategory"
            className="bg-slate-100 p-2"
            name="expenseCategory"
            value={expense.expenseCategory}
            onChange={handleChangeForm}
          >
            <option value="" disabled>
              -- Seleccione
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="expenseDate" className="text-xl">
            Fecha gasto:
          </label>
          <DatePicker className="bg-slate-100 p-2 border-0" value={expense.expenseDate} onChange={handleChangeDate} />
        </div>
        <input
          type="submit"
          className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
          value="Registrar casto"
        />
      </form>
    </>
  );
}
