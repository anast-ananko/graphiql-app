import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Layout from './components/layout';
import ProtectedRoute from './components/protected-route';
import Main from './pages/main';
import Welcome from './pages/welcome';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import NotFound from './pages/not-found';
import TestApi from './pages/testApi';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Welcome />} />
      <Route
        path="main"
        element={
          <ProtectedRoute permission={true}>
            <Main />
          </ProtectedRoute>
        }
      />
      <Route
        path="login"
        element={
          <ProtectedRoute permission={false}>
            <SignIn />
          </ProtectedRoute>
        }
      />
      <Route
        path="registration"
        element={
          <ProtectedRoute permission={false}>
            <SignUp />
          </ProtectedRoute>
        }
      />
      <Route
        path="testApi"
        element={
          <ProtectedRoute permission={true}>
            <TestApi />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
