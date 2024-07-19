import { db } from '../data/db';
import type { TcartActions, TcartItem, TcartState } from '../types';

export const initGuitarList: TcartState = {
  data: db,
  cart: [],
};

const MIN_ITEMS = 1;
const MAX_ITEMS = 5;

export const cartReducer = (state: TcartState = initGuitarList, action: TcartActions) => {
  if (action.type === 'add-to-cart') {
    const ItemExists = state.cart.find((guitar) => action.payload.item.id === guitar.id);
    let updatedCart: TcartItem[] = [];

    if (!ItemExists) {
      const newItem: TcartItem = { ...action.payload.item, quantity: 1 };
      updatedCart = [...state.cart, newItem];
    } else {
      updatedCart = state.cart.map((item) => {
        if (item.id === action.payload.item.id) {
          if (item.quantity < MAX_ITEMS) {
            return { ...item, quantity: item.quantity + 1 };
          }
        }

        return item;
      });
    }

    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === 'remove-from-cart') {
    const updatedCart = state.cart.filter((guitar) => guitar.id !== action.payload.id);

    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === 'decrease-quantity') {
    const updatedCart = state.cart.map((item) => {
      if (item.id === action.payload.id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }

      return item;
    });

    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === 'increase-quantity') {
    const updatedCart = state.cart.map((item) => {
      if (item.id === action.payload.id && item.quantity < MAX_ITEMS) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    });

    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === 'clear-cart') {
    return {
      ...state,
    };
  }

  return state;
};
