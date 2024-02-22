import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Login from './pages/Login';
import AccountType from './pages/AccountType';
import CreateAdStAccount from './pages/CreateAdStAccount';
import CreateSuperAccount from './pages/CreateSuperAccount';
import AllEvents from './pages/AllEvents';
import EventInfo from './pages/EventInfo';
import MyAccount from './pages/MyAccount';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
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
    path: "/all-events",
    element: <AllEvents />,
  },
  {
    path: "/events/:event-id/:event-name",
    element: <EventInfo />,
  },
  {
    path: "/my-account",
    element: <MyAccount />,
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
