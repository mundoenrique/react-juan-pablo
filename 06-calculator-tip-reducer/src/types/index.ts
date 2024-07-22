import type { Dispatch, SetStateAction } from 'react';

export type TmenuItem = {
  id: number;
  name: string;
  price: number;
};

export type TtipOption = {
  id: string;
  value: number;
  label: string;
};

export type TorderItem = TmenuItem & {
  quantity: number;
};

export type TmenuItemProps = {
  item: TmenuItem;
  dispatch: Dispatch<TorderActions>;
};

export type TorderContentsProps = {
  order: TorderItem[];
  dispatch: Dispatch<TorderActions>;
};

export type TorderTotalsProps = {
  order: TorderItem[];
  tip: number;
  placeOrder: (order: TorderItem[]) => void;
};

export type TtipPercentageFormProps = {
  tip: number;
  setTip: Dispatch<SetStateAction<number>>;
};

export type TorderState = {
  order: TorderItem[];
  tip: number;
};

export type TorderActions =
  | { type: 'add-item'; payload: { item: TmenuItem } }
  | { type: 'remove-item'; payload: { id: TmenuItem['id'] } }
  // | { type: 'place-order' }
  | { type: 'add-tip'; payload: { value: TorderState['tip'] } };
