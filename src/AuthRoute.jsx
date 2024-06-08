import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from './hook/useAuth';

function AuthRoute({ children }) {
  const isLoggedIn = useAuth();

  //   if (
  //     (isLoggedIn && window.location.pathname === '/') ||
  //     window.location.pathname === '/register'
  //   ) {
  //     return <Navigate to="/inbox" replace />;
  //   } else {
  //     return children;
  //   }

  return !isLoggedIn ? children : <Navigate to="/inbox" />;
}

export default AuthRoute;
