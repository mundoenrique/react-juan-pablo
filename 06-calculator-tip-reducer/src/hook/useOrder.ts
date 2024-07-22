import { useState } from 'react';
import type { TmenuItem, TorderItem } from '../types';

export default function useOrder() {
  const [order, setOrder] = useState<TorderItem[]>([]);
  const [tip, setTip] = useState(0);

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
    tip,
    setTip,
    removeItem,
    placeOrder,
  };
}
