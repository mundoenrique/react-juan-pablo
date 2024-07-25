import { useBudget } from '../hooks/useBudget';
import { useMemo } from 'react';
import ExpenseDetail from './ExpenseDetail';

export default function ExpenseList() {
  const {
    state: { expenses },
  } = useBudget();
  const noneExpense = useMemo(() => expenses.length === 0, [expenses]);
  return (
    <div className="mt-10">
      {noneExpense ? (
        <p className="text-gray-600 text-2xl font-bold">No hay gastos</p>
      ) : (
        <>
          <p className="text-gray-600 text-2xl font-bold my-5">Listado de gastos</p>
          {expenses.map((expense) => (
            <ExpenseDetail key={expense.id} expense={expense} />
          ))}
        </>
      )}
    </div>
  );
}
