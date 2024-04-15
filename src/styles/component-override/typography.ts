import type { Palette } from '@mui/material/styles';
import type { TypographyOptions } from '@mui/material/styles/createTypography';

export const typographyValues = {
  fontFamily: 'Inter, sans-serif',
  fontSize: 16,
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
};

export const typographyOverrides = (palette: Palette): TypographyOptions => ({
  allVariants: { ...typographyValues, color: palette.text.primary },
  h1: { fontSize: 40, fontWeight: 600 },
  h2: { fontSize: 36, fontWeight: 600 },
  h3: { fontSize: 32, fontWeight: 600 },
  h4: { fontSize: 28, fontWeight: 600 },
  h5: { fontSize: 24, fontWeight: 600 },
  h6: { fontSize: 20, fontWeight: 600 },
  body1: { fontSize: 16 },
  body2: { fontSize: 14 },
  body3: { fontSize: 12 },
  body4: { fontSize: 10 },
});
