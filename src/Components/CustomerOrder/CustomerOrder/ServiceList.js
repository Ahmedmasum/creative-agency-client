import React, { useEffect, useState } from "react";
import "./CustomerOrderPage.css";

import icon1 from "../../../Resources/images/icons/service1.png";
import icon2 from "../../../Resources/images/icons/service2.png";
import ServiceListCard from "./ServiceListCard";
import OrderPageLeftBar from "./OrderPageLeftBar";

// const serviceData = [
//   {
//     title: "Web & Mobile design",
//     icon: icon1,
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis aspernatur ad, amet vero impedit perspiciatis",
//   },
//   {
//     title: "Android Mobile design",
//     icon: icon2,
//     description:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis aspernatur ad, amet vero impedit perspiciatis",
//   },
// ];

const ServiceList = () => {
  const [clientServiceData, setClientServiceData] = useState([]);

  useEffect(() => {
    fetch("https://guarded-falls-37166.herokuapp.com/get-client-service")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setClientServiceData(result);
      });
  }, [clientServiceData]);
  return (
    <div>
      <p className="text-center mt-3">Service List</p>
      <div className=" row  text-center justify-content-center mt-5">
        <div className=" col-md-2 left-side">
          <OrderPageLeftBar></OrderPageLeftBar>
        </div>

        <div className=" col-md-8 right-side">
          <div className="d-flex mt-5 mx-5">
            {clientServiceData.length === 0 && <p>Loading....</p>}
            {clientServiceData.map((service) => (
              <ServiceListCard
                service={service}
                key={service._id}
              ></ServiceListCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
