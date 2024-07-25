import { TdraftExpense, Texpense } from '../lists';

export type TbudgetState = {
  budget: number;
  modal: boolean;
  expenses: Texpense[];
};

export type TbudgetAction =
  | { type: 'add-budget'; payload: { budget: TbudgetState['budget'] } }
  | { type: 'show-modal'; payload?: undefined }
  | { type: 'close-modal'; payload?: undefined }
  | { type: 'add-expense'; payload: { expense: TdraftExpense } };
