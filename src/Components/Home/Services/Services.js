import React from "react";

import service1 from "../../../Resources/images/icons/service1.png";
import service2 from "../../../Resources/images/icons/service2.png";
import service3 from "../../../Resources/images/icons/service3.png";
import service4 from "../../../Resources/images/icons/service4.png";
import ServiceDetails from "../ServiceDetails/ServiceDetails";

const serviceData = [
  {
    name: "Web & Mobile design",
    img: service1,
  },
  {
    name: "Graphic design",
    img: service2,
  },
  {
    name: "Web development",
    img: service3,
  },
];

const Services = () => {
  return (
    <section className="services-container mt-5 mb-5 ">
      <div className="text-center">
        <h2 className="font-weight-bold">
          {" "}
          Provide awesome <span style={{ color: "lightGreen" }}>services</span>
        </h2>
      </div>
      <div className="d-flex justify-content-center ">
        <div className="w-75 row mt-5 pt-5 ">
          {serviceData.map((service) => (
            <ServiceDetails
              service={service}
              key={service.name}
            ></ServiceDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
