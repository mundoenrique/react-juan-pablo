import { createContext, useReducer, useMemo } from 'react';
import { TactivityContex, TactivityProviderProps } from '../types';
import { activityReducer, initialState } from '../reducers/activityReducer';

export const ActivityContex = createContext<TactivityContex>(null!);

export const ActivityProvider = ({ children }: TactivityProviderProps) => {
  const [state, dispatch] = useReducer(activityReducer, initialState);
  const { activities } = state;
  const caloriesConsumed = useMemo(
    () => activities.reduce((total, activity) => (activity.category === 1 ? total + activity.calories : total), 0),
    [activities]
  );
  const caloriesBurned = useMemo(
    () => activities.reduce((total, activity) => (activity.category === 2 ? total + activity.calories : total), 0),
    [activities]
  );
  const netCalories = useMemo(() => caloriesConsumed - caloriesBurned, [caloriesBurned, caloriesConsumed]);

  return (
    <ActivityContex.Provider value={{ state, dispatch, caloriesConsumed, caloriesBurned, netCalories }}>
      {children}
    </ActivityContex.Provider>
  );
};
