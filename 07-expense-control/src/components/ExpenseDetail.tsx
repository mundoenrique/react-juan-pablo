import { useMemo } from 'react';
import { fomratDate } from '../helpers';
import { TexpenseDetailProps } from '../types';
import AmountDisplay from './AmountDisplay';
import { categories } from '../data';

export default function ExpenseDetail({ expense }: TexpenseDetailProps) {
  const categoryInfo = useMemo(() => categories.filter((cat) => cat.id === expense.expenseCategory)[0], [expense]);

  return (
    <div className="bg-white shadow-lg p-10 w-full border-b border-gray-200 flex gap-5 items-center">
      <div>
        <img
          src={`/img/icono_${categoryInfo.icon.toLocaleLowerCase()}.svg`}
          alt={`${categoryInfo.name}`}
          className="w-20"
        />
      </div>
      <div className="flex-1 space-y-2">
        <p className="text-sm font-bold uppercase text-slate-500">{categoryInfo.name} </p>
        <p> {expense.expenseName} </p>
        <p className="text-slate-600 text-sm"> {fomratDate(expense.expenseDate)} </p>
      </div>
      <AmountDisplay amount={expense.expenseAmount} />
    </div>
  );
}
