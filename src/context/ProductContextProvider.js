import React, { createContext, useState, useEffect } from "react";
//api
import { getProduct } from "../api/api";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      setProduct(await getProduct());
    };
    fetchProduct();
  }, []);

  return (
    <div>
      <ProductContext.Provider value={product}>
        {children}
      </ProductContext.Provider>
    </div>
  );
};

export default ProductContextProvider;
