import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { NAV_KEYS } from './constants/navbar';

import Plug from './components/Plug';
import AuthPageContainer from './containers/AuthPageContainer';
import HeaderContainer from './containers/HeaderContainer';
import ProjectsPageContainer from './containers/ProjectsPageContainer';
import Footer from './components/Footer';
import PrivateRoutes from './components/PrivateRoutes/PrivateRoutes';

const App = ({ isAuthenticated, getAuthStatus }) => {
  useEffect(() => {
    getAuthStatus();
  }, [getAuthStatus]);

  return (
    <>
      <HeaderContainer />
      <Routes>
        <Route path='/' element={<PrivateRoutes isAuthenticated={isAuthenticated} />}>
          <Route path={NAV_KEYS.statistics} element={<Plug />} />
          <Route path={NAV_KEYS.projects} element={<ProjectsPageContainer />} />
        </Route>
        <Route path='/auth/:type' element={<AuthPageContainer />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
