import React, { useState } from "react";
import Navbar from "../navbar";
import { Outlet } from "react-router-dom";
import Checkout from "../../pages/checkout";

function Layout({ children }) {
  const [isCheckout, setIsCheckout] = useState(false);
  return (
    <>
      <Navbar setIsCheckout={setIsCheckout} />
      <Checkout isCheckout={isCheckout} setIsCheckout={setIsCheckout} />
      <Outlet />
    </>
  );
}

export default Layout;
