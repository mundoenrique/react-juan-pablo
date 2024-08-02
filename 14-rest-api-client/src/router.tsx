import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import Products, { Loader as ProdcutLoader } from './views/Products';
import NewProduct, { action as newProductAction } from './views/NewProduct';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: ProdcutLoader,
      },
      {
        path: 'products/new',
        element: <NewProduct />,
        action: newProductAction,
      },
    ],
  },
]);
