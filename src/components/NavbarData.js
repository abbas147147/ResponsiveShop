import React from "react";

//icons
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineContacts,
} from "react-icons/ai";
import { BsCoin } from "react-icons/bs";

export const sidebarData = [
  {
    title: "home",
    path: "/",
    icon: <AiOutlineHome />,
    cName: "nav-text",
  },
  {
    title: "product",
    path: "/",
    icon: <AiOutlineShoppingCart />,
    cName: "nav-text",
  },
  {
    title: "crypto",
    path: "/crypto",
    icon: <BsCoin />,
    cName: "nav-text",
  },
  {
    title: "contact",
    path: "/contact",
    icon: <AiOutlineContacts />,
    cName: "nav-text",
  },
];
