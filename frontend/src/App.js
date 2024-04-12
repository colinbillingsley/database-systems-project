import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

import Welcome from './pages/Welcome';
import Login from './pages/Login';
import AccountType from './pages/AccountType';
import CreateStudentAccount from './pages/CreateStudentAccount';
import CreateSuperAccount from './pages/CreateSuperAccount';
import AllEvents from './pages/AllEvents';
import EventInfo from './pages/EventInfo';
import MyAccount from './pages/MyAccount';
import RsoPage from './pages/RsoPage';
import MyEvents from './pages/MyEvents';
import MyEventInfo from './pages/MyEventInfo';
import RSOInfoPage from './pages/RSOInfoPage';
import RequestsPage from './pages/RequestsPage';
import Layout from './components/Layout';
import CreateAdminAccount from './pages/CreateAdminAccount';
import CreatedEvents from './pages/CreatedEvents';

function App() {
  
  // Access the state (user) provided by AuthContext
  const { user } = useAuthContext();

  // determine if user is logged in
  const isLoggedIn = () => {
    return !!user;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/login",
          element: !isLoggedIn() ? <Login /> : <Navigate to="/" />,
        },
        {
          path: "/account-type",
          element: !isLoggedIn() ? <AccountType /> : <Navigate to="/" />,
        },
        {
          path: "/create-account-student",
          element: !isLoggedIn() ? <CreateStudentAccount /> : <Navigate to="/" />,
        },
        {
          path: "/create-account-admin",
          element: !isLoggedIn() ? <CreateAdminAccount /> : <Navigate to="/" />,
        },
        {
          path: "/create-account-super",
          element: !isLoggedIn() ? <CreateSuperAccount /> : <Navigate to="/" />,
        },
        // Guard the protected routes using the `isLoggedIn` function
        {
          path: "/",
          element: isLoggedIn() ? <AllEvents /> : <Navigate to="/login" />,
        },
        {
          path: "/my-rso-events",
          element: isLoggedIn() ? <MyEvents /> : <Navigate to="/login" />,
        },
        {
          path: "/events/:event_id/:event_name",
          element: isLoggedIn() ? <EventInfo /> : <Navigate to="/login" />,
        },
        {
          path: "/created-events",
          element: isLoggedIn() ? <CreatedEvents /> : <Navigate to="/login" />,
        },
        {
          path: "/my-events/:event_id/:event_name",
          element: isLoggedIn() ? <MyEventInfo /> : <Navigate to="/login" />,
        },
        {
          path: "/my-account",
          element: isLoggedIn() ? <MyAccount /> : <Navigate to="/login" />,
        },
        {
          path: "/rsos",
          element: isLoggedIn() ? <RsoPage /> : <Navigate to="/login" />,
        },
        {
          path: "/rsos/:rso_id/:rso_name",
          element: isLoggedIn() ? <RSOInfoPage /> : <Navigate to="/login" />,
        },
        {
          path: "/requests",
          element: isLoggedIn() ? <RequestsPage /> : <Navigate to="/login" />,
        },
      ]
    },
    {
      path: "/welcome",
      element: <Welcome />,
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;
