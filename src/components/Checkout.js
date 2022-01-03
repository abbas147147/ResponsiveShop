import React, { useContext } from "react";
//context
import { CounterContext } from "../context/CountContextProvider";
//shared
import CheckoutCart from "./shared/CheckoutCart";
//bootstrap
import { Container, Row, Col } from "react-bootstrap";

const Checkout = () => {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <div style={{ marginTop: "125px" }}>
      <Container>
        <Row>
          <Col md={9}>
            {state.selectItems.map((item) => (
              <CheckoutCart key={item.id} data={item} />
            ))}
          </Col>
          <Col lg={3} className="border shadow h-50 p-5 rounded mt-5">
            <p className="text-primary">
              total-Product:{" "}
              <span className="text-success"> {state.itemCounter} </span>{" "}
            </p>
            <p className="text-primary">
              total-Payment:{" "}
              <span className="text-success"> {state.total} $</span>{" "}
            </p>
            <div className="d-flex justify-content-between flex-wrap">
              <button
                className="btn btn-success"
                onClick={() =>
                  dispatch({ type: "CHECKOUT", payload: state.selectItems })
                }
              >
                {" "}
                CHECKOUT{" "}
              </button>
              <button
                className="btn btn-outline-success"
                onClick={() =>
                  dispatch({ type: "CLEAR", payload: state.selectItems })
                }
              >
                CLEAR
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
