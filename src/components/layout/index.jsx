import React from "react";
import Navbar from "../navbar";
import { Outlet } from "react-router-dom";

function Layout({ children }) {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
}

export default Layout;
