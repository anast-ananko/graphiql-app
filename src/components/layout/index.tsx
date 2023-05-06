import { FC, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase.ts';
import Header from '../header';
import Footer from '../footer';
import firebase from 'firebase/compat';

const Layout: FC = () => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (authUser) => {
      authUser ? setUser(authUser) : setUser(null);
    });
    return () => listen();
  }, []);

  console.log(user);

  return (
    <>
      <Header user={user} />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
