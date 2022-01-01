import React, { useContext } from "react";
//shared
import Cart from "./Cart";
//context
import { ProductContext } from "./../context/ProductContextProvider";
//bootstrap
import { Container } from "react-bootstrap";

const HomePage = () => {
  const product = useContext(ProductContext);
  return (
    <div style={{ marginTop: "150px" }}>
      <Container>
        <div className="d-flex justify-content-center justify-content-md-between align-items-center flex-wrap">
          {product.map((item) => (
            <Cart key={item.id} productData={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
