import { useEffect, useState } from 'react';
import type { TcartItem } from '../types';

export function useCart() {
  const initialCart = (): TcartItem[] => {
    const localStorageCart = localStorage.getItem('cart');

    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [cart] = useState(initialCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
}
