import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import AddUser from './components/AddUser';
import UserList from './components/UserList';
import User from './components/User';

function App() {
  const routingObj = createBrowserRouter([{
    path : "/",
    element : <RootLayout />,
    children : [
      {
        path : "/",
        element : <Home />
      },
      {
        path : "add-user",
        element : <AddUser />
      },
      {
        path : "user-list",
        element : <UserList />
      },
      {
        path : "user",
        element : <User />
      }
    ]
}]);

  return <RouterProvider router={routingObj} />
}

export default App
