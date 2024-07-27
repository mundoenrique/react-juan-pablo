import { z } from 'zod';
import { Tweather } from '../types';
import { number, object, string } from 'valibot';

export function isWeatherResponse(weather: unknown): weather is Tweather {
  return (
    Boolean(weather) &&
    typeof weather === 'object' &&
    typeof (weather as Tweather).name === 'string' &&
    typeof (weather as Tweather).main === 'object' &&
    typeof (weather as Tweather).main.temp === 'number' &&
    typeof (weather as Tweather).main.temp_max === 'number' &&
    typeof (weather as Tweather).main.temp_min === 'number'
  );
}

export const WeatherSchemaZod = z.object({
  name: z.string(),
  main: z.object({
    temp: z.number(),
    temp_max: z.number(),
    temp_min: z.number(),
  }),
});

export const WeatherSchemaValibot = object({
  name: string(),
  main: object({
    temp: number(),
    temp_max: number(),
    temp_min: number(),
  }),
});
