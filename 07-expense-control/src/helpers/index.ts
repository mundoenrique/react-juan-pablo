import uuid4 from 'uuid4';
import { TdraftExpense, Texpense, Tvalue } from '../types';

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function fomratDate(date: Tvalue): string {
  const dateObj = new Date(date!.toString());
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return new Intl.DateTimeFormat('es-ES', options).format(dateObj);
}

export function createExpense(drafExpense: TdraftExpense): Texpense {
  const expense = { ...drafExpense, id: uuid4() };

  return expense;
}
