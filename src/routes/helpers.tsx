import { FC } from 'react';
import { RouteObject } from 'react-router-dom';

import { RouteType } from './data';

export const createRoute = ({ importPath, path, ...rest }: RouteType): RouteObject => ({
  path,
  async lazy() {
    const Component: FC = (await import(`../pages/${importPath}/index.tsx`)).default;
    return {
      element: <Component />,
    };
  },
  ...rest,
});
