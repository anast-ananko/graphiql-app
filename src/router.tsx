import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Layout from './components/layout';
import Main from './pages/main';
import Welcome from './pages/welcome';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import NotFound from './pages/not-found';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Welcome />} />
      <Route path="main" element={<Main />} />
      <Route path="login" element={<SignIn />} />
      <Route path="registration" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
