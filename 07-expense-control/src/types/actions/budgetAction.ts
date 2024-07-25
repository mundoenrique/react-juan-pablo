import { Tcategory, TdraftExpense, Texpense } from '../lists';

export type TbudgetState = {
  budget: number;
  modal: boolean;
  expenses: Texpense[];
  editingId: Texpense['id'];
  currenCategory: Tcategory['id'];
};

export type TbudgetAction =
  | { type: 'add-budget'; payload: { budget: TbudgetState['budget'] } }
  | { type: 'show-modal'; payload?: undefined }
  | { type: 'close-modal'; payload?: undefined }
  | { type: 'add-expense'; payload: { expense: TdraftExpense } }
  | { type: 'remove-expense'; payload: { id: Texpense['id'] } }
  | { type: 'get-expense-by-id'; payload: { id: Texpense['id'] } }
  | { type: 'update-expense'; payload: { expense: Texpense } }
  | { type: 'reset-app'; payload?: undefined }
  | { type: 'add-filter-category'; payload: { id: Tcategory['id'] } };
