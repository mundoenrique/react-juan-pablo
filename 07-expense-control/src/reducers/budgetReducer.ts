import type { TbudgetAction, TbudgetState } from '../types';

export const initBudgetstate: TbudgetState = {
  budget: 0,
};

export const budgetReducer = (budgetState: TbudgetState, budgetAction: TbudgetAction) => {
  const { type, payload } = budgetAction;

  if (type === 'add-budget') {
    return {
      ...budgetState,
      budget: payload.budget,
    };
  }

  return budgetState;
};
