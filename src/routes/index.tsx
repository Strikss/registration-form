import { createBrowserRouter } from 'react-router-dom';

import Layout from '@/shared/modules/layout';

import { withLayoutRoutes } from './data';
import { createRoute } from './helpers';

export const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: withLayoutRoutes.map(createRoute),
  },
]);
