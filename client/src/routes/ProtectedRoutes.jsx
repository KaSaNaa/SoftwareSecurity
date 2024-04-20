import { Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ErrorComponent from './ErrorComponent';

// eslint-disable-next-line react/prop-types
const ProtectedRoutes = ({ children }) => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) {
    return <ErrorComponent message="You are not logged in. Please log in to access this page." />;
  }

  return isAuthenticated ? children : <Navigate to="/signin" state={{ from: location }} />;
};

export default ProtectedRoutes;