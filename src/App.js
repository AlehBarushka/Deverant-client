import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import ProjectList from './pages/ProjectList';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={'/project/list'} />} />
      <Route path='/project/list' element={<ProjectList />} />
    </Routes>
  );
};

export default App;
