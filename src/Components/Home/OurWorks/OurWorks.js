import React from "react";
import slide1 from "../../../Resources/images/carousel-1.png";
import slide2 from "../../../Resources/images/carousel-2.png";

import "./OurWork.css";

const OurWorks = () => {
  return (
    <div className="ourwork-container row align-items-center">
      <p className=" text-center col text-white " style={{ fontSize: "30px" }}>
        Here are some of
        <span style={{ color: "lightgreen" }}> our works</span>
      </p>

      <div className="mx-5 mt-5 ">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner row justify-content-center">
            <div className="carousel-item active col-md-4 w-25 h-50">
              <img src={slide1} className="d-block w-100 h-100" alt="..." />
            </div>
            <div className="carousel-item col-md-4 w-25 h-50 ">
              <img src={slide2} className="d-block w-100 h-100" alt="..." />
            </div>
            <div className="carousel-item w-25 col-md-4 h-50 ">
              <img src={slide2} className="d-block w-100 h-100" alt="..." />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>

          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
