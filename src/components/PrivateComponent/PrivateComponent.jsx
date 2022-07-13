import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateComponent = ({ component: Component, isAuthenticated, ...props }) => {
  return isAuthenticated ? <Component {...props} /> : <Navigate to={'/auth/login'} />;
};
export default PrivateComponent;
