import { useMemo } from 'react';
import { TcalorieTracker } from '../types';
import CalorieDisplay from './CalorieDisplay';

export default function CalorieTracker({ activities }: TcalorieTracker) {
  const caloriesConsumed = useMemo(
    () => activities.reduce((total, activity) => (activity.category === 1 ? total + activity.calories : total), 0),
    [activities]
  );
  const caloriesBurned = useMemo(
    () => activities.reduce((total, activity) => (activity.category === 2 ? total + activity.calories : total), 0),
    [activities]
  );
  const netCalories = useMemo(() => caloriesConsumed - caloriesBurned, [caloriesBurned, caloriesConsumed]);

  return (
    <>
      <h2 className="text-4xl font-black text-white text-center">Resumen de calorias</h2>
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
        <CalorieDisplay calories={caloriesConsumed} text={'Consumidas'} />
        <CalorieDisplay calories={caloriesBurned} text={'Ejercicio'} />
        <CalorieDisplay calories={netCalories} text={'Diferencia'} />
      </div>
    </>
  );
}
