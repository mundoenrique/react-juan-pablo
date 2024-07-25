import { useContext } from 'react';
import { ActivityContex } from '../context/ActivityContex';

export const useActivity = () => {
  const context = useContext(ActivityContex);

  if (!context) throw new Error('el hook useActivity debe ser utilizado en un activityProvider');

  return context;
};
