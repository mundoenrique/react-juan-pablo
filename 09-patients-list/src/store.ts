import uuid4 from 'uuid4';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import type { TdrafPatient, Tpatient, TpatientState } from './types';

const createPatient = (drafPatient: TdrafPatient): Tpatient => {
  const patient = { ...drafPatient, id: uuid4() };

  return patient;
};

export const usePatientStorage = create<TpatientState>()(
  devtools((set) => ({
    patients: [],
    activeId: '',
    addPatient: (data) => {
      const NewPatient = createPatient(data);

      set((state) => ({
        patients: [...state.patients, NewPatient],
      }));
    },
    deletePatient: (id) => {
      set((state) => ({
        patients: state.patients.filter((patient) => patient.id !== id),
      }));
    },
    getPatientById: (id: Tpatient['id']) => {
      set(() => ({
        activeId: id,
      }));
    },
  }))
);
