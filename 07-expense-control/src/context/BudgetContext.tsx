import { createContext, useReducer } from 'react';
import { TbudgetProps, TbudgetProviderProps } from '../types';
import { budgetReducer, initBudgetstate } from '../reducers/budgetReducer';

export const Budgetcontext = createContext<TbudgetProps>(null!);

export default function BudgetProvider({ children }: TbudgetProviderProps) {
  const [state, dispatch] = useReducer(budgetReducer, initBudgetstate);

  return <Budgetcontext.Provider value={{ state, dispatch }}>{children}</Budgetcontext.Provider>;
}
