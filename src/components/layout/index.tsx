import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../header';
import Footer from '../footer';

const Layout: FC = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
