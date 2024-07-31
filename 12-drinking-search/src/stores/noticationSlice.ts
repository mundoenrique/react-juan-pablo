import { StateCreator } from 'zustand';
import { TFavoritesSlice, TNoticationSlice } from '../types';

export const createNoticationSlice: StateCreator<TNoticationSlice & TFavoritesSlice, [], [], TNoticationSlice> = (
  set,
  get
) => ({
  notification: {
    text: '',
    error: false,
    show: false,
  },

  showNotification: (payload) => {
    set({
      notification: {
        text: payload.text,
        error: payload.error,
        show: true,
      },
    });

    setTimeout(() => {
      get().hideNotification();
    }, 5000);
  },
  hideNotification: () => {
    set({
      notification: {
        text: '',
        error: false,
        show: false,
      },
    });
  },
});
