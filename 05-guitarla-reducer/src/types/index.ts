// https://www.typescriptlang.org/docs/handbook/utility-types.html

export type Guitar = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};

export type CartItem = Guitar & {
  quantity: number;
};

// export type CartItem = Pick<Guitar, 'id'> & {
//   quantity: number;
// };

// export type CartItem = Omit<Guitar, 'id'> & {
//   quantity: number;
// };

// export interface CartItem extends Guitar {
//   quantity: number;
// }

export type GuitarProps = {
  guitar: Guitar;
  addToCart: (item: Guitar) => void;
};

export type headerProps = {
  cart: CartItem[];
  removeFromCart: (id: Guitar['id']) => void;
  decreaseQuantity: (id: Guitar['id']) => void;
  increaseQuantity: (id: Guitar['id']) => void;
  clearCart: () => void;
  isEmpty: boolean;
  cartTotal: number;
};
