import React from "react";
import Slack from "../../../Resources/images/logos/slack.png";
import Google from "../../../Resources/images/logos/google.png";
import Uber from "../../../Resources/images/logos/uber.png";
import Netflix from "../../../Resources/images/logos/netflix.png";
import Airbnb from "../../../Resources/images/logos/airbnb.png";

const Companies = () => {
  return (
    <div className="container mt-5 ">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-2">
          <img src={Slack} className="w-75" alt="" />
        </div>
        <div className="col-md-2">
          {" "}
          <img src={Google} className="w-75" alt="" />
        </div>
        <div className="col-md-2">
          {" "}
          <img src={Uber} className="w-75" alt="" />
        </div>
        <div className="col-md-2">
          {" "}
          <img src={Netflix} className="w-75" alt="" />
        </div>
        <div className="col-md-2">
          {" "}
          <img src={Airbnb} className="w-75" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Companies;
