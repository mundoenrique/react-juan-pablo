import { tipOptions } from '../data/tipOptions';
import type { TtipPercentageFormProps } from '../types';

export default function TipPercentageForm({ tip, dispatch }: TtipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>
      <form>
        {tipOptions.map(({ id, label, value }) => (
          <div key={id} className="flex gap-2">
            <label htmlFor={id}>{label}</label>
            <input
              type="radio"
              id={id}
              name="tip"
              value={value}
              onChange={(e) => dispatch({ type: 'add-tip', payload: { value: +e.target.value } })}
              checked={value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  );
}
