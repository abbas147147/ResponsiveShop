import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./coin.css";
const Coin = ({ data }) => {
  const { image, price_change_24h, current_price, name, symbol, market_cap } =
    data;
  return (
    <div>
      <Container className="box">
        <Row className=" align-items-center">
          <Col className=" my-2">
            <div className="coin-box">
              <Row className="text-center g-2">
                <Col md={1}>
                  <img src={image} alt="coin" style={{ width: "40px" }} />
                </Col>
                <Col md={2}>
                  <span className="mb-0 text-primary fw-bold"> {name} </span>
                </Col>
                <Col md={2}>
                  <span className="text-muted "> {symbol.toUpperCase()} </span>
                </Col>
                <Col md={2} className="text-center">
                  <span> {current_price.toLocaleString()} $</span>
                </Col>

                <Col md={2}>
                  <span
                    className={
                      price_change_24h > 0 ? "text-success" : "text-danger"
                    }
                  >
                    {price_change_24h.toFixed(2)} %
                  </span>
                </Col>
                <Col md={3}>
                  <span> {market_cap.toLocaleString()} $</span>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Coin;
