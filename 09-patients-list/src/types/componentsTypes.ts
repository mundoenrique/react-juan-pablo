export type Tpatient = {
  id: string;
  name: string;
  caretaker: string;
  email: string;
  date: Date;
  symptoms: string;
};

export type TdrafPatient = Omit<Tpatient, 'id'>;

export type TpatientsListItems = Partial<Tpatient>;

export type TpatientDetailsProps = {
  patient: Tpatient;
};

export type TpatientDetailItemProps = {
  label: string;
  data: string;
};
