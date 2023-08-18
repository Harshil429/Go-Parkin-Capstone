import React, { useState } from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import "./styles/reservation.css";
import { isAuthenticated } from "../auth/helper";
import { createReservation } from "../reservation/helper";

const Reservation = () => {
  const [values, setValues] = useState({
    dateOfBooking: "",
    entryTime: "",
    exitTime: "",
    location: "",
    error: "",
    success: false,
  });

  const user = isAuthenticated();

  const { dateOfBooking, entryTime, exitTime, location, success, error } =
    values;

  const handleSubmit = (e) => {
    e.preventDefault();
    createReservation({
      dateOfBooking,
      entryTime,
      exitTime,
      location,
      user: user.user._id,
      status: "Confirmed",
    }).then((data) => {
      if (data.errors) {
        setValues({ ...values, error: data.errors });
      } else {
        setValues({
          dateOfBooking: "",
          entryTime: "",
          exitTime: "",
          location: "",
          error: "",
          success: true,
        });
      }
    });
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const errorMsg = () => {
    return (
      <div
        className="alert alert-danger mb-5"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div id="booking" class="section">
        <div class="section-center">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="booking-cta">
                  <h1>Book your parking spot today</h1>
                </div>
              </div>
              <div class="col-md-7 col-md-offset-1">
                <div class="booking-form">
                  {success && (
                    <div className="alert alert-success mb-4">
                      <h4>Your reservation booked!</h4>
                    </div>
                  )}
                  {errorMsg()}
                  <form onSubmit={handleSubmit}>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <span class="form-label">Booking Date</span>
                          <input
                            class="form-control"
                            type="date"
                            name="dateOfBooking"
                            value={dateOfBooking}
                            onChange={handleChange("dateOfBooking")}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <span class="form-label">Entry Time</span>
                          <input
                            class="form-control"
                            type="time"
                            placeholder="City or airport"
                            value={entryTime}
                            onChange={handleChange("entryTime")}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <span class="form-label">Exit Time</span>
                          <input
                            class="form-control"
                            type="time"
                            value={exitTime}
                            onChange={handleChange("exitTime")}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <span class="form-label">Location</span>
                          <input
                            class="form-control"
                            type="text"
                            placeholder="Parking Place"
                            value={location}
                            onChange={handleChange("location")}
                          />
                        </div>
                      </div>
                    </div>

                    <div class="form-btn">
                      <button class="submit-btn" type="submit">
                        Reserve Parking
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Reservation;
