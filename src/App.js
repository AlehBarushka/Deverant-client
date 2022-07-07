import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AuthPage from './components/Auth/AuthPage';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/auth/:type' element={<AuthPage />} />
      </Routes>
    </>
  );
};

export default App;
