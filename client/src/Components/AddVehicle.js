import React, { useEffect, useState } from "react";

import NavBar from "./NavBar";

import { createVehicleInfo } from "../user/helper";
import { isAuthenticated } from "../auth/helper";

const AddVehicle = () => {
  const user = isAuthenticated();

  const [values, setValues] = useState({
    make: "",
    model: "",
    platNumber: "",
    year: "",
    error: "",
    created: false,
    loading: false,
  });

  const { make, model, platNumber, year, created, loading, error } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const handleCreateVehicle = (e) => {
    e.preventDefault();

    setValues({ ...values, error: false, loading: true });

    createVehicleInfo({
      user: user.user._id,
      make,
      model,
      year,
      platNumber,
    }).then((data) => {
      if (data.errors) {
        setValues({ ...values, error: data.errors, created: false });
      } else {
        setValues({
          ...values,
          error: "",
          created: true,
          loading: false,
        });
      }
    });
  };

  const successMessage = () => (
    <div
      className="alert alert-success mt-3"
      style={{ display: created ? "" : "none" }}
    >
      <h4>Vehicle Information created successfully!</h4>
    </div>
  );

  const errorMsg = () => {
    return (
      <div
        className="alert alert-danger mt-5"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    );
  };
  return (
    <React.Fragment>
      <NavBar />
      <div class="container rounded bg-white mt-5 mb-5 w-50 justify-content-center ">
        <div class="row">
          <div class="col-md-4 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                class="rounded-circle mt-5"
                width="150px"
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
              />
            </div>
          </div>
          <div class="col-md-8 border-right">
            {successMessage()}
            {errorMsg()}

            <div class="p-3 py-5">
              <h3>{loading && "Loading..."}</h3>
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Add Vehicle Information</h4>
              </div>
              <div class="row mt-2">
                <div class="col-md-9">
                  <label class="labels">Make</label>
                  <input
                    type="text"
                    class="form-control"
                    value={make}
                    name="make"
                    onChange={handleChange("make")}
                  />
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-md-9">
                  <label class="labels">Model</label>
                  <input
                    type="text"
                    class="form-control"
                    value={model}
                    name="model"
                    onChange={handleChange("model")}
                  />
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-md-9">
                  <label class="labels">Plat Number</label>
                  <input
                    type="text"
                    class="form-control"
                    value={platNumber}
                    name="platNumber"
                    onChange={handleChange("platNumber")}
                  />
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-md-9">
                  <label className="labels">Year</label>
                  <input
                    type="text"
                    className="form-control"
                    name="year"
                    value={year}
                    onChange={handleChange("year")}
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 text-center">
              <button
                className="btn btn-primary profile-button"
                onClick={handleCreateVehicle}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddVehicle;
