import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";
//icon
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
//navdata
import { sidebarData } from "./NavbarData";
//style
import "./navbar.css";
//contexticon
import { IconContext } from "react-icons";
//reactbootstrap
import { Badge, Button } from "react-bootstrap";
//icon
import { FaShoppingCart } from "react-icons/fa";
//context
import { CounterContext } from "../context/CountContextProvider";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const { state } = useContext(CounterContext);

  return (
    <div className="fixed-top">
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <HiMenu onClick={showSidebar} />
          </Link>
          <Link to="/checkout" className="me-3">
            <Button variant="primary">
              <FaShoppingCart className="fs-3" />{" "}
              <Badge bg="secondary">{state.itemCounter}</Badge>
              <span className="visually-hidden">unread messages</span>
            </Button>
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiOutlineClose onClick={showSidebar} className="close-icon" />
              </Link>
            </li>
            {sidebarData.map((item, index) => {
              return [
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>,
              ];
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
};

export default Navbar;
