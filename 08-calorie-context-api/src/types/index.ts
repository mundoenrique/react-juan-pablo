import type { Dispatch, ReactNode } from 'react';

export type Tcategory = {
  id: number;
  name: string;
};

export type Tactivity = {
  id: string;
  activity: string;
  calories: number;
  category: number;
};

export type TsubmitText = {
  [key: number]: string;
};

export type TactivityActions =
  | { type: 'save-activity'; payload: { newActivity: Tactivity } }
  | { type: 'set-activeId'; payload: { id: Tactivity['id'] } }
  | { type: 'delete-activity'; payload: { id: Tactivity['id'] } }
  | { type: 'restart-app' };

export type TactivityState = {
  activities: Tactivity[];
  activeId: Tactivity['id'];
};

export type TcalorieDisplay = {
  calories: Tactivity['calories'];
  text: string;
};

export type TactivityProviderProps = {
  children: ReactNode;
};

export type TactivityContex = {
  state: TactivityState;
  dispatch: Dispatch<TactivityActions>;
  caloriesConsumed: number;
  caloriesBurned: number;
  netCalories: number;
  categoryName: (category: Tactivity['category']) => string[];
  isEmptyActivities: boolean;
};
