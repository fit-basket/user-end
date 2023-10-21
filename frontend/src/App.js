import { Routes, Route } from "react-router-dom";

import Plans from "./pages/plans";
import Layout from "./components/layout";

import "./App.css";
import PastryBoard from "./pages/pastry-board";
import Home from "./pages/homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/pastry-board" element={<PastryBoard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
