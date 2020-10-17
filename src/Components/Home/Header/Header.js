import React from "react";
import Companies from "../Companies/Companies";
import HeaderMain from "../HeaderMain/HeaderMain";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <Navbar></Navbar>
      <HeaderMain></HeaderMain>
    </div>
  );
};

export default Header;
