import { safeParse } from 'valibot';
import { DraftProductSchema } from '../types';
import axios from 'axios';

type ProductData = {
  [k: string]: FormDataEntryValue;
};

export async function addProdcut(data: ProductData) {
  try {
    const { success, output } = safeParse(DraftProductSchema, { name: data.name, price: +data.price });

    if (success) {
      const url = `${import.meta.env.VITE_API_URL}/api/products`;

      await axios.post(url, {
        name: output.name,
        price: output.price,
      });
    }
  } catch (error) {
    console.log(error);
  }
}
