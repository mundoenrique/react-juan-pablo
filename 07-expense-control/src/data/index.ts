import { TbudgetState } from '../types';
import { initBudget, initExpenses } from './budgetStorage';

export { categories } from './categoryList';
export { initBudget, initExpenses } from './budgetStorage';

export const initExpenseState = {
  expenseAmount: 0,
  expenseName: '',
  expenseCategory: '',
  expenseDate: new Date(),
};

export const initBudgetstate: TbudgetState = {
  budget: initBudget(),
  modal: false,
  expenses: initExpenses(),
  editingId: '',
  currenCategory: '',
};
