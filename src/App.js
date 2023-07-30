import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/navbar";
import Plans from "./pages/plans";
import Layout from "./components/layout";

import "./App.css";

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
