import uuid4 from 'uuid4';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

import type { TdrafPatient, Tpatient, TpatientState } from './types';

const createPatient = (drafPatient: TdrafPatient): Tpatient => {
  const patient = { ...drafPatient, id: uuid4() };

  return patient;
};

export const usePatientStorage = create<TpatientState>()(
  devtools(
    persist(
      (set) => ({
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
        updatePatient: (data) => {
          set((state) => ({
            patients: state.patients.map((patient) =>
              patient.id === state.activeId ? { id: state.activeId, ...data } : patient
            ),
            activeId: '',
          }));
        },
      }),
      { name: 'patient-storage', storage: createJSONStorage(() => sessionStorage) }
    )
  )
);
