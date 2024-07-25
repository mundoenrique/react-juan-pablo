import { Texpense } from '../types';

export function initBudget(): number {
  const storageBudget = localStorage.getItem('budget');

  return storageBudget ? +storageBudget : 0;
}

export function initExpenses(): Texpense[] {
  const storageExpenses = localStorage.getItem('expenses');

  return storageExpenses ? JSON.parse(storageExpenses) : [];
}
