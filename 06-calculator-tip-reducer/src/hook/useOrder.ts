import { useState } from 'react';
import type { TorderItem } from '../types';

export default function useOrder() {
  const [, setOrder] = useState<TorderItem[]>([]);
  const [tip, setTip] = useState(0);

  const placeOrder = (order: TorderItem[]) => {
    console.log(order);
    setOrder([]);
    setTip(0);
  };

  return {
    tip,
    setTip,

    placeOrder,
  };
}
