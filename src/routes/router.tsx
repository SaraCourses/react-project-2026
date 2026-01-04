import { RouterProvider, createBrowserRouter } from 'react-router';
import Layout from '../layouts/Layout';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import { Paths } from './paths';
import ProductsPage from '../pages/ProductsPage';
import UsersPage from '../pages/UsersPage';
import AuthGuard from '../auth/AuthGuard';
import LoginGuard from '../auth/LoginGuard';

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: Paths.home,
          element: <HomePage />,
        },
        {
          path: Paths.products,
          element: <ProductsPage />,
        },
        {
          path: Paths.users,
          element: <AuthGuard><UsersPage /></AuthGuard>,
        },
      ],
    },

    {
      path: Paths.login,
      element: <LoginGuard ><LoginPage /></LoginGuard>,
    },
    {
      path: Paths.register,
      element: <LoginGuard><RegisterPage /></LoginGuard>,
    },
    {
      path: '*',
      element: <h1>404 Page not found</h1>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
