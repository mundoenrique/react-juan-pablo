import { useEffect, useState } from 'react';
import type { TcartItem, Tguitar } from '../types';

export function useCart() {
  const initialCart = (): TcartItem[] => {
    const localStorageCart = localStorage.getItem('cart');

    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [cart, setCart] = useState(initialCart);
  const MIN_ITEMS = 1;

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const decreaseQuantity = (id: Tguitar['id']) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }

      return item;
    });

    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return {
    decreaseQuantity,
    clearCart,
  };
}
