import { create } from 'zustand';

import { TpatientState } from './types';

export const usePatientStorage = create<TpatientState>(() => ({
  patients: [],
}));
