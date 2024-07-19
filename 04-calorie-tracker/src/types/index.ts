import type { Dispatch } from 'react';

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
  | { type: 'delete-activeId'; payload: { id: Tactivity['id'] } }
  | { type: 'restar-app' };

export type TactivityState = {
  activities: Tactivity[];
  activeId: Tactivity['id'];
};

export type TformProps = {
  dispatch: Dispatch<TactivityActions>;
  state: TactivityState;
};

export type TactivityListProps = {
  activities: Tactivity[];
  dispatch: Dispatch<TactivityActions>;
};

export type TcalorieTracker = {
  activities: Tactivity[];
};

export type TcalorieDisplay = {
  calories: Tactivity['calories'];
  text: string;
};
