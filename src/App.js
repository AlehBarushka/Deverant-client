import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import AuthContainer from './containers/AuthContainer';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to={'/statistics'} />} />
        <Route path='/auth/:type' element={<AuthContainer />} />
      </Routes>
    </>
  );
};

export default App;
