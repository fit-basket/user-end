import React, { useState } from "react";
// import Navbar from "../navbar/InsideNavbar";
import { Outlet } from "react-router-dom";
import Checkout from "../../pages/checkout";
import Footer from "../footer";
import Navbar from "../navbar";

function Layout({ children }) {
  const [isCheckout, setIsCheckout] = useState(false);
  return (
    <>
      <Navbar setIsCheckout={setIsCheckout} />
      <Checkout isCheckout={isCheckout} setIsCheckout={setIsCheckout} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
