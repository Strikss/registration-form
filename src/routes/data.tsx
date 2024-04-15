import { RouteObject } from 'react-router-dom';

import { PagePaths } from './page-paths';

export type RouteType = {
  importPath: string;
} & RouteObject;

export const withLayoutRoutes: RouteType[] = [
  { path: PagePaths.home, importPath: 'home' },
] as const;
