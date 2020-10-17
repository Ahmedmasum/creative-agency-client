import React from "react";

const ServiceListCard = (props) => {
  const { service, description, image } = props.service;
  return (
    <div className="card mx-2 my-2">
      <div className="card-footer d-flex bg-white  align-items-center">
        <img
          className="mx-3 w-50"
          src={`data:image/png;base64,${image.img}`}
          alt=""
        />
      </div>
      <div>
        <h6 className="text-dark ">{service}</h6>
      </div>
      <div className="card-body">
        <p className="card-text text-center">{description}</p>
      </div>
    </div>
  );
};

export default ServiceListCard;
