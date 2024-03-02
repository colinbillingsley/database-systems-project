import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Login from './pages/Login';
import AccountType from './pages/AccountType';
import CreateAdStAccount from './pages/CreateAdStAccount';
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
        path: "/create-account-adst",
        element: <CreateAdStAccount />,
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
        path: "/events/:event-id/:event-name",
        element: <EventInfo />,
      },
      {
        path: "/my-events/:event-id/:event-name",
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
        path: "/rsos/:rso-id/:rso-name",
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
