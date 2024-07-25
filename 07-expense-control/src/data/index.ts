export { categories } from './categoryList';
export { initBudget, initExpenses } from './budgetStorage';

export const initExpenseState = {
  expenseAmount: 0,
  expenseName: '',
  expenseCategory: '',
  expenseDate: new Date(),
};
