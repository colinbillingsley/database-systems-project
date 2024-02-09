import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Link } from 'react-router-dom';

import Login from './pages/Login';
import AccountType from './pages/AccountType';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/account-type",
    element: <AccountType />,
  },
]);

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App;
