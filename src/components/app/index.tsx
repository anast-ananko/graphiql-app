import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import router from '../../router';
import ErrorsDialog from '../errorsDialog';

import { appTheme } from './app.style';
import './App.scss';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <ErrorsDialog></ErrorsDialog>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
