import { styled } from '@mui/material';

export const Container = styled('div')(({ theme }) => ({
  display: 'grid',
  minHeight: '100vh',
  background: theme.palette.background.default,
}));

export const MainContainer = styled('main')(() => ({
  width: '100%',
  display: 'flex',
  placeSelf: 'center',
  justifyContent: 'center',
}));
