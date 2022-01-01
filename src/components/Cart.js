import React from "react";

//functions
import { shorten } from "../helpers/functions";
//router
import { Link } from "react-router-dom";

const Cart = ({ productData }) => {
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
        <div>
          <Link to={`/detail/${id}`} className="btn btn-outline-primary mt-2">
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
