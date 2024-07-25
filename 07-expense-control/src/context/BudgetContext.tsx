import { createContext, useMemo, useReducer } from 'react';
import { TbudgetProps, TbudgetProviderProps } from '../types';
import { budgetReducer, initBudgetstate } from '../reducers/budgetReducer';

export const Budgetcontext = createContext<TbudgetProps>(null!);

export default function BudgetProvider({ children }: TbudgetProviderProps) {
  const [state, dispatch] = useReducer(budgetReducer, initBudgetstate);
  const totalExpenses = useMemo(
    () => state.expenses.reduce((total, expense) => total + expense.expenseAmount, 0),
    [state.expenses]
  );
  const remainingBudget = useMemo(() => state.budget - totalExpenses, [state.budget, totalExpenses]);

  return (
    <Budgetcontext.Provider value={{ state, dispatch, totalExpenses, remainingBudget }}>
      {children}
    </Budgetcontext.Provider>
  );
}
