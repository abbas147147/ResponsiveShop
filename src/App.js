import React from "react";
//components
import Navbar from "./components/Navbar";
import Crypto from "./components/Crypto";
import HomePage from "./components/HomePage";
import ProductDetail from "./components/ProductDetail";
//routerdom
import { Routes, Route } from "react-router-dom";
//context
import ProductContextProvider from "./context/ProductContextProvider";
import CountContextProvider from "./context/CountContextProvider";
const App = () => {
  return (
    <div>
      <ProductContextProvider>
        <CountContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/crypto" element={<Crypto />} />
            <Route path="/detail/:id" element={<ProductDetail />} />
          </Routes>
        </CountContextProvider>
      </ProductContextProvider>
    </div>
  );
};

export default App;
