export type Tcategory = {
  id: number;
  name: string;
};

export type Tactivity = {
  activity: string;
  calories: number;
  category: number;
};

export type TsubmitText = {
  [key: number]: string;
};
