import { createContext, useReducer } from 'react';
import { TactivityContex, TactivityProviderProps } from '../types';
import { activityReducer, initialState } from '../reducers/activityReducer';

export const ActivityContex = createContext<TactivityContex>(null!);

export const ActivityProvider = ({ children }: TactivityProviderProps) => {
  const [state, disptach] = useReducer(activityReducer, initialState);

  return <ActivityContex.Provider value={{ state, disptach }}>{children}</ActivityContex.Provider>;
};
