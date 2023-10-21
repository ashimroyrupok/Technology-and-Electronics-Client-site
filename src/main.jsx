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
import AddProductPrivateRoute from './components/PrivateRoute/AddProductPrivateRoute';
import UpdateProduct from './components/UpdateProduct/UpdateProduct';
import UpdateProductPrivateRoute from './components/PrivateRoute/UpdateProductPrivateRoute';
import MyCart from './pages/MyCart/MyCart';
import MyCartPrivateRoute from './components/PrivateRoute/MyCartPrivateRoute';

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
        element: <AddProductPrivateRoute>
          <AddProduct></AddProduct>
        </AddProductPrivateRoute>

      },
      {
        path: "/allProducts/:brand",
        element: <AllProducts></AllProducts>,
        loader: () => fetch('https://technology-and-electronics-server-blond.vercel.app/products')

      },
      {
        path: "/product/:id",
        element: <ProductDetailsPrivateRoute>
          <Product></Product>
        </ProductDetailsPrivateRoute>,
        loader: () => fetch('https://technology-and-electronics-server-blond.vercel.app/products')

      },
      {
        path: "/products/:id",
        element: <UpdateProductPrivateRoute>
          <UpdateProduct></UpdateProduct>
        </UpdateProductPrivateRoute>,
        loader: ({params}) => fetch(`https://technology-and-electronics-server-blond.vercel.app/products/${params.id}`)

      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      },
      {
        path: "signin",
        element: <SignIn></SignIn>

      },
      {
        path: "/mycart",
        element:<MyCartPrivateRoute>
          <MyCart></MyCart>
        </MyCartPrivateRoute>,
        loader: () => fetch('https://technology-and-electronics-server-blond.vercel.app/carts')
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
