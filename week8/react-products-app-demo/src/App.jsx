import { createBrowserRouter, NavLink, Navigate, RouterProvider} from 'react-router'
import './App.css'
import Home from './components/Home';
import RootLayout from './components/RootLayout';
import Products from './components/Products';
import Contactus from './components/Contactus';
import ProductPage from './components/ProductPage';

function App() {
  const configObj = createBrowserRouter([
    {
      path : "/",
      element : <RootLayout />,
      children : [
        {
          path : "/",
          element : <Home />
        },
        {
          path : "products",
          element : <Products />
        },
        {
          path : "contact",
          element : <Contactus />
        },
        {
          path : "product",
          element : <ProductPage />
        }
      ]
    }
  ]);

  return <RouterProvider router={configObj} />
}

export default App
