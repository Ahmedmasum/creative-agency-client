import React from "react";
import Frame from "../../../Resources/images/logos/Frame.png";

const HeaderMain = () => {
  return (
    <main style={{ height: "600px" }} className="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1 ">
        <h1 className="text-dark font-weight-bold">
          Let's Grow Your <br /> Brand To The <br /> Next Level
        </h1>
        <p className="text-dark my-4 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          eveniet necessitatibus et iusto corrupti minima.
        </p>
        <button className="btn btn-dark px-5">Hire us</button>
      </div>
      <div className="col-md-6">
        <img src={Frame} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default HeaderMain;
