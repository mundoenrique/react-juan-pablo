import { useState } from 'react';
import { MenuItem, OrderItem } from '../types';

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);

  const addItem = (item: MenuItem) => {
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

  const removeItem = (id: MenuItem['id']) => {
    const updatedOrder = order.filter((leavingItem) => leavingItem.id !== id);

    setOrder(updatedOrder);
  };

  return {
    order,
    addItem,
    removeItem,
  };
}
