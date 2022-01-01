import React, { useContext } from "react";

//functions
import { shorten, isInCart, quantityCounter } from "../helpers/functions";
//router
import { Link } from "react-router-dom";
//context
import { CounterContext } from "../context/CountContextProvider";
//icons
import {
  BsPatchMinusFill,
  BsPatchPlusFill,
  BsFillTrashFill,
} from "react-icons/bs";

const Cart = ({ productData }) => {
  const { state, dispatch } = useContext(CounterContext);
  const { image, price, category, title, id } = productData;
  return (
    <div
      className="card p-2 my-2 shadow"
      style={{ width: "18rem", height: "400px" }}
    >
      <img src={image} className="card-img-top w-100 h-50 " alt="img" />
      <div className="card-body">
        <h5 className="card-title text-primary ">{shorten(title)}</h5>
        <p className="card-text text-muted">{category}</p>
        <p className="btn btn-success pe-none">{price} $</p>
        <div className="d-flex justify-content-between align-items-center mt-2">
          <Link to={`/detail/${id}`} className="btn btn-outline-primary">
            Detail
          </Link>
          <div>
            {quantityCounter(state, id) === 1 && (
              <BsFillTrashFill
                onClick={() =>
                  dispatch({ type: "REMOVE", payload: productData })
                }
                className="text-danger fs-3"
                style={{ cursor: "pointer" }}
              />
            )}
            {quantityCounter(state, id) > 1 && (
              <BsPatchMinusFill
                onClick={() =>
                  dispatch({ type: "DECREASE", payload: productData })
                }
                className="text-primary fs-3"
                style={{ cursor: "pointer" }}
              />
            )}
            {quantityCounter(state, id) && (
              <span className="mx-2 fw-bold text-decoration-underline">
                {quantityCounter(state, id)}
              </span>
            )}
            {isInCart(state, id) ? (
              <BsPatchPlusFill
                onClick={() =>
                  dispatch({ type: "INCREASE", payload: productData })
                }
                className="text-primary fs-3"
                style={{ cursor: "pointer" }}
              />
            ) : (
              <button
                onClick={() => dispatch({ type: "ADD", payload: productData })}
                className="btn btn-primary"
              >
                Add To Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
