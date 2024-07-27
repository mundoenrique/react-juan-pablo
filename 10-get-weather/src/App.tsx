import styles from './App.module.css';
import Form from './components/form/Form';
import WeatherDetail from './components/WaetherDetail/WeatherDetail';
import useWeather from './hooks/useWeather';

export default function App() {
  const { weather, fetchWeather, hasWeatherData } = useWeather();

  return (
    <>
      <h1 className={styles.title}>Buscador de clima</h1>
      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />
        {hasWeatherData && <WeatherDetail weather={weather} />}
      </div>
    </>
  );
}
