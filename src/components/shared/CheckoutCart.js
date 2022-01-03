import React, { useContext } from "react";

//context
import { CounterContext } from "../../context/CountContextProvider";
//bootstrap
import { Container, Row, Col } from "react-bootstrap";
//function
import { shorten } from "../../helpers/functions";
//icon
import {
  BsPatchMinusFill,
  BsPatchPlusFill,
  BsFillTrashFill,
} from "react-icons/bs";

const CheckoutCart = ({ data }) => {
  const { dispatch } = useContext(CounterContext);
  const { image, title, price, quantity } = data;

  return (
    <div>
      <Container>
        <Row className="checkout-box align-items-center g-2 my-5 shadow p-2 text-sm-center text-md-start">
          <Col md={3}>
            <img
              src={image}
              alt="img"
              className="img-fluid"
              style={{ width: "85px" }}
            />
          </Col>
          <Col md={3}>
            <h4 className="fw-bold text-primary">{shorten(title)}</h4>
            <p className="btn btn-success pe-none"> {price} $</p>
          </Col>
          <Col md={3}>
            <p className="btn btn-warning pe-none text-white">{quantity} </p>
          </Col>
          <Col md={3}>
            {quantity > 1 ? (
              <BsPatchMinusFill
                onClick={() => dispatch({ type: "DECREASE", payload: data })}
                className="text-primary fs-3"
                style={{ cursor: "pointer" }}
              />
            ) : (
              <BsFillTrashFill
                onClick={() => dispatch({ type: "REMOVE", payload: data })}
                className="text-danger fs-3"
                style={{ cursor: "pointer" }}
              />
            )}
            {quantity && (
              <BsPatchPlusFill
                onClick={() => dispatch({ type: "INCREASE", payload: data })}
                className="text-primary fs-3 ms-2"
                style={{ cursor: "pointer" }}
              />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CheckoutCart;
