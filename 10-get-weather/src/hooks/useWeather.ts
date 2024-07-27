import axios from 'axios';
import { TsearchType } from '../types';

export default function useWeather() {
  const fetchWeather = async (search: TsearchType) => {
    const appId = 'e9a63352b455e2547738c0a3943ccdcf';

    try {
      const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`;

      const { data } = await axios(geoUrl);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return { fetchWeather };
}
