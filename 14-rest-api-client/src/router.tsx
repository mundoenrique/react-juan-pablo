import { createBrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import Products, { Action as updateAvailabilityAction, Loader as ProdcutLoader } from './views/Products';
import NewProduct, { Action as newProductAction } from './views/NewProduct';
import EditProduct, { Action as editProductAction, Loader as editProductLoader } from './views/EditProduct';
import { Action as deleteProductAction } from './components/ProductDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Products />,
        action: updateAvailabilityAction,
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
        action: editProductAction,
        loader: editProductLoader,
      },
      {
        path: 'products/:id/delete',
        action: deleteProductAction,
      },
    ],
  },
]);
