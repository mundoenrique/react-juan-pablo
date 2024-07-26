import { createContext, useReducer, useMemo } from 'react';
import { Tactivity, TactivityContex, TactivityProviderProps } from '../types';
import { activityReducer, initialState } from '../reducers/activityReducer';
import { categories } from '../data';

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
  const categoryName = useMemo(
    () => (category: Tactivity['category']) => categories.map((cat) => (cat.id === category ? cat.name : '')),
    []
  );

  const isEmptyActivities = useMemo(() => activities.length === 0, [activities]);

  return (
    <ActivityContex.Provider
      value={{ state, dispatch, caloriesConsumed, caloriesBurned, netCalories, categoryName, isEmptyActivities }}
    >
      {children}
    </ActivityContex.Provider>
  );
};
