import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faShoppingBasket,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

const OrderPageLeftBar = () => {
  return (
    <ul className="list-unstyled mt-5 ml-4 font-weight-bold ">
      <li className="mb-3">
        <Link to="/order-form" className="text-dark d-flex align-items-center">
          <FontAwesomeIcon icon={faShoppingCart} />{" "}
          <span className="ml-2">Order</span>
        </Link>
      </li>
      <li className="mb-3 d-flex align-items-center">
        <Link to="/service-list" className="text-dark">
          <FontAwesomeIcon icon={faShoppingBasket} />{" "}
          <span className="ml-2">Service List</span>
        </Link>
      </li>
      <li>
        <Link to="/review" className="text-dark d-flex align-items-center">
          <FontAwesomeIcon icon={faComment} />
          <span className="ml-2">Review</span>
        </Link>
      </li>
    </ul>
  );
};

export default OrderPageLeftBar;
