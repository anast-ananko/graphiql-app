import { RouterProvider } from 'react-router-dom';

import router from '../../router';
import ErrorsDialog from '../errorsDialog';

import './App.scss';

function App() {
  return (
    <>
      <ErrorsDialog></ErrorsDialog>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
