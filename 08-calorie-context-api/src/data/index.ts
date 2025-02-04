import type { Tactivity, Tcategory, TsubmitText } from '../types';

export const categories: Tcategory[] = [
  { id: 1, name: 'Comida' },
  { id: 2, name: 'Ejercicio' },
];

export const initActivityForm: Tactivity = {
  id: '',
  activity: '',
  calories: 0,
  category: 0,
};

export const submitText: TsubmitText = {
  0: 'Guardar',
  1: 'Guardar Comida',
  2: 'Guarda Ejercicio',
};

export const localStorageActivities = (): Tactivity[] => {
  const activities = localStorage.getItem('activities');

  return activities ? JSON.parse(activities) : [];
};
