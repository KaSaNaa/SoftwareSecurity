import { createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes, RouterProvider } from "react-router-dom";
import SigninPage from "./pages/SigninPage";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SigninPage />,
      children: [
        {
          path: "/",
          element: <SigninPage />,
        },
      ],
    },
    {
      path: "/home",
      element: <HomePage />,
      children: [
        {
          path: "/home",
          element: <HomePage />,
        },
      ],
    },
  ]);


  return (
    <RouterProvider router={router} />
  );
};
export default App;
