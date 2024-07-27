import { z } from 'zod';
import { InferOutput } from 'valibot';
import { WeatherSchemaZod } from '../helpers';
import { WeatherSchemaValibot } from '../helpers/index';

export type TsearchType = {
  city: string;
  country: string;
};

export type Tcountries = {
  code: string;
  name: string;
};

export type Tweather = {
  name: string;
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
  };
};

// Zod
export type TweatherZod = z.infer<typeof WeatherSchemaZod>;
export type TweatherValibot = InferOutput<typeof WeatherSchemaValibot>;
