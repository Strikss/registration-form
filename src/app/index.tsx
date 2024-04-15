import { ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';

import { routes } from '@/routes';
import { theme } from '@/styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
};

export default App;
