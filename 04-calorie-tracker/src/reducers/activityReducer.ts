import type { TactivityActions, TactivityState } from '../types';

export const initialState: TactivityState = {
  activities: [],
};

export const activityReducer = (state: TactivityState = initialState, action: TactivityActions) => {
  if (action.type === 'save-activity') {
    return {
      ...state,
      activities: [...state.activities, action.payload.newActivity],
    };
  }

  return state;
};
