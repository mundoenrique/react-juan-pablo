import type { TbudgetAction, TbudgetState } from '../types';

export const initBudgetstate: TbudgetState = {
  budget: 0,
  modal: false,
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

  return budgetState;
};
