import React from "react";
//components
import Navbar from "./components/Navbar";
import Crypto from "./components/Crypto";
import HomePage from "./components/HomePage";
import ProductDetail from "./components/ProductDetail";
import Checkout from "./components/Checkout";
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
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CountContextProvider>
      </ProductContextProvider>
    </div>
  );
};

export default App;
