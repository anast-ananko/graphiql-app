import { RouterProvider } from 'react-router-dom';
import { Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import router from '../../router';
import ErrorsDialog from '../errorsDialog';

import { appTheme } from './app.style';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Paper>
        <ErrorsDialog></ErrorsDialog>
        <RouterProvider router={router} />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
