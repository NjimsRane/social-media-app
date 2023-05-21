import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider
} from 'react-router-dom';

import { Home, Login, Profile, Register } from './pages';
import { LeftBar, Navbar, RightBar } from './components';





const App = () => {
  // fake fonction for login waiting for backend server

  // false because , the user had not logged in yet
  const currentUser = true;

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    // children is the protected layout for home and profile page
    //  if the user has logged in ,return the home page or profile page if not return the login page
    return (!currentUser)
      ? <Navigate to='/login' />
      : children;
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProtectedRoute ><Layout /></ProtectedRoute>,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/profile/:id',
          element: <Profile />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
  ]);



  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;