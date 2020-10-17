import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container ">
      <div className="container row justify-content-center my-5 mx-5 ">
        <div className="col-md-6 mt-5  ">
          <h3>
            Let Us handle your <br /> Project Profeddionally.
          </h3>
          <p>
            With well written codes, we build amazing apps for all <br />{" "}
            platform, mobile and web apps in general.
          </p>
        </div>
        <div className="col-md-6 mt-5">
          <form action="">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Email Address *"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name / Company Name"
              />
            </div>
            <div className="form-group">
              <textarea
                name=""
                className="form-control"
                id=""
                cols="30"
                rows="10"
                placeholder="Message *"
              ></textarea>
            </div>
            <div className="form-group">
              <button type="button" className="btn btn-dark">
                {" "}
                Submit{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
      <p className="text-center mt-5">
        <small>copyright AhmedMasum {new Date().getFullYear()}</small>
      </p>
    </footer>
  );
};

export default Footer;
