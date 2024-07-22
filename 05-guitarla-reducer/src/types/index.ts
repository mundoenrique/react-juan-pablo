// https://www.typescriptlang.org/docs/handbook/utility-types.html

import { Dispatch } from 'react';

export type Tguitar = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};

export type TcartItem = Tguitar & {
  quantity: number;
};

export type TcartState = {
  data: Tguitar[];
  cart: TcartItem[];
};

export type TcartActions =
  | { type: 'add-to-cart'; payload: { item: Tguitar } }
  | { type: 'remove-from-cart'; payload: { id: Tguitar['id'] } }
  | { type: 'decrease-quantity'; payload: { id: Tguitar['id'] } }
  | { type: 'increase-quantity'; payload: { id: Tguitar['id'] } }
  | { type: 'clear-cart' };

export type TguitarProps = {
  guitar: Tguitar;
  dispatch: Dispatch<TcartActions>;
};

export type TheaderProps = {
  cart: TcartItem[];
  dispatch: Dispatch<TcartActions>;
};
