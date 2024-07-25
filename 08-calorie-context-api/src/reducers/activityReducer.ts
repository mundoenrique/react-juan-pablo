import { localStorageActivities } from '../data';
import type { Tactivity, TactivityActions, TactivityState } from '../types';

export const initialState: TactivityState = {
  activities: localStorageActivities(),
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

  if (action.type === 'delete-activity') {
    return {
      ...state,
      activities: state.activities.filter((activity) => activity.id !== action.payload.id),
    };
  }

  if (action.type === 'restart-app') {
    return {
      activities: [],
      activeId: '',
    };
  }

  return state;
};
