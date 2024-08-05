import { ActionFunctionArgs, Form, redirect, useNavigate } from 'react-router-dom';
import { Product } from '../types';
import { formatCurrency } from '../utils';

type ProductDetailsProps = {
  product: Product;
};

export async function Action({ params }: ActionFunctionArgs) {
  const { id } = params;
  console.log(id);

  return redirect('/');
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const navigate = useNavigate();
  const isAvailable = product.availability;

  return (
    <tr className="border-b ">
      <td className="p-3 text-lg text-gray-800"> {product.name} </td>
      <td className="p-3 text-lg text-gray-800">{formatCurrency(product.price)}</td>
      <td className="p-3 text-lg text-gray-800">{isAvailable ? 'Dispoble' : 'No disponible '}</td>
      <td className="p-3 text-lg text-gray-800 ">
        <div className="flex gap-2 items-center">
          <button
            onClick={() => navigate(`/products/${product.id}/edit`)}
            className="bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center"
          >
            Editar
          </button>
          <Form className="w-full" method="post" action={`/products/${product.id}/delete`}>
            <input
              type="submit"
              value="Eliminar"
              className="bg-red-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center"
            />
          </Form>
        </div>
      </td>
    </tr>
  );
}
