import { FC, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase.ts';
import { authSignIn } from '../../store/features/authSlice.ts';
import { useAppDispatch } from '../../hooks/hook.ts';
import { CircularProgress, Grid } from '@mui/material';
import { Fallback } from '../../components/error-boundary';
import Header from '../header';
import Footer from '../footer';

const Layout: FC = () => {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (authUser) => {
      setLoading(true);

      if (authUser) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // TODO Eslint thinks, that userCredential don't have accessToken
        const { accessToken, email, uid } = authUser;
        dispatch(authSignIn({ accessToken, email, uid }));
      }

      setLoading(false);
    });

    return () => listen();
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Grid
          container
          sx={{ width: '100%', height: '100vh' }}
          justifyContent="center"
          alignItems="center"
        >
          <CircularProgress color="primary" />
        </Grid>
      ) : (
        <ErrorBoundary FallbackComponent={Fallback}>
          <Header />
          <main className="main">
            <Outlet />
          </main>
          <Footer />
        </ErrorBoundary>
      )}
    </>
  );
};

export default Layout;
