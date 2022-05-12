import React from 'react';

import PropTypes from 'prop-types';

import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = true;

  if (isAuthenticated) {
    return children;
  }

  return <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default PrivateRoute;
