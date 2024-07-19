// https://www.typescriptlang.org/docs/handbook/utility-types.html

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

// export type TcartItem = Pick<Tguitar, 'id'> & {
//   quantity: number;
// };

// export type TcartItem = Omit<Tguitar, 'id'> & {
//   quantity: number;
// };

// export interface TcartItem extends Tguitar {
//   quantity: number;
// }

export type TguitarProps = {
  guitar: Tguitar;
  addToCart: (item: Tguitar) => void;
};

export type TheaderProps = {
  cart: TcartItem[];
  removeFromCart: (id: Tguitar['id']) => void;
  decreaseQuantity: (id: Tguitar['id']) => void;
  increaseQuantity: (id: Tguitar['id']) => void;
  clearCart: () => void;
  isEmpty: boolean;
  cartTotal: number;
};
