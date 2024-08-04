import {
  Form,
  Link,
  redirect,
  useActionData,
  useLoaderData,
  type ActionFunctionArgs,
  type LoaderFunctionArgs,
} from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage';
import ProductForm from '../components/ProductForm';
import { getProductsById, updateProduct } from '../services/ProductService';
import { Product } from '../types';

export async function Loader({ params }: LoaderFunctionArgs) {
  const { id } = params;

  if (id !== undefined) {
    const product = await getProductsById(+id);

    if (!product) {
      return redirect('/');
    }

    return product;
  }
}

export async function Action({ request, params }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData());
  const { id } = params;
  let error = '';

  if (Object.values(data).includes('')) {
    error = 'Todos los campos son obligatorios';
  }

  if (error) {
    return error;
  }

  if (id !== undefined) {
    await updateProduct(data, +id);
    return redirect('/');
  }
}

const availabilityOptions = [
  { name: 'Disponible', value: true },
  { name: 'No Disponible', value: false },
];

export default function EditProduct() {
  const product = useLoaderData() as Product;
  const error = useActionData() as string;

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">Editar producto</h2>
        <Link
          to="/"
          className="rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500"
        >
          Volver a productos
        </Link>
      </div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Form className="mt-10" method="post">
        <ProductForm product={product} />
        <div className="mb-4">
          <label className="text-gray-800" htmlFor="availability">
            Disponibilidad:
          </label>
          <select
            id="availability"
            className="mt-2 block w-full p-3 bg-gray-50"
            name="availability"
            defaultValue={product.availability.toString()}
          >
            {availabilityOptions.map((option) => (
              <option key={option.name} value={option.value.toString()}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <input
          type="submit"
          className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded"
          value="Editar producto"
        />
      </Form>
    </>
  );
}
