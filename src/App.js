import { Routes, Route } from "react-router-dom";

import Plans from "./pages/plans";
import Layout from "./components/layout";

import "./App.css";
import Checkout from "./pages/checkout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/plans" element={<Plans />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
