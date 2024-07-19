import type { TactivityActions, TactivityState } from '../types';

export const initialState: TactivityState = {
  activities: [],
  activeId: '',
};

export const activityReducer = (state: TactivityState = initialState, action: TactivityActions) => {
  if (action.type === 'save-activity') {
    return {
      ...state,
      activities: [...state.activities, action.payload.newActivity],
    };
  }

  if (action.type === 'set-activeId') {
    return {
      ...state,
      activeId: action.payload.id,
    };
  }

  return state;
};
