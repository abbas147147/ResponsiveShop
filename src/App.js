import React from "react";
//components
import Navbar from "./components/Navbar";
import Crypto from "./components/Crypto";
//routerdom
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/crypto" element={<Crypto />} />
      </Routes>
    </div>
  );
};

export default App;
