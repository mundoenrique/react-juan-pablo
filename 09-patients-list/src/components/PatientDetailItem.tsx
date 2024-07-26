import { TpatientDetailItemProps } from '../types';

export default function PatientDetailItem({ label, data }: TpatientDetailItemProps) {
  return (
    <p className="font-bold mb-3 text-gray-700 uppercase">
      {label}:<span className="font-normal normal-case ml-1">{data}</span>
    </p>
  );
}
