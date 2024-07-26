import { create } from 'zustand';

import type { TpatientState } from './types';

export const usePatientStorage = create<TpatientState>(() => ({
  patients: [],
  addPatient: (data) => {
    console.log(data);
  },
}));
