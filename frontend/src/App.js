import { Routes, Route } from "react-router-dom";

import Plans from "./pages/plans";
import Layout from "./components/layout";

import BusinessLanding from "./pages/business-landing";
import Home from "./pages/homepage";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import Error from "./pages/error";
import PrivateRoute from "./components/routes/PrivateRoute";
import PublicRoute from "./components/routes/PublicRoute";

import { useEffect } from "react";
import { signInSuccess } from "./redux/user/userSlice";
import { useDispatch } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    let token = localStorage.getItem("authToken");
    let data = JSON.parse(localStorage.getItem("user"));
    if (token) {
      dispatch(signInSuccess({ data, token }));
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PrivateRoute element={Home} />} />
          <Route path="plans" element={<PrivateRoute element={Plans} />} />

          <Route path="*" element={<Error />} />
          <Route
            path="/business-profile/:businessName/:id"
            element={
              <PublicRoute element={BusinessLanding} restricted={false} />
            }
          />
        </Route>

        <Route
          path="login"
          element={<PublicRoute element={Login} restricted={true} />}
        />
        <Route
          path="signup"
          element={<PublicRoute element={Signup} restricted={true} />}
        />
      </Routes>
    </div>
  );
}

export default App;
