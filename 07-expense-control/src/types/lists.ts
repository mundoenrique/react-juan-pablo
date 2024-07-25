export type Tcategory = {
  id: string;
  name: string;
  icon: string;
};

export type TvaluePiece = Date | null;

export type Tvalue = TvaluePiece | [TvaluePiece, TvaluePiece];

export type Texpense = {
  id: string;
  expenseAmount: number;
  expenseName: string;
  expenseCategory: string;
  expenseDate: Tvalue;
};

export type TdraftExpense = Omit<Texpense, 'id'>;
