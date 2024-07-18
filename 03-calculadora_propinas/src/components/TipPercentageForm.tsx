import { tipOptions } from '../data/tipOptions';
import { TipPercentageFormProps } from '../types';

export default function TipPercentageForm({ setTip }: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>
      <form>
        {tipOptions.map((tip) => (
          <div key={tip.id} className="flex gap-2">
            <label htmlFor={tip.id}>{tip.label}</label>
            <input type="radio" id={tip.id} name="tip" value={tip.value} onChange={(e) => setTip(+e.target.value)} />
          </div>
        ))}
      </form>
    </div>
  );
}
