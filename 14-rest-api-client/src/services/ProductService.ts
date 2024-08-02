import { safeParse } from 'valibot';
import { DraftProductSchema } from '../types';

type ProductData = {
  [k: string]: FormDataEntryValue;
};

export async function addProdcut(data: ProductData) {
  try {
    const { success, output } = safeParse(DraftProductSchema, { name: data.name, price: +data.price });

    if (success) {
      console.log(output);
    }
  } catch (error) {
    console.log(error);
  }
}
