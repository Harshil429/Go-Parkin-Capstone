import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { getUser, updateCustomer } from "../user/helper";
import { isAuthenticated } from "../auth/helper";
import Footer from "./Footer";

const EditProfile = () => {
  const user = isAuthenticated();

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    error: "",
    updated: false,
    loading: false,
  });

  const { firstName, lastName, contactNumber, email, updated, loading, error } =
    values;
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setValues({ ...values, error: "", loading: true });

    await updateCustomer(user.user._id, values).then((data) => {
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
    getUser(userId)
      .then((data) => {
        setValues({
          ...values,
          firstName: data.firstName,
          lastName: data.lastName,
          contactNumber: data.contactNumber,
          email: data.email,
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
      <h4>Profile update successfully!</h4>
    </div>
  );

  const errorMsg = () => {
    return (
      <div
        className="alert alert-danger"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    );
  };
  return (
    <React.Fragment>
      <NavBar />
      {console.log(values)}
      <div class="container rounded bg-white mt-5 mb-5 w-50 justify-content-center">
        <div class="row">
          <div class="col-md-4 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                class="rounded-circle mt-5"
                width="150px"
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
              />

              <span> </span>
            </div>
          </div>
          <div class="col-md-8 border-right">
            {successMessage()}

            {errorMsg()}

            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Profile Setting</h4>
              </div>
              <div class="row mt-2">
                <div class="col-md-9">
                  <label class="labels">First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    value={firstName}
                    name="firstName"
                    onChange={handleChange("firstName")}
                  />
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-md-9">
                  <label class="labels">Last Name</label>
                  <input
                    type="text"
                    class="form-control"
                    value={lastName}
                    name="lastName"
                    onChange={handleChange("lastName")}
                  />
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-md-9">
                  <label class="labels">Mobile Number</label>
                  <input
                    type="text"
                    class="form-control"
                    value={contactNumber}
                    name="contactNumber"
                    onChange={handleChange("contactNumber")}
                  />
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-md-9">
                  <label className="labels">Email: </label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={handleChange("email")}
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 text-center">
              <button
                className="btn btn-primary profile-button"
                onClick={handleFormSubmit}
              >
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default EditProfile;
