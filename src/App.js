import './App.css';
import Signup from './features/auth/components/Signup';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/ProductDetailPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Home></Home>
    </div>
  },
  {
    path: "/login",
    element: <div>
      <LoginPage></LoginPage>
    </div>
  },
  {
    path: "/signup",
    element: <div>
      <SignupPage></SignupPage>
    </div>
  },
  {
    path: "/cart",
    element: <div>
      <CartPage></CartPage>
    </div>
  },
  {
    path: "/checkout",
    element: <div>
      <Checkout></Checkout>
    </div>
  },
  {
    path: "/product-detail",
    element: <div>
      <ProductDetailPage></ProductDetailPage>
    </div>
  },
]);
 


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
