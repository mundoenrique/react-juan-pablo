import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import Products, { Loader as ProdcutLoader } from './views/Products';
import NewProduct, { Action as newProductAction } from './views/NewProduct';
import EditProduct, { Loader as editProductLoader, Action as editProductAction } from './views/EditProduct';

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
      {
        path: 'products/:id/edit', // ROA Pattern - Resource-oriented design
        element: <EditProduct />,
        loader: editProductLoader,
        action: editProductAction,
      },
    ],
  },
]);
