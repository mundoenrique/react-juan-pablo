import styles from './App.module.css';
import Form from './components/form/Form';
import useWeather from './hooks/useWeather';

export default function App() {
  const { fetchWeather } = useWeather();

  return (
    <>
      <h1 className={styles.title}>Buscador de clima</h1>
      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />
        <p>2</p>
      </div>
    </>
  );
}
