import { Dispatch, ReactNode } from 'react';
import type { TbudgetAction, TbudgetState } from '../actions/budgetAction';
import { Texpense } from '../lists';

export type TbudgetProps = {
  state: TbudgetState;
  dispatch: Dispatch<TbudgetAction>;
};

export type TbudgetProviderProps = {
  children: ReactNode;
};

export type TamountDisplayProps = {
  label?: string;
  amount: number;
};

export type TexpenseDetailProps = {
  expense: Texpense;
};
