import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ permission, children }) => {
  const { user } = useSelector((state) => state.auth);

  if (user) {
    return permission ? children : <Navigate to="/" replace />;
  } else {
    return !permission ? children : <Navigate to="/not-found" replace />;
  }
};

export default ProtectedRoute;
