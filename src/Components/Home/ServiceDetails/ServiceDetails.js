import React from "react";
import { Link } from "react-router-dom";
import "./ServicesDetails.css";

const ServiceDetails = ({ service }) => {
  return (
    <Link
      to="/place-order"
      style={{ textDecoration: "none", cursor: "pointer" }}
      className="col-md-4 text-center services-card  pt-5 pb-5 mb-3 "
    >
      <img style={{ height: "50px" }} src={service.img} alt="" />
      <h5 className="mt-3 mb-3">{service.name}</h5>
      <p className="text-secondary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
        quaerat?
      </p>
    </Link>
  );
};

export default ServiceDetails;
