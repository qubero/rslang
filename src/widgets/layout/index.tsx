import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../footer';
import Header from '../header';

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Layout;
