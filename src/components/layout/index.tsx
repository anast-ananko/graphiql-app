import { FC, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase.ts';
import Header from '../header';
import Footer from '../footer';
import firebase from 'firebase/compat';
import { CircularProgress } from '@mui/material';

const Layout: FC = () => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (authUser) => {
      setLoading(true);
      authUser ? setUser(authUser) : setUser(null);
      setLoading(false);
    });
    return () => listen();
  }, []);

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
