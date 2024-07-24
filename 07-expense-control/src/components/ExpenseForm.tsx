import DatePicker from 'react-date-picker';
import { categories } from '../data';
import { useState } from 'react';
import { Tvalue } from '../types';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

export default function ExpenseForm() {
  const [value, onChange] = useState<Tvalue>(new Date());

  return (
    <>
      <form className="space-y-5">
        <legend className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2">
          Nuevo gasto
        </legend>
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
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="expenseCategory" className="text-xl">
            Cantidad:
          </label>
          <select id="expenseCategory" className="bg-slate-100 p-2" name="expenseCategory" value="">
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
          <DatePicker className="bg-slate-100 p-2 border-0" onChange={onChange} value={value} />
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
