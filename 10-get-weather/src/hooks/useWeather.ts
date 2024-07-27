import axios from 'axios';
import { TsearchType } from '../types';

export default function useWeather() {
  const fetchWeather = async (search: TsearchType) => {
    const appId = import.meta.env.VITE_API_KEY;

    try {
      const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`;

      const { data: dataGeo } = await axios(geoUrl);
      const lat = dataGeo[0].lat;
      const lon = dataGeo[0].lon;

      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;

      const { data: dataWeather } = await axios(weatherUrl);

      console.log(dataWeather);
    } catch (error) {
      console.error(error);
    }
  };

  return { fetchWeather };
}
