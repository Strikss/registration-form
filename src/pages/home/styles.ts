import { alpha, styled } from '@mui/material';

export const FormContainer = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
  padding: '24px',
  borderRadius: 12,
  border: `1px solid ${theme.palette.borders.main}`,
  background: theme.palette.common.white,
  boxShadow: `0px 2px 12.9px 0px ${alpha(theme.palette.common.black, 0.15)}`,
}));
