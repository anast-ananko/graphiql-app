import { FC, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase.ts';
import { CircularProgress } from '@mui/material';
import { authSignIn } from '../../store/auth/authSlice.ts';
import { useAppDispatch } from '../../hooks/hook.ts';
import Header from '../header';
import Footer from '../footer';

const Layout: FC = () => {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);

    const listen = onAuthStateChanged(auth, (authUser) => {
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
        <CircularProgress color="secondary" />
      ) : (
        <>
          <Header />
          <main className="main">
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
