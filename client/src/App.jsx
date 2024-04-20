import { createBrowserRouter } from 'react-router-dom';

import HomePage from './pages/HomePage';
import { RouterProvider } from 'react-router-dom';
import SigninPage from './pages/SigninPage';
import ProtectedRoutes from './routes/ProtectedRoutes';
import SignupPage from './pages/SignupPage';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <SigninPage />,
      children: [
        {
          path: '/signin',
          element: <SigninPage />,
        },
      ],
    },
    {
      path: '/home',
      element: (
        <ProtectedRoutes>
          <HomePage />
        </ProtectedRoutes>
      ),
      children: [
        {
          path: '/home',
          element: <HomePage />,
        },
      ],
    },
    {
      path: '/signup',
      element: (
        <SignupPage />
      ),
      children: [
        {
          path: '/signup',
          element: <SignupPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
export default App;
