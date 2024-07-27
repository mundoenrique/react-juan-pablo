import axios from 'axios';
import { useMemo, useState } from 'react';

import { WeatherSchemaZod } from '../helpers';
import { TsearchType, TweatherZod } from '../types';
import { weatherInitState } from '../data/countries';

export default function useWeather() {
  const [weather, setWeather] = useState<TweatherZod>(weatherInitState);

  const [loading, setLoading] = useState(false);

  const fetchWeather = async (search: TsearchType) => {
    const appId = import.meta.env.VITE_API_KEY;
    setWeather(weatherInitState);
    setLoading(true);

    try {
      const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`;

      const { data: dataGeo } = await axios(geoUrl);
      const lat = dataGeo[0].lat;
      const lon = dataGeo[0].lon;

      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;

      // Castear el type
      // const { data: dataWeather } = await axios<Tweather>(weatherUrl);
      // console.log(dataWeather.name)

      // type guards o assertion
      // const { data: dataWeather } = await axios(weatherUrl);
      // const result = isWeatherResponse(dataWeather);
      // result && console.log(dataWeather.name);

      // Zod
      const { data: dataWeather } = await axios(weatherUrl);
      const result = WeatherSchemaZod.safeParse(dataWeather);

      if (result.success) {
        setWeather(result.data);
      }

      // Valibot
      // const { data: dataWeather } = await axios(weatherUrl);
      // const result = parse(WeatherSchemaValibot, dataWeather);
      // if (result) {
      //   console.log(result.name);
      // }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const hasWeatherData = useMemo(() => weather.name !== '', [weather]);

  return {
    weather,
    loading,
    fetchWeather,
    hasWeatherData,
  };
}
