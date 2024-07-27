import { TweatherZod } from '../../types';
import { formatTemperature } from '../../utils';
import styles from './WeatherDetail.module.css';

type TweatherDetailProps = {
  weather: TweatherZod;
};

export default function WeatherDetail({ weather }: TweatherDetailProps) {
  return (
    <div className={styles.container}>
      <h2>CLima de: {weather.name}</h2>
      <p className={styles.current}>{formatTemperature(weather.main.temp)} &deg;C</p>
      <div className={styles.temperatures}>
        <p>
          Min: <span>{formatTemperature(weather.main.temp_min)} &deg;C</span>
        </p>
        <p>
          Max: <span>{formatTemperature(weather.main.temp_max)} &deg;C</span>
        </p>
      </div>
    </div>
  );
}
