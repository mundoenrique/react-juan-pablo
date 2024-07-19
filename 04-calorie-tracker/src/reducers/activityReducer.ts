import type { Tactivity, TactivityActions, TactivityState } from '../types';

export const initialState: TactivityState = {
  activities: [],
  activeId: '',
};

export const activityReducer = (state: TactivityState = initialState, action: TactivityActions) => {
  if (action.type === 'save-activity') {
    let updatedActivities: Tactivity[] = [];

    if (state.activeId) {
      updatedActivities = state.activities.map((activity) =>
        activity.id === state.activeId ? action.payload.newActivity : activity
      );
    } else {
      updatedActivities = [...state.activities, action.payload.newActivity];
    }

    return {
      ...state,
      activities: updatedActivities,
      activeId: '',
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
