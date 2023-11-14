import { Routes, Route } from "react-router-dom";

import Plans from "./pages/plans";
import Layout from "./components/layout";

import PastryBoard from "./pages/pastry-board";
import Home from "./pages/homepage";
import Auth from "./pages/auth/login";
import Partner from "./pages/auth/signup/Partner";
import User from "./pages/auth/signup/User";
import Error from "./pages/error";
import PrivateRoute from "./components/routes/PrivateRoute";
import PublicRoute from "./components/routes/PublicRoute";

import "./App.css";
import { useEffect } from "react";
import { signInSuccess } from "./redux/user/userSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    let token = localStorage.getItem("authToken");
    let data = JSON.parse(localStorage.getItem("user"));
    if (token) {
      dispatch(signInSuccess({ data, token }));
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PrivateRoute element={Home} />} />
          <Route path="plans" element={<PrivateRoute element={Plans} />} />
          <Route
            path="pastry-board"
            element={<PrivateRoute element={PastryBoard} />}
          />
          <Route path="*" element={<Error />} />
        </Route>
        <Route
          path="login"
          element={<PublicRoute element={Auth} restricted={true} />}
        />
        <Route
          path="signup"
          element={<PublicRoute element={User} restricted={true} />}
        />
        <Route path="partner">
          <Route
            path="signup"
            element={<PublicRoute element={Partner} restricted={true} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
