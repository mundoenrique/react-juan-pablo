import type { Dispatch, SetStateAction } from 'react';

export type MenuItem = {
  id: number;
  name: string;
  price: number;
};

export type tipOption = {
  id: string;
  value: number;
  label: string;
};

export type OrderItem = MenuItem & {
  quantity: number;
};

export type MenuItemProps = {
  item: MenuItem;
  addItem: (item: MenuItem) => void;
};

export type OrderContentsProps = {
  order: OrderItem[];
  removeItem: (id: MenuItem['id']) => void;
};

export type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
};

export type TipPercentageFormProps = {
  setTip: Dispatch<SetStateAction<number>>;
};
