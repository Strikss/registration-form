import { PaletteOptions } from '@mui/material/styles';

import { ColorOverrides } from './types';

export const colors: { light: PaletteOptions & ColorOverrides } = {
  light: {
    primary: {
      main: '#1452f0',
      dark: '#124BDC',
    },
    text: {
      primary: '#111111',
      secondary: '#666666',
      disabled: '#B3B3B3',
    },
    background: {
      default: '#FBFBFB',
      paper: '#F3F3F3',
    },
    grey: {
      50: '#F8F8F8',
    },
    error: {
      main: '#FF0000',
      light: '#FF5C45',
    },
    success: {
      main: '#0FB168',
      light: '#E9F7F1',
    },
    borders: {
      main: '#F2F2F2',
      dark: '#DCDCDC',
    },
    common: {
      white: '#FFFFFF',
      black: '#000000',
    },
  },
} as const;
