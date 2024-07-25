import { useBudget } from '../hooks/useBudget';
import { useMemo } from 'react';
import ExpenseDetail from './ExpenseDetail';

export default function ExpenseList() {
  const {
    state: { expenses, currenCategory },
  } = useBudget();

  const filteredExpenese = currenCategory
    ? expenses.filter((expense) => expense.expenseCategory === currenCategory)
    : expenses;

  const noneExpense = useMemo(() => filteredExpenese.length === 0, [filteredExpenese]);

  return (
    <div className="mt-10 bg-white shadow-lg rounded-lg p-10">
      {noneExpense ? (
        <p className="text-gray-600 text-2xl font-bold">No hay gastos</p>
      ) : (
        <>
          <p className="text-gray-600 text-2xl font-bold my-5">Listado de gastos</p>
          {filteredExpenese.map((expense) => (
            <ExpenseDetail key={expense.id} expense={expense} />
          ))}
        </>
      )}
    </div>
  );
}
