import uuid4 from 'uuid4';
import { TdraftExpense, Texpense } from '../types';

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function createExpense(drafExpense: TdraftExpense): Texpense {
  const expense = { ...drafExpense, id: uuid4() };

  return expense;
}
