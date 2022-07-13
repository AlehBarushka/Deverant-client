import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { NAV_KEYS } from './constants/navbar';

import Plug from './components/Plug';
import AuthContainer from './containers/AuthContainer';
import HeaderContainer from './containers/HeaderContainer';
import PrivateComponent from './components/PrivateComponent';

const App = ({ isAuthenticated }) => {
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
          element={<PrivateComponent component={Plug} isAuthenticated={isAuthenticated} />}
        />
      </Routes>
    </>
  );
};

export default App;
