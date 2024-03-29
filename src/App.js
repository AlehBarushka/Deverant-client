import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { NAV_KEYS } from './constants/navbar';

import Plug from './components/Plug';
import AuthContainer from './containers/AuthContainer';
import HeaderContainer from './containers/HeaderContainer';
import ProjectsPageContainer from './containers/ProjectsPageContainer';
import Footer from './components/Footer';
import PrivateRoutes from './components/PrivateRoutes/PrivateRoutes';
import ProjectDetailsPageContainer from './containers/ProjectDetailsPageContainer';

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
          <Route
            path={`${NAV_KEYS.projects}/:projectId`}
            element={<ProjectDetailsPageContainer />}
          />
        </Route>
        <Route path='/auth/:type' element={<AuthContainer />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
