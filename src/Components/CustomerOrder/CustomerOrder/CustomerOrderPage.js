import React from "react";
import "./CustomerOrderPage.css";

import OrderPageLeftBar from "./OrderPageLeftBar";
import logoImage from "../../../Resources/images/logos/logo.png";
import { Link } from "react-router-dom";

const CustomerOrderPage = () => {
  return (
    <div className="   text-center  mt-5">
      <Link to="/">
        <div className=" text-center">
          <img className="w-25" src={logoImage} alt="" />
        </div>
      </Link>
      <div className="left-side d-flex justify-content-center">
        <OrderPageLeftBar></OrderPageLeftBar>
      </div>
    </div>
  );
};

export default CustomerOrderPage;
