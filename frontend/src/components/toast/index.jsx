import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Toast() {
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <ToastContainer />
    </div>
  );
}
