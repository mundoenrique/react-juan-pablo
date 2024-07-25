import { useMemo } from 'react';
import { useBudget } from './hooks/useBudget';
import BudgetForm from './components/BudgetForm';
import BudgetTraker from './components/BudgetTraker';
import ExpenseModal from './components/ExpenseModal';
import ExpenseList from './components/ExpenseList';

export default function App() {
  const {
    state: { budget },
  } = useBudget();

  const isValidBudget = useMemo(() => budget > 0, [budget]);

  return (
    <>
      <header className="bg-blue-600 py-8 maxh-72">
        <h1 className="uppercase text-center font-black tex-4xl text-white">PLanificador de gastos</h1>
      </header>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lgmt-10 p-10">
        {isValidBudget ? <BudgetTraker /> : <BudgetForm />}
      </div>
      {isValidBudget && (
        <main className="max-w-3xl mx-auto py-10">
          <ExpenseList />
          <ExpenseModal />
        </main>
      )}
    </>
  );
}
