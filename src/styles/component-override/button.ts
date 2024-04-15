import { Components, Theme } from '@mui/material';

import { typographyValues } from './typography';

export const buttonOverrides: Components<Theme>['MuiButton'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      ...typographyValues,
      color: theme.palette.text.primary,
      boxShadow: 'none',
      borderRadius: 8,
      textTransform: 'none',
      '& .MuiButton-startIcon': {
        marginLeft: 0,
      },
      '& .MuiButton-endIcon': {
        marginRight: 0,
      },
      padding: '4px 12px',
    }),
    sizeMedium: {
      height: 45,
    },
    sizeSmall: {
      height: 42,
    },
    containedPrimary: ({ theme }) => ({
      color: theme.palette.common.white,
    }),
  },
};
