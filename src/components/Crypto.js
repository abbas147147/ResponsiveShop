import React, { useState, useEffect } from "react";

import { Container } from "react-bootstrap";
//api
import { getCoin } from "../api/api";
//shared
import Coin from "./shared/Coin";
//css
import "./crypto.css";

const Crypto = () => {
  const [coin, setCoin] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCoin = async () => {
      setCoin(await getCoin());
    };
    fetchCoin();
  }, []);

  const searchH = (event) => {
    setSearch(event.target.value);
  };

  const searchCoin = coin.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Container className="crypto-box">
        <div className="d-flex justify-content-center">
          <input
            className="inpCoin"
            type="text"
            placeholder="search..."
            value={search}
            onChange={searchH}
          />
        </div>
        {searchCoin.map((item) => (
          <Coin key={item.id} data={item} />
        ))}
      </Container>
    </div>
  );
};

export default Crypto;
