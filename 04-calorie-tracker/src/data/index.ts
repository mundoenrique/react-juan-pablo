import type { Tcategory, TsubmitText } from '../types';

export const categories: Tcategory[] = [
  { id: 1, name: 'Comida' },
  { id: 2, name: 'Ejercicio' },
];

export const submitText: TsubmitText = {
  0: 'Guardar',
  1: 'Guardar Comida',
  2: 'Guarda Ejercicio',
};
