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
  | { type: 'edit-activity'; payload: { updatedActivity: Tactivity } }
  | { type: 'set-activeId'; payload: { id: Tactivity['id'] } };

export type TactivityState = {
  activities: Tactivity[];
  activeId: Tactivity['id'];
};

export type TformProps = {
  dispatch: Dispatch<TactivityActions>;
};

export type TactivityListProps = {
  activities: Tactivity[];
  dispatch: Dispatch<TactivityActions>;
};
