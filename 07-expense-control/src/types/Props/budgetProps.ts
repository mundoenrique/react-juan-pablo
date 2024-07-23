import { Dispatch, ReactNode } from 'react';
import type { TbudgetAction, TbudgetState } from '../actions/budgetAction';

export type TbudgetProps = {
  state: TbudgetState;
  dispatch: Dispatch<TbudgetAction>;
};

export type TbudgetProviderProps = {
  children: ReactNode;
};
