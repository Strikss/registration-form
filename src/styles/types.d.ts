import { PaletteColor, SimplePaletteColorOptions } from '@mui/material/styles';

export declare module '@mui/material/styles' {
  interface Palette {
    borders: PaletteColor;
  }
  interface PaletteOptions {
    borders: SimplePaletteColorOptions;
  }
  interface TypographyVariants {
    body3?: React.CSSProperties;
    body4?: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
    body4?: React.CSSProperties;
  }
}
export declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
    body4: true;
  }
}
export interface ColorOverrides {
  primary: SimplePaletteColorOptions;
  success: SimplePaletteColorOptions;
}
