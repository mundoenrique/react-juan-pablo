export type Tpatient = {
  id: string;
  name: string;
  caretaker: string;
  email: string;
  date: Date;
  symptoms: string;
};

export type TdrafPatient = Omit<Tpatient, 'id'>;
