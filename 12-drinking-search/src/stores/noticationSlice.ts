import { StateCreator } from 'zustand';
import { TNoticationSlice } from '../types';

export const createNoticationSlice: StateCreator<TNoticationSlice> = () => ({
  notification: {
    text: '',
    error: false,
    show: false,
  },
});
