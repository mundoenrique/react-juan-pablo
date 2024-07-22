import type { TorderActions, TorderItem, TorderState } from '../types';

export const initOrderState: TorderState = {
  order: [],
  tip: 0,
};

export default function orderReducer(state: TorderState = initOrderState, action: TorderActions) {
  const { type, payload } = action;

  if (type === 'add-item') {
    const itemExists = state.order.find((orderItem) => orderItem.id === payload.item.id);
    let updatedOrer: TorderItem[] = [];

    if (itemExists) {
      updatedOrer = state.order.map((orderItem) =>
        orderItem.id === payload.item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem
      );
    } else {
      const newItem: TorderItem = { ...payload.item, quantity: 1 };
      updatedOrer = [...state.order, newItem];
    }

    return {
      ...state,
      order: updatedOrer,
    };
  }

  if (type === 'remove-item') {
    const updatedOrder = state.order.filter((leavingItem) => leavingItem.id !== payload.id);

    return {
      ...state,
      order: updatedOrder,
    };
  }

  // if (type === 'place-order') {
  //   return {
  //     ...state,
  //   };
  // }

  if (type === 'add-tip') {
    return {
      ...state,
    };
  }

  return state;
}
