import { TamountDisplayProps } from '../types';
import { formatCurrency } from '../helpers/index';

export default function AmountDisplay({ label, amount }: TamountDisplayProps) {
  return (
    <>
      <p className="text-2xl text-blue-600 font-bold">
        {label}:<span className="font-black ml-1 text-black">{formatCurrency(amount)}</span>
      </p>
    </>
  );
}
