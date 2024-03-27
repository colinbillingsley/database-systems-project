import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/account-type",
        element: <AccountType />,
      },
      {
        path: "/create-account-student",
        element: <CreateStudentAccount />,
      },
      {
        path: "/create-account-admin",
        element: <CreateAdminAccount />,
      },
      {
        path: "/create-account-super",
        element: <CreateSuperAccount />,
      },
      {
        path: "/",
        element: <AllEvents />,
      },
      {
        path: "/my-events",
        element: <MyEvents />,
      },
      {
        path: "/events/:event_id/:event_name",
        element: <EventInfo />,
      },
      {
        path: "/my-events/:event_id/:event_name",
        element: <MyEventInfo />,
      },
      {
        path: "/my-account",
        element: <MyAccount />,
      },
      {
        path: "/rsos",
        element: <RsoPage />,
      },
      {
        path: "/rsos/:rso_id/:rso_name",
        element: <RSOInfoPage />,
      },
      {
        path: "/requests",
        element: <RequestsPage />,
      },
    ]
  },
  {
    path: "/welcome",
    element: <Welcome />,
  },
]);

function App() {

  return (
    <div className="app">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;
