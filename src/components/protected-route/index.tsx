import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ProtectedRouteType } from '../../types';

const ProtectedRoute: FC<ProtectedRouteType> = ({ permission, children }) => {
  const { uid } = useSelector((state) => state.auth);

  if (uid) {
    return permission ? children : <Navigate to="/" replace />;
  } else {
    return !permission ? children : <Navigate to="/not-found" replace />;
  }
};

export default ProtectedRoute;
