import { Components, Theme } from '@mui/material';

import { typographyValues } from './typography';

export const textFieldOverrides: Components<Theme>['MuiTextField'] = {
  styleOverrides: {
    root: {
      ...typographyValues,
    },
  },
};
