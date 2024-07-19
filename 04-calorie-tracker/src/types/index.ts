import type { Dispatch } from 'react';

export type Tcategory = {
  id: number;
  name: string;
};

export type Tactivity = {
  activity: string;
  calories: number;
  category: number;
};

export type TsubmitText = {
  [key: number]: string;
};

export type TactivityActions = {
  type: 'save-activity';
  payload: { newActivity: Tactivity };
};

export type TactivityState = {
  activities: Tactivity[];
};

export type TformProps = {
  dispatch: Dispatch<TactivityActions>;
};
