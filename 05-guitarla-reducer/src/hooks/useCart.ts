import { useEffect, useMemo, useState } from 'react';
import { db } from '../data/db';
import type { TcartItem, Tguitar } from '../types';

export function useCart() {
  const initialCart = (): TcartItem[] => {
    const localStorageCart = localStorage.getItem('cart');

    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };
  const [data] = useState(db);
  const [cart, setCart] = useState(initialCart);
  const MIN_ITEMS = 1;
  const MAX_ITEMS = 5;

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: Tguitar) => {
    const ItemExists = cart.findIndex((guitar) => item.id === guitar.id);
    if (ItemExists === -1) {
      const newItem: TcartItem = { ...item, quantity: 1 };

      setCart([...cart, newItem]);
    } else {
      const updatedCart = [...cart];
      updatedCart[ItemExists].quantity < MAX_ITEMS && updatedCart[ItemExists].quantity++;
      setCart(updatedCart);
    }
  };

  const removeFromCart = (id: Tguitar['id']) => {
    setCart((prevCart) => prevCart.filter((guitar) => guitar.id !== id));
  };

  const increaseQuantity = (id: Tguitar['id']) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    });

    setCart(updatedCart);
  };

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

  // State Derivado
  const isEmpty = useMemo(() => cart.length === 0, [cart]);
  const cartTotal = useMemo(() => cart.reduce((total, item) => total + item.quantity * item.price, 0), [cart]);

  return {
    data,
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    isEmpty,
    cartTotal,
  };
}
