import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { getUserVehicleInfo, updateVehicle } from "../user/helper";
import { isAuthenticated } from "../auth/helper";
import Footer from "./Footer";

const EditVehicle = () => {
  const user = isAuthenticated();
  const [values, setValues] = useState({
    make: "",
    model: "",
    year: "",
    platNumber: "",
    error: "",
    updated: false,
    loading: false,
  });

  const { make, model, year, platNumber, updated, loading, error } = values;
  const handleUpdateVehicle = async (e) => {
    e.preventDefault();

    setValues({ ...values, error: "", loading: true });

    await updateVehicle(user.user._id, values).then((data) => {
      if (data.errors) {
        setValues({ ...values, error: data.errors, updated: false });
      } else {
        setValues({
          ...values,
          error: "",
          updated: true,
          loading: false,
        });
      }
    });
  };
  const preload = (userId) => {
    getUserVehicleInfo(userId)
      .then((data) => {
        setValues({
          ...values,
          make: data.vehicle.make,
          model: data.vehicle.model,
          year: data.vehicle.year,
          platNumber: data.vehicle.platNumber,
        });
      })
      .catch((err) => console.log(err, "error"));
  };

  useEffect(() => {
    preload(user.user._id);
  }, []);

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const successMessage = () => (
    <div
      className="alert alert-success mt-3"
      style={{ display: updated ? "" : "none" }}
    >
      <h4>Vehicle updated successfully!</h4>
    </div>
  );

  const errorMsg = () => {
    return (
      <div
        className="alert alert-danger mt-3"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    );
  };
  return (
    <React.Fragment>
      <NavBar />
      <div class="container rounded bg-white mt-5 mb-5 w-50 justify-content-center">
        <div class="row">
          <div class="col-md-12 border-right w-100">
            {successMessage()}
            {errorMsg()}
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Edit Vehicle </h4>
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
                  <label className="labels">Plat Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="platNumber"
                    value={platNumber}
                    onChange={handleChange("platNumber")}
                  />
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-md-9">
                  <label class="labels">Year</label>
                  <input
                    type="text"
                    class="form-control"
                    value={year}
                    name="year"
                    onChange={handleChange("year")}
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 text-center">
              <button
                className="btn btn-primary profile-button"
                onClick={handleUpdateVehicle}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default EditVehicle;
