export type Tcategories = {
  id: string;
  name: string;
  icon: string;
};

export type TvaluePiece = Date | null;

export type Tvalue = TvaluePiece | [TvaluePiece, TvaluePiece];
