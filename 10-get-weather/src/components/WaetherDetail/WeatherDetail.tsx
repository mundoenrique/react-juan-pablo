import { TweatherZod } from '../../types';

type TweatherDetailProps = {
  weather: TweatherZod;
};

export default function WeatherDetail({ weather }: TweatherDetailProps) {
  return (
    <div>
      <h2>CLima de {weather.name}</h2>
      <p> {weather.main.temp} </p>
      <p> {weather.main.temp_max} </p>
      <p> {weather.main.temp_min} </p>
    </div>
  );
}
