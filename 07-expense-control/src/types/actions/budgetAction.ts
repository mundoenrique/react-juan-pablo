export type TbudgetState = {
  budget: number;
};

export type TbudgetAction =
  | { type: 'add-budget'; payload: { budget: TbudgetState['budget'] } }
  | { type: 'add-budget'; payload: { budget: number } };
