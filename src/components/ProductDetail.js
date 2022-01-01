import React, { useContext } from "react";
//router
import { Link, useParams } from "react-router-dom";
//shorten
import { shorten } from "../helpers/functions";
//context
import { ProductContext } from "../context/ProductContextProvider";
//bootstrap
import { Container, Row, Col } from "react-bootstrap";

const ProductDetail = (props) => {
  const params = useParams();
  const id = params.id;
  const data = useContext(ProductContext);
  const product = data[id - 1];
  const { price, image, description, title, category } = product;
  return (
    <div style={{ marginTop: "150px" }}>
      <Container>
        <Row className="align-items-center border shadow rounded p-2">
          <Col md={12} lg={6}>
            <img
              src={image}
              className="rounded fluid-img"
              style={{ width: "100%", height: "400px" }}
              alt="img"
            />
          </Col>
          <Col md={12} lg={6}>
            <h2 className="text-primary fw-bold h1"> {shorten(title)} </h2>
            <h4> {category} </h4>
            <p className="text-muted"> {description} </p>
            <p className="btn btn-success pe-none"> {price} $</p>
            <Link to="/" className="btn btn-outline-primary d-block">
              Back To Shop
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
