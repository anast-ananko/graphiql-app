import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ProtectedRouteType } from '../../types';
import { RootState } from '../../store';

const ProtectedRoute: FC<ProtectedRouteType> = ({ permission, children }) => {
  const { uid } = useSelector((state: RootState) => state.auth);

  if (uid) {
    return permission ? children : <Navigate to="/" replace />;
  } else {
    return !permission ? children : <Navigate to="/not-found" replace />;
  }
};

export default ProtectedRoute;
