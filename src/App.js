import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { NAV_KEYS } from './constants/navbar';

import Plug from './components/Plug';
import AuthContainer from './containers/AuthContainer';
import HeaderContainer from './containers/HeaderContainer';
import ProjectListContainer from './containers/ProjectListContainer';
import Footer from './components/Footer';
import PrivateComponent from './components/PrivateComponent/PrivateComponent';

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
            <PrivateComponent component={ProjectListContainer} isAuthenticated={isAuthenticated} />
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
