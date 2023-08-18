import React, { useState } from "react";
import "./styles/login.css";
import { authenticate, isAuthenticated, signin } from "../auth/helper";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      .then((data) => {
        if (data.errors) {
          setValues({ ...values, error: data.errors, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            });
            navigate("/");
          });
        }
      })
      .catch((err) => console.log("signin failed", err));
  };

  const loadingMsg = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
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
      {loadingMsg()}
      <img
        class="wave"
        src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/wave.png"
      ></img>
      <div class="container login-container">
        <div class="img">
          <img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/bg.svg" />
        </div>
        <div class="login-content">
          <form>
            <img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg" />
            <h2 class="title">Welcome</h2>
            {errorMsg()}

            <div class="input-div one mt-4">
              <div class="i">
                <i class="fa fa-envelope"></i>
              </div>
              <div class="div">
                <input
                  onChange={handleChange("email")}
                  type="text"
                  value={email}
                  class="input"
                  placeholder="Email"
                />
              </div>
            </div>
            <div class="input-div pass">
              <div class="i">
                <i class="fa fa-lock"></i>
              </div>
              <div class="div">
                <input
                  type="password"
                  onChange={handleChange("password")}
                  class="input"
                  value={password}
                  placeholder="Password"
                />
              </div>
            </div>
            <input
              onClick={onSubmit}
              type="submit"
              class="btn btn-primary"
              value="Login"
            />
          </form>
        </div>
      </div>
    </>
  );
}
