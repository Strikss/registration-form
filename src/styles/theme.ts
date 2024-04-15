import './types.d.ts';

import { createTheme } from '@mui/material';

import { colors } from './colors.ts';
import {
  buttonOverrides,
  linkOverrides,
  textFieldOverrides,
  typographyOverrides,
} from './component-override/index.ts';

export const theme = createTheme({
  palette: {
    ...colors.light,
  },
  typography: typographyOverrides,
  components: {
    MuiButton: {
      ...buttonOverrides,
    },
    MuiLink: {
      ...linkOverrides,
    },
    MuiTextField: {
      ...textFieldOverrides,
    },
  },
});
