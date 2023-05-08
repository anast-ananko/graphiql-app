import { FC, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase.ts';
import { User as FirebaseUser } from 'firebase/auth';
import { CircularProgress } from '@mui/material';
import { signIn } from '../../store/auth/authSlice.ts';
import { useAppDispatch } from '../../hooks/hook.ts';
import Header from '../header';
import Footer from '../footer';

const Layout: FC = () => {
  const dispatch = useAppDispatch();

  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);

    const listen = onAuthStateChanged(auth, (authUser) => {
      const result: FirebaseUser | null = authUser || null;

      setUser(result);
      dispatch(signIn(result));
      setLoading(false);
    });

    return () => listen();
  }, [dispatch]);

  console.log(user);

  return (
    <>
      {loading ? (
        <CircularProgress color="secondary" />
      ) : (
        <>
          <Header user={user} />
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
