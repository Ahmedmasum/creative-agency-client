import React from "react";
import "./CustomerOrderPage.css";

import OrderPageLeftBar from "./OrderPageLeftBar";

const Review = () => {
  return (
    <div>
      <p className="text-center mt-3">Review</p>
      <div className=" row  text-center justify-content-center mt-5">
        <div className=" col-md-2 left-side">
          <OrderPageLeftBar></OrderPageLeftBar>
        </div>

        <div className=" col-md-8 right-side">
          <form action="" className="mx-5 my-5 w-50">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Company's Name / Designation"
              />
            </div>

            <div className="form-group">
              <textarea
                name=""
                className="form-control"
                id=""
                rows="2"
                placeholder="Description"
              ></textarea>
            </div>

            <div className="form-group ">
              <button type="button" className="btn btn-dark">
                {" "}
                Submit{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
