import { Routes, Route } from "react-router-dom";

import Plans from "./pages/plans";
import Layout from "./components/layout";

import "./App.css";
import PastryBoard from "./pages/pastry-board";
import Home from "./pages/homepage";
import Auth from "./pages/auth/login";
import Partner from "./pages/auth/signup/Partner";
import User from "./pages/auth/signup/User";
import Error from "./pages/error";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Auth />} />
          <Route path="signup" element={<User />} />
          <Route path="partner">
            <Route path="signup" element={<Partner />} />
          </Route>
          <Route path="plans" element={<Plans />} />
          <Route path="pastry-board" element={<PastryBoard />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
