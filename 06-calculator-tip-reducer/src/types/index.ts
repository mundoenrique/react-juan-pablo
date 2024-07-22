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
  addItem: (item: TmenuItem) => void;
};

export type TorderContentsProps = {
  order: TorderItem[];
  removeItem: (id: TmenuItem['id']) => void;
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
