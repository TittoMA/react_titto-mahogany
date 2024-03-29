import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  if (localStorage.getItem('isLoggedIn') == 'true') {
    return children;
  } else {
    return <Navigate to='/login' />;
  }
};

export default PrivateRoute;
