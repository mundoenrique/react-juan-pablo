import { initBudgetstate } from '../data';
import { createExpense } from '../helpers';
import type { TbudgetAction, TbudgetState } from '../types';

export const budgetReducer = (budgetState: TbudgetState, budgetAction: TbudgetAction) => {
  const { type, payload } = budgetAction;

  if (type === 'add-budget') {
    return {
      ...budgetState,
      budget: payload.budget,
    };
  }

  if (type === 'show-modal') {
    return {
      ...budgetState,
      modal: true,
    };
  }

  if (type === 'close-modal') {
    return {
      ...budgetState,
      modal: false,
      editingId: '',
    };
  }

  if (type === 'add-expense') {
    const expense = createExpense(payload.expense);

    return {
      ...budgetState,
      expenses: [...budgetState.expenses, expense],
      modal: false,
    };
  }

  if (type === 'remove-expense') {
    const updatedExpense = budgetState.expenses.filter((expense) => expense.id !== payload.id);

    return {
      ...budgetState,
      expenses: updatedExpense,
    };
  }

  if (type === 'get-expense-by-id') {
    return {
      ...budgetState,
      editingId: payload.id,
      modal: true,
    };
  }

  if (type === 'update-expense') {
    const updateExpenses = budgetState.expenses.map((expense) =>
      expense.id === budgetState.editingId ? payload.expense : expense
    );

    return {
      ...budgetState,
      expenses: updateExpenses,
      modal: false,
      editingId: '',
    };
  }

  if (type === 'reset-app') {
    return {
      ...initBudgetstate,
      budget: 0,
      expenses: [],
    };
  }

  if (type === 'add-filter-category') {
    return {
      ...budgetState,
      currenCategory: payload.id,
    };
  }

  return budgetState;
};
