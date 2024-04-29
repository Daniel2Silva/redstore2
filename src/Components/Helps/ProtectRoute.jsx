import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const ProtectRoute = ({ children }) => {
  const { login } = React.useContext(UserContext);
  if (login === true) {
    return children;
  } else if (login === false) {
    return <Navigate to="/" />;
  } else {
    return <></>;
  }
};

export default ProtectRoute;
