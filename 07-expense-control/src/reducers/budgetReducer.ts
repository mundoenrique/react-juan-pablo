import { createExpense } from '../helpers';
import type { TbudgetAction, TbudgetState } from '../types';

export const initBudgetstate: TbudgetState = {
  budget: 0,
  modal: false,
  expenses: [],
  editingId: '',
};

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

  return budgetState;
};
