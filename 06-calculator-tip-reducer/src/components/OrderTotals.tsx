import { /* useCallback */ useMemo } from 'react';
import type { TorderTotalsProps } from '../types';
import { formatCurrency } from '../helpers';

export default function OrderTotals({ order, tip, dispatch }: TorderTotalsProps) {
  const subtotalAmount = useMemo(() => order.reduce((total, item) => total + item.quantity * item.price, 0), [order]);
  const tipAmount = useMemo(() => subtotalAmount * tip, [subtotalAmount, tip]);
  const TotalAmount = useMemo(() => subtotalAmount + tipAmount, [subtotalAmount, tipAmount]);

  // const subtotalAmount = useCallback(
  //   () => order.reduce((total, item) => total + item.quantity * item.price, 0),
  //   [order]
  // );
  // const tipAmount = useCallback(() => subtotalAmount() * tip, [subtotalAmount, tip]);
  // const TotalAmount = useCallback(() => subtotalAmount() + tipAmount(), [subtotalAmount, tipAmount]);

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina</h2>
        <p>
          Subtotal a pagar: {''}
          {/* useMemo */}
          <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
          {/* UseCallback */}
          {/* <span className="font-bold">{formatCurrency(subtotalAmount())}</span> */}
        </p>
        <p>
          Propina: {''}
          {/* useMemo */}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
          {/* UseCallback */}
          {/* <span className="font-bold">{formatCurrency(tipAmount())}</span> */}
        </p>
        <p>
          Total a pagar: {''}
          {/* useMemo */}
          <span className="font-bold">{formatCurrency(TotalAmount)}</span>
          {/* UseCallback */}
          {/* <span className="font-bold">{formatCurrency(TotalAmount())}</span> */}
        </p>
      </div>
      <button
        className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
        /* useMemo */ disabled={TotalAmount === 0}
        /* UseCallback  disabled={TotalAmount() === 0} */
        onClick={() => dispatch({ type: 'place-order', payload: { order } })}
      >
        Guradar Orden
      </button>
    </>
  );
}
