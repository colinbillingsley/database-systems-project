import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Login from './pages/Login';
import AccountType from './pages/AccountType';
import CreateAdStAccount from './pages/CreateAdStAccount';
import CreateSuperAccount from './pages/CreateSuperAccount';
import AllEvents from './pages/AllEvents';

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
    path: "/events",
    element: <AllEvents />,
  },
]);

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App;
