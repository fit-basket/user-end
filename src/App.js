// import { Routes, Route } from "react-router-dom";

// import Plans from "./pages/plans";
// import Layout from "./components/layout";

// import "./App.css";
// import PastryBoard from "./pages/pastry-board";

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path="/plans" element={<Plans />} />
//           <Route path="/pastry-board" element={<PastryBoard />} />
//         </Route>
//       </Routes>
//     </div>
//   );
// }

// export default App;

// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OAuth from "./OAuth"; // The OAuth component from Step 2
import OAuthInitiation from "./OAuthInitiation"; // The OAuthInitiation component from Step 3

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<OAuthInitiation />} />
          <Route path="/oauth-callback" element={<OAuth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
