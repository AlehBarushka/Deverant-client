import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { NAV_KEYS } from './constants/navbar';

import Plug from './components/Plug';
import AuthContainer from './containers/AuthContainer';
import HeaderContainer from './containers/HeaderContainer';
import PrivateComponent from './components/PrivateComponent';
import ProjectsContainer from './containers/ProjectsContainer';
import Footer from './components/Footer';

const App = ({ isAuthenticated, getAuthStatus }) => {
  useEffect(() => {
    getAuthStatus();
  }, [getAuthStatus]);

  return (
    <>
      <HeaderContainer />
      <Routes>
        <Route path='/' element={<Navigate to={NAV_KEYS.statistics} />} />
        <Route path='/auth/:type' element={<AuthContainer />} />
        <Route
          path={NAV_KEYS.statistics}
          element={<PrivateComponent component={Plug} isAuthenticated={isAuthenticated} />}
        />
        <Route
          path={NAV_KEYS.projects}
          element={
            <PrivateComponent component={ProjectsContainer} isAuthenticated={isAuthenticated} />
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
