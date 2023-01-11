import React, { createContext, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./App.css";
import { Banner } from "./component/Banner";
import { Cart } from "./component/Cart";
import { Navbar } from "./component/Navbar";
import { SignIn } from "./Forms/LogIn";
import { SignUp } from "./Forms/SignUp";
export const ProdContext = createContext({});

function App() {
  const [productDetails, setProductDetails] = useState<[]>([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const AppLayout = () => (
    <>
      <Navbar />
      <Outlet />
    </>
  );
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<AppLayout />}>
        <Route path="/" element={<Banner />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Cart" element={<Cart />} />
      </Route>
    )
  );
  return (
    <div>
      <ProdContext.Provider
        value={{ productDetails, setProductDetails, loggedIn, setLoggedIn }}
      >
        <RouterProvider router={router} />
      </ProdContext.Provider>
    </div>
  );
}
export default App;
