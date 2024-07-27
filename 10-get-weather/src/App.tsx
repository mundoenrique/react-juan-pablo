import Form from './components/form/Form';
import useWeather from './hooks/useWeather';
import Alert from './components/Alert/Alert';
import Spinner from './components/Spinner/Spinner';
import WeatherDetail from './components/WaetherDetail/WeatherDetail';

import styles from './App.module.css';

export default function App() {
  const { weather, loading, notFound, fetchWeather, hasWeatherData } = useWeather();

  return (
    <>
      <h1 className={styles.title}>Buscador de clima</h1>
      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />
        {loading && <Spinner />}
        {hasWeatherData && <WeatherDetail weather={weather} />}
        {notFound && <Alert>Ciudad no encontrada</Alert>}
      </div>
    </>
  );
}
