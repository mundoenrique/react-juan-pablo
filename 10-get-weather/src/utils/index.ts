export const formatTemperature = (temperature: number): number => {
  const kelvin = 273.15;
  const celsius = Math.round(temperature - kelvin);

  return celsius;
};
