import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./CustomerOrderPage.css";

import OrderPageLeftBar from "./OrderPageLeftBar";

const OrderForm = () => {
  const [orderFormData, setOrderFormData] = useState({});
  const [file, setFile] = useState(null);
  const history = useHistory();

  const handleBlur = (e) => {
    const newFormData = { ...orderFormData };
    newFormData[e.target.name] = e.target.value;
    setOrderFormData(newFormData);
    e.target.value = "";
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
    e.target.value = "";
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", orderFormData.name);
    formData.append("email", orderFormData.email);
    formData.append("service", orderFormData.service);
    formData.append("description", orderFormData.description);
    formData.append("price", orderFormData.price);

    fetch("https://guarded-falls-37166.herokuapp.com/add-client-service", {
      method: "POST",
      body: formData,
    }).then((response) => {
      if (response) {
        history.push("/service-list");
      }
    });
  };
  return (
    <div>
      <p className="text-center mt-3">Order</p>
      <div className=" row  text-center justify-content-center mt-5">
        <div className=" col-md-2 left-side">
          <OrderPageLeftBar></OrderPageLeftBar>
        </div>

        <div className=" col-md-8 right-side">
          <form onSubmit={handleOrderSubmit} className="mx-5 my-5 w-50">
            <div className="form-group">
              <input
                onBlur={handleBlur}
                type="text"
                className="form-control"
                placeholder="Your Name"
                name="name"
              />
            </div>
            <div className="form-group">
              <input
                onBlur={handleBlur}
                type="email"
                className="form-control"
                placeholder="Your Email"
                name="email"
              />
            </div>
            <div className="form-group">
              <input
                onBlur={handleBlur}
                type="text"
                className="form-control"
                placeholder="Enter Anything"
                name="service"
              />
            </div>
            <div className="form-group">
              <textarea
                onBlur={handleBlur}
                name="description"
                className="form-control"
                id=""
                rows="2"
                placeholder="Project Details"
              ></textarea>
            </div>
            <div className="row">
              <div className="form-group col-md-6">
                <input
                  onBlur={handleBlur}
                  type="number"
                  className="form-control"
                  placeholder="price"
                  name="price"
                />
              </div>
              <div className="form-group col-md-6">
                <input
                  onChange={handleFileChange}
                  type="file"
                  className="form-control"
                  id="file"
                />
              </div>
            </div>

            <div className="form-group ">
              <input type="submit" value="Submit" className="btn btn-dark" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
