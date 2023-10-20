import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './pages/Home/Home';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import AuthProvider from './components/Authentication/AuthProvider';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import AddProduct from './components/AddProduct/AddProduct';
import AllProducts from './components/AllProducts/AllProducts';
import Product from './components/AllProducts/Product/Product';
import ProductDetailsPrivateRoute from './components/PrivateRoute/ProductDetailsPrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [

      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>

      },
      {
        path: "/allProducts/:brand",
        element: <AllProducts></AllProducts>,
        loader: () => fetch('http://localhost:5000/products')

      },
      {
        path: "/product/:id",
        element: <ProductDetailsPrivateRoute>
          <Product></Product>
        </ProductDetailsPrivateRoute>,
        loader: () => fetch('http://localhost:5000/products')

      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      },
      {
        path: "signin",
        element: <SignIn></SignIn>

      }


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
