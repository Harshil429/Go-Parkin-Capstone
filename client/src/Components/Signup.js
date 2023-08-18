import React, { useState } from "react";
import { signup } from "../auth/helper";
import NavBar from "./NavBar";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    confirmPassword: "",
    password: "",
    error: "",
  });

  const {
    firstName,
    lastName,
    contactNumber,
    email,
    confirmPassword,
    password,
    error,
  } = values;

  const navigate = useNavigate();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({
      firstName,
      lastName,
      contactNumber,
      email,
      password,
      confirmPassword,
    })
      .then((data) => {
        if (data.errors) {
          setValues({ ...values, error: data.errors, success: false });
        } else {
          setValues({
            ...values,
            firstName: "",
            lastName: "",
            contactNumber: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
          navigate("/success");
        }
      })
      .catch((err) => console.log("error"));
  };

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
    <>
      <NavBar />

      <img
        className="wave"
        src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/wave.png"
      ></img>
      <div className="container login-container">
        <div className="img">
          <img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/bg.svg" />
        </div>
        <div className="login-content">
          <form onSubmit={onSubmit}>
            <img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg" />
            <h2 className="title">Hi! Register here</h2>
            {errorMsg()}
            <div className="input-div one">
              <div className="i">
                <i className="fa fa-user"></i>
              </div>
              <div className="div">
                <input
                  type="text"
                  className="input"
                  placeholder="First Name"
                  value={values.firstName}
                  onChange={handleChange("firstName")}
                />
              </div>
            </div>
            <div className="input-div one">
              <div className="i">
                <i className="fa fa-user"></i>
              </div>
              <div className="div">
                <input
                  type="text"
                  className="input"
                  placeholder="Last Name"
                  onChange={handleChange("lastName")}
                />
              </div>
            </div>
            <div className="input-div one">
              <div className="i">
                <i className="fa fa-mobile"></i>
              </div>
              <div className="div">
                <input
                  type="text"
                  className="input"
                  placeholder="Mobile Number"
                  onChange={handleChange("contactNumber")}
                />
              </div>
            </div>
            <div className="input-div one">
              <div className="i">
                <i className="fa fa-envelope"></i>
              </div>
              <div className="div">
                <input
                  type="text"
                  className="input"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange("email")}
                />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fa fa-lock"></i>
              </div>
              <div className="div">
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange("password")}
                />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fa fa-lock"></i>
              </div>
              <div className="div">
                <input
                  type="password"
                  className="input"
                  placeholder="Confirm Password"
                  value={values.confirmPassword}
                  onChange={handleChange("confirmPassword")}
                />
              </div>
            </div>
            <input
              onClick={onSubmit}
              type="submit"
              className="btn btn-primary"
              value="Signup"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
