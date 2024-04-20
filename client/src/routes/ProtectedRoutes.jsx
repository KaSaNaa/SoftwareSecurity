import { Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ErrorComponent from './ErrorComponent';

// eslint-disable-next-line react/prop-types
const ProtectedRoutes = ({ children }) => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(
          'http://localhost:5000/api/auth/check-auth',
          {
            method: 'GET',
            credentials: 'include',
          }
        );
        const data = await response.json();
        console.log('ProtectedRoutes:21 data =' + data);
        setIsAuthenticated(data.isAuthenticated);
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };

    checkAuth();
  }, []);

  if (!isAuthenticated) {
    return (
      <ErrorComponent message='You are not logged in. Please log in to access this page.' />
    );
  }

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to='/signin' state={{ from: location }} />
  );
};

export default ProtectedRoutes;
