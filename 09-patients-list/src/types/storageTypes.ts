import { TdrafPatient, Tpatient } from '.';

export type TpatientState = {
  patients: Tpatient[];
  activeId: Tpatient['id'];
  addPatient: (data: TdrafPatient) => void;
  deletePatient: (id: Tpatient['id']) => void;
  getPatientById: (id: Tpatient['id']) => void;
  updatePatient: (data: TdrafPatient) => void;
};
