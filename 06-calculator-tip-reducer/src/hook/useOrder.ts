import { useState } from 'react';
import type { TmenuItem, TorderItem } from '../types';

export default function useOrder() {
  const [order, setOrder] = useState<TorderItem[]>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: TmenuItem) => {
    const itemExists = order.find((orderItem) => orderItem.id === item.id);

    if (itemExists) {
      const updatedOrer = order.map((orderItem) =>
        orderItem.id === item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem
      );

      setOrder(updatedOrer);
    } else {
      const newItem = { ...item, quantity: 1 };

      setOrder([...order, newItem]);
    }
  };

  const removeItem = (id: TmenuItem['id']) => {
    const updatedOrder = order.filter((leavingItem) => leavingItem.id !== id);

    setOrder(updatedOrder);
  };

  const placeOrder = (order: TorderItem[]) => {
    console.log(order);
    setOrder([]);
    setTip(0);
  };

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder,
  };
}
