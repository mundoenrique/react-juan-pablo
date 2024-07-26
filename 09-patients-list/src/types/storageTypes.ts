import { TdrafPatient, Tpatient } from '.';

export type TpatientState = {
  patients: Tpatient[];
  addPatient: (data: TdrafPatient) => void;
};
