import { useContext } from 'react';
import { Budgetcontext } from '../context/BudgetContext';

export const useBudget = () => {
  const context = useContext(Budgetcontext);

  if (!context) {
    throw new Error('useBudget must be used within a BudgetProvider');
  }

  return context;
};
