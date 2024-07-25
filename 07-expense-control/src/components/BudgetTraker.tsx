import { useMemo } from 'react';
import { useBudget } from '../hooks/useBudget';
import AmountDisplay from './AmountDisplay';

export default function BudgetTraker() {
  const { state } = useBudget();
  const totalExpenses = useMemo(
    () => state.expenses.reduce((total, expense) => total + expense.expenseAmount, 0),
    [state.expenses]
  );
  const remainingBudget = useMemo(() => state.budget - totalExpenses, [state.budget, totalExpenses]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <img src="/img/grafico.jpg" alt="Gráfico de gastos" />
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        <button type="button" className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg">
          Resetear App
        </button>
        <AmountDisplay label="Presupuesto" amount={state.budget} />
        <AmountDisplay label="Disponible" amount={remainingBudget} />
        <AmountDisplay label="gastado" amount={totalExpenses} />
      </div>
    </div>
  );
}
