import { number, parse, pipe, safeParse, string, transform } from 'valibot';
import { DraftProductSchema, Product, ProductSchema, ProductsSchema } from '../types';
import axios from 'axios';
import { toBoolean } from '../utils/index';

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
    } else {
      throw new Error('Datos no válidos');
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getProducts() {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products`;
    const {
      data: { data },
    } = await axios.get(url);

    const { success, output } = safeParse(ProductsSchema, data);

    if (success) {
      return output;
    } else {
      throw new Error('Error prducts');
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getProductsById(id: Product['id']) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`;
    const {
      data: { data },
    } = await axios.get(url);

    const { success, output } = safeParse(ProductSchema, data);

    if (success) {
      return output;
    } else {
      throw new Error('Error products');
    }
  } catch (error) {
    console.log(error);
  }
}

export async function updateProduct(data: ProductData, id: Product['id']) {
  try {
    const NumberSchema = pipe(string(), transform(Number), number());
    const { success, output } = safeParse(ProductSchema, {
      id,
      name: data.name,
      price: parse(NumberSchema, data.price),
      availability: toBoolean(data.availability.toString()),
    });

    if (success) {
      if (success) {
        const url = `${import.meta.env.VITE_API_URL}/api/products/${output.id}`;

        await axios.put(url, {
          name: output.name,
          price: output.price,
          availability: output.availability,
        });
      } else {
        throw new Error('Datos no válidos');
      }
    }
  } catch (error) {
    console.log(error);
  }
}
